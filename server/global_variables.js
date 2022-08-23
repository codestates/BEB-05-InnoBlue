const NFT = require ("./abi/nft");
const TOKEN = require ("./abi/token");
const NFT_CONTRACT_ADDR = process.env.NFT_CONTRACT_ADDR;
const TOKEN_CONTRACT_ADDR = process.env.TOKEN_CONTRACT_ADDR;
const getNFTContractABI = () => {
    return NFT["abi"];
}

const getTokenContractABI = () => {
    return TOKEN["abi"];
}

const NFT_CONTRACT_ABI = getNFTContractABI();
const TOKEN_CONTRACT_ABI = getTokenContractABI();
module.exports = {
    NFT_CONTRACT_ADDR,
    TOKEN_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    TOKEN_CONTRACT_ABI
}
