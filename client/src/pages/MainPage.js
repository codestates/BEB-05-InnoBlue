import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import main_img from './img/main_img.png';
import axios from 'axios';
import List from './List';
// import Pagination from './Pagination';
// import Write_page from './WritePage';

export default function MainPage() {
    const [postlist, setPostlist] = useState();

    const mainPage = async () => {
        try {
            const result = await axios.get('http://localhost:4000/post/postlist',
            )
            console.log(result);
            setPostlist(result.data.data);
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(()=> {
        mainPage();
    }, []);

    return <div>
        <Container className="panel">
            <center><h1>메인 페이지</h1></center>
            <div>
            <Table striped bordered hover className="mt-5" >            
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Created at</th>
                        <th>Views</th>
                    </tr>
                </thead>
            </Table>
            {postlist && postlist.map((el) => {
                    return (<List id={el.id} title={el.title} nickname={el.nickname} content={el.content} createdAt={el.createdAt} link={`/readpost/${el.id}`} />)
                })}
            </div>
            <Link to = "/writepage">
            <center><Button className="mt-4 mb-3 p-3 btn-primary btn-lg">Go to Write Page</Button></center>
            </Link>
            <div className="noneDiv"><img src={main_img} width={"100%"} className="main_img" alt="Main pic"/></div>
        </Container>
        </div>;
}