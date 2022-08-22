import NFT from "./abi/nft";
import TOKEN from "./abi/token";

const getNFTContractABI = () => {
    return NFT["abi"];
}

const getTokenContractABI = () => {
    return TOKEN["abi"];
}

export const NFT_CONTRACT_ABI = getNFTContractABI();
export const TOKEN_CONTRACT_ABI = getTokenContractABI();
