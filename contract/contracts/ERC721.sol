// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./interfaces/ERC20Interface.sol";

contract NFTLootBox is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    ERC20Interface token;
    uint256 nftPrice;

    constructor(address contractAddress) ERC721("MyNFTs", "MNFT") {
        nftPrice = 1;
        setToken(contractAddress);
    }

    function mintNFT(address recipient, string memory tokenURI) public payable onlyOwner returns (uint256) {
        require(token.balanceOf(recipient) > nftPrice, "ERC721: recipient lack of balance");

        token.transferFrom(recipient, msg.sender, nftPrice);
        
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function setToken(address tokenAddress) public onlyOwner returns (bool) {
        require(tokenAddress != address(0x0));
        token = ERC20Interface(tokenAddress);
        return true;
    }
}
