import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import List from "./List";
import "./styles/mypage.css";

export default function MyPage() {
  const [user, setUser] = useState();

  const mypage = async () => {
    try {
      const userId = sessionStorage.getItem("id");
      const result = await axios.get(`http://localhost:4000/user/userinfo/${userId}`);
      setUser(result.data);
    } catch (err) {
      console.log(err);
    }
  };

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
                <th>🪙이노블루 토큰 개수</th>
                <th>{user.token_amount} INB</th>
              </tr>
              <tr>
                <th>🧊이더리움 토큰 개수</th>
                <th>{user.eth_amount} ETH</th>
              </tr>
              <tr>
                <th>🖼나의 NFT</th>
                <th>coming soon</th>
              </tr>
              <tr>
                <th>📄나의 게시글</th>
                <th>coming soon</th>
              </tr>
            </thead>
          </Table>
        </div>
        <Link to="">
          {" "}
          {/* 토큰전송 */}
          <center>
            <Button className="mt-4 mb-3 p-3 btn-primary btn-lg">
              🚀토큰 전송
            </Button>
          </center>
        </Link>
      </Container>
    </div>
  ): null;
}
