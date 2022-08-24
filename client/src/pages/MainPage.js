import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import main_img from './img/main_img.png';
import axios from 'axios';
// import Write_page from './WritePage';

export default function MainPage() {
    const [] = useState([{
        idx: '', 
        userID: '', 
        title: '', 
        nickname: '', 
        content: '', 
        createdAt: '', 
        updatedAt: ''
    }])

    const [lastIdx, setLastIdx] = useState(0);

    useEffect(async() => {
        try{
            const res = await axios.get('/postlist')
            const _inputData = await res.data.map((rowData) => (
                
                setLastIdx(lastIdx+1), 
                {
                idx: rowData.id, 
                userID: rowData.userId,
                title: rowData.title,
                nickname: rowData.nickname,
                content: rowData.content,
                createdAt: rowData.createdAt, 
                updatedAt: rowData.updatedAt
                })
            )
            setInputData(inputData.concat(_inputData))
        } catch(e) {
            console.error(e.message)
        }
        
    }, [])


    return <div>
        <Container className="panel">
            <center><h1>메인 페이지</h1></center>
            <div>
            <Table striped bordered hover className="mt-5" >            
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Created at</th>
                    <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>
                        // router 로 이동 시 idx값을 param 으로 전달
                            <Link to={`/BoardContent/${rowData.idx}`}>{rowData.idx}</Link>
                        </td>
                        <td>
                            <Link to={`/BoardContent/${rowData.idx}`}>{rowData.title}</Link>
                        </td>
                    </tr>


                    <tr>
                    <td>1</td>
                    <td>We need to develop the project website for personal career!!</td>
                    <td>Unknown</td>
                    <td>yyyy.mm.dd</td>
                    <td>##</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>We need to develop the project website for personal career!!</td>
                    <td>Unknown</td>
                    <td>yyyy.mm.dd</td>
                    <td>##</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={3}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            <Link to = "../WritePage">
            <center><Button className="mt-4 mb-3 p-3 btn-primary btn-lg">Go to Write Page</Button></center>
            </Link>
            <div className="noneDiv"><img src={main_img} width={"100%"} className="main_img" alt="Main pic"/></div>
        </Container>
        </div>;
}