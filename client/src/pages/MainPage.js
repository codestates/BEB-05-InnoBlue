import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import main_img from './img/main_img.png';
import Write_page from './WritePage';


export default function MainPage() {
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
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>We need to develop the project website for personal career!!</td>
                    <td>Unknown</td>
                    <td>yyyy.mm.dd</td>
                    <td>##</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>We need to develop the project website for personal career!!</td>
                    <td>Unknown</td>
                    <td>yyyy.mm.dd</td>
                    <td>##</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={3}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            <Link to = "./WritePage">
            <center><Button className="mb-5 p-3 btn-primary btn-lg">Go to Write Page</Button></center>
            </Link>
            <div className="noneDiv"><img src={main_img} width={"100%"} className="main_img" alt="Main pic"/></div>
        </Container>
        </div>;
}