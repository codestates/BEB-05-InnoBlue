import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './styles/nft.css';


function NFT({ tokenId }) {
    const [nft, setNFT] = useState(null)
    useEffect(() => {
        const result = axios.get('http://localhost:4000/token/metadata', {
            params: {
                tokenId: tokenId
            }
        });
        setNFT(result);
    }, [])

    return nft ? (
        <div className="erc721token">
            <Link to={`/nft/${tokenId}`}className="token-item">
                <img
                    src={nft.image}
                    width={300}
                    className='token-thumb'/>
                <h4 className="name">{nft.name}</h4>
                {/* {isItemOnSale()? <div className="price"> */}
                    <div className="price-img">
                        <img width={10} src="https://static.opensea.io/general/ETH.svg" />
                    </div>
                    <div className="price-text">
                        {nft.price}
                    </div>
                {/* </div> : null} */}
            </Link>
        </div>
    ): null;
}

export default NFT;
