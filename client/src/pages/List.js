import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
export default function List ({ id, title, nickname, createdAt }) {
    return (
        <Table striped bordered hover className="mt-5" >
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{nickname}</td>
                    <td>{createdAt}</td>
                </tr>
            </tbody>
        </Table>
    )
}