import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/signuppage.css';

function SignUp(){
    const [email, setEmail] = useState();
    const [nickname, setNickname] = useState();
    const [password, setPassword] = useState();
    const [userData, setUserData] = useState();
    const [message, setMessage] = useState();
    
    const signUp = async () => {
        try {
            const result = await axios.post('http://localhost:4000/user/signup',
                {
                    "email": email,
                    "nickname": nickname,
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
                <div className = "signUpResult">
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
                            {/* <p>
                                {message}
                            </p>
                            <p>
                                회원 id: {userData.id}
                            </p>
                            <p>
                                회원 지갑 주소: {userData.address}
                            </p> */}
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
            </Container>
        )
        :(            
            <Container>
                <div className = "signUp">
                    <Row>
                        <Col></Col>
                        <Col className="Signup_form rounded">                
                            <Form>
                                <Form.Group className="m-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control className="p-2" type="email" placeholder="Enter email" onChange ={(e)=> {
                                    setEmail(e.target.value) }}/>
                                    <Form.Text className="text-muted">                                    
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="m-3" controlId="formBasicPassword">
                                    <Form.Label>Nickname</Form.Label>
                                    <Form.Control className="p-2" type="nickname" placeholder="Type your nickname" onChange ={(e)=> {
                                    setNickname(e.target.value)}}/>
                                </Form.Group>

                                <Form.Group className="m-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className="p-2" type="password" placeholder="Type your password" onChange ={(e)=> {
                                    setPassword(e.target.value)}}/>
                                </Form.Group>

                                <center><Button className="l-2 m-3 rounded btn_form" variant="primary" type="submit" onClick={signUp}>
                                    Sign Up
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

export default SignUp;