//     // const result = await axios.get(`http://localhost:4000/user/${userId}/info`);
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import List from "./List";
// import MyList from "./MyList";
import "./styles/mypage.css";

export default function MyPage() {
  const [postlist, setpostlist] = useState();
  //  const [nftlist, setnftlist] = useState();

  const mypage = async () => {
    try {
      const result = await axios.get("http://localhost:4000/post/postlist");
      console.log(result);
      setpostlist(result.data.data);
      //setnftlist(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    mypage();
  }, []);

  return (
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
                  <th>
                    {postlist &&
                      postlist.map((el) => {
                        return <List title={el.title} />;
                      })}
                  </th>
                </th>
              </tr>
              <tr>
                <th>📦지갑주소</th>
              </tr>
              <tr>
                <th>🖼나의 NFT</th>
                <th></th>
              </tr>
              <tr>
                <th>📄나의 게시글</th>
                <th></th>
              </tr>
              <tr>
                <th>🪙토큰 개수</th>
                <th></th>
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
  );
}
