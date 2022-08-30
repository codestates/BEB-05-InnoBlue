import { useState, useEffect } from 'react';
import axios from 'axios';

//import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/signuppage.css';

function LogIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginData, setLoginData] = useState();
    const [message, setMessage] = useState();
    
    const logIn = async (event) => {
        event.preventDefault()
        try {
            const result = await axios.post('http://localhost:4000/user/login',
                {
                    "email": email,
                    "password": password
                },
                {withCredentilas: true}
            )
            console.log(result);
            setLoginData(result.data.data);
            setMessage(result.data.message);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("address", result.data.data.address);
            sessionStorage.setItem("nickname", result.data.data.nickname);
            window.location = '/';
        } catch (e) {
            console.log(e);
            setMessage(e.response.data);
        }
    }
    
    useEffect(() => {
        if (sessionStorage.getItem("email") != null ) {
            setLoginData({
                email: sessionStorage.getItem("email"),
                address: sessionStorage.getItem("address"),
                nickname: sessionStorage.getItem("nickname")
            })
        }
    }, [])

    return loginData ?
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
                                    <td>{loginData.email}</td>
                                    </tr>
                                    <tr>                                    
                                    <td>회원 지갑 주소:</td>
                                    <td>{loginData.address}</td>
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
                                <center><button onClick={logIn}>Log In</button></center>
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