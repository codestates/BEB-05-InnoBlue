import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./styles/nftmintpage.css";
import Form from 'react-bootstrap/Form';
import { NFTStorage } from "nft.storage/dist/bundle.esm.min.js";
import Loading from '../components/Loading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function NFTMintPage(isLogin) {
    const [fileBlob, setFileBlob] = useState("");
    const [title, setTitle] = useState("");
    const [isNotValidated, setIsNotValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeImgSrc = (target) => {
        console.log(target.files[0])
        const fileBlob = target.files[0]
        setFileBlob(fileBlob)
    };
    const handleChangeTitle = (value) => {
        setTitle(value)
    };
    const mint = async () => {
        if (fileBlob === "") {
            setIsNotValidated(1)
            return
        } else if (title === "") {
            setIsNotValidated(2)
            return
        } else {
            setIsNotValidated(false)
            setIsLoading(true)
        }
        try {
            const data = {
                image: fileBlob,
                name: title,
                description: "created from innoblue",
                properties: {}
            }
            const nftStorageClient = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_API_KEY })
            const metadata = await nftStorageClient.store(data)
            const url = metadata.url.slice(7)
            const tokenURI = `https://ipfs.io/ipfs/${url}`
            console.log(tokenURI)
            const email = sessionStorage.getItem("email")
            const result = await axios.post('http://localhost:4000/token/mint',
                {
                    "email": email,
                    "title": title,
                    "tokenURI": tokenURI
                },
                {withCredentilas: true}
            )
            alert('NFTMint 성공!');
            console.log(result);
        }
        catch (error) {
            alert('다시 시도해주세요');
            console.log(error)
        }

        setIsLoading(false)
    };
    return isLogin ? (
        <div>
            <Container className='Container_mint' >
                {isLoading ? <Loading />: null}
                <h1>Mint</h1>
                <Row>
                    <Col></Col>
                    <Col xs={8} className="Mint_form rounded">
                        <Form >
                            <Form.Group className="m-3 p-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>NFT 이미지 업로드</Form.Label>
                                <Form.Control
                                className="p-2"
                                type="file"
                                accept="image/*" 
                                onChange={(e) => handleChangeImgSrc(e.target)}
                                placeholder="" />
                            </Form.Group>
                            <Form.Group className="m-3 p-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>NFT 제목</Form.Label>
                                <Form.Control 
                                className="p-2"
                                type="text"
                                placeholder="Item Title" 
                                onChange={(e) => handleChangeTitle(e.target.value)}/>
                            </Form.Group>
                        </Form> 
                        <center><Button className="mint_font_size" variant="outline-warning mt-4 mb-3 p-3 btn-Info" onClick={mint}>Mint</Button></center>
                    </Col>
                    <Col></Col>
                    
                </Row>
                
                
                {isNotValidated ?
                    <div className="validation-content">
                        {
                            isNotValidated === 1
                                ? <p className="validation-text">이미지 파일을 업로드하세요.</p>
                                : <p className="validation-text">아이템 타이틀을 입력하세요.</p>
                        }
                    </div>: null    
                }
            </Container>
        </div>
    ) : <div> <h4>로그인 하세요</h4></div>
}
