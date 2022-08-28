import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/signuppage.css';

function LogIn(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userData, setUserData] = useState();
    const [message, setMessage] = useState();
    
    const logIn = async () => {
        try {
            const result = await axios.post('http://localhost:4000/user/login',
                {
                    "email": email,
                    "password": password
                }
            )
            console.log(result);
            setUserData(result.data.data);
            setMessage(result.data.message);
        } catch (e) {
            setMessage(e.response.data);
        }
    }

    return userData ?
        (
            <Container>
                <div className = "logInResult">
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            <Table striped bordered hover className="Signup_result_table">
                                <thead>
                                    <tr>
                                    <th colSpan={2}>Your account is registered as follows:</th>                                
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Message:</td>
                                    <td>{message}</td>
                                    </tr>
                                    <tr>
                                    <td>회원 id:</td>
                                    <td>{userData.id}</td>
                                    </tr>
                                    <tr>                                    
                                    <td>회원 지갑 주소:</td>
                                    <td>{userData.address}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>    
            </Container>
        )
        :(
            <Container>
                <div className = "logIn">
                    <Row>
                        <Col></Col>
                        <Col className="Signup_form rounded">
                            <Form>
                                <Form.Group className="m-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                    className="p-2" 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onChange ={(e)=> {
                                        setEmail(e.target.value);
                                    }}/>
                                    <Form.Text className="text-muted">                                    
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="m-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    className="p-2" 
                                    type="password" 
                                    placeholder="Type your password" 
                                    onChange ={(e)=> {
                                        setPassword(e.target.value);
                                    }}/>
                                </Form.Group>
                                <center><Button className="l-2 m-3 rounded btn_form" variant="primary" type="submit" onClick={logIn}>
                                    Log In
                                </Button></center>
                                {message ? <>{message}</>: null}
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>    
            </Container>
            
            
        );
}
export default LogIn;