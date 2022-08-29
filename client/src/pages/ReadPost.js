import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Parser from 'html-react-parser';

export default function ReadPost () {
    const [isLoading, isSetLoading] = useState(true);
    const [readlist, setReadlist] = useState();
    const id =  window.location.href.slice(31);

    const readPost = async () => {
        try {
            const result = await axios.get(`http://localhost:4000/post/readpost/${id}`
            )
            console.log(result);
            setReadlist(result.data.data);
            isSetLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=> {
        readPost();
    }, []);

    console.log(readlist);
    return (
        <div>
        <Container className="panel">
            <center><h1>게시글 조회</h1></center>
            <div> 
            <Table striped bordered hover className="mt-5" >
            <tbody>
                <tr>
                    <th>Title: {isLoading? null : readlist.title}</th>
                    <th>Writer: {isLoading? null : readlist.nickname}</th>
                </tr>
                <tr>
                    <td>{isLoading? null : Parser(readlist.content)}</td>
                </tr>
            </tbody>  
            </Table>
            </div>
            <Link to = "/">
            <span>
                <Button className="mt-4 mb-3 p-3 btn-primary btn-lg">목록</Button>
            </span>
            </Link>
        </Container>
        </div>
    )
}