import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './styles/mainpage.css';


// import { faCheckSquare, faFlag } from "@fortawesome/free-solid-svg-icons";
// import { faCircle } from "@fortawesome/free-regular-svg-icons";
// import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import main_img from './img/main_img.png';
import axios from 'axios';
import List from './List';

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
            <center><span className ='main_heading'>Attention! Here are Blue Nerds!! </span></center>
            <Row>
                <div className='table-box'>
                    <Table rounded responsive bordered hover size="md" className="main_Table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Nickname</th>
                                <th>Created at</th>                        
                            </tr>
                        </thead>
                        <tbody>
                            {postlist && postlist.map((el) => {
                                    return (
                                    <List id={el.id} title={el.title} nickname={el.nickname} createdAt={el.createdAt} />)
                                })}
                        </tbody>

                    </Table>           
                </div>
            </Row>
            <Link to = "/writepage">
                <center><Button className="go_to_font" variant="outline-warning mt-4 mb-3 p-3 btn-Info">Go to Write Page</Button></center>
            </Link>
            {/* <div className="noneDiv"><img src={main_img} width={"100%"} className="main_img" alt="Main pic"/></div> */}
        </Container>
        </div>;
}