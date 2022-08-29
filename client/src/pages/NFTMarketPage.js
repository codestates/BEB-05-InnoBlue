import axios from 'axios';
import { useState, useEffect } from 'react';
import NFT from '../components/NFT';


function NFTMarketPage(){
    const [totalSupply, setTotalSupply] = useState(null);
    useEffect(()=>{
        async function count(){
            const result = await axios.get('http://localhost:4000/token/count');
            console.log(result.data);
            setTotalSupply(result.data);
        };
        count();
    },[])

    return(
        <div className = "tokenlist">
            <h2 className="explore-title">Explore</h2>
            <p className="explore-description">Discover, Buy, and Sell NFT art works.</p>
            <div className="erc721List">
                {[...Array(totalSupply)].map((_, idx) => {
                    const tokenId = idx + 2;
                    return(
                        <NFT tokenId={tokenId} key={tokenId}/>
                    )
                })}
            </div>
        </div>
    );
}  
export default NFTMarketPage;
