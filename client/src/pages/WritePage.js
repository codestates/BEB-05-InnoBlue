import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import DetailPage from './DetailPage';
import axios from 'axios';


export default function WritePage() {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [userData, setUserData] = useState();
    const [message, setMessage] = useState();
    const nickname = sessionStorage.getItem("nickname");
    const userId = sessionStorage.getItem("id");

    const writePage = async (event) => {
        event.preventDefault()
        try {
            const result = await axios.post('http://localhost:4000/post/writepost',
                {
                    "userId": userId,
                    "nickname": nickname,
                    "title": title,
                    "content": content
                }
            )
            console.log(result);
            setUserData(result.data.data);
            setMessage(result.data.message);
            window.location = '/';
        } catch (e) {
            setMessage(e.response.data);
        }
    }
    return userData ? (
        <div>
            {message}
        </div>
    ) : (
        <div>
        <Container>
            <h1>Write page</h1>
            <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Write down the title of your story"
                            aria-label="title"
                            aria-describedby="basic-addon1"
                            className="p-2"
                            onChange ={(e)=> {
                                setTitle(e.target.value);
                            }}
                        />
                    </InputGroup>
            </div>
            <div className='form-wrapper'>
                <div className ="text_box">
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setContent(Parser(data));
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
            </div>
            <center><Button className="mt-4 mb-3 p-3 btn-primary btn-lg" type ="submit" onClick={writePage}>Send</Button></center>
        </Container>
    </div>
    );
    
}