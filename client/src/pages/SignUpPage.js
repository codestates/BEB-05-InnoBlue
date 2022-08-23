import { useState } from 'react';
import axios from 'axios';

function SignUp(){
    const [email, setEmail] = useState();
    const [nickname, setNickname] = useState();
    const [password, setPassword] = useState();
    const [userData, setUserData] = useState();
    const [message, setMessage] = useState();
    
    const signUp = async () => {
        try {
            const result = await axios.post('http://localhost:4000/user/join',
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
            <div className = "signUpResult">
                {message}
            </div>
        )
        :(
            <div className = "signUp">
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
                    type = "nickname" 
                    placeholder="Type your nickname"
                    onChange ={(e)=> {
                        setNickname(e.target.value);
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
                    <button onClick={signUp}>Sign Up</button>
                </p>
                {message ? <>{message}</>: null}
            </div>
        );
}
export default SignUp;