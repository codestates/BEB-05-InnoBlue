import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './styles/nft.css';


function NFT({ tokenId }) {
    const [nft, setNFT] = useState(null);
    useEffect(() => {
        async function metadata(){
            const result = await axios.get(`http://localhost:4000/token/metadata/${tokenId}`);
            console.log(result.data);
            console.log(tokenId);
            setNFT(result.data);
        }   
        metadata();
    }, []);
    
    return nft ? (
        <div className="erc721token">
            <Link to={`/nft/${tokenId}`}className="token-item">
                <img
                    src={nft.image}
                    width={300}
                    className='token-thumb'/>
                <h4 className="name">{nft.name}</h4>
                {nft.on_sale ? <div className="price">
                    <div className="price-img">
                        <img width={10} src="https://static.opensea.io/general/ETH.svg" />
                    </div>
                    <div className="price-text">
                        {nft.price}
                    </div>
                </div> : <div className="price-text">
                        not for sale
                    </div>}
            </Link>
        </div>
    ): null;
}

export default NFT;
