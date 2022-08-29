import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
export default function MyList({ nickname }) {
  return (
    <Table striped bordered hover className="mt-5">
      <tbody>
        <tr>
          <td>{nickname}</td>
        </tr>
      </tbody>
    </Table>
  );
}

// "message": "유저 정보 조회 완료",
// "email": "유저_이메일",
// "nickname": "유저_닉네임",
// "address": "유저_주소",
// "token_amount": 토큰_양,
// "eth_amount": 이더리움_양,
// "createdAt": "2022-08-25T18:48:27.000Z"
