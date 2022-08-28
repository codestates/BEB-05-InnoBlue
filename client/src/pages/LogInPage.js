import { useState, useEffect } from 'react';
import axios from 'axios';

function LogIn(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //const [nickname, setNickname] = useState();
    const [loginData, setLoginData] = useState();
    const [message, setMessage] = useState();
    
    const logIn = async () => {
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
            setNickname(findNickname);
            sessionStorage.setItem("email", email);
            //sessionStorage.setItem("nickname", nickname);
            window.location = '/';
        } catch (e) {
            setMessage(e.response.data);
        }
    }
    

    return loginData ?
        (
            <div className = "logInResult">
                <p>
                    {message}
                </p>
                <p>
                    회원 id: {loginData.email}
                </p>
                <p>
                    회원 지갑 주소: {loginData.address}
                </p>
                <p>
                    {loginData.nickname} 님 환영합니다!
                </p>
            </div>
        )
        :(
            <div className = "logIn">
                <p>
                    <input 
                    type = "email" 
                    placeholder="Type your email address"
                    onChange ={(e)=> {
                        setEmail(e.target.value);
                    }}/>
                </p>
                <p>
                    <input 
                    type = "password" 
                    placeholder="Type your password"
                    onChange ={(e)=> {
                        setPassword(e.target.value);
                    }}/>
                </p>
                <p>
                    <button onClick={logIn}>Log In</button>
                </p>
                {message ? <>{message}</>: null}
            </div>
        );
}

export default LogIn;