import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import List from "../components/List";
import "./styles/mypage.css";
import NFT from '../components/NFT';
import Form from 'react-bootstrap/Form';

export default function MyPage() {
  const [user, setUser] = useState();
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState();
  const [isNotValidated, setIsNotValidated] = useState(false);
  const userId = sessionStorage.getItem("id");
  const address = sessionStorage.getItem("address");

  const mypage = async () => {
    try {      
      const result = await axios.get(`http://localhost:4000/user/userinfo/${userId}`);
      setUser(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  const transfer = async () => {
    if (!receiver) {
      setIsNotValidated(1)
      return
    } else if (!amount) {
        setIsNotValidated(2)
        return
    } else {
        setIsNotValidated(false)
    }
    try{
      const result = await axios.post('http://localhost:4000/token/token_transfer',
          {
              "address": address,
              "email": receiver,
              "amount": amount
          }
      )
      console.log(result);
      alert('토큰 전송 성공!');
      window.location = '/mypage';
    }
    catch (error){
      alert('다시 시도해주세요.');
      console.log(error);
    }
  }

  const faucet = async () => {
    try{
      const result = await axios.post('http://localhost:4000/token/faucet',
          {
              "id": userId
          }
      )
      console.log(result);
      alert('이더리움 수령 성공!');
      window.location = '/mypage';
    }
    catch (error){
      alert('다시 시도해주세요.');
      console.log(error);
    }
  }

  useEffect(() => {
    mypage()
  }, []);

  return user ? (
    <div>
      <Container className="panel">
        <center>
          <h1>My page</h1>
        </center>
        <div>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>🔵닉네임</th>
                <th>
                  {user.nickname}
                </th>
              </tr>
              <tr>
                <th>📦지갑주소</th>
                <th>{user.address}</th>
              </tr>
              <tr>
                <th>🫐이노블루 토큰 개수</th>
                <th>{user.token_amount} INB</th>
              </tr>
              <tr>
                <th>🪙이더리움 토큰 개수</th>
                <th>{user.eth_amount} ETH</th>
              </tr>
              <tr>
                <th>🖼나의 NFT 개수</th>
                <th>{user.nft_count}</th>
              </tr>
              <tr>
                <th>🟦나의 NFT</th>
                <th>
                <div className = "tokenlist">
                <div className="erc721List">
                  {user.nft.map((nft) =>{
                  return <NFT tokenId={nft.tokenId} key={nft.tokenId}/>
                })}
                </div> </div>
                </th>
              </tr>
              <tr>
                <th>📄나의 게시글 개수</th>
                <th>{user.post_count}</th>
              </tr>
              <tr>
                <th>📄나의 게시글</th>
                <th>{user.post.map((post) => {
                  return <List title = {post.title} link={`/readpost/${post.id}`}/>
                })}</th>
              </tr>
            </thead>
          </Table>
        </div>
        <Form>            
          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Email of Receiver</Form.Label>
            <Form.Control className="p-2" type="email" placeholder="토큰을 받을 유저 계정(이메일)을 입력해주세요." onChange ={(e)=> {
            setReceiver(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Amount of Token</Form.Label>
            <Form.Control className="p-2" type="integer" placeholder="전송할 토큰 값을 입력해주세요." onChange ={(e)=> {
            setAmount(e.target.value)}}/>
          </Form.Group> 
        </Form>
        <Link to="">
          {" "}
          {/* 토큰전송 */}          
          <center>
            <Button className="mt-4 mb-3 p-3 btn-primary btn-lg" onClick={transfer}>
              🚀토큰 전송
            </Button>
          </center>
        </Link>
        {isNotValidated ?
            <div className="validation-content">
                {
                    isNotValidated === 1
                        ? <p className="validation-text">토큰을 받을 유저 이메일을 입력하세요.</p>
                        : <p className="validation-text">토큰 값을 입력하세요.</p>
                }
            </div>: null    
        }
        <Link to="">
          {" "}
          {/* ETH Faucet */}          
          <center>
            <Button className="mt-4 mb-3 p-3 btn-primary btn-lg" onClick={faucet}>
             🚰이더리움 Faucet
            </Button>
          </center>
        </Link>
      </Container>
    </div>
  ): null;
}
