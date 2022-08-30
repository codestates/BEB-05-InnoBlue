import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

export default function List ({ id, title, nickname, createdAt, link }) {
    return (
        <Link to={link}>
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
        </Link>
    )
}