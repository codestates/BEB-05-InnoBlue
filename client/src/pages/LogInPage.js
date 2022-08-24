import { useState } from 'react';
import axios from 'axios';

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
            <div className = "logInResult">
                <p>
                    {message}
                </p>
                <p>
                    회원 id: {userData.id}
                </p>
                <p>
                    회원 지갑 주소: {userData.address}
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