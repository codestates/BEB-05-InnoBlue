import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './styles/nftdetail.css'


function NFTDetail() {
    const { tokenId } = useParams();
    const [tokenMetadata, setTokenMetadata] = useState(null);
    // const tokenMetadata = useSelector((state) => state.token.tokens[tokenId]);
    // const itemOnSaleMetadata = useSelector((state) => state.token.itemsOnSale[tokenId]);
    // const myTokenIds = useSelector((state) => state.token.myTokenIds);
    // const account = useSelector((state) => state.account.address);
    const [price, setPrice] = useState("")
    const [isNotValidated, setIsNotValidated] = useState(true)
    useEffect(() => {
        const result = axios.get('http://localhost:4000/token/metadata', {
            params: {
                tokenId: tokenId
            }
        });
        setTokenMetadata(result);
    }, [])
    // useEffect(() => {
    //     dispatch(tokenActions.fetchToken(tokenId));
    //     if (account) {
    //       dispatch(tokenActions.setMyTokenIds(account));
    //       dispatch(tokenActions.fetchItemsOnSale());
    //     }
    // }, [account]);

    // const buyNFT = () => {
    //     if (account) {
    //         dispatch(tokenActions.buyItemOnSale({itemId: itemOnSaleMetadata.itemId, myAddress: account, price: itemOnSaleMetadata.price}));
    //     }
    // };

    // const sellNFT = () => {
    //     if (price === "") {
    //         setIsNotValidated(1);
    //         return;
    //     }
    //     else if (isNaN(price)) {
    //         setIsNotValidated(2);
    //         return;
    //     }
    //     setIsNotValidated(false);
    //     dispatch(tokenActions.addItemOnSaleThunk({tokenId, myAddress: account, price: price}));
    // };

    // const cancelSale = () => {
    //     dispatch(tokenActions.removeItemOnSaleThunk({myAddress: account, itemId: itemOnSaleMetadata.itemId}));
    // };

    // const handleChangePrice = (value) => {
    //     setPrice(value)
    // }

    return tokenMetadata ? (        
        <div className="token-detail-page" >
            <img src={tokenMetadata.image} alt="" className="tokenDetailThumb" />
            <div className="tokenInfoArea">
                <h3 className="tokenName">{tokenMetadata.name}</h3>
                <div className="tokenDescArea">
                    <h4 className="tokenDesc">Owner</h4>
                    <p className="tokenDescBody owner">
                    {/* {itemOnSaleMetadata ?
                        itemOnSaleMetadata.seller : tokenMetadata.owner
                    } */}
                    </p>
                    <h4 className="tokenDesc">Description</h4>
                    <p className="tokenDescBody">{tokenMetadata.description}</p>
                </div>
                {/* {itemOnSaleMetadata ? 
                    <label className="create-input-label">
                        가격: {itemOnSaleMetadata.price}
                        <img width={10} src="https://static.opensea.io/general/ETH.svg" />
                    </label>
                    : null
                } */}
                {/* {account && myTokenIds.includes(parseInt(tokenId)) ?
                    <>
                        <label className="create-input-label">판매 가격*</label>
                        <input type="text" className="goToList detail-btn" placeholder="Ether Price (ex. 0.5Eth => 0.5)" onChange={(e) => handleChangePrice(e.target.value)} />
                        <button className="buyNFT detail-btn" onClick={sellNFT}>판매하기</button>
                        <Link to="/BEB-05-LeeSea/explore"><button className="goToList detail-btn">목록으로</button></Link>
                        <div className={!isNotValidated ? "validation-content" : ""}>
                            {
                                isNotValidated === 1
                                    ? <p className="validation-text">가격을 입력하세요.</p>
                                    : (isNotValidated == 2
                                        ? <p className="validation-text">가격은 숫자여야 합니다.</p>
                                        : null
                                    )
                            }
                        </div>
                    </>
                    : <>
                        {itemOnSaleMetadata && account && itemOnSaleMetadata.seller == account ?
                            <button className="buyNFT detail-btn" onClick={cancelSale}>판매취소</button>
                            : (itemOnSaleMetadata?
                                <button className="buyNFT detail-btn" onClick={buyNFT}>구매하기</button>
                                : <button className="NotForSale detail-btn">판매 중이 아닙니다.</button>)}
                        <Link to="/BEB-05-LeeSea/explore"><button className="goToList detail-btn">목록으로</button></Link>
                    </>
                } */}
            </div>
        </div>
    ): null;
}

export default NFTDetail;
