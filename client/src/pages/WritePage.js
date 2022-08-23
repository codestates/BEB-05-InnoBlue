import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// import Container from 'react-bootstrap/Container';
// import Table from 'react-bootstrap/Table';

export default function WritePage() {
    return <div>
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
                        />
                    </InputGroup>
            </div>
            <div className='form-wrapper'>
                <div>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
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
            <center><Button className="mt-4 mb-3 p-3 btn-primary btn-lg">Send</Button></center>
        </Container>
    </div>
}