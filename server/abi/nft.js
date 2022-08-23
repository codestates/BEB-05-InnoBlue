const NFT = {
    "contractName": "NFTLootBox",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "tokenURI",
            "type": "string"
          }
        ],
        "name": "mintNFT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "setToken",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.15+commit.e14f2714\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"mintNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"setToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/ERC721.sol\":\"NFTLootBox\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"keccak256\":\"0x5c3501c1b70fcfc64417e9da5cc6a3597191baa354781e508e1e14cc0e50a038\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://899c87a849a94c848818d0afede6961d2c87665af1dd23a5c983e78981a65691\",\"dweb:/ipfs/QmUeFDffQRDmX87FX3MRxN3bmpUxDTWpWLwPJzeAJ3yF6H\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"project:/contracts/ERC721.sol\":{\"keccak256\":\"0x7ec3b6a2738392821998e19d1bd7edd1b9a820ddf03a63b89971bd2426670cf7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b5b50c1d9141194cffae38c9218978b52b49d40d2d66b5fef4af189b0ba87a7e\",\"dweb:/ipfs/QmYbMWh2iJsua1Sr63oEbuVfFCU36piW76HK3Y7GsrLhRA\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600681526020017f4d794e46547300000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4e46540000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000422565b508060019081620000a1919062000422565b505050620000c4620000b8620000da60201b60201c565b620000e260201b60201c565b68056bc75e2d63100000600a8190555062000509565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200022a57607f821691505b60208210810362000240576200023f620001e2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200026b565b620002b686836200026b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000303620002fd620002f784620002ce565b620002d8565b620002ce565b9050919050565b6000819050919050565b6200031f83620002e2565b620003376200032e826200030a565b84845462000278565b825550505050565b600090565b6200034e6200033f565b6200035b81848462000314565b505050565b5b8181101562000383576200037760008262000344565b60018101905062000361565b5050565b601f821115620003d2576200039c8162000246565b620003a7846200025b565b81016020851015620003b7578190505b620003cf620003c6856200025b565b83018262000360565b50505b505050565b600082821c905092915050565b6000620003f760001984600802620003d7565b1980831691505092915050565b6000620004128383620003e4565b9150826002028217905092915050565b6200042d82620001a8565b67ffffffffffffffff811115620004495762000448620001b3565b5b62000455825462000211565b6200046282828562000387565b600060209050601f8311600181146200049a576000841562000485578287015190505b62000491858262000404565b86555062000501565b601f198416620004aa8662000246565b60005b82811015620004d457848901518255600182019150602085019450602081019050620004ad565b86831015620004f45784890151620004f0601f891682620003e4565b8355505b6001600288020188555050505b505050505050565b6130a380620005196000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102df578063c87b56dd146102fb578063e985e9c51461032b578063eacabe141461035b578063f2fde38b1461038b57610116565b8063715018a61461027d5780638da5cb5b1461028757806395d89b41146102a5578063a22cb465146102c357610116565b8063144fa6d7116100e9578063144fa6d7146101b557806323b872dd146101e557806342842e0e146102015780636352211e1461021d57806370a082311461024d57610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611c3e565b6103a7565b6040516101429190611c86565b60405180910390f35b610153610489565b6040516101609190611d3a565b60405180910390f35b610183600480360381019061017e9190611d92565b61051b565b6040516101909190611e00565b60405180910390f35b6101b360048036038101906101ae9190611e47565b610561565b005b6101cf60048036038101906101ca9190611e87565b610678565b6040516101dc9190611c86565b60405180910390f35b6101ff60048036038101906101fa9190611eb4565b610705565b005b61021b60048036038101906102169190611eb4565b610765565b005b61023760048036038101906102329190611d92565b610785565b6040516102449190611e00565b60405180910390f35b61026760048036038101906102629190611e87565b610836565b6040516102749190611f16565b60405180910390f35b6102856108ed565b005b61028f610901565b60405161029c9190611e00565b60405180910390f35b6102ad61092b565b6040516102ba9190611d3a565b60405180910390f35b6102dd60048036038101906102d89190611f5d565b6109bd565b005b6102f960048036038101906102f491906120d2565b6109d3565b005b61031560048036038101906103109190611d92565b610a35565b6040516103229190611d3a565b60405180910390f35b61034560048036038101906103409190612155565b610b47565b6040516103529190611c86565b60405180910390f35b61037560048036038101906103709190612236565b610bdb565b6040516103829190611f16565b60405180910390f35b6103a560048036038101906103a09190611e87565b610d69565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061047257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610482575061048182610dec565b5b9050919050565b606060008054610498906122c1565b80601f01602080910402602001604051908101604052809291908181526020018280546104c4906122c1565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b5050505050905090565b600061052682610e56565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061056c82610785565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d390612364565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105fb610ea1565b73ffffffffffffffffffffffffffffffffffffffff16148061062a575061062981610624610ea1565b610b47565b5b610669576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610660906123f6565b60405180910390fd5b6106738383610ea9565b505050565b6000610682610f62565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106bb57600080fd5b81600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050919050565b610716610710610ea1565b82610fe0565b610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074c90612488565b60405180910390fd5b610760838383611075565b505050565b610780838383604051806020016040528060008152506109d3565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361082d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610824906124f4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089d90612586565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108f5610f62565b6108ff60006112db565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461093a906122c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610966906122c1565b80156109b35780601f10610988576101008083540402835291602001916109b3565b820191906000526020600020905b81548152906001019060200180831161099657829003601f168201915b5050505050905090565b6109cf6109c8610ea1565b83836113a1565b5050565b6109e46109de610ea1565b83610fe0565b610a23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1a90612488565b60405180910390fd5b610a2f8484848461150d565b50505050565b6060610a4082610e56565b6000600660008481526020019081526020016000208054610a60906122c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8c906122c1565b8015610ad95780601f10610aae57610100808354040283529160200191610ad9565b820191906000526020600020905b815481529060010190602001808311610abc57829003601f168201915b505050505090506000610aea611569565b90506000815103610aff578192505050610b42565b600082511115610b34578082604051602001610b1c9291906125e2565b60405160208183030381529060405292505050610b42565b610b3d84611580565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610be5610f62565b600a54600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401610c439190611e00565b602060405180830381865afa158015610c60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c84919061261b565b11610c8e57600080fd5b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8433600a546040518463ffffffff1660e01b8152600401610cef93929190612648565b6020604051808303816000875af1158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190612694565b50610d3d60086115e8565b6000610d4960086115fe565b9050610d55848261160c565b610d5f81846117e5565b8091505092915050565b610d71610f62565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610de0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd790612733565b60405180910390fd5b610de9816112db565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610e5f81611852565b610e9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e95906124f4565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f1c83610785565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610f6a610ea1565b73ffffffffffffffffffffffffffffffffffffffff16610f88610901565b73ffffffffffffffffffffffffffffffffffffffff1614610fde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd59061279f565b60405180910390fd5b565b600080610fec83610785565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061102e575061102d8185610b47565b5b8061106c57508373ffffffffffffffffffffffffffffffffffffffff166110548461051b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661109582610785565b73ffffffffffffffffffffffffffffffffffffffff16146110eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e290612831565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361115a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611151906128c3565b60405180910390fd5b6111658383836118be565b611170600082610ea9565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111c09190612912565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112179190612946565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112d68383836118c3565b505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361140f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611406906129e8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115009190611c86565b60405180910390a3505050565b611518848484611075565b611524848484846118c8565b611563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155a90612a7a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061158b82610e56565b6000611595611569565b905060008151116115b557604051806020016040528060008152506115e0565b806115bf84611a4f565b6040516020016115d09291906125e2565b6040516020818303038152906040525b915050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361167b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167290612ae6565b60405180910390fd5b61168481611852565b156116c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116bb90612b52565b60405180910390fd5b6116d0600083836118be565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117209190612946565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46117e1600083836118c3565b5050565b6117ee82611852565b61182d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182490612be4565b60405180910390fd5b8060066000848152602001908152602001600020908161184d9190612db0565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006118e98473ffffffffffffffffffffffffffffffffffffffff16611baf565b15611a42578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611912610ea1565b8786866040518563ffffffff1660e01b81526004016119349493929190612ed7565b6020604051808303816000875af192505050801561197057506040513d601f19601f8201168201806040525081019061196d9190612f38565b60015b6119f2573d80600081146119a0576040519150601f19603f3d011682016040523d82523d6000602084013e6119a5565b606091505b5060008151036119ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e190612a7a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a47565b600190505b949350505050565b606060008203611a96576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611baa565b600082905060005b60008214611ac8578080611ab190612f65565b915050600a82611ac19190612fdc565b9150611a9e565b60008167ffffffffffffffff811115611ae457611ae3611fa7565b5b6040519080825280601f01601f191660200182016040528015611b165781602001600182028036833780820191505090505b5090505b60008514611ba357600182611b2f9190612912565b9150600a85611b3e919061300d565b6030611b4a9190612946565b60f81b818381518110611b6057611b5f61303e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611b9c9190612fdc565b9450611b1a565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c1b81611be6565b8114611c2657600080fd5b50565b600081359050611c3881611c12565b92915050565b600060208284031215611c5457611c53611bdc565b5b6000611c6284828501611c29565b91505092915050565b60008115159050919050565b611c8081611c6b565b82525050565b6000602082019050611c9b6000830184611c77565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611cdb578082015181840152602081019050611cc0565b83811115611cea576000848401525b50505050565b6000601f19601f8301169050919050565b6000611d0c82611ca1565b611d168185611cac565b9350611d26818560208601611cbd565b611d2f81611cf0565b840191505092915050565b60006020820190508181036000830152611d548184611d01565b905092915050565b6000819050919050565b611d6f81611d5c565b8114611d7a57600080fd5b50565b600081359050611d8c81611d66565b92915050565b600060208284031215611da857611da7611bdc565b5b6000611db684828501611d7d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611dea82611dbf565b9050919050565b611dfa81611ddf565b82525050565b6000602082019050611e156000830184611df1565b92915050565b611e2481611ddf565b8114611e2f57600080fd5b50565b600081359050611e4181611e1b565b92915050565b60008060408385031215611e5e57611e5d611bdc565b5b6000611e6c85828601611e32565b9250506020611e7d85828601611d7d565b9150509250929050565b600060208284031215611e9d57611e9c611bdc565b5b6000611eab84828501611e32565b91505092915050565b600080600060608486031215611ecd57611ecc611bdc565b5b6000611edb86828701611e32565b9350506020611eec86828701611e32565b9250506040611efd86828701611d7d565b9150509250925092565b611f1081611d5c565b82525050565b6000602082019050611f2b6000830184611f07565b92915050565b611f3a81611c6b565b8114611f4557600080fd5b50565b600081359050611f5781611f31565b92915050565b60008060408385031215611f7457611f73611bdc565b5b6000611f8285828601611e32565b9250506020611f9385828601611f48565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611fdf82611cf0565b810181811067ffffffffffffffff82111715611ffe57611ffd611fa7565b5b80604052505050565b6000612011611bd2565b905061201d8282611fd6565b919050565b600067ffffffffffffffff82111561203d5761203c611fa7565b5b61204682611cf0565b9050602081019050919050565b82818337600083830152505050565b600061207561207084612022565b612007565b90508281526020810184848401111561209157612090611fa2565b5b61209c848285612053565b509392505050565b600082601f8301126120b9576120b8611f9d565b5b81356120c9848260208601612062565b91505092915050565b600080600080608085870312156120ec576120eb611bdc565b5b60006120fa87828801611e32565b945050602061210b87828801611e32565b935050604061211c87828801611d7d565b925050606085013567ffffffffffffffff81111561213d5761213c611be1565b5b612149878288016120a4565b91505092959194509250565b6000806040838503121561216c5761216b611bdc565b5b600061217a85828601611e32565b925050602061218b85828601611e32565b9150509250929050565b600067ffffffffffffffff8211156121b0576121af611fa7565b5b6121b982611cf0565b9050602081019050919050565b60006121d96121d484612195565b612007565b9050828152602081018484840111156121f5576121f4611fa2565b5b612200848285612053565b509392505050565b600082601f83011261221d5761221c611f9d565b5b813561222d8482602086016121c6565b91505092915050565b6000806040838503121561224d5761224c611bdc565b5b600061225b85828601611e32565b925050602083013567ffffffffffffffff81111561227c5761227b611be1565b5b61228885828601612208565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806122d957607f821691505b6020821081036122ec576122eb612292565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061234e602183611cac565b9150612359826122f2565b604082019050919050565b6000602082019050818103600083015261237d81612341565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006123e0603e83611cac565b91506123eb82612384565b604082019050919050565b6000602082019050818103600083015261240f816123d3565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612472602e83611cac565b915061247d82612416565b604082019050919050565b600060208201905081810360008301526124a181612465565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006124de601883611cac565b91506124e9826124a8565b602082019050919050565b6000602082019050818103600083015261250d816124d1565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612570602983611cac565b915061257b82612514565b604082019050919050565b6000602082019050818103600083015261259f81612563565b9050919050565b600081905092915050565b60006125bc82611ca1565b6125c681856125a6565b93506125d6818560208601611cbd565b80840191505092915050565b60006125ee82856125b1565b91506125fa82846125b1565b91508190509392505050565b60008151905061261581611d66565b92915050565b60006020828403121561263157612630611bdc565b5b600061263f84828501612606565b91505092915050565b600060608201905061265d6000830186611df1565b61266a6020830185611df1565b6126776040830184611f07565b949350505050565b60008151905061268e81611f31565b92915050565b6000602082840312156126aa576126a9611bdc565b5b60006126b88482850161267f565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061271d602683611cac565b9150612728826126c1565b604082019050919050565b6000602082019050818103600083015261274c81612710565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612789602083611cac565b915061279482612753565b602082019050919050565b600060208201905081810360008301526127b88161277c565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061281b602583611cac565b9150612826826127bf565b604082019050919050565b6000602082019050818103600083015261284a8161280e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006128ad602483611cac565b91506128b882612851565b604082019050919050565b600060208201905081810360008301526128dc816128a0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061291d82611d5c565b915061292883611d5c565b92508282101561293b5761293a6128e3565b5b828203905092915050565b600061295182611d5c565b915061295c83611d5c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612991576129906128e3565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006129d2601983611cac565b91506129dd8261299c565b602082019050919050565b60006020820190508181036000830152612a01816129c5565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a64603283611cac565b9150612a6f82612a08565b604082019050919050565b60006020820190508181036000830152612a9381612a57565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612ad0602083611cac565b9150612adb82612a9a565b602082019050919050565b60006020820190508181036000830152612aff81612ac3565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612b3c601c83611cac565b9150612b4782612b06565b602082019050919050565b60006020820190508181036000830152612b6b81612b2f565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612bce602e83611cac565b9150612bd982612b72565b604082019050919050565b60006020820190508181036000830152612bfd81612bc1565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612c667fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612c29565b612c708683612c29565b95508019841693508086168417925050509392505050565b6000819050919050565b6000612cad612ca8612ca384611d5c565b612c88565b611d5c565b9050919050565b6000819050919050565b612cc783612c92565b612cdb612cd382612cb4565b848454612c36565b825550505050565b600090565b612cf0612ce3565b612cfb818484612cbe565b505050565b5b81811015612d1f57612d14600082612ce8565b600181019050612d01565b5050565b601f821115612d6457612d3581612c04565b612d3e84612c19565b81016020851015612d4d578190505b612d61612d5985612c19565b830182612d00565b50505b505050565b600082821c905092915050565b6000612d8760001984600802612d69565b1980831691505092915050565b6000612da08383612d76565b9150826002028217905092915050565b612db982611ca1565b67ffffffffffffffff811115612dd257612dd1611fa7565b5b612ddc82546122c1565b612de7828285612d23565b600060209050601f831160018114612e1a5760008415612e08578287015190505b612e128582612d94565b865550612e7a565b601f198416612e2886612c04565b60005b82811015612e5057848901518255600182019150602085019450602081019050612e2b565b86831015612e6d5784890151612e69601f891682612d76565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000612ea982612e82565b612eb38185612e8d565b9350612ec3818560208601611cbd565b612ecc81611cf0565b840191505092915050565b6000608082019050612eec6000830187611df1565b612ef96020830186611df1565b612f066040830185611f07565b8181036060830152612f188184612e9e565b905095945050505050565b600081519050612f3281611c12565b92915050565b600060208284031215612f4e57612f4d611bdc565b5b6000612f5c84828501612f23565b91505092915050565b6000612f7082611d5c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612fa257612fa16128e3565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612fe782611d5c565b9150612ff283611d5c565b92508261300257613001612fad565b5b828204905092915050565b600061301882611d5c565b915061302383611d5c565b92508261303357613032612fad565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212200407233de7645a9b394aa403cc264672667180136b5f4280272f59bb5a19cba964736f6c634300080f0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102df578063c87b56dd146102fb578063e985e9c51461032b578063eacabe141461035b578063f2fde38b1461038b57610116565b8063715018a61461027d5780638da5cb5b1461028757806395d89b41146102a5578063a22cb465146102c357610116565b8063144fa6d7116100e9578063144fa6d7146101b557806323b872dd146101e557806342842e0e146102015780636352211e1461021d57806370a082311461024d57610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611c3e565b6103a7565b6040516101429190611c86565b60405180910390f35b610153610489565b6040516101609190611d3a565b60405180910390f35b610183600480360381019061017e9190611d92565b61051b565b6040516101909190611e00565b60405180910390f35b6101b360048036038101906101ae9190611e47565b610561565b005b6101cf60048036038101906101ca9190611e87565b610678565b6040516101dc9190611c86565b60405180910390f35b6101ff60048036038101906101fa9190611eb4565b610705565b005b61021b60048036038101906102169190611eb4565b610765565b005b61023760048036038101906102329190611d92565b610785565b6040516102449190611e00565b60405180910390f35b61026760048036038101906102629190611e87565b610836565b6040516102749190611f16565b60405180910390f35b6102856108ed565b005b61028f610901565b60405161029c9190611e00565b60405180910390f35b6102ad61092b565b6040516102ba9190611d3a565b60405180910390f35b6102dd60048036038101906102d89190611f5d565b6109bd565b005b6102f960048036038101906102f491906120d2565b6109d3565b005b61031560048036038101906103109190611d92565b610a35565b6040516103229190611d3a565b60405180910390f35b61034560048036038101906103409190612155565b610b47565b6040516103529190611c86565b60405180910390f35b61037560048036038101906103709190612236565b610bdb565b6040516103829190611f16565b60405180910390f35b6103a560048036038101906103a09190611e87565b610d69565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061047257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610482575061048182610dec565b5b9050919050565b606060008054610498906122c1565b80601f01602080910402602001604051908101604052809291908181526020018280546104c4906122c1565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b5050505050905090565b600061052682610e56565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061056c82610785565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d390612364565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105fb610ea1565b73ffffffffffffffffffffffffffffffffffffffff16148061062a575061062981610624610ea1565b610b47565b5b610669576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610660906123f6565b60405180910390fd5b6106738383610ea9565b505050565b6000610682610f62565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106bb57600080fd5b81600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050919050565b610716610710610ea1565b82610fe0565b610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074c90612488565b60405180910390fd5b610760838383611075565b505050565b610780838383604051806020016040528060008152506109d3565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361082d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610824906124f4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089d90612586565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108f5610f62565b6108ff60006112db565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461093a906122c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610966906122c1565b80156109b35780601f10610988576101008083540402835291602001916109b3565b820191906000526020600020905b81548152906001019060200180831161099657829003601f168201915b5050505050905090565b6109cf6109c8610ea1565b83836113a1565b5050565b6109e46109de610ea1565b83610fe0565b610a23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1a90612488565b60405180910390fd5b610a2f8484848461150d565b50505050565b6060610a4082610e56565b6000600660008481526020019081526020016000208054610a60906122c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8c906122c1565b8015610ad95780601f10610aae57610100808354040283529160200191610ad9565b820191906000526020600020905b815481529060010190602001808311610abc57829003601f168201915b505050505090506000610aea611569565b90506000815103610aff578192505050610b42565b600082511115610b34578082604051602001610b1c9291906125e2565b60405160208183030381529060405292505050610b42565b610b3d84611580565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610be5610f62565b600a54600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401610c439190611e00565b602060405180830381865afa158015610c60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c84919061261b565b11610c8e57600080fd5b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8433600a546040518463ffffffff1660e01b8152600401610cef93929190612648565b6020604051808303816000875af1158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190612694565b50610d3d60086115e8565b6000610d4960086115fe565b9050610d55848261160c565b610d5f81846117e5565b8091505092915050565b610d71610f62565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610de0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd790612733565b60405180910390fd5b610de9816112db565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610e5f81611852565b610e9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e95906124f4565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f1c83610785565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610f6a610ea1565b73ffffffffffffffffffffffffffffffffffffffff16610f88610901565b73ffffffffffffffffffffffffffffffffffffffff1614610fde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd59061279f565b60405180910390fd5b565b600080610fec83610785565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061102e575061102d8185610b47565b5b8061106c57508373ffffffffffffffffffffffffffffffffffffffff166110548461051b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661109582610785565b73ffffffffffffffffffffffffffffffffffffffff16146110eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e290612831565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361115a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611151906128c3565b60405180910390fd5b6111658383836118be565b611170600082610ea9565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111c09190612912565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112179190612946565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112d68383836118c3565b505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361140f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611406906129e8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115009190611c86565b60405180910390a3505050565b611518848484611075565b611524848484846118c8565b611563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155a90612a7a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061158b82610e56565b6000611595611569565b905060008151116115b557604051806020016040528060008152506115e0565b806115bf84611a4f565b6040516020016115d09291906125e2565b6040516020818303038152906040525b915050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361167b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167290612ae6565b60405180910390fd5b61168481611852565b156116c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116bb90612b52565b60405180910390fd5b6116d0600083836118be565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117209190612946565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46117e1600083836118c3565b5050565b6117ee82611852565b61182d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182490612be4565b60405180910390fd5b8060066000848152602001908152602001600020908161184d9190612db0565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006118e98473ffffffffffffffffffffffffffffffffffffffff16611baf565b15611a42578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611912610ea1565b8786866040518563ffffffff1660e01b81526004016119349493929190612ed7565b6020604051808303816000875af192505050801561197057506040513d601f19601f8201168201806040525081019061196d9190612f38565b60015b6119f2573d80600081146119a0576040519150601f19603f3d011682016040523d82523d6000602084013e6119a5565b606091505b5060008151036119ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e190612a7a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a47565b600190505b949350505050565b606060008203611a96576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611baa565b600082905060005b60008214611ac8578080611ab190612f65565b915050600a82611ac19190612fdc565b9150611a9e565b60008167ffffffffffffffff811115611ae457611ae3611fa7565b5b6040519080825280601f01601f191660200182016040528015611b165781602001600182028036833780820191505090505b5090505b60008514611ba357600182611b2f9190612912565b9150600a85611b3e919061300d565b6030611b4a9190612946565b60f81b818381518110611b6057611b5f61303e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611b9c9190612fdc565b9450611b1a565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c1b81611be6565b8114611c2657600080fd5b50565b600081359050611c3881611c12565b92915050565b600060208284031215611c5457611c53611bdc565b5b6000611c6284828501611c29565b91505092915050565b60008115159050919050565b611c8081611c6b565b82525050565b6000602082019050611c9b6000830184611c77565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611cdb578082015181840152602081019050611cc0565b83811115611cea576000848401525b50505050565b6000601f19601f8301169050919050565b6000611d0c82611ca1565b611d168185611cac565b9350611d26818560208601611cbd565b611d2f81611cf0565b840191505092915050565b60006020820190508181036000830152611d548184611d01565b905092915050565b6000819050919050565b611d6f81611d5c565b8114611d7a57600080fd5b50565b600081359050611d8c81611d66565b92915050565b600060208284031215611da857611da7611bdc565b5b6000611db684828501611d7d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611dea82611dbf565b9050919050565b611dfa81611ddf565b82525050565b6000602082019050611e156000830184611df1565b92915050565b611e2481611ddf565b8114611e2f57600080fd5b50565b600081359050611e4181611e1b565b92915050565b60008060408385031215611e5e57611e5d611bdc565b5b6000611e6c85828601611e32565b9250506020611e7d85828601611d7d565b9150509250929050565b600060208284031215611e9d57611e9c611bdc565b5b6000611eab84828501611e32565b91505092915050565b600080600060608486031215611ecd57611ecc611bdc565b5b6000611edb86828701611e32565b9350506020611eec86828701611e32565b9250506040611efd86828701611d7d565b9150509250925092565b611f1081611d5c565b82525050565b6000602082019050611f2b6000830184611f07565b92915050565b611f3a81611c6b565b8114611f4557600080fd5b50565b600081359050611f5781611f31565b92915050565b60008060408385031215611f7457611f73611bdc565b5b6000611f8285828601611e32565b9250506020611f9385828601611f48565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611fdf82611cf0565b810181811067ffffffffffffffff82111715611ffe57611ffd611fa7565b5b80604052505050565b6000612011611bd2565b905061201d8282611fd6565b919050565b600067ffffffffffffffff82111561203d5761203c611fa7565b5b61204682611cf0565b9050602081019050919050565b82818337600083830152505050565b600061207561207084612022565b612007565b90508281526020810184848401111561209157612090611fa2565b5b61209c848285612053565b509392505050565b600082601f8301126120b9576120b8611f9d565b5b81356120c9848260208601612062565b91505092915050565b600080600080608085870312156120ec576120eb611bdc565b5b60006120fa87828801611e32565b945050602061210b87828801611e32565b935050604061211c87828801611d7d565b925050606085013567ffffffffffffffff81111561213d5761213c611be1565b5b612149878288016120a4565b91505092959194509250565b6000806040838503121561216c5761216b611bdc565b5b600061217a85828601611e32565b925050602061218b85828601611e32565b9150509250929050565b600067ffffffffffffffff8211156121b0576121af611fa7565b5b6121b982611cf0565b9050602081019050919050565b60006121d96121d484612195565b612007565b9050828152602081018484840111156121f5576121f4611fa2565b5b612200848285612053565b509392505050565b600082601f83011261221d5761221c611f9d565b5b813561222d8482602086016121c6565b91505092915050565b6000806040838503121561224d5761224c611bdc565b5b600061225b85828601611e32565b925050602083013567ffffffffffffffff81111561227c5761227b611be1565b5b61228885828601612208565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806122d957607f821691505b6020821081036122ec576122eb612292565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061234e602183611cac565b9150612359826122f2565b604082019050919050565b6000602082019050818103600083015261237d81612341565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006123e0603e83611cac565b91506123eb82612384565b604082019050919050565b6000602082019050818103600083015261240f816123d3565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612472602e83611cac565b915061247d82612416565b604082019050919050565b600060208201905081810360008301526124a181612465565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006124de601883611cac565b91506124e9826124a8565b602082019050919050565b6000602082019050818103600083015261250d816124d1565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612570602983611cac565b915061257b82612514565b604082019050919050565b6000602082019050818103600083015261259f81612563565b9050919050565b600081905092915050565b60006125bc82611ca1565b6125c681856125a6565b93506125d6818560208601611cbd565b80840191505092915050565b60006125ee82856125b1565b91506125fa82846125b1565b91508190509392505050565b60008151905061261581611d66565b92915050565b60006020828403121561263157612630611bdc565b5b600061263f84828501612606565b91505092915050565b600060608201905061265d6000830186611df1565b61266a6020830185611df1565b6126776040830184611f07565b949350505050565b60008151905061268e81611f31565b92915050565b6000602082840312156126aa576126a9611bdc565b5b60006126b88482850161267f565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061271d602683611cac565b9150612728826126c1565b604082019050919050565b6000602082019050818103600083015261274c81612710565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612789602083611cac565b915061279482612753565b602082019050919050565b600060208201905081810360008301526127b88161277c565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061281b602583611cac565b9150612826826127bf565b604082019050919050565b6000602082019050818103600083015261284a8161280e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006128ad602483611cac565b91506128b882612851565b604082019050919050565b600060208201905081810360008301526128dc816128a0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061291d82611d5c565b915061292883611d5c565b92508282101561293b5761293a6128e3565b5b828203905092915050565b600061295182611d5c565b915061295c83611d5c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612991576129906128e3565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006129d2601983611cac565b91506129dd8261299c565b602082019050919050565b60006020820190508181036000830152612a01816129c5565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a64603283611cac565b9150612a6f82612a08565b604082019050919050565b60006020820190508181036000830152612a9381612a57565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612ad0602083611cac565b9150612adb82612a9a565b602082019050919050565b60006020820190508181036000830152612aff81612ac3565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612b3c601c83611cac565b9150612b4782612b06565b602082019050919050565b60006020820190508181036000830152612b6b81612b2f565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612bce602e83611cac565b9150612bd982612b72565b604082019050919050565b60006020820190508181036000830152612bfd81612bc1565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612c667fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612c29565b612c708683612c29565b95508019841693508086168417925050509392505050565b6000819050919050565b6000612cad612ca8612ca384611d5c565b612c88565b611d5c565b9050919050565b6000819050919050565b612cc783612c92565b612cdb612cd382612cb4565b848454612c36565b825550505050565b600090565b612cf0612ce3565b612cfb818484612cbe565b505050565b5b81811015612d1f57612d14600082612ce8565b600181019050612d01565b5050565b601f821115612d6457612d3581612c04565b612d3e84612c19565b81016020851015612d4d578190505b612d61612d5985612c19565b830182612d00565b50505b505050565b600082821c905092915050565b6000612d8760001984600802612d69565b1980831691505092915050565b6000612da08383612d76565b9150826002028217905092915050565b612db982611ca1565b67ffffffffffffffff811115612dd257612dd1611fa7565b5b612ddc82546122c1565b612de7828285612d23565b600060209050601f831160018114612e1a5760008415612e08578287015190505b612e128582612d94565b865550612e7a565b601f198416612e2886612c04565b60005b82811015612e5057848901518255600182019150602085019450602081019050612e2b565b86831015612e6d5784890151612e69601f891682612d76565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000612ea982612e82565b612eb38185612e8d565b9350612ec3818560208601611cbd565b612ecc81611cf0565b840191505092915050565b6000608082019050612eec6000830187611df1565b612ef96020830186611df1565b612f066040830185611f07565b8181036060830152612f188184612e9e565b905095945050505050565b600081519050612f3281611c12565b92915050565b600060208284031215612f4e57612f4d611bdc565b5b6000612f5c84828501612f23565b91505092915050565b6000612f7082611d5c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612fa257612fa16128e3565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612fe782611d5c565b9150612ff283611d5c565b92508261300257613001612fad565b5b828204905092915050565b600061301882611d5c565b915061302383611d5c565b92508261303357613032612fad565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212200407233de7645a9b394aa403cc264672667180136b5f4280272f59bb5a19cba964736f6c634300080f0033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:5231:14",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "66:40:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "77:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "93:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "87:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "87:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "77:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "49:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "59:6:14",
                  "type": ""
                }
              ],
              "src": "7:99:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "140:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "157:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "160:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "150:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "150:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "150:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "254:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "257:4:14",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "247:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "247:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "247:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "278:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "281:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "271:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "271:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "271:15:14"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "112:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "326:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "343:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "346:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "336:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "336:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "336:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "440:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "443:4:14",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "433:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "433:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "433:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "464:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "467:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "457:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "457:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "457:15:14"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "298:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "535:269:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "545:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "559:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "565:1:14",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "555:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "555:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "545:6:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "576:38:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "606:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "612:1:14",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "602:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "602:12:14"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "580:18:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "653:51:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "667:27:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "681:6:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "689:4:14",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "677:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "677:17:14"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "667:6:14"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "633:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "626:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "626:26:14"
                    },
                    "nodeType": "YulIf",
                    "src": "623:81:14"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "756:42:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "770:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "770:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "770:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "720:18:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "743:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "751:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "740:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "740:14:14"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "717:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "717:38:14"
                    },
                    "nodeType": "YulIf",
                    "src": "714:84:14"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "519:4:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "528:6:14",
                  "type": ""
                }
              ],
              "src": "484:320:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "864:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "874:11:14",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "882:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "874:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "902:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "905:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "895:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "895:14:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "895:14:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "918:26:14",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "936:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "939:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "926:9:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "926:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "918:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "851:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "859:4:14",
                  "type": ""
                }
              ],
              "src": "810:141:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1001:49:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1011:33:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1029:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1036:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1025:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1025:14:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1041:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "1021:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1021:23:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "1011:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "divide_by_32_ceil",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "984:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "994:6:14",
                  "type": ""
                }
              ],
              "src": "957:93:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1109:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1119:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "1144:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1150:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "1140:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1140:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "1119:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "1084:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1090:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "1100:8:14",
                  "type": ""
                }
              ],
              "src": "1056:107:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1245:317:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1255:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBytes",
                          "nodeType": "YulIdentifier",
                          "src": "1276:10:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1288:1:14",
                          "type": "",
                          "value": "8"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "1272:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1272:18:14"
                    },
                    "variables": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulTypedName",
                        "src": "1259:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1299:109:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "1330:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1341:66:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "1311:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1311:97:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "1303:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1417:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "1448:9:14"
                        },
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "1459:8:14"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "1429:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1429:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "1417:8:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1477:30:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1490:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "1501:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "1497:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1497:9:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "1486:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1486:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1477:5:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1516:40:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1529:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "1540:8:14"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "1550:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1536:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1536:19:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "1526:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1526:30:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "1516:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_dynamic32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1206:5:14",
                  "type": ""
                },
                {
                  "name": "shiftBytes",
                  "nodeType": "YulTypedName",
                  "src": "1213:10:14",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "1225:8:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "1238:6:14",
                  "type": ""
                }
              ],
              "src": "1169:393:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1613:32:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1623:16:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1634:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1623:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1595:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1605:7:14",
                  "type": ""
                }
              ],
              "src": "1568:77:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1683:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1693:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1700:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "1693:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "identity",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1669:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "1679:3:14",
                  "type": ""
                }
              ],
              "src": "1651:60:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1777:82:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1787:66:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "1845:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "1827:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1827:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "identity",
                            "nodeType": "YulIdentifier",
                            "src": "1818:8:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1818:34:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "1800:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1800:53:14"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "1787:9:14"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1757:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "1767:9:14",
                  "type": ""
                }
              ],
              "src": "1717:142:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1912:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1922:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1929:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "1922:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "prepare_store_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1898:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "1908:3:14",
                  "type": ""
                }
              ],
              "src": "1865:75:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2022:193:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2032:63:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "2087:7:14"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2056:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2056:39:14"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "2036:16:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "2111:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2151:4:14"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "2145:5:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2145:11:14"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2158:6:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2190:16:14"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "2166:23:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2166:41:14"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_dynamic32",
                            "nodeType": "YulIdentifier",
                            "src": "2117:27:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2117:91:14"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "2104:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2104:105:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2104:105:14"
                  }
                ]
              },
              "name": "update_storage_value_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "1999:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "2005:6:14",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "2013:7:14",
                  "type": ""
                }
              ],
              "src": "1946:269:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2270:24:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2280:8:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "2287:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "2280:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "zero_value_for_split_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "2266:3:14",
                  "type": ""
                }
              ],
              "src": "2221:73:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2353:136:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2363:46:14",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "zero_value_for_split_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2377:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2377:32:14"
                    },
                    "variables": [
                      {
                        "name": "zero_0",
                        "nodeType": "YulTypedName",
                        "src": "2367:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "2462:4:14"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "2468:6:14"
                        },
                        {
                          "name": "zero_0",
                          "nodeType": "YulIdentifier",
                          "src": "2476:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "update_storage_value_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2418:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2418:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2418:65:14"
                  }
                ]
              },
              "name": "storage_set_to_zero_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "2339:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "2345:6:14",
                  "type": ""
                }
              ],
              "src": "2300:189:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2545:136:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2612:63:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "2656:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2663:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "storage_set_to_zero_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "2626:29:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2626:39:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2626:39:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "start",
                          "nodeType": "YulIdentifier",
                          "src": "2565:5:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "2572:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "2562:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2562:14:14"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "2577:26:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "2579:22:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "2592:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2599:1:14",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2588:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2588:13:14"
                          },
                          "variableNames": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2579:5:14"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "2559:2:14",
                      "statements": []
                    },
                    "src": "2555:120:14"
                  }
                ]
              },
              "name": "clear_storage_range_t_bytes1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "start",
                  "nodeType": "YulTypedName",
                  "src": "2533:5:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2540:3:14",
                  "type": ""
                }
              ],
              "src": "2495:186:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2766:464:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2792:431:14",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2806:54:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "2854:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "array_dataslot_t_string_storage",
                              "nodeType": "YulIdentifier",
                              "src": "2822:31:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2822:38:14"
                          },
                          "variables": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulTypedName",
                              "src": "2810:8:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2873:63:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "2896:8:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "2924:10:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "divide_by_32_ceil",
                                  "nodeType": "YulIdentifier",
                                  "src": "2906:17:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2906:29:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2892:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2892:44:14"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "2877:11:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3093:27:14",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "3095:23:14",
                                "value": {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "3110:8:14"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "3095:11:14"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nodeType": "YulIdentifier",
                                "src": "3077:10:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3089:2:14",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "3074:2:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3074:18:14"
                          },
                          "nodeType": "YulIf",
                          "src": "3071:49:14"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "deleteStart",
                                "nodeType": "YulIdentifier",
                                "src": "3162:11:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "3179:8:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "3207:3:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "3189:17:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3189:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3175:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3175:37:14"
                              }
                            ],
                            "functionName": {
                              "name": "clear_storage_range_t_bytes1",
                              "nodeType": "YulIdentifier",
                              "src": "3133:28:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3133:80:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3133:80:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "2783:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2788:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2780:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2780:11:14"
                    },
                    "nodeType": "YulIf",
                    "src": "2777:446:14"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "2742:5:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "2749:3:14",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "2754:10:14",
                  "type": ""
                }
              ],
              "src": "2687:543:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3299:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3309:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "3334:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3340:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "3330:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3330:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "3309:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_unsigned_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "3274:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3280:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "3290:8:14",
                  "type": ""
                }
              ],
              "src": "3236:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3410:118:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3420:68:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3469:1:14",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "bytes",
                                  "nodeType": "YulIdentifier",
                                  "src": "3472:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "3465:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3465:13:14"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3484:1:14",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "3480:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3480:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_unsigned_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "3436:28:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3436:51:14"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "3432:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3432:56:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "3424:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3497:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3511:4:14"
                        },
                        {
                          "name": "mask",
                          "nodeType": "YulIdentifier",
                          "src": "3517:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "3507:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3507:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "3497:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "mask_bytes_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "3387:4:14",
                  "type": ""
                },
                {
                  "name": "bytes",
                  "nodeType": "YulTypedName",
                  "src": "3393:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "3403:6:14",
                  "type": ""
                }
              ],
              "src": "3359:169:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3614:214:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3747:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3774:4:14"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "3780:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mask_bytes_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "3755:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3755:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3747:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3793:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3804:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3814:1:14",
                              "type": "",
                              "value": "2"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "3817:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "3810:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3810:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "3801:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3801:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "3793:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_used_part_and_set_length_of_short_byte_array",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "3595:4:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "3601:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "3609:4:14",
                  "type": ""
                }
              ],
              "src": "3533:295:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3925:1303:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3936:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "3983:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "3950:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3950:37:14"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "3940:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4072:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "4074:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4074:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4074:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "4044:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4052:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4041:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4041:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "4038:56:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4104:52:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "4150:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "4144:5:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4144:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "4118:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4118:38:14"
                    },
                    "variables": [
                      {
                        "name": "oldLen",
                        "nodeType": "YulTypedName",
                        "src": "4108:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "4249:4:14"
                        },
                        {
                          "name": "oldLen",
                          "nodeType": "YulIdentifier",
                          "src": "4255:6:14"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "4263:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "4203:45:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4203:67:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4203:67:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4280:18:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "4297:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "4284:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4308:17:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "4321:4:14",
                      "type": "",
                      "value": "0x20"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "4308:9:14"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4372:611:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "4386:37:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "4405:6:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4417:4:14",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "4413:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4413:9:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "4401:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4401:22:14"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "4390:7:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "4437:51:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "4483:4:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "4451:31:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4451:37:14"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "4441:6:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "4501:10:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4510:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "4505:1:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "4569:163:14",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "4594:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4612:3:14"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4617:9:14"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "4608:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4608:19:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "4602:5:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4602:26:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "4587:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4587:42:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4587:42:14"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "4646:24:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "4660:6:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4668:1:14",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4656:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4656:14:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4646:6:14"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "4687:31:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "4704:9:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4715:2:14",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4700:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4700:18:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "4687:9:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "4535:1:14"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "4538:7:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "4532:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4532:14:14"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "4547:21:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "4549:17:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "4558:1:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4561:4:14",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4554:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4554:12:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "4549:1:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "4528:3:14",
                                "statements": []
                              },
                              "src": "4524:208:14"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "4768:156:14",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "4786:43:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "4813:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "4818:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4809:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4809:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "4803:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4803:26:14"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "4790:9:14",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "4853:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "4880:9:14"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "newLen",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4895:6:14"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nodeType": "YulLiteral",
                                                  "src": "4903:4:14",
                                                  "type": "",
                                                  "value": "0x1f"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "4891:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4891:17:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mask_bytes_dynamic",
                                            "nodeType": "YulIdentifier",
                                            "src": "4861:18:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4861:48:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "4846:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4846:64:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4846:64:14"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "4751:7:14"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "4760:6:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "4748:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4748:19:14"
                              },
                              "nodeType": "YulIf",
                              "src": "4745:179:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "4944:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "4958:6:14"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "4966:1:14",
                                            "type": "",
                                            "value": "2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mul",
                                          "nodeType": "YulIdentifier",
                                          "src": "4954:3:14"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4954:14:14"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4970:1:14",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4950:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4950:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "4937:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4937:36:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4937:36:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "4365:618:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4370:1:14",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5000:222:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "5014:14:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5027:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "5018:5:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "5051:67:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "5069:35:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "5088:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "5093:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "5084:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5084:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "5078:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5078:26:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "5069:5:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "5044:6:14"
                              },
                              "nodeType": "YulIf",
                              "src": "5041:77:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "5138:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "5197:5:14"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "5204:6:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "5144:52:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5144:67:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "5131:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5131:81:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5131:81:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "4992:230:14",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "4345:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4353:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4342:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4342:14:14"
                    },
                    "nodeType": "YulSwitch",
                    "src": "4335:887:14"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "3914:4:14",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "3920:3:14",
                  "type": ""
                }
              ],
              "src": "3833:1395:14"
            }
          ]
        },
        "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
        "id": 14,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:37217:14",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "47:35:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "57:19:14",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "73:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:14"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "40:6:14",
                  "type": ""
                }
              ],
              "src": "7:75:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "177:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "194:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "197:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:14"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "300:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "317:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "320:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:14"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "378:105:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "388:89:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "403:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "410:66:14",
                          "type": "",
                          "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "399:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "399:78:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "388:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "360:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "370:7:14",
                  "type": ""
                }
              ],
              "src": "334:149:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "531:78:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "587:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "596:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "599:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "589:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "589:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "589:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "554:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "578:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bytes4",
                                "nodeType": "YulIdentifier",
                                "src": "561:16:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "561:23:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "551:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "551:34:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "544:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "544:42:14"
                    },
                    "nodeType": "YulIf",
                    "src": "541:62:14"
                  }
                ]
              },
              "name": "validator_revert_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "524:5:14",
                  "type": ""
                }
              ],
              "src": "489:120:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "666:86:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "676:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "698:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "685:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "685:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "676:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "740:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "714:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "714:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "714:32:14"
                  }
                ]
              },
              "name": "abi_decode_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "644:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "652:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "660:5:14",
                  "type": ""
                }
              ],
              "src": "615:137:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "823:262:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "869:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "871:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "871:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "871:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "844:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "853:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "840:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "840:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "865:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "836:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "836:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "833:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "962:116:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "977:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "991:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "981:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1006:62:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1040:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1051:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1036:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1036:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1060:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes4",
                            "nodeType": "YulIdentifier",
                            "src": "1016:19:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1016:52:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1006:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "793:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "804:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "816:6:14",
                  "type": ""
                }
              ],
              "src": "758:327:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1133:48:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1143:32:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1168:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1161:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1161:13:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1154:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1154:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1143:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1115:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1125:7:14",
                  "type": ""
                }
              ],
              "src": "1091:90:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1246:50:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1263:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1283:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "1268:14:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1268:21:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1256:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1256:34:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1256:34:14"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1234:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1241:3:14",
                  "type": ""
                }
              ],
              "src": "1187:109:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1394:118:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1404:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1416:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1427:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1412:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1412:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1404:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1478:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1491:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1502:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1487:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1487:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1440:37:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1440:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1440:65:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1366:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1378:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1389:4:14",
                  "type": ""
                }
              ],
              "src": "1302:210:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1577:40:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1588:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1604:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1598:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1598:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1588:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1560:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1570:6:14",
                  "type": ""
                }
              ],
              "src": "1518:99:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1719:73:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1736:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1741:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1729:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1729:19:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1729:19:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1757:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1776:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1781:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1772:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1772:14:14"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "1757:11:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1691:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1696:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "1707:11:14",
                  "type": ""
                }
              ],
              "src": "1623:169:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1847:258:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1857:10:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "1866:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "1861:1:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1926:63:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1951:3:14"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "1956:1:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1947:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1947:11:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "1970:3:14"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "1975:1:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1966:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1966:11:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "1960:5:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1960:18:14"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "1940:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1940:39:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1940:39:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "1887:1:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1890:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "1884:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1884:13:14"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "1898:19:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "1900:15:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "1909:1:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1912:2:14",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1905:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1905:10:14"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1900:1:14"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "1880:3:14",
                      "statements": []
                    },
                    "src": "1876:113:14"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2023:76:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "2073:3:14"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "2078:6:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2069:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2069:16:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2087:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "2062:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2062:27:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2062:27:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "2004:1:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2007:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2001:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2001:13:14"
                    },
                    "nodeType": "YulIf",
                    "src": "1998:101:14"
                  }
                ]
              },
              "name": "copy_memory_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "1829:3:14",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "1834:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1839:6:14",
                  "type": ""
                }
              ],
              "src": "1798:307:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2159:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2169:38:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2187:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2194:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2183:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2183:14:14"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2203:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "2199:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2199:7:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "2179:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2179:28:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "2169:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2142:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "2152:6:14",
                  "type": ""
                }
              ],
              "src": "2111:102:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2311:272:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2321:53:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2368:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "2335:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2335:39:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "2325:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2383:78:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2449:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2454:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2390:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2390:71:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2383:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2496:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2503:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2492:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2492:16:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2510:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2515:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "2470:21:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2470:52:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2470:52:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2531:46:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2542:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2569:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "2547:21:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2547:29:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2538:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2538:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2531:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2292:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2299:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2307:3:14",
                  "type": ""
                }
              ],
              "src": "2219:364:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2707:195:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2717:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2729:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2740:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2725:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2725:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2717:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2764:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2775:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2760:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2760:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "2783:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2789:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2779:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2779:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2753:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2753:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2753:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2809:86:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2881:6:14"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2890:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2817:63:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2817:78:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2809:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2679:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2691:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2702:4:14",
                  "type": ""
                }
              ],
              "src": "2589:313:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2953:32:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2963:16:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2974:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "2963:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2935:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "2945:7:14",
                  "type": ""
                }
              ],
              "src": "2908:77:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3034:79:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3091:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3100:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3103:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3093:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3093:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3093:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3057:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3082:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "3064:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3064:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "3054:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3054:35:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3047:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3047:43:14"
                    },
                    "nodeType": "YulIf",
                    "src": "3044:63:14"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3027:5:14",
                  "type": ""
                }
              ],
              "src": "2991:122:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3171:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3181:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "3203:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3190:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3190:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3181:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3246:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3219:26:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3219:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3219:33:14"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "3149:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3157:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3165:5:14",
                  "type": ""
                }
              ],
              "src": "3119:139:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3330:263:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3376:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "3378:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3378:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3378:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "3351:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3360:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3347:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3347:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3372:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3343:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3343:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "3340:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "3469:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3484:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3498:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "3488:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3513:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3548:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "3559:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3544:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3544:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "3568:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "3523:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3523:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "3513:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3300:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3311:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3323:6:14",
                  "type": ""
                }
              ],
              "src": "3264:329:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3644:81:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3654:65:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3669:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3676:42:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "3665:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3665:54:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3654:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3626:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3636:7:14",
                  "type": ""
                }
              ],
              "src": "3599:126:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3776:51:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3786:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3815:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "3797:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3797:24:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3786:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3758:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3768:7:14",
                  "type": ""
                }
              ],
              "src": "3731:96:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3898:53:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3915:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3938:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "3920:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3920:24:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3908:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3908:37:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3908:37:14"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3886:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3893:3:14",
                  "type": ""
                }
              ],
              "src": "3833:118:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4055:124:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4065:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4077:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4088:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4073:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4073:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4065:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4145:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4158:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4169:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4154:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4154:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4101:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4101:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4101:71:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4027:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4039:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4050:4:14",
                  "type": ""
                }
              ],
              "src": "3957:222:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4228:79:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4285:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4294:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4297:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4287:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4287:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4287:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4251:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4276:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4258:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4258:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "4248:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4248:35:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4241:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4241:43:14"
                    },
                    "nodeType": "YulIf",
                    "src": "4238:63:14"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4221:5:14",
                  "type": ""
                }
              ],
              "src": "4185:122:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4365:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4375:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "4397:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "4384:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4384:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4375:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4440:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "4413:26:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4413:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4413:33:14"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "4343:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "4351:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4359:5:14",
                  "type": ""
                }
              ],
              "src": "4313:139:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4541:391:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4587:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "4589:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4589:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4589:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4562:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4571:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4558:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4558:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4583:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "4554:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4554:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "4551:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4680:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4695:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4709:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4699:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4724:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4759:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4770:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4755:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4755:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4779:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "4734:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4734:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4724:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4807:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4822:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4836:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4826:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4852:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4887:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4898:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4883:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4883:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4907:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4862:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4862:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "4852:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4503:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "4514:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4526:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4534:6:14",
                  "type": ""
                }
              ],
              "src": "4458:474:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5004:263:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5050:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "5052:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5052:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5052:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5025:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5034:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5021:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5021:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5046:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "5017:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5017:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "5014:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5143:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5158:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5172:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5162:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5187:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5222:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5233:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5218:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5218:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5242:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "5197:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5197:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5187:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4974:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "4985:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4997:6:14",
                  "type": ""
                }
              ],
              "src": "4938:329:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5373:519:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5419:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "5421:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5421:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5421:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5394:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5403:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5390:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5390:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5415:2:14",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "5386:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5386:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "5383:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5512:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5527:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5541:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5531:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5556:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5591:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5602:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5587:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5587:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5611:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "5566:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5566:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5556:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5639:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5654:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5668:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5658:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5684:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5719:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5730:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5715:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5715:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5739:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "5694:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5694:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "5684:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5767:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5782:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5796:2:14",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5786:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5812:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5847:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5858:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5843:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5843:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5867:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "5822:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5822:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "5812:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5327:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "5338:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5350:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "5358:6:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "5366:6:14",
                  "type": ""
                }
              ],
              "src": "5273:619:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5963:53:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5980:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6003:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "5985:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5985:24:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5973:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5973:37:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5973:37:14"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5951:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "5958:3:14",
                  "type": ""
                }
              ],
              "src": "5898:118:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6120:124:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6130:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6142:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6153:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6138:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6138:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6130:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6210:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6223:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6234:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6219:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6219:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6166:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6166:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6166:71:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6092:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6104:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6115:4:14",
                  "type": ""
                }
              ],
              "src": "6022:222:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6290:76:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6344:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6353:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6356:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "6346:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6346:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6346:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6313:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6335:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "6320:14:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6320:21:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "6310:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6310:32:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "6303:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6303:40:14"
                    },
                    "nodeType": "YulIf",
                    "src": "6300:60:14"
                  }
                ]
              },
              "name": "validator_revert_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6283:5:14",
                  "type": ""
                }
              ],
              "src": "6250:116:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6421:84:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6431:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "6453:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "6440:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6440:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6431:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6493:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bool",
                        "nodeType": "YulIdentifier",
                        "src": "6469:23:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6469:30:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6469:30:14"
                  }
                ]
              },
              "name": "abi_decode_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "6399:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "6407:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6415:5:14",
                  "type": ""
                }
              ],
              "src": "6372:133:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6591:388:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6637:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "6639:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6639:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6639:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "6612:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6621:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6608:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6608:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6633:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "6604:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6604:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "6601:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "6730:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "6745:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6759:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "6749:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6774:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6809:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "6820:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6805:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6805:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "6829:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "6784:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6784:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "6774:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "6857:115:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "6872:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6886:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "6876:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6902:60:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6934:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "6945:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6930:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6930:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "6954:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "6912:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6912:50:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "6902:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6553:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "6564:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6576:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "6584:6:14",
                  "type": ""
                }
              ],
              "src": "6511:468:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7074:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7091:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7094:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7084:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7084:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7084:12:14"
                  }
                ]
              },
              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
              "nodeType": "YulFunctionDefinition",
              "src": "6985:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7197:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7214:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7217:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7207:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7207:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7207:12:14"
                  }
                ]
              },
              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
              "nodeType": "YulFunctionDefinition",
              "src": "7108:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7259:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7276:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7279:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7269:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7269:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7269:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7373:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7376:4:14",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7366:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7366:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7366:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7397:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7400:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7390:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7390:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7390:15:14"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "7231:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7460:238:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "7470:58:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "7492:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "7522:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "7500:21:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7500:27:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7488:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7488:40:14"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "7474:10:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7639:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "7641:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7641:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7641:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "7582:10:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7594:18:14",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "7579:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7579:34:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "7618:10:14"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "7630:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "7615:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7615:22:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "7576:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7576:62:14"
                    },
                    "nodeType": "YulIf",
                    "src": "7573:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7677:2:14",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "7681:10:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7670:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7670:22:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7670:22:14"
                  }
                ]
              },
              "name": "finalize_allocation",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "7446:6:14",
                  "type": ""
                },
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "7454:4:14",
                  "type": ""
                }
              ],
              "src": "7417:281:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7745:88:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7755:30:14",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "allocate_unbounded",
                        "nodeType": "YulIdentifier",
                        "src": "7765:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7765:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "7755:6:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "7814:6:14"
                        },
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "7822:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "finalize_allocation",
                        "nodeType": "YulIdentifier",
                        "src": "7794:19:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7794:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7794:33:14"
                  }
                ]
              },
              "name": "allocate_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "7729:4:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "7738:6:14",
                  "type": ""
                }
              ],
              "src": "7704:129:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7905:241:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8010:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "8012:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8012:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8012:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "7982:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7990:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "7979:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7979:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "7976:56:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8042:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8072:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "8050:21:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8050:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "8042:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8116:23:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "8128:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8134:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8124:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8124:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "8116:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "7889:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "7900:4:14",
                  "type": ""
                }
              ],
              "src": "7839:307:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8203:103:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "8226:3:14"
                        },
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "8231:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8236:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldatacopy",
                        "nodeType": "YulIdentifier",
                        "src": "8213:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8213:30:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8213:30:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "8284:3:14"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8289:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8280:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8280:16:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8298:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8273:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8273:27:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8273:27:14"
                  }
                ]
              },
              "name": "copy_calldata_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "8185:3:14",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "8190:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8195:6:14",
                  "type": ""
                }
              ],
              "src": "8152:154:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8395:327:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8405:74:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8471:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "8430:40:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8430:48:14"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "8414:15:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8414:65:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "8405:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "8495:5:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8502:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8488:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8488:21:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8488:21:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "8518:27:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "8533:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8540:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8529:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8529:16:14"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "8522:3:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8583:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                              "nodeType": "YulIdentifier",
                              "src": "8585:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8585:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8585:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "8564:3:14"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8569:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8560:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8560:16:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "8578:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8557:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8557:25:14"
                    },
                    "nodeType": "YulIf",
                    "src": "8554:112:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "8699:3:14"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "8704:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8709:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "8675:23:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8675:41:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8675:41:14"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "8368:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8373:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "8381:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "8389:5:14",
                  "type": ""
                }
              ],
              "src": "8312:410:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8802:277:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8851:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "8853:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8853:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8853:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "8830:6:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8838:4:14",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8826:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8826:17:14"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "8845:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "8822:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8822:27:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "8815:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8815:35:14"
                    },
                    "nodeType": "YulIf",
                    "src": "8812:122:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "8943:34:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "8970:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "8957:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8957:20:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "8947:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8986:87:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "9046:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9054:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9042:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9042:17:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9061:6:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "9069:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_bytes_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "8995:46:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8995:78:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "8986:5:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "8780:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "8788:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "8796:5:14",
                  "type": ""
                }
              ],
              "src": "8741:338:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9211:817:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9258:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "9260:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9260:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9260:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9232:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9241:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9228:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9228:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9253:3:14",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "9224:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9224:33:14"
                    },
                    "nodeType": "YulIf",
                    "src": "9221:120:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9351:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9366:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9380:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9370:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9395:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9430:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9441:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9426:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9426:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9450:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "9405:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9405:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9395:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9478:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9493:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9507:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9497:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9523:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9558:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9569:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9554:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9554:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9578:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "9533:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9533:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "9523:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9606:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9621:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9635:2:14",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9625:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9651:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9686:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9697:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9682:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9682:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9706:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "9661:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9661:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "9651:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9734:287:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9749:46:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9780:9:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9791:2:14",
                                  "type": "",
                                  "value": "96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9776:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9776:18:14"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "9763:12:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9763:32:14"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9753:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "9842:83:14",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "9844:77:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "9844:79:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "9844:79:14"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "9814:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9822:18:14",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "9811:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9811:30:14"
                        },
                        "nodeType": "YulIf",
                        "src": "9808:117:14"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9939:72:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9983:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9994:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9979:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9979:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10003:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "9949:29:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9949:62:14"
                        },
                        "variableNames": [
                          {
                            "name": "value3",
                            "nodeType": "YulIdentifier",
                            "src": "9939:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "9157:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "9168:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "9180:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "9188:6:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "9196:6:14",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "9204:6:14",
                  "type": ""
                }
              ],
              "src": "9085:943:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10117:391:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10163:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "10165:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10165:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10165:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10138:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10147:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "10134:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10134:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10159:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "10130:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10130:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "10127:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "10256:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10271:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10285:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "10275:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10300:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10335:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "10346:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10331:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10331:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10355:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "10310:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10310:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "10300:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "10383:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10398:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10412:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "10402:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10428:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10463:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "10474:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10459:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10459:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10483:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "10438:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10438:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "10428:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "10079:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "10090:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "10102:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "10110:6:14",
                  "type": ""
                }
              ],
              "src": "10034:474:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10581:241:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10686:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "10688:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10688:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10688:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10658:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10666:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "10655:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10655:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "10652:56:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10718:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10748:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "10726:21:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10726:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "10718:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10792:23:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "10804:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10810:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10800:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10800:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "10792:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "10565:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "10576:4:14",
                  "type": ""
                }
              ],
              "src": "10514:308:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10912:328:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10922:75:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10989:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "10947:41:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10947:49:14"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "10931:15:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10931:66:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "10922:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "11013:5:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "11020:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11006:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11006:21:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11006:21:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "11036:27:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "11051:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11058:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "11047:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11047:16:14"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "11040:3:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11101:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                              "nodeType": "YulIdentifier",
                              "src": "11103:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11103:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11103:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "11082:3:14"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "11087:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11078:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11078:16:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "11096:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "11075:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11075:25:14"
                    },
                    "nodeType": "YulIf",
                    "src": "11072:112:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "11217:3:14"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "11222:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "11227:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "11193:23:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11193:41:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11193:41:14"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "10885:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "10890:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "10898:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "10906:5:14",
                  "type": ""
                }
              ],
              "src": "10828:412:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11322:278:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11371:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "11373:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11373:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11373:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11350:6:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11358:4:14",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11346:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11346:17:14"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "11365:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "11342:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11342:27:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "11335:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11335:35:14"
                    },
                    "nodeType": "YulIf",
                    "src": "11332:122:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "11463:34:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "11490:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "11477:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11477:20:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "11467:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11506:88:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "11567:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11575:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11563:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11563:17:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "11582:6:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "11590:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "11515:47:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11515:79:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "11506:5:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "11300:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "11308:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "11316:5:14",
                  "type": ""
                }
              ],
              "src": "11260:340:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11699:561:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11745:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "11747:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11747:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11747:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11720:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11729:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "11716:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11716:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11741:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "11712:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11712:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "11709:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11838:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11853:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11867:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11857:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11882:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11917:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11928:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11913:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11913:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11937:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "11892:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11892:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "11882:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11965:288:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11980:46:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12011:9:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12022:2:14",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12007:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12007:18:14"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "11994:12:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11994:32:14"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11984:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "12073:83:14",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "12075:77:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12075:79:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "12075:79:14"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "12045:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12053:18:14",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "12042:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12042:30:14"
                        },
                        "nodeType": "YulIf",
                        "src": "12039:117:14"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12170:73:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12215:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "12226:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12211:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12211:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "12235:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "12180:30:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12180:63:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "12170:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "11661:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "11672:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "11684:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "11692:6:14",
                  "type": ""
                }
              ],
              "src": "11606:654:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12294:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12311:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12314:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12304:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12304:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12304:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12408:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12411:4:14",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12401:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12401:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12401:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12432:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12435:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "12425:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12425:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12425:15:14"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "12266:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12503:269:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "12513:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12527:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12533:1:14",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "12523:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12523:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "12513:6:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "12544:38:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12574:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12580:1:14",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "12570:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12570:12:14"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "12548:18:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12621:51:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "12635:27:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "12649:6:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12657:4:14",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "12645:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12645:17:14"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "12635:6:14"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "12601:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "12594:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12594:26:14"
                    },
                    "nodeType": "YulIf",
                    "src": "12591:81:14"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12724:42:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "12738:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12738:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "12738:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "12688:18:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "12711:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12719:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "12708:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12708:14:14"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "12685:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12685:38:14"
                    },
                    "nodeType": "YulIf",
                    "src": "12682:84:14"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "12487:4:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "12496:6:14",
                  "type": ""
                }
              ],
              "src": "12452:320:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12884:114:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "12906:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12914:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12902:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12902:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12918:34:14",
                          "type": "",
                          "value": "ERC721: approval to current owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12895:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12895:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12895:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "12974:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12982:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12970:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12970:15:14"
                        },
                        {
                          "hexValue": "72",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12987:3:14",
                          "type": "",
                          "value": "r"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12963:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12963:28:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12963:28:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "12876:6:14",
                  "type": ""
                }
              ],
              "src": "12778:220:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13150:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "13160:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13226:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13231:2:14",
                          "type": "",
                          "value": "33"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "13167:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13167:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13160:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13332:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
                        "nodeType": "YulIdentifier",
                        "src": "13243:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13243:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13243:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13345:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13356:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13361:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13352:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13352:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "13345:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "13138:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "13146:3:14",
                  "type": ""
                }
              ],
              "src": "13004:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13547:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "13557:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "13569:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13580:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13565:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13565:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13557:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13604:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13615:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13600:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13600:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "13623:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13629:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "13619:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13619:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13593:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13593:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13593:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13649:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "13783:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "13657:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13657:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13649:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "13527:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "13542:4:14",
                  "type": ""
                }
              ],
              "src": "13376:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13907:143:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "13929:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13937:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13925:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13925:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13941:34:14",
                          "type": "",
                          "value": "ERC721: approve caller is not to"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13918:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13918:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13918:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "13997:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14005:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13993:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13993:15:14"
                        },
                        {
                          "hexValue": "6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14010:32:14",
                          "type": "",
                          "value": "ken owner nor approved for all"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13986:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13986:57:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13986:57:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "13899:6:14",
                  "type": ""
                }
              ],
              "src": "13801:249:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14202:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14212:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14278:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14283:2:14",
                          "type": "",
                          "value": "62"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14219:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14219:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14212:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14384:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304",
                        "nodeType": "YulIdentifier",
                        "src": "14295:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14295:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14295:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14397:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14408:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14413:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14404:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14404:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "14397:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "14190:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "14198:3:14",
                  "type": ""
                }
              ],
              "src": "14056:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14599:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14609:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "14621:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14632:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14617:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14617:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14609:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14656:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14667:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14652:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14652:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "14675:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14681:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "14671:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14671:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14645:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14645:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14645:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14701:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "14835:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14709:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14709:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14701:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "14579:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "14594:4:14",
                  "type": ""
                }
              ],
              "src": "14428:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14959:127:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "14981:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14989:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14977:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14977:14:14"
                        },
                        {
                          "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14993:34:14",
                          "type": "",
                          "value": "ERC721: caller is not token owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14970:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14970:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14970:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15049:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15057:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15045:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15045:15:14"
                        },
                        {
                          "hexValue": "72206e6f7220617070726f766564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15062:16:14",
                          "type": "",
                          "value": "r nor approved"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15038:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15038:41:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15038:41:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "14951:6:14",
                  "type": ""
                }
              ],
              "src": "14853:233:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15238:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15248:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15314:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15319:2:14",
                          "type": "",
                          "value": "46"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "15255:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15255:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15248:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15420:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b",
                        "nodeType": "YulIdentifier",
                        "src": "15331:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15331:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15331:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15433:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15444:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15449:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15440:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15440:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "15433:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "15226:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "15234:3:14",
                  "type": ""
                }
              ],
              "src": "15092:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15635:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15645:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15657:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15668:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15653:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15653:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15645:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15692:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15703:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15688:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15688:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "15711:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15717:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "15707:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15707:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15681:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15681:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15681:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15737:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "15871:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "15745:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15745:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15737:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "15615:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "15630:4:14",
                  "type": ""
                }
              ],
              "src": "15464:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15995:68:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "16017:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16025:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16013:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16013:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16029:26:14",
                          "type": "",
                          "value": "ERC721: invalid token ID"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16006:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16006:50:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16006:50:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "15987:6:14",
                  "type": ""
                }
              ],
              "src": "15889:174:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16215:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16225:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16291:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16296:2:14",
                          "type": "",
                          "value": "24"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16232:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16232:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16225:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16397:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
                        "nodeType": "YulIdentifier",
                        "src": "16308:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16308:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16308:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16410:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16421:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16426:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16417:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16417:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "16410:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "16203:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "16211:3:14",
                  "type": ""
                }
              ],
              "src": "16069:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16612:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16622:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16634:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16645:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16630:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16630:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16622:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16669:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16680:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16665:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16665:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "16688:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16694:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "16684:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16684:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16658:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16658:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16658:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16714:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "16848:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16722:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16722:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16714:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "16592:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "16607:4:14",
                  "type": ""
                }
              ],
              "src": "16441:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16972:122:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "16994:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17002:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16990:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16990:14:14"
                        },
                        {
                          "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "17006:34:14",
                          "type": "",
                          "value": "ERC721: address zero is not a va"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16983:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16983:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16983:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "17062:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17070:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17058:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17058:15:14"
                        },
                        {
                          "hexValue": "6c6964206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "17075:11:14",
                          "type": "",
                          "value": "lid owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17051:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17051:36:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17051:36:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "16964:6:14",
                  "type": ""
                }
              ],
              "src": "16866:228:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17246:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17256:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17322:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17327:2:14",
                          "type": "",
                          "value": "41"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17263:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17263:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17256:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17428:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
                        "nodeType": "YulIdentifier",
                        "src": "17339:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17339:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17339:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17441:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17452:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17457:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17448:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17448:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "17441:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "17234:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "17242:3:14",
                  "type": ""
                }
              ],
              "src": "17100:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17643:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17653:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "17665:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17676:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17661:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17661:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17653:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17700:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17711:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17696:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17696:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "17719:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17725:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "17715:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17715:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17689:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17689:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17689:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17745:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "17879:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17753:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17753:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17745:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "17623:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "17638:4:14",
                  "type": ""
                }
              ],
              "src": "17472:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18011:34:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18021:18:14",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "18036:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "18021:11:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "17983:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "17988:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "17999:11:14",
                  "type": ""
                }
              ],
              "src": "17897:148:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18161:267:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "18171:53:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "18218:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "18185:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18185:39:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "18175:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18233:96:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18317:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "18322:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18240:76:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18240:89:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18233:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "18364:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18371:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18360:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18360:16:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18378:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "18383:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "18338:21:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18338:52:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18338:52:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18399:23:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18410:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "18415:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18406:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18406:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "18399:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "18142:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18149:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18157:3:14",
                  "type": ""
                }
              ],
              "src": "18051:377:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18618:251:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18629:102:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "18718:6:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18727:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18636:81:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18636:95:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18629:3:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18741:102:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "18830:6:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18839:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18748:81:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18748:95:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18741:3:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18853:10:14",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "18860:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "18853:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18589:3:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "18595:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "18603:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18614:3:14",
                  "type": ""
                }
              ],
              "src": "18434:435:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18938:80:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18948:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "18963:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "18957:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18957:13:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "18948:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "19006:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "18979:26:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18979:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18979:33:14"
                  }
                ]
              },
              "name": "abi_decode_t_uint256_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "18916:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18924:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "18932:5:14",
                  "type": ""
                }
              ],
              "src": "18875:143:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19101:274:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "19147:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "19149:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "19149:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "19149:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "19122:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19131:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "19118:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19118:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19143:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "19114:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19114:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "19111:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "19240:128:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "19255:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19269:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "19259:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "19284:74:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "19330:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "19341:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "19326:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19326:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "19350:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "19294:31:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19294:64:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "19284:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "19071:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "19082:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "19094:6:14",
                  "type": ""
                }
              ],
              "src": "19024:351:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19535:288:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19545:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "19557:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19568:2:14",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19553:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19553:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19545:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "19625:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19638:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19649:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19634:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19634:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19581:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19581:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19581:71:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "19706:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19719:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19730:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19715:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19715:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19662:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19662:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19662:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "19788:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19801:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19812:2:14",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19797:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19797:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19744:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19744:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19744:72:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "19491:9:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "19503:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "19511:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "19519:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "19530:4:14",
                  "type": ""
                }
              ],
              "src": "19381:442:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19889:77:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19899:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "19914:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "19908:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19908:13:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "19899:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "19954:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bool",
                        "nodeType": "YulIdentifier",
                        "src": "19930:23:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19930:30:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19930:30:14"
                  }
                ]
              },
              "name": "abi_decode_t_bool_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "19867:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "19875:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "19883:5:14",
                  "type": ""
                }
              ],
              "src": "19829:137:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20046:271:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "20092:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "20094:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "20094:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "20094:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "20067:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20076:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "20063:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20063:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20088:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "20059:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20059:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "20056:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "20185:125:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "20200:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20214:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "20204:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "20229:71:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "20272:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "20283:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "20268:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "20268:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "20292:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bool_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "20239:28:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20239:61:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "20229:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bool_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "20016:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "20027:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "20039:6:14",
                  "type": ""
                }
              ],
              "src": "19972:345:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20429:119:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20451:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20459:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20447:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20447:14:14"
                        },
                        {
                          "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "20463:34:14",
                          "type": "",
                          "value": "Ownable: new owner is the zero a"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20440:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20440:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20440:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20519:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20527:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20515:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20515:15:14"
                        },
                        {
                          "hexValue": "646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "20532:8:14",
                          "type": "",
                          "value": "ddress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20508:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20508:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20508:33:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "20421:6:14",
                  "type": ""
                }
              ],
              "src": "20323:225:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20700:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20710:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20776:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20781:2:14",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20717:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20717:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20710:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20882:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                        "nodeType": "YulIdentifier",
                        "src": "20793:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20793:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20793:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20895:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20906:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20911:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20902:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20902:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "20895:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "20688:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "20696:3:14",
                  "type": ""
                }
              ],
              "src": "20554:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21097:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21107:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "21119:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21130:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21115:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21115:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21107:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21154:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21165:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21150:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21150:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "21173:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21179:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "21169:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21169:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21143:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21143:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21143:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21199:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "21333:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21207:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21207:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21199:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "21077:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "21092:4:14",
                  "type": ""
                }
              ],
              "src": "20926:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21457:76:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "21479:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21487:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21475:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21475:14:14"
                        },
                        {
                          "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "21491:34:14",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21468:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21468:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21468:58:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "21449:6:14",
                  "type": ""
                }
              ],
              "src": "21351:182:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21685:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21695:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21761:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21766:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21702:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21702:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21695:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21867:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                        "nodeType": "YulIdentifier",
                        "src": "21778:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21778:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21778:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21880:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21891:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21896:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21887:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21887:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "21880:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "21673:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "21681:3:14",
                  "type": ""
                }
              ],
              "src": "21539:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22082:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22092:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "22104:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22115:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22100:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22100:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22092:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "22139:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22150:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22135:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22135:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "22158:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "22164:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "22154:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22154:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22128:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22128:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22128:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22184:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "22318:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "22192:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22192:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22184:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "22062:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "22077:4:14",
                  "type": ""
                }
              ],
              "src": "21911:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22442:118:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "22464:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22472:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22460:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22460:14:14"
                        },
                        {
                          "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "22476:34:14",
                          "type": "",
                          "value": "ERC721: transfer from incorrect "
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22453:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22453:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22453:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "22532:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22540:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22528:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22528:15:14"
                        },
                        {
                          "hexValue": "6f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "22545:7:14",
                          "type": "",
                          "value": "owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22521:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22521:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22521:32:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "22434:6:14",
                  "type": ""
                }
              ],
              "src": "22336:224:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22712:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22722:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22788:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22793:2:14",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "22729:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22729:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22722:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22894:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
                        "nodeType": "YulIdentifier",
                        "src": "22805:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22805:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22805:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22907:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22918:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22923:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22914:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22914:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "22907:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "22700:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "22708:3:14",
                  "type": ""
                }
              ],
              "src": "22566:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23109:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23119:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "23131:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23142:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "23127:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23127:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "23119:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "23166:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23177:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23162:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23162:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "23185:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "23191:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "23181:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23181:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23155:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23155:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23155:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23211:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "23345:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "23219:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23219:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "23211:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "23089:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "23104:4:14",
                  "type": ""
                }
              ],
              "src": "22938:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23469:117:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "23491:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23499:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23487:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23487:14:14"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "23503:34:14",
                          "type": "",
                          "value": "ERC721: transfer to the zero add"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23480:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23480:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23480:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "23559:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23567:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23555:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23555:15:14"
                        },
                        {
                          "hexValue": "72657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "23572:6:14",
                          "type": "",
                          "value": "ress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23548:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23548:31:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23548:31:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "23461:6:14",
                  "type": ""
                }
              ],
              "src": "23363:223:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23738:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23748:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23814:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23819:2:14",
                          "type": "",
                          "value": "36"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "23755:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23755:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "23748:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23920:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
                        "nodeType": "YulIdentifier",
                        "src": "23831:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23831:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23831:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23933:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23944:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23949:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "23940:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23940:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "23933:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "23726:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "23734:3:14",
                  "type": ""
                }
              ],
              "src": "23592:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24135:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "24145:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "24157:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24168:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "24153:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24153:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "24145:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "24192:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24203:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "24188:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24188:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "24211:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "24217:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "24207:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24207:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "24181:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24181:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24181:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "24237:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "24371:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "24245:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24245:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "24237:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "24115:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "24130:4:14",
                  "type": ""
                }
              ],
              "src": "23964:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24417:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24434:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24437:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "24427:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24427:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24427:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24531:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24534:4:14",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "24524:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24524:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24524:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24555:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24558:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "24548:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24548:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24548:15:14"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "24389:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24620:146:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "24630:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "24653:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "24635:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24635:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24630:1:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "24664:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "24687:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "24669:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24669:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24664:1:14"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "24711:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "24713:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "24713:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "24713:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "24705:1:14"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "24708:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "24702:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24702:8:14"
                    },
                    "nodeType": "YulIf",
                    "src": "24699:34:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "24743:17:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "24755:1:14"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "24758:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "24751:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24751:9:14"
                    },
                    "variableNames": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "24743:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_sub_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "24606:1:14",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "24609:1:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "diff",
                  "nodeType": "YulTypedName",
                  "src": "24615:4:14",
                  "type": ""
                }
              ],
              "src": "24575:191:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24816:261:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "24826:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "24849:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "24831:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24831:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24826:1:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "24860:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "24883:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "24865:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24865:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "24860:1:14"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "25023:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "25025:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "25025:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "25025:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "24944:1:14"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24951:66:14",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "25019:1:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "24947:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24947:74:14"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "24941:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24941:81:14"
                    },
                    "nodeType": "YulIf",
                    "src": "24938:107:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25055:16:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "25066:1:14"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "25069:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "25062:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25062:9:14"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "25055:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "24803:1:14",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "24806:1:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "24812:3:14",
                  "type": ""
                }
              ],
              "src": "24772:305:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25189:69:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "25211:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25219:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "25207:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25207:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "25223:27:14",
                          "type": "",
                          "value": "ERC721: approve to caller"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "25200:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25200:51:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "25200:51:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "25181:6:14",
                  "type": ""
                }
              ],
              "src": "25083:175:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25410:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "25420:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "25486:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "25491:2:14",
                          "type": "",
                          "value": "25"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "25427:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25427:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25420:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "25592:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
                        "nodeType": "YulIdentifier",
                        "src": "25503:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25503:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "25503:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25605:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "25616:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "25621:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "25612:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25612:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "25605:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "25398:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "25406:3:14",
                  "type": ""
                }
              ],
              "src": "25264:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25807:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "25817:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "25829:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "25840:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "25825:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25825:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "25817:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "25864:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25875:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "25860:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25860:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "25883:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "25889:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "25879:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25879:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "25853:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25853:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "25853:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25909:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "26043:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "25917:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25917:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "25909:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "25787:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "25802:4:14",
                  "type": ""
                }
              ],
              "src": "25636:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "26167:131:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "26189:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26197:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26185:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26185:14:14"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "26201:34:14",
                          "type": "",
                          "value": "ERC721: transfer to non ERC721Re"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "26178:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26178:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26178:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "26257:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26265:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26253:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26253:15:14"
                        },
                        {
                          "hexValue": "63656976657220696d706c656d656e746572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "26270:20:14",
                          "type": "",
                          "value": "ceiver implementer"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "26246:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26246:45:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26246:45:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "26159:6:14",
                  "type": ""
                }
              ],
              "src": "26061:237:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "26450:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "26460:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "26526:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26531:2:14",
                          "type": "",
                          "value": "50"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "26467:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26467:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26460:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "26632:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
                        "nodeType": "YulIdentifier",
                        "src": "26543:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26543:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26543:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "26645:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "26656:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26661:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "26652:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26652:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "26645:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "26438:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "26446:3:14",
                  "type": ""
                }
              ],
              "src": "26304:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "26847:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "26857:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "26869:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26880:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "26865:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26865:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "26857:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "26904:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26915:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26900:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26900:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "26923:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "26929:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "26919:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26919:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "26893:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26893:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26893:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "26949:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "27083:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "26957:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26957:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "26949:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "26827:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "26842:4:14",
                  "type": ""
                }
              ],
              "src": "26676:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27207:76:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "27229:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27237:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "27225:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27225:14:14"
                        },
                        {
                          "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "27241:34:14",
                          "type": "",
                          "value": "ERC721: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "27218:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27218:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "27218:58:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "27199:6:14",
                  "type": ""
                }
              ],
              "src": "27101:182:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27435:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "27445:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27511:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "27516:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "27452:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27452:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27445:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27617:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
                        "nodeType": "YulIdentifier",
                        "src": "27528:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27528:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "27528:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "27630:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27641:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "27646:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "27637:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27637:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "27630:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "27423:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "27431:3:14",
                  "type": ""
                }
              ],
              "src": "27289:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27832:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "27842:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "27854:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "27865:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "27850:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27850:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "27842:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "27889:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27900:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "27885:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27885:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "27908:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "27914:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "27904:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27904:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "27878:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27878:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "27878:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "27934:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "28068:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "27942:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27942:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "27934:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "27812:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "27827:4:14",
                  "type": ""
                }
              ],
              "src": "27661:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28192:72:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "28214:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28222:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28210:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28210:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "28226:30:14",
                          "type": "",
                          "value": "ERC721: token already minted"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28203:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28203:54:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28203:54:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "28184:6:14",
                  "type": ""
                }
              ],
              "src": "28086:178:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28416:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "28426:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28492:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28497:2:14",
                          "type": "",
                          "value": "28"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "28433:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28433:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28426:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28598:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
                        "nodeType": "YulIdentifier",
                        "src": "28509:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28509:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28509:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "28611:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28622:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28627:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "28618:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28618:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "28611:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "28404:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "28412:3:14",
                  "type": ""
                }
              ],
              "src": "28270:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28813:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "28823:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "28835:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28846:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "28831:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28831:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "28823:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "28870:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28881:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28866:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28866:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "28889:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "28895:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "28885:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28885:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28859:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28859:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28859:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "28915:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "29049:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "28923:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28923:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "28915:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "28793:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "28808:4:14",
                  "type": ""
                }
              ],
              "src": "28642:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29173:127:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "29195:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29203:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29191:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29191:14:14"
                        },
                        {
                          "hexValue": "45524337323155524953746f726167653a2055524920736574206f66206e6f6e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "29207:34:14",
                          "type": "",
                          "value": "ERC721URIStorage: URI set of non"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "29184:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29184:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29184:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "29263:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29271:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29259:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29259:15:14"
                        },
                        {
                          "hexValue": "6578697374656e7420746f6b656e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "29276:16:14",
                          "type": "",
                          "value": "existent token"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "29252:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29252:41:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29252:41:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "29165:6:14",
                  "type": ""
                }
              ],
              "src": "29067:233:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29452:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "29462:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29528:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "29533:2:14",
                          "type": "",
                          "value": "46"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "29469:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29469:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29462:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29634:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
                        "nodeType": "YulIdentifier",
                        "src": "29545:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29545:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29545:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29647:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29658:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "29663:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "29654:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29654:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "29647:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "29440:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "29448:3:14",
                  "type": ""
                }
              ],
              "src": "29306:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29849:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "29859:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "29871:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "29882:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "29867:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29867:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "29859:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "29906:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29917:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29902:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29902:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "29925:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "29931:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "29921:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29921:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "29895:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29895:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29895:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29951:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "30085:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "29959:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29959:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "29951:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "29829:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "29844:4:14",
                  "type": ""
                }
              ],
              "src": "29678:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30157:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30167:11:14",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "30175:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "30167:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30195:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "30198:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "30188:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30188:14:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30188:14:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "30211:26:14",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30229:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30232:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "30219:9:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30219:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "30211:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "30144:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "30152:4:14",
                  "type": ""
                }
              ],
              "src": "30103:141:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30294:49:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30304:33:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "30322:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30329:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30318:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30318:14:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30334:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "30314:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30314:23:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "30304:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "divide_by_32_ceil",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "30277:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "30287:6:14",
                  "type": ""
                }
              ],
              "src": "30250:93:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30402:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30412:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "30437:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "30443:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "30433:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30433:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "30412:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "30377:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "30383:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "30393:8:14",
                  "type": ""
                }
              ],
              "src": "30349:107:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30538:317:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "30548:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBytes",
                          "nodeType": "YulIdentifier",
                          "src": "30569:10:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30581:1:14",
                          "type": "",
                          "value": "8"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "30565:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30565:18:14"
                    },
                    "variables": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulTypedName",
                        "src": "30552:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "30592:109:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "30623:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30634:66:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "30604:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30604:97:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "30596:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "30710:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "30741:9:14"
                        },
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "30752:8:14"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "30722:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30722:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "30710:8:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "30770:30:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "30783:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "30794:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "30790:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30790:9:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "30779:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30779:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "30770:5:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "30809:40:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "30822:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "30833:8:14"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "30843:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "30829:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30829:19:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "30819:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30819:30:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "30809:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_dynamic32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "30499:5:14",
                  "type": ""
                },
                {
                  "name": "shiftBytes",
                  "nodeType": "YulTypedName",
                  "src": "30506:10:14",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "30518:8:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "30531:6:14",
                  "type": ""
                }
              ],
              "src": "30462:393:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30893:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30903:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "30910:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "30903:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "identity",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "30879:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "30889:3:14",
                  "type": ""
                }
              ],
              "src": "30861:60:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30987:82:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30997:66:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "31055:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "31037:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "31037:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "identity",
                            "nodeType": "YulIdentifier",
                            "src": "31028:8:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31028:34:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "31010:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31010:53:14"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "30997:9:14"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "30967:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "30977:9:14",
                  "type": ""
                }
              ],
              "src": "30927:142:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31122:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "31132:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "31139:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "31132:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "prepare_store_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "31108:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "31118:3:14",
                  "type": ""
                }
              ],
              "src": "31075:75:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31232:193:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "31242:63:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "31297:7:14"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "31266:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31266:39:14"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "31246:16:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "31321:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "31361:4:14"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "31355:5:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "31355:11:14"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "31368:6:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "31400:16:14"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "31376:23:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "31376:41:14"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_dynamic32",
                            "nodeType": "YulIdentifier",
                            "src": "31327:27:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31327:91:14"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "31314:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31314:105:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31314:105:14"
                  }
                ]
              },
              "name": "update_storage_value_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "31209:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "31215:6:14",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "31223:7:14",
                  "type": ""
                }
              ],
              "src": "31156:269:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31480:24:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "31490:8:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "31497:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "31490:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "zero_value_for_split_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "31476:3:14",
                  "type": ""
                }
              ],
              "src": "31431:73:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31563:136:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "31573:46:14",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "zero_value_for_split_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "31587:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31587:32:14"
                    },
                    "variables": [
                      {
                        "name": "zero_0",
                        "nodeType": "YulTypedName",
                        "src": "31577:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "31672:4:14"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "31678:6:14"
                        },
                        {
                          "name": "zero_0",
                          "nodeType": "YulIdentifier",
                          "src": "31686:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "update_storage_value_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "31628:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31628:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31628:65:14"
                  }
                ]
              },
              "name": "storage_set_to_zero_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "31549:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "31555:6:14",
                  "type": ""
                }
              ],
              "src": "31510:189:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31755:136:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "31822:63:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "31866:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "31873:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "storage_set_to_zero_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "31836:29:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "31836:39:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "31836:39:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "start",
                          "nodeType": "YulIdentifier",
                          "src": "31775:5:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "31782:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "31772:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31772:14:14"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "31787:26:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "31789:22:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "31802:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "31809:1:14",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "31798:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "31798:13:14"
                          },
                          "variableNames": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "31789:5:14"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "31769:2:14",
                      "statements": []
                    },
                    "src": "31765:120:14"
                  }
                ]
              },
              "name": "clear_storage_range_t_bytes1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "start",
                  "nodeType": "YulTypedName",
                  "src": "31743:5:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "31750:3:14",
                  "type": ""
                }
              ],
              "src": "31705:186:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31976:464:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "32002:431:14",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "32016:54:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "32064:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "array_dataslot_t_string_storage",
                              "nodeType": "YulIdentifier",
                              "src": "32032:31:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32032:38:14"
                          },
                          "variables": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulTypedName",
                              "src": "32020:8:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "32083:63:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "32106:8:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "32134:10:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "divide_by_32_ceil",
                                  "nodeType": "YulIdentifier",
                                  "src": "32116:17:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "32116:29:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "32102:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32102:44:14"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "32087:11:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "32303:27:14",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "32305:23:14",
                                "value": {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "32320:8:14"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "32305:11:14"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nodeType": "YulIdentifier",
                                "src": "32287:10:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "32299:2:14",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "32284:2:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32284:18:14"
                          },
                          "nodeType": "YulIf",
                          "src": "32281:49:14"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "deleteStart",
                                "nodeType": "YulIdentifier",
                                "src": "32372:11:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "32389:8:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "32417:3:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "32399:17:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "32399:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "32385:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "32385:37:14"
                              }
                            ],
                            "functionName": {
                              "name": "clear_storage_range_t_bytes1",
                              "nodeType": "YulIdentifier",
                              "src": "32343:28:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32343:80:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "32343:80:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "31993:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "31998:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "31990:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31990:11:14"
                    },
                    "nodeType": "YulIf",
                    "src": "31987:446:14"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "31952:5:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "31959:3:14",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "31964:10:14",
                  "type": ""
                }
              ],
              "src": "31897:543:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32509:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "32519:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "32544:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "32550:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "32540:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32540:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "32519:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_unsigned_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "32484:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "32490:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "32500:8:14",
                  "type": ""
                }
              ],
              "src": "32446:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32620:118:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "32630:68:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "32679:1:14",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "bytes",
                                  "nodeType": "YulIdentifier",
                                  "src": "32682:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "32675:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "32675:13:14"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "32694:1:14",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "32690:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "32690:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_unsigned_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "32646:28:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32646:51:14"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "32642:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32642:56:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "32634:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "32707:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "32721:4:14"
                        },
                        {
                          "name": "mask",
                          "nodeType": "YulIdentifier",
                          "src": "32727:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "32717:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32717:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "32707:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "mask_bytes_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "32597:4:14",
                  "type": ""
                },
                {
                  "name": "bytes",
                  "nodeType": "YulTypedName",
                  "src": "32603:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "32613:6:14",
                  "type": ""
                }
              ],
              "src": "32569:169:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32824:214:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "32957:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "32984:4:14"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "32990:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mask_bytes_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "32965:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32965:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "32957:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "33003:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "33014:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33024:1:14",
                              "type": "",
                              "value": "2"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "33027:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "33020:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33020:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "33011:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33011:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "33003:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_used_part_and_set_length_of_short_byte_array",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "32805:4:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "32811:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "32819:4:14",
                  "type": ""
                }
              ],
              "src": "32743:295:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "33135:1303:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "33146:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "33193:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "33160:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33160:37:14"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "33150:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "33282:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "33284:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "33284:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "33284:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "33254:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33262:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "33251:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33251:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "33248:56:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "33314:52:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "33360:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "33354:5:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33354:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "33328:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33328:38:14"
                    },
                    "variables": [
                      {
                        "name": "oldLen",
                        "nodeType": "YulTypedName",
                        "src": "33318:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "33459:4:14"
                        },
                        {
                          "name": "oldLen",
                          "nodeType": "YulIdentifier",
                          "src": "33465:6:14"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "33473:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "33413:45:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33413:67:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33413:67:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "33490:18:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "33507:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "33494:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "33518:17:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "33531:4:14",
                      "type": "",
                      "value": "0x20"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "33518:9:14"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "33582:611:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "33596:37:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "33615:6:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "33627:4:14",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "33623:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "33623:9:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "33611:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "33611:22:14"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "33600:7:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "33647:51:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "33693:4:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "33661:31:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "33661:37:14"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "33651:6:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "33711:10:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "33720:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "33715:1:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "33779:163:14",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "33804:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "33822:3:14"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "33827:9:14"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "33818:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "33818:19:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "33812:5:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "33812:26:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "33797:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "33797:42:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "33797:42:14"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "33856:24:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "33870:6:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "33878:1:14",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "33866:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "33866:14:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "33856:6:14"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "33897:31:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "33914:9:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "33925:2:14",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "33910:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "33910:18:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "33897:9:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "33745:1:14"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "33748:7:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "33742:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "33742:14:14"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "33757:21:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "33759:17:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "33768:1:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "33771:4:14",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "33764:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "33764:12:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "33759:1:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "33738:3:14",
                                "statements": []
                              },
                              "src": "33734:208:14"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "33978:156:14",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "33996:43:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "34023:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "34028:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "34019:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "34019:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "34013:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "34013:26:14"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "34000:9:14",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "34063:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "34090:9:14"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "newLen",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "34105:6:14"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nodeType": "YulLiteral",
                                                  "src": "34113:4:14",
                                                  "type": "",
                                                  "value": "0x1f"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "34101:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "34101:17:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mask_bytes_dynamic",
                                            "nodeType": "YulIdentifier",
                                            "src": "34071:18:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "34071:48:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "34056:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "34056:64:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "34056:64:14"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "33961:7:14"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "33970:6:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "33958:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "33958:19:14"
                              },
                              "nodeType": "YulIf",
                              "src": "33955:179:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "34154:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "34168:6:14"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "34176:1:14",
                                            "type": "",
                                            "value": "2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mul",
                                          "nodeType": "YulIdentifier",
                                          "src": "34164:3:14"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "34164:14:14"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "34180:1:14",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "34160:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34160:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "34147:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "34147:36:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "34147:36:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "33575:618:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33580:1:14",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "34210:222:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "34224:14:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "34237:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "34228:5:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "34261:67:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "34279:35:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "34298:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "34303:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "34294:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "34294:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "34288:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "34288:26:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "34279:5:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "34254:6:14"
                              },
                              "nodeType": "YulIf",
                              "src": "34251:77:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "34348:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "34407:5:14"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "34414:6:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "34354:52:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34354:67:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "34341:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "34341:81:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "34341:81:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "34202:230:14",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "33555:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33563:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "33552:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33552:14:14"
                    },
                    "nodeType": "YulSwitch",
                    "src": "33545:887:14"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "33124:4:14",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "33130:3:14",
                  "type": ""
                }
              ],
              "src": "33043:1395:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "34502:40:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "34513:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "34529:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "34523:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34523:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "34513:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "34485:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "34495:6:14",
                  "type": ""
                }
              ],
              "src": "34444:98:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "34643:73:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "34660:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "34665:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "34653:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34653:19:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34653:19:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "34681:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "34700:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34705:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "34696:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34696:14:14"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "34681:11:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "34615:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "34620:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "34631:11:14",
                  "type": ""
                }
              ],
              "src": "34548:168:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "34812:270:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "34822:52:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "34868:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_bytes_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "34836:31:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34836:38:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "34826:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "34883:77:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "34948:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "34953:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "34890:57:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34890:70:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "34883:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "34995:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "35002:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "34991:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34991:16:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "35009:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "35014:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "34969:21:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34969:52:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34969:52:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "35030:46:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "35041:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "35068:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "35046:21:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "35046:29:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "35037:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35037:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "35030:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "34793:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "34800:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "34808:3:14",
                  "type": ""
                }
              ],
              "src": "34722:360:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "35288:440:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "35298:27:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "35310:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "35321:3:14",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "35306:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35306:19:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "35298:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "35379:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "35392:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "35403:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "35388:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "35388:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "35335:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35335:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "35335:71:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "35460:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "35473:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "35484:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "35469:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "35469:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "35416:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35416:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "35416:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "35542:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "35555:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "35566:2:14",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "35551:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "35551:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "35498:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35498:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "35498:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "35591:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "35602:2:14",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "35587:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "35587:18:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "35611:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "35617:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "35607:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "35607:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "35580:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35580:48:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "35580:48:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "35637:84:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "35707:6:14"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "35716:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "35645:61:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35645:76:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "35637:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "35236:9:14",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "35248:6:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "35256:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "35264:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "35272:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "35283:4:14",
                  "type": ""
                }
              ],
              "src": "35088:640:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "35796:79:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "35806:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "35821:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "35815:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35815:13:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "35806:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "35863:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "35837:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35837:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "35837:32:14"
                  }
                ]
              },
              "name": "abi_decode_t_bytes4_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "35774:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "35782:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "35790:5:14",
                  "type": ""
                }
              ],
              "src": "35734:141:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "35957:273:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "36003:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "36005:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "36005:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "36005:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "35978:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "35987:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "35974:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "35974:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "35999:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "35970:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "35970:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "35967:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "36096:127:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "36111:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36125:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "36115:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "36140:73:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "36185:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "36196:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "36181:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "36181:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "36205:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes4_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "36150:30:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "36150:63:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "36140:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "35927:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "35938:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "35950:6:14",
                  "type": ""
                }
              ],
              "src": "35881:349:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "36279:190:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "36289:33:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "36316:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "36298:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36298:24:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "36289:5:14"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "36412:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "36414:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "36414:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "36414:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "36337:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36344:66:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "36334:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36334:77:14"
                    },
                    "nodeType": "YulIf",
                    "src": "36331:103:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "36443:20:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "36454:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36461:1:14",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "36450:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36450:13:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "36443:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "increment_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "36265:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "36275:3:14",
                  "type": ""
                }
              ],
              "src": "36236:233:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "36503:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36520:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36523:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "36513:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36513:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "36513:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36617:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36620:4:14",
                          "type": "",
                          "value": "0x12"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "36610:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36610:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "36610:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36641:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "36644:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "36634:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36634:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "36634:15:14"
                  }
                ]
              },
              "name": "panic_error_0x12",
              "nodeType": "YulFunctionDefinition",
              "src": "36475:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "36703:143:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "36713:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "36736:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "36718:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36718:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "36713:1:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "36747:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "36770:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "36752:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36752:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "36747:1:14"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "36794:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x12",
                              "nodeType": "YulIdentifier",
                              "src": "36796:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "36796:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "36796:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "36791:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "36784:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36784:9:14"
                    },
                    "nodeType": "YulIf",
                    "src": "36781:35:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "36826:14:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "36835:1:14"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "36838:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "36831:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36831:9:14"
                    },
                    "variableNames": [
                      {
                        "name": "r",
                        "nodeType": "YulIdentifier",
                        "src": "36826:1:14"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_div_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "36692:1:14",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "36695:1:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "r",
                  "nodeType": "YulTypedName",
                  "src": "36701:1:14",
                  "type": ""
                }
              ],
              "src": "36661:185:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "36886:142:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "36896:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "36919:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "36901:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36901:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "36896:1:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "36930:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "36953:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "36935:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36935:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "36930:1:14"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "36977:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x12",
                              "nodeType": "YulIdentifier",
                              "src": "36979:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "36979:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "36979:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "36974:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "36967:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "36967:9:14"
                    },
                    "nodeType": "YulIf",
                    "src": "36964:35:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "37008:14:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "37017:1:14"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "37020:1:14"
                        }
                      ],
                      "functionName": {
                        "name": "mod",
                        "nodeType": "YulIdentifier",
                        "src": "37013:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "37013:9:14"
                    },
                    "variableNames": [
                      {
                        "name": "r",
                        "nodeType": "YulIdentifier",
                        "src": "37008:1:14"
                      }
                    ]
                  }
                ]
              },
              "name": "mod_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "36875:1:14",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "36878:1:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "r",
                  "nodeType": "YulTypedName",
                  "src": "36884:1:14",
                  "type": ""
                }
              ],
              "src": "36852:176:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "37062:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "37079:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "37082:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "37072:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "37072:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "37072:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "37176:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "37179:4:14",
                          "type": "",
                          "value": "0x32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "37169:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "37169:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "37169:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "37200:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "37203:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "37193:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "37193:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "37193:15:14"
                  }
                ]
              },
              "name": "panic_error_0x32",
              "nodeType": "YulFunctionDefinition",
              "src": "37034:180:14"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(memPtr, 32), \"r\")\n\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve caller is not to\")\n\n        mstore(add(memPtr, 32), \"ken owner nor approved for all\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 62)\n        store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: caller is not token owne\")\n\n        mstore(add(memPtr, 32), \"r nor approved\")\n\n    }\n\n    function abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: invalid token ID\")\n\n    }\n\n    function abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: address zero is not a va\")\n\n        mstore(add(memPtr, 32), \"lid owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer from incorrect \")\n\n        mstore(add(memPtr, 32), \"owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve to caller\")\n\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(memPtr, 32), \"ceiver implementer\")\n\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n        store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: token already minted\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721URIStorage: URI set of non\")\n\n        mstore(add(memPtr, 32), \"existent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n}\n",
        "id": 14,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "359:866:13:-:0;;;536:73;;;;;;;;;;1390:113:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1464:5;1456;:13;;;;;;:::i;:::-;;1489:7;1479;:17;;;;;;:::i;:::-;;1390:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;596:6:13::1;585:8;:17;;;;359:866:::0;;640:96:8;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;7:99:14:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;359:866:13:-;;;;;;;",
    "deployedSourceMap": "359:866:13:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1570:300:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2470:98;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3935:167;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3467:407;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1037:186:13;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4612:327:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5005:179;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2190:218;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:204;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1831:101:0;;;:::i;:::-;;1201:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2632:102:2;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4169:153;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5250:315;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;482:608:5;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4388:162:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;615:416:13;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2081:198:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1570:300:2;1672:4;1722:25;1707:40;;;:11;:40;;;;:104;;;;1778:33;1763:48;;;:11;:48;;;;1707:104;:156;;;;1827:36;1851:11;1827:23;:36::i;:::-;1707:156;1688:175;;1570:300;;;:::o;2470:98::-;2524:13;2556:5;2549:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2470:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;4071:15;:24;4087:7;4071:24;;;;;;;;;;;;;;;;;;;;;4064:31;;3935:167;;;:::o;3467:407::-;3547:13;3563:23;3578:7;3563:14;:23::i;:::-;3547:39;;3610:5;3604:11;;:2;:11;;;3596:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3701:5;3685:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3710:37;3727:5;3734:12;:10;:12::i;:::-;3710:16;:37::i;:::-;3685:62;3664:171;;;;;;;;;;;;:::i;:::-;;;;;;;;;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3537:337;3467:407;;:::o;1037:186:13:-;1104:4;1094:13:0;:11;:13::i;:::-;1152:3:13::1;1128:28;;:12;:28;;::::0;1120:37:::1;;;::::0;::::1;;1182:12;1167:5;;:28;;;;;;;;;;;;;;;;;;1212:4;1205:11;;1037:186:::0;;;:::o;4612:327:2:-;4801:41;4820:12;:10;:12::i;:::-;4834:7;4801:18;:41::i;:::-;4793:100;;;;;;;;;;;;:::i;:::-;;;;;;;;;4904:28;4914:4;4920:2;4924:7;4904:9;:28::i;:::-;4612:327;;;:::o;5005:179::-;5138:39;5155:4;5161:2;5165:7;5138:39;;;;;;;;;;;;:16;:39::i;:::-;5005:179;;;:::o;2190:218::-;2262:7;2281:13;2297:7;:16;2305:7;2297:16;;;;;;;;;;;;;;;;;;;;;2281:32;;2348:1;2331:19;;:5;:19;;;2323:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2396:5;2389:12;;;2190:218;;;:::o;1929:204::-;2001:7;2045:1;2028:19;;:5;:19;;;2020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2110:9;:16;2120:5;2110:16;;;;;;;;;;;;;;;;2103:23;;1929:204;;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;1201:85::-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;2632:102:2:-;2688:13;2720:7;2713:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2632:102;:::o;4169:153::-;4263:52;4282:12;:10;:12::i;:::-;4296:8;4306;4263:18;:52::i;:::-;4169:153;;:::o;5250:315::-;5418:41;5437:12;:10;:12::i;:::-;5451:7;5418:18;:41::i;:::-;5410:100;;;;;;;;;;;;:::i;:::-;;;;;;;;;5520:38;5534:4;5540:2;5544:7;5553:4;5520:13;:38::i;:::-;5250:315;;;;:::o;482:608:5:-;555:13;580:23;595:7;580:14;:23::i;:::-;614;640:10;:19;651:7;640:19;;;;;;;;;;;614:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;669:18;690:10;:8;:10::i;:::-;669:31;;795:1;779:4;773:18;:23;769:70;;819:9;812:16;;;;;;769:70;967:1;947:9;941:23;:27;937:106;;;1015:4;1021:9;998:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;984:48;;;;;;937:106;1060:23;1075:7;1060:14;:23::i;:::-;1053:30;;;;482:608;;;;:::o;4388:162:2:-;4485:4;4508:18;:25;4527:5;4508:25;;;;;;;;;;;;;;;:35;4534:8;4508:35;;;;;;;;;;;;;;;;;;;;;;;;;4501:42;;4388:162;;;;:::o;615:416:13:-;701:7;1094:13:0;:11;:13::i;:::-;757:8:13::1;;728:5;;;;;;;;;;;:15;;;744:9;728:26;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:37;720:46;;;::::0;::::1;;777:5;;;;;;;;;;;:18;;;796:9;807:10;819:8;;777:51;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;847:21;:9;:19;:21::i;:::-;878:17;898:19;:9;:17;:19::i;:::-;878:39;;927:27;933:9;944;927:5;:27::i;:::-;964:33;977:9;988:8;964:12;:33::i;:::-;1015:9;1008:16;;;615:416:::0;;;;:::o;2081:198:0:-;1094:13;:11;:13::i;:::-;2189:1:::1;2169:22;;:8;:22;;::::0;2161:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;829:155:11:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;11657:133:2:-;11738:16;11746:7;11738;:16::i;:::-;11730:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;11657:133;:::o;640:96:8:-;693:7;719:10;712:17;;640:96;:::o;10959:171:2:-;11060:2;11033:15;:24;11049:7;11033:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;11115:7;11111:2;11077:46;;11086:23;11101:7;11086:14;:23::i;:::-;11077:46;;;;;;;;;;;;10959:171;;:::o;1359:130:0:-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;7317:261:2:-;7410:4;7426:13;7442:23;7457:7;7442:14;:23::i;:::-;7426:39;;7494:5;7483:16;;:7;:16;;;:52;;;;7503:32;7520:5;7527:7;7503:16;:32::i;:::-;7483:52;:87;;;;7563:7;7539:31;;:20;7551:7;7539:11;:20::i;:::-;:31;;;7483:87;7475:96;;;7317:261;;;;:::o;10242:605::-;10396:4;10369:31;;:23;10384:7;10369:14;:23::i;:::-;:31;;;10361:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;10474:1;10460:16;;:2;:16;;;10452:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;10528:39;10549:4;10555:2;10559:7;10528:20;:39::i;:::-;10629:29;10646:1;10650:7;10629:8;:29::i;:::-;10688:1;10669:9;:15;10679:4;10669:15;;;;;;;;;;;;;;;;:20;;;;;;;:::i;:::-;;;;;;;;10716:1;10699:9;:13;10709:2;10699:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;10746:2;10727:7;:16;10735:7;10727:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;10783:7;10779:2;10764:27;;10773:4;10764:27;;;;;;;;;;;;10802:38;10822:4;10828:2;10832:7;10802:19;:38::i;:::-;10242:605;;;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;11266:307:2:-;11416:8;11407:17;;:5;:17;;;11399:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;11502:8;11464:18;:25;11483:5;11464:25;;;;;;;;;;;;;;;:35;11490:8;11464:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;11547:8;11525:41;;11540:5;11525:41;;;11557:8;11525:41;;;;;;:::i;:::-;;;;;;;;11266:307;;;:::o;6426:305::-;6576:28;6586:4;6592:2;6596:7;6576:9;:28::i;:::-;6622:47;6645:4;6651:2;6655:7;6664:4;6622:22;:47::i;:::-;6614:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;6426:305;;;;:::o;3318:92::-;3369:13;3394:9;;;;;;;;;;;;;;3318:92;:::o;2800:276::-;2873:13;2898:23;2913:7;2898:14;:23::i;:::-;2932:21;2956:10;:8;:10::i;:::-;2932:34;;3007:1;2989:7;2983:21;:25;:86;;;;;;;;;;;;;;;;;3035:7;3044:18;:7;:16;:18::i;:::-;3018:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2983:86;2976:93;;;2800:276;;;:::o;945:123:9:-;1050:1;1032:7;:14;;;:19;;;;;;;;;;;945:123;:::o;827:112::-;892:7;918;:14;;;911:21;;827:112;;;:::o;8868:427:2:-;8961:1;8947:16;;:2;:16;;;8939:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9019:16;9027:7;9019;:16::i;:::-;9018:17;9010:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9079:45;9108:1;9112:2;9116:7;9079:20;:45::i;:::-;9152:1;9135:9;:13;9145:2;9135:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;9182:2;9163:7;:16;9171:7;9163:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9225:7;9221:2;9200:33;;9217:1;9200:33;;;;;;;;;;;;9244:44;9272:1;9276:2;9280:7;9244:19;:44::i;:::-;8868:427;;:::o;1237:214:5:-;1336:16;1344:7;1336;:16::i;:::-;1328:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;1435:9;1413:10;:19;1424:7;1413:19;;;;;;;;;;;:31;;;;;;:::i;:::-;;1237:214;;:::o;7034:125:2:-;7099:4;7150:1;7122:30;;:7;:16;7130:7;7122:16;;;;;;;;;;;;;;;;;;;;;:30;;;;7115:37;;7034:125;;;:::o;13729:122::-;;;;:::o;14223:121::-;;;;:::o;12342:831::-;12491:4;12511:15;:2;:13;;;:15::i;:::-;12507:660;;;12562:2;12546:36;;;12583:12;:10;:12::i;:::-;12597:4;12603:7;12612:4;12546:71;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;12542:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12801:1;12784:6;:13;:18;12780:321;;12826:60;;;;;;;;;;:::i;:::-;;;;;;;;12780:321;13053:6;13047:13;13038:6;13034:2;13030:15;13023:38;12542:573;12677:41;;;12667:51;;;:6;:51;;;;12660:58;;;;;12507:660;13152:4;13145:11;;12342:831;;;;;;;:::o;392:703:10:-;448:13;674:1;665:5;:10;661:51;;691:10;;;;;;;;;;;;;;;;;;;;;661:51;721:12;736:5;721:20;;751:14;775:75;790:1;782:4;:9;775:75;;807:8;;;;;:::i;:::-;;;;837:2;829:10;;;;;:::i;:::-;;;775:75;;;859:19;891:6;881:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;859:39;;908:150;924:1;915:5;:10;908:150;;951:1;941:11;;;;;:::i;:::-;;;1017:2;1009:5;:10;;;;:::i;:::-;996:2;:24;;;;:::i;:::-;983:39;;966:6;973;966:14;;;;;;;;:::i;:::-;;;;;:56;;;;;;;;;;;1045:2;1036:11;;;;;:::i;:::-;;;908:150;;;1081:6;1067:21;;;;;392:703;;;;:::o;1175:320:7:-;1235:4;1487:1;1465:7;:19;;;:23;1458:30;;1175:320;;;:::o;7:75:14:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:307::-;1866:1;1876:113;1890:6;1887:1;1884:13;1876:113;;;1975:1;1970:3;1966:11;1960:18;1956:1;1951:3;1947:11;1940:39;1912:2;1909:1;1905:10;1900:15;;1876:113;;;2007:6;2004:1;2001:13;1998:101;;;2087:1;2078:6;2073:3;2069:16;2062:27;1998:101;1847:258;1798:307;;;:::o;2111:102::-;2152:6;2203:2;2199:7;2194:2;2187:5;2183:14;2179:28;2169:38;;2111:102;;;:::o;2219:364::-;2307:3;2335:39;2368:5;2335:39;:::i;:::-;2390:71;2454:6;2449:3;2390:71;:::i;:::-;2383:78;;2470:52;2515:6;2510:3;2503:4;2496:5;2492:16;2470:52;:::i;:::-;2547:29;2569:6;2547:29;:::i;:::-;2542:3;2538:39;2531:46;;2311:272;2219:364;;;;:::o;2589:313::-;2702:4;2740:2;2729:9;2725:18;2717:26;;2789:9;2783:4;2779:20;2775:1;2764:9;2760:17;2753:47;2817:78;2890:4;2881:6;2817:78;:::i;:::-;2809:86;;2589:313;;;;:::o;2908:77::-;2945:7;2974:5;2963:16;;2908:77;;;:::o;2991:122::-;3064:24;3082:5;3064:24;:::i;:::-;3057:5;3054:35;3044:63;;3103:1;3100;3093:12;3044:63;2991:122;:::o;3119:139::-;3165:5;3203:6;3190:20;3181:29;;3219:33;3246:5;3219:33;:::i;:::-;3119:139;;;;:::o;3264:329::-;3323:6;3372:2;3360:9;3351:7;3347:23;3343:32;3340:119;;;3378:79;;:::i;:::-;3340:119;3498:1;3523:53;3568:7;3559:6;3548:9;3544:22;3523:53;:::i;:::-;3513:63;;3469:117;3264:329;;;;:::o;3599:126::-;3636:7;3676:42;3669:5;3665:54;3654:65;;3599:126;;;:::o;3731:96::-;3768:7;3797:24;3815:5;3797:24;:::i;:::-;3786:35;;3731:96;;;:::o;3833:118::-;3920:24;3938:5;3920:24;:::i;:::-;3915:3;3908:37;3833:118;;:::o;3957:222::-;4050:4;4088:2;4077:9;4073:18;4065:26;;4101:71;4169:1;4158:9;4154:17;4145:6;4101:71;:::i;:::-;3957:222;;;;:::o;4185:122::-;4258:24;4276:5;4258:24;:::i;:::-;4251:5;4248:35;4238:63;;4297:1;4294;4287:12;4238:63;4185:122;:::o;4313:139::-;4359:5;4397:6;4384:20;4375:29;;4413:33;4440:5;4413:33;:::i;:::-;4313:139;;;;:::o;4458:474::-;4526:6;4534;4583:2;4571:9;4562:7;4558:23;4554:32;4551:119;;;4589:79;;:::i;:::-;4551:119;4709:1;4734:53;4779:7;4770:6;4759:9;4755:22;4734:53;:::i;:::-;4724:63;;4680:117;4836:2;4862:53;4907:7;4898:6;4887:9;4883:22;4862:53;:::i;:::-;4852:63;;4807:118;4458:474;;;;;:::o;4938:329::-;4997:6;5046:2;5034:9;5025:7;5021:23;5017:32;5014:119;;;5052:79;;:::i;:::-;5014:119;5172:1;5197:53;5242:7;5233:6;5222:9;5218:22;5197:53;:::i;:::-;5187:63;;5143:117;4938:329;;;;:::o;5273:619::-;5350:6;5358;5366;5415:2;5403:9;5394:7;5390:23;5386:32;5383:119;;;5421:79;;:::i;:::-;5383:119;5541:1;5566:53;5611:7;5602:6;5591:9;5587:22;5566:53;:::i;:::-;5556:63;;5512:117;5668:2;5694:53;5739:7;5730:6;5719:9;5715:22;5694:53;:::i;:::-;5684:63;;5639:118;5796:2;5822:53;5867:7;5858:6;5847:9;5843:22;5822:53;:::i;:::-;5812:63;;5767:118;5273:619;;;;;:::o;5898:118::-;5985:24;6003:5;5985:24;:::i;:::-;5980:3;5973:37;5898:118;;:::o;6022:222::-;6115:4;6153:2;6142:9;6138:18;6130:26;;6166:71;6234:1;6223:9;6219:17;6210:6;6166:71;:::i;:::-;6022:222;;;;:::o;6250:116::-;6320:21;6335:5;6320:21;:::i;:::-;6313:5;6310:32;6300:60;;6356:1;6353;6346:12;6300:60;6250:116;:::o;6372:133::-;6415:5;6453:6;6440:20;6431:29;;6469:30;6493:5;6469:30;:::i;:::-;6372:133;;;;:::o;6511:468::-;6576:6;6584;6633:2;6621:9;6612:7;6608:23;6604:32;6601:119;;;6639:79;;:::i;:::-;6601:119;6759:1;6784:53;6829:7;6820:6;6809:9;6805:22;6784:53;:::i;:::-;6774:63;;6730:117;6886:2;6912:50;6954:7;6945:6;6934:9;6930:22;6912:50;:::i;:::-;6902:60;;6857:115;6511:468;;;;;:::o;6985:117::-;7094:1;7091;7084:12;7108:117;7217:1;7214;7207:12;7231:180;7279:77;7276:1;7269:88;7376:4;7373:1;7366:15;7400:4;7397:1;7390:15;7417:281;7500:27;7522:4;7500:27;:::i;:::-;7492:6;7488:40;7630:6;7618:10;7615:22;7594:18;7582:10;7579:34;7576:62;7573:88;;;7641:18;;:::i;:::-;7573:88;7681:10;7677:2;7670:22;7460:238;7417:281;;:::o;7704:129::-;7738:6;7765:20;;:::i;:::-;7755:30;;7794:33;7822:4;7814:6;7794:33;:::i;:::-;7704:129;;;:::o;7839:307::-;7900:4;7990:18;7982:6;7979:30;7976:56;;;8012:18;;:::i;:::-;7976:56;8050:29;8072:6;8050:29;:::i;:::-;8042:37;;8134:4;8128;8124:15;8116:23;;7839:307;;;:::o;8152:154::-;8236:6;8231:3;8226;8213:30;8298:1;8289:6;8284:3;8280:16;8273:27;8152:154;;;:::o;8312:410::-;8389:5;8414:65;8430:48;8471:6;8430:48;:::i;:::-;8414:65;:::i;:::-;8405:74;;8502:6;8495:5;8488:21;8540:4;8533:5;8529:16;8578:3;8569:6;8564:3;8560:16;8557:25;8554:112;;;8585:79;;:::i;:::-;8554:112;8675:41;8709:6;8704:3;8699;8675:41;:::i;:::-;8395:327;8312:410;;;;;:::o;8741:338::-;8796:5;8845:3;8838:4;8830:6;8826:17;8822:27;8812:122;;8853:79;;:::i;:::-;8812:122;8970:6;8957:20;8995:78;9069:3;9061:6;9054:4;9046:6;9042:17;8995:78;:::i;:::-;8986:87;;8802:277;8741:338;;;;:::o;9085:943::-;9180:6;9188;9196;9204;9253:3;9241:9;9232:7;9228:23;9224:33;9221:120;;;9260:79;;:::i;:::-;9221:120;9380:1;9405:53;9450:7;9441:6;9430:9;9426:22;9405:53;:::i;:::-;9395:63;;9351:117;9507:2;9533:53;9578:7;9569:6;9558:9;9554:22;9533:53;:::i;:::-;9523:63;;9478:118;9635:2;9661:53;9706:7;9697:6;9686:9;9682:22;9661:53;:::i;:::-;9651:63;;9606:118;9791:2;9780:9;9776:18;9763:32;9822:18;9814:6;9811:30;9808:117;;;9844:79;;:::i;:::-;9808:117;9949:62;10003:7;9994:6;9983:9;9979:22;9949:62;:::i;:::-;9939:72;;9734:287;9085:943;;;;;;;:::o;10034:474::-;10102:6;10110;10159:2;10147:9;10138:7;10134:23;10130:32;10127:119;;;10165:79;;:::i;:::-;10127:119;10285:1;10310:53;10355:7;10346:6;10335:9;10331:22;10310:53;:::i;:::-;10300:63;;10256:117;10412:2;10438:53;10483:7;10474:6;10463:9;10459:22;10438:53;:::i;:::-;10428:63;;10383:118;10034:474;;;;;:::o;10514:308::-;10576:4;10666:18;10658:6;10655:30;10652:56;;;10688:18;;:::i;:::-;10652:56;10726:29;10748:6;10726:29;:::i;:::-;10718:37;;10810:4;10804;10800:15;10792:23;;10514:308;;;:::o;10828:412::-;10906:5;10931:66;10947:49;10989:6;10947:49;:::i;:::-;10931:66;:::i;:::-;10922:75;;11020:6;11013:5;11006:21;11058:4;11051:5;11047:16;11096:3;11087:6;11082:3;11078:16;11075:25;11072:112;;;11103:79;;:::i;:::-;11072:112;11193:41;11227:6;11222:3;11217;11193:41;:::i;:::-;10912:328;10828:412;;;;;:::o;11260:340::-;11316:5;11365:3;11358:4;11350:6;11346:17;11342:27;11332:122;;11373:79;;:::i;:::-;11332:122;11490:6;11477:20;11515:79;11590:3;11582:6;11575:4;11567:6;11563:17;11515:79;:::i;:::-;11506:88;;11322:278;11260:340;;;;:::o;11606:654::-;11684:6;11692;11741:2;11729:9;11720:7;11716:23;11712:32;11709:119;;;11747:79;;:::i;:::-;11709:119;11867:1;11892:53;11937:7;11928:6;11917:9;11913:22;11892:53;:::i;:::-;11882:63;;11838:117;12022:2;12011:9;12007:18;11994:32;12053:18;12045:6;12042:30;12039:117;;;12075:79;;:::i;:::-;12039:117;12180:63;12235:7;12226:6;12215:9;12211:22;12180:63;:::i;:::-;12170:73;;11965:288;11606:654;;;;;:::o;12266:180::-;12314:77;12311:1;12304:88;12411:4;12408:1;12401:15;12435:4;12432:1;12425:15;12452:320;12496:6;12533:1;12527:4;12523:12;12513:22;;12580:1;12574:4;12570:12;12601:18;12591:81;;12657:4;12649:6;12645:17;12635:27;;12591:81;12719:2;12711:6;12708:14;12688:18;12685:38;12682:84;;12738:18;;:::i;:::-;12682:84;12503:269;12452:320;;;:::o;12778:220::-;12918:34;12914:1;12906:6;12902:14;12895:58;12987:3;12982:2;12974:6;12970:15;12963:28;12778:220;:::o;13004:366::-;13146:3;13167:67;13231:2;13226:3;13167:67;:::i;:::-;13160:74;;13243:93;13332:3;13243:93;:::i;:::-;13361:2;13356:3;13352:12;13345:19;;13004:366;;;:::o;13376:419::-;13542:4;13580:2;13569:9;13565:18;13557:26;;13629:9;13623:4;13619:20;13615:1;13604:9;13600:17;13593:47;13657:131;13783:4;13657:131;:::i;:::-;13649:139;;13376:419;;;:::o;13801:249::-;13941:34;13937:1;13929:6;13925:14;13918:58;14010:32;14005:2;13997:6;13993:15;13986:57;13801:249;:::o;14056:366::-;14198:3;14219:67;14283:2;14278:3;14219:67;:::i;:::-;14212:74;;14295:93;14384:3;14295:93;:::i;:::-;14413:2;14408:3;14404:12;14397:19;;14056:366;;;:::o;14428:419::-;14594:4;14632:2;14621:9;14617:18;14609:26;;14681:9;14675:4;14671:20;14667:1;14656:9;14652:17;14645:47;14709:131;14835:4;14709:131;:::i;:::-;14701:139;;14428:419;;;:::o;14853:233::-;14993:34;14989:1;14981:6;14977:14;14970:58;15062:16;15057:2;15049:6;15045:15;15038:41;14853:233;:::o;15092:366::-;15234:3;15255:67;15319:2;15314:3;15255:67;:::i;:::-;15248:74;;15331:93;15420:3;15331:93;:::i;:::-;15449:2;15444:3;15440:12;15433:19;;15092:366;;;:::o;15464:419::-;15630:4;15668:2;15657:9;15653:18;15645:26;;15717:9;15711:4;15707:20;15703:1;15692:9;15688:17;15681:47;15745:131;15871:4;15745:131;:::i;:::-;15737:139;;15464:419;;;:::o;15889:174::-;16029:26;16025:1;16017:6;16013:14;16006:50;15889:174;:::o;16069:366::-;16211:3;16232:67;16296:2;16291:3;16232:67;:::i;:::-;16225:74;;16308:93;16397:3;16308:93;:::i;:::-;16426:2;16421:3;16417:12;16410:19;;16069:366;;;:::o;16441:419::-;16607:4;16645:2;16634:9;16630:18;16622:26;;16694:9;16688:4;16684:20;16680:1;16669:9;16665:17;16658:47;16722:131;16848:4;16722:131;:::i;:::-;16714:139;;16441:419;;;:::o;16866:228::-;17006:34;17002:1;16994:6;16990:14;16983:58;17075:11;17070:2;17062:6;17058:15;17051:36;16866:228;:::o;17100:366::-;17242:3;17263:67;17327:2;17322:3;17263:67;:::i;:::-;17256:74;;17339:93;17428:3;17339:93;:::i;:::-;17457:2;17452:3;17448:12;17441:19;;17100:366;;;:::o;17472:419::-;17638:4;17676:2;17665:9;17661:18;17653:26;;17725:9;17719:4;17715:20;17711:1;17700:9;17696:17;17689:47;17753:131;17879:4;17753:131;:::i;:::-;17745:139;;17472:419;;;:::o;17897:148::-;17999:11;18036:3;18021:18;;17897:148;;;;:::o;18051:377::-;18157:3;18185:39;18218:5;18185:39;:::i;:::-;18240:89;18322:6;18317:3;18240:89;:::i;:::-;18233:96;;18338:52;18383:6;18378:3;18371:4;18364:5;18360:16;18338:52;:::i;:::-;18415:6;18410:3;18406:16;18399:23;;18161:267;18051:377;;;;:::o;18434:435::-;18614:3;18636:95;18727:3;18718:6;18636:95;:::i;:::-;18629:102;;18748:95;18839:3;18830:6;18748:95;:::i;:::-;18741:102;;18860:3;18853:10;;18434:435;;;;;:::o;18875:143::-;18932:5;18963:6;18957:13;18948:22;;18979:33;19006:5;18979:33;:::i;:::-;18875:143;;;;:::o;19024:351::-;19094:6;19143:2;19131:9;19122:7;19118:23;19114:32;19111:119;;;19149:79;;:::i;:::-;19111:119;19269:1;19294:64;19350:7;19341:6;19330:9;19326:22;19294:64;:::i;:::-;19284:74;;19240:128;19024:351;;;;:::o;19381:442::-;19530:4;19568:2;19557:9;19553:18;19545:26;;19581:71;19649:1;19638:9;19634:17;19625:6;19581:71;:::i;:::-;19662:72;19730:2;19719:9;19715:18;19706:6;19662:72;:::i;:::-;19744;19812:2;19801:9;19797:18;19788:6;19744:72;:::i;:::-;19381:442;;;;;;:::o;19829:137::-;19883:5;19914:6;19908:13;19899:22;;19930:30;19954:5;19930:30;:::i;:::-;19829:137;;;;:::o;19972:345::-;20039:6;20088:2;20076:9;20067:7;20063:23;20059:32;20056:119;;;20094:79;;:::i;:::-;20056:119;20214:1;20239:61;20292:7;20283:6;20272:9;20268:22;20239:61;:::i;:::-;20229:71;;20185:125;19972:345;;;;:::o;20323:225::-;20463:34;20459:1;20451:6;20447:14;20440:58;20532:8;20527:2;20519:6;20515:15;20508:33;20323:225;:::o;20554:366::-;20696:3;20717:67;20781:2;20776:3;20717:67;:::i;:::-;20710:74;;20793:93;20882:3;20793:93;:::i;:::-;20911:2;20906:3;20902:12;20895:19;;20554:366;;;:::o;20926:419::-;21092:4;21130:2;21119:9;21115:18;21107:26;;21179:9;21173:4;21169:20;21165:1;21154:9;21150:17;21143:47;21207:131;21333:4;21207:131;:::i;:::-;21199:139;;20926:419;;;:::o;21351:182::-;21491:34;21487:1;21479:6;21475:14;21468:58;21351:182;:::o;21539:366::-;21681:3;21702:67;21766:2;21761:3;21702:67;:::i;:::-;21695:74;;21778:93;21867:3;21778:93;:::i;:::-;21896:2;21891:3;21887:12;21880:19;;21539:366;;;:::o;21911:419::-;22077:4;22115:2;22104:9;22100:18;22092:26;;22164:9;22158:4;22154:20;22150:1;22139:9;22135:17;22128:47;22192:131;22318:4;22192:131;:::i;:::-;22184:139;;21911:419;;;:::o;22336:224::-;22476:34;22472:1;22464:6;22460:14;22453:58;22545:7;22540:2;22532:6;22528:15;22521:32;22336:224;:::o;22566:366::-;22708:3;22729:67;22793:2;22788:3;22729:67;:::i;:::-;22722:74;;22805:93;22894:3;22805:93;:::i;:::-;22923:2;22918:3;22914:12;22907:19;;22566:366;;;:::o;22938:419::-;23104:4;23142:2;23131:9;23127:18;23119:26;;23191:9;23185:4;23181:20;23177:1;23166:9;23162:17;23155:47;23219:131;23345:4;23219:131;:::i;:::-;23211:139;;22938:419;;;:::o;23363:223::-;23503:34;23499:1;23491:6;23487:14;23480:58;23572:6;23567:2;23559:6;23555:15;23548:31;23363:223;:::o;23592:366::-;23734:3;23755:67;23819:2;23814:3;23755:67;:::i;:::-;23748:74;;23831:93;23920:3;23831:93;:::i;:::-;23949:2;23944:3;23940:12;23933:19;;23592:366;;;:::o;23964:419::-;24130:4;24168:2;24157:9;24153:18;24145:26;;24217:9;24211:4;24207:20;24203:1;24192:9;24188:17;24181:47;24245:131;24371:4;24245:131;:::i;:::-;24237:139;;23964:419;;;:::o;24389:180::-;24437:77;24434:1;24427:88;24534:4;24531:1;24524:15;24558:4;24555:1;24548:15;24575:191;24615:4;24635:20;24653:1;24635:20;:::i;:::-;24630:25;;24669:20;24687:1;24669:20;:::i;:::-;24664:25;;24708:1;24705;24702:8;24699:34;;;24713:18;;:::i;:::-;24699:34;24758:1;24755;24751:9;24743:17;;24575:191;;;;:::o;24772:305::-;24812:3;24831:20;24849:1;24831:20;:::i;:::-;24826:25;;24865:20;24883:1;24865:20;:::i;:::-;24860:25;;25019:1;24951:66;24947:74;24944:1;24941:81;24938:107;;;25025:18;;:::i;:::-;24938:107;25069:1;25066;25062:9;25055:16;;24772:305;;;;:::o;25083:175::-;25223:27;25219:1;25211:6;25207:14;25200:51;25083:175;:::o;25264:366::-;25406:3;25427:67;25491:2;25486:3;25427:67;:::i;:::-;25420:74;;25503:93;25592:3;25503:93;:::i;:::-;25621:2;25616:3;25612:12;25605:19;;25264:366;;;:::o;25636:419::-;25802:4;25840:2;25829:9;25825:18;25817:26;;25889:9;25883:4;25879:20;25875:1;25864:9;25860:17;25853:47;25917:131;26043:4;25917:131;:::i;:::-;25909:139;;25636:419;;;:::o;26061:237::-;26201:34;26197:1;26189:6;26185:14;26178:58;26270:20;26265:2;26257:6;26253:15;26246:45;26061:237;:::o;26304:366::-;26446:3;26467:67;26531:2;26526:3;26467:67;:::i;:::-;26460:74;;26543:93;26632:3;26543:93;:::i;:::-;26661:2;26656:3;26652:12;26645:19;;26304:366;;;:::o;26676:419::-;26842:4;26880:2;26869:9;26865:18;26857:26;;26929:9;26923:4;26919:20;26915:1;26904:9;26900:17;26893:47;26957:131;27083:4;26957:131;:::i;:::-;26949:139;;26676:419;;;:::o;27101:182::-;27241:34;27237:1;27229:6;27225:14;27218:58;27101:182;:::o;27289:366::-;27431:3;27452:67;27516:2;27511:3;27452:67;:::i;:::-;27445:74;;27528:93;27617:3;27528:93;:::i;:::-;27646:2;27641:3;27637:12;27630:19;;27289:366;;;:::o;27661:419::-;27827:4;27865:2;27854:9;27850:18;27842:26;;27914:9;27908:4;27904:20;27900:1;27889:9;27885:17;27878:47;27942:131;28068:4;27942:131;:::i;:::-;27934:139;;27661:419;;;:::o;28086:178::-;28226:30;28222:1;28214:6;28210:14;28203:54;28086:178;:::o;28270:366::-;28412:3;28433:67;28497:2;28492:3;28433:67;:::i;:::-;28426:74;;28509:93;28598:3;28509:93;:::i;:::-;28627:2;28622:3;28618:12;28611:19;;28270:366;;;:::o;28642:419::-;28808:4;28846:2;28835:9;28831:18;28823:26;;28895:9;28889:4;28885:20;28881:1;28870:9;28866:17;28859:47;28923:131;29049:4;28923:131;:::i;:::-;28915:139;;28642:419;;;:::o;29067:233::-;29207:34;29203:1;29195:6;29191:14;29184:58;29276:16;29271:2;29263:6;29259:15;29252:41;29067:233;:::o;29306:366::-;29448:3;29469:67;29533:2;29528:3;29469:67;:::i;:::-;29462:74;;29545:93;29634:3;29545:93;:::i;:::-;29663:2;29658:3;29654:12;29647:19;;29306:366;;;:::o;29678:419::-;29844:4;29882:2;29871:9;29867:18;29859:26;;29931:9;29925:4;29921:20;29917:1;29906:9;29902:17;29895:47;29959:131;30085:4;29959:131;:::i;:::-;29951:139;;29678:419;;;:::o;30103:141::-;30152:4;30175:3;30167:11;;30198:3;30195:1;30188:14;30232:4;30229:1;30219:18;30211:26;;30103:141;;;:::o;30250:93::-;30287:6;30334:2;30329;30322:5;30318:14;30314:23;30304:33;;30250:93;;;:::o;30349:107::-;30393:8;30443:5;30437:4;30433:16;30412:37;;30349:107;;;;:::o;30462:393::-;30531:6;30581:1;30569:10;30565:18;30604:97;30634:66;30623:9;30604:97;:::i;:::-;30722:39;30752:8;30741:9;30722:39;:::i;:::-;30710:51;;30794:4;30790:9;30783:5;30779:21;30770:30;;30843:4;30833:8;30829:19;30822:5;30819:30;30809:40;;30538:317;;30462:393;;;;;:::o;30861:60::-;30889:3;30910:5;30903:12;;30861:60;;;:::o;30927:142::-;30977:9;31010:53;31028:34;31037:24;31055:5;31037:24;:::i;:::-;31028:34;:::i;:::-;31010:53;:::i;:::-;30997:66;;30927:142;;;:::o;31075:75::-;31118:3;31139:5;31132:12;;31075:75;;;:::o;31156:269::-;31266:39;31297:7;31266:39;:::i;:::-;31327:91;31376:41;31400:16;31376:41;:::i;:::-;31368:6;31361:4;31355:11;31327:91;:::i;:::-;31321:4;31314:105;31232:193;31156:269;;;:::o;31431:73::-;31476:3;31431:73;:::o;31510:189::-;31587:32;;:::i;:::-;31628:65;31686:6;31678;31672:4;31628:65;:::i;:::-;31563:136;31510:189;;:::o;31705:186::-;31765:120;31782:3;31775:5;31772:14;31765:120;;;31836:39;31873:1;31866:5;31836:39;:::i;:::-;31809:1;31802:5;31798:13;31789:22;;31765:120;;;31705:186;;:::o;31897:543::-;31998:2;31993:3;31990:11;31987:446;;;32032:38;32064:5;32032:38;:::i;:::-;32116:29;32134:10;32116:29;:::i;:::-;32106:8;32102:44;32299:2;32287:10;32284:18;32281:49;;;32320:8;32305:23;;32281:49;32343:80;32399:22;32417:3;32399:22;:::i;:::-;32389:8;32385:37;32372:11;32343:80;:::i;:::-;32002:431;;31987:446;31897:543;;;:::o;32446:117::-;32500:8;32550:5;32544:4;32540:16;32519:37;;32446:117;;;;:::o;32569:169::-;32613:6;32646:51;32694:1;32690:6;32682:5;32679:1;32675:13;32646:51;:::i;:::-;32642:56;32727:4;32721;32717:15;32707:25;;32620:118;32569:169;;;;:::o;32743:295::-;32819:4;32965:29;32990:3;32984:4;32965:29;:::i;:::-;32957:37;;33027:3;33024:1;33020:11;33014:4;33011:21;33003:29;;32743:295;;;;:::o;33043:1395::-;33160:37;33193:3;33160:37;:::i;:::-;33262:18;33254:6;33251:30;33248:56;;;33284:18;;:::i;:::-;33248:56;33328:38;33360:4;33354:11;33328:38;:::i;:::-;33413:67;33473:6;33465;33459:4;33413:67;:::i;:::-;33507:1;33531:4;33518:17;;33563:2;33555:6;33552:14;33580:1;33575:618;;;;34237:1;34254:6;34251:77;;;34303:9;34298:3;34294:19;34288:26;34279:35;;34251:77;34354:67;34414:6;34407:5;34354:67;:::i;:::-;34348:4;34341:81;34210:222;33545:887;;33575:618;33627:4;33623:9;33615:6;33611:22;33661:37;33693:4;33661:37;:::i;:::-;33720:1;33734:208;33748:7;33745:1;33742:14;33734:208;;;33827:9;33822:3;33818:19;33812:26;33804:6;33797:42;33878:1;33870:6;33866:14;33856:24;;33925:2;33914:9;33910:18;33897:31;;33771:4;33768:1;33764:12;33759:17;;33734:208;;;33970:6;33961:7;33958:19;33955:179;;;34028:9;34023:3;34019:19;34013:26;34071:48;34113:4;34105:6;34101:17;34090:9;34071:48;:::i;:::-;34063:6;34056:64;33978:156;33955:179;34180:1;34176;34168:6;34164:14;34160:22;34154:4;34147:36;33582:611;;;33545:887;;33135:1303;;;33043:1395;;:::o;34444:98::-;34495:6;34529:5;34523:12;34513:22;;34444:98;;;:::o;34548:168::-;34631:11;34665:6;34660:3;34653:19;34705:4;34700:3;34696:14;34681:29;;34548:168;;;;:::o;34722:360::-;34808:3;34836:38;34868:5;34836:38;:::i;:::-;34890:70;34953:6;34948:3;34890:70;:::i;:::-;34883:77;;34969:52;35014:6;35009:3;35002:4;34995:5;34991:16;34969:52;:::i;:::-;35046:29;35068:6;35046:29;:::i;:::-;35041:3;35037:39;35030:46;;34812:270;34722:360;;;;:::o;35088:640::-;35283:4;35321:3;35310:9;35306:19;35298:27;;35335:71;35403:1;35392:9;35388:17;35379:6;35335:71;:::i;:::-;35416:72;35484:2;35473:9;35469:18;35460:6;35416:72;:::i;:::-;35498;35566:2;35555:9;35551:18;35542:6;35498:72;:::i;:::-;35617:9;35611:4;35607:20;35602:2;35591:9;35587:18;35580:48;35645:76;35716:4;35707:6;35645:76;:::i;:::-;35637:84;;35088:640;;;;;;;:::o;35734:141::-;35790:5;35821:6;35815:13;35806:22;;35837:32;35863:5;35837:32;:::i;:::-;35734:141;;;;:::o;35881:349::-;35950:6;35999:2;35987:9;35978:7;35974:23;35970:32;35967:119;;;36005:79;;:::i;:::-;35967:119;36125:1;36150:63;36205:7;36196:6;36185:9;36181:22;36150:63;:::i;:::-;36140:73;;36096:127;35881:349;;;;:::o;36236:233::-;36275:3;36298:24;36316:5;36298:24;:::i;:::-;36289:33;;36344:66;36337:5;36334:77;36331:103;;36414:18;;:::i;:::-;36331:103;36461:1;36454:5;36450:13;36443:20;;36236:233;;;:::o;36475:180::-;36523:77;36520:1;36513:88;36620:4;36617:1;36610:15;36644:4;36641:1;36634:15;36661:185;36701:1;36718:20;36736:1;36718:20;:::i;:::-;36713:25;;36752:20;36770:1;36752:20;:::i;:::-;36747:25;;36791:1;36781:35;;36796:18;;:::i;:::-;36781:35;36838:1;36835;36831:9;36826:14;;36661:185;;;;:::o;36852:176::-;36884:1;36901:20;36919:1;36901:20;:::i;:::-;36896:25;;36935:20;36953:1;36935:20;:::i;:::-;36930:25;;36974:1;36964:35;;36979:18;;:::i;:::-;36964:35;37020:1;37017;37013:9;37008:14;;36852:176;;;;:::o;37034:180::-;37082:77;37079:1;37072:88;37179:4;37176:1;37169:15;37203:4;37200:1;37193:15",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\";\nimport \"@openzeppelin/contracts/token/ERC20/IERC20.sol\";\n\ncontract NFTLootBox is ERC721URIStorage, Ownable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n    IERC20 token;\n    uint256 nftPrice;\n\n    constructor() ERC721(\"MyNFTs\", \"MNFT\") {\n        nftPrice = 100e18;\n    }\n\n    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {\n        require(token.balanceOf(recipient) > nftPrice);\n\n        token.transferFrom(recipient, msg.sender, nftPrice);\n        \n        _tokenIds.increment();\n        uint256 newItemId = _tokenIds.current();\n        _mint(recipient, newItemId);\n        _setTokenURI(newItemId, tokenURI);\n\n        return newItemId;\n    }\n\n    function setToken (address tokenAddress) public onlyOwner returns (bool) {\n        require(tokenAddress != address(0x0));\n        token = IERC20(tokenAddress);\n        return true;\n    }\n}",
    "sourcePath": "/Users/rokrokss/workspace/hyein/beb-05-InnoBlue/contract/contracts/ERC721.sol",
    "ast": {
      "absolutePath": "project:/contracts/ERC721.sol",
      "exportedSymbols": {
        "Address": [
          1638
        ],
        "Context": [
          1660
        ],
        "Counters": [
          1734
        ],
        "ERC165": [
          1984
        ],
        "ERC721": [
          1057
        ],
        "ERC721URIStorage": [
          1316
        ],
        "IERC165": [
          1996
        ],
        "IERC20": [
          190
        ],
        "IERC721": [
          1173
        ],
        "IERC721Metadata": [
          1343
        ],
        "IERC721Receiver": [
          1191
        ],
        "NFTLootBox": [
          2112
        ],
        "Ownable": [
          112
        ],
        "Strings": [
          1960
        ]
      },
      "id": 2113,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1998,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".10"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:24:13"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 1999,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2113,
          "sourceUnit": 1058,
          "src": "58:57:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
          "file": "@openzeppelin/contracts/utils/Counters.sol",
          "id": 2000,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2113,
          "sourceUnit": 1735,
          "src": "116:52:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 2001,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2113,
          "sourceUnit": 113,
          "src": "169:52:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
          "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
          "id": 2002,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2113,
          "sourceUnit": 1317,
          "src": "222:78:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
          "id": 2003,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2113,
          "sourceUnit": 191,
          "src": "301:56:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 2004,
                "name": "ERC721URIStorage",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1316,
                "src": "382:16:13"
              },
              "id": 2005,
              "nodeType": "InheritanceSpecifier",
              "src": "382:16:13"
            },
            {
              "baseName": {
                "id": 2006,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 112,
                "src": "400:7:13"
              },
              "id": 2007,
              "nodeType": "InheritanceSpecifier",
              "src": "400:7:13"
            }
          ],
          "canonicalName": "NFTLootBox",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 2112,
          "linearizedBaseContracts": [
            2112,
            112,
            1316,
            1057,
            1343,
            1173,
            1984,
            1996,
            1660
          ],
          "name": "NFTLootBox",
          "nameLocation": "368:10:13",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "global": false,
              "id": 2011,
              "libraryName": {
                "id": 2008,
                "name": "Counters",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1734,
                "src": "420:8:13"
              },
              "nodeType": "UsingForDirective",
              "src": "414:36:13",
              "typeName": {
                "id": 2010,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 2009,
                  "name": "Counters.Counter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1666,
                  "src": "433:16:13"
                },
                "referencedDeclaration": 1666,
                "src": "433:16:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$1666_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              }
            },
            {
              "constant": false,
              "id": 2014,
              "mutability": "mutable",
              "name": "_tokenIds",
              "nameLocation": "480:9:13",
              "nodeType": "VariableDeclaration",
              "scope": 2112,
              "src": "455:34:13",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1666_storage",
                "typeString": "struct Counters.Counter"
              },
              "typeName": {
                "id": 2013,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 2012,
                  "name": "Counters.Counter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1666,
                  "src": "455:16:13"
                },
                "referencedDeclaration": 1666,
                "src": "455:16:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$1666_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 2017,
              "mutability": "mutable",
              "name": "token",
              "nameLocation": "502:5:13",
              "nodeType": "VariableDeclaration",
              "scope": 2112,
              "src": "495:12:13",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$190",
                "typeString": "contract IERC20"
              },
              "typeName": {
                "id": 2016,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 2015,
                  "name": "IERC20",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 190,
                  "src": "495:6:13"
                },
                "referencedDeclaration": 190,
                "src": "495:6:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$190",
                  "typeString": "contract IERC20"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 2019,
              "mutability": "mutable",
              "name": "nftPrice",
              "nameLocation": "521:8:13",
              "nodeType": "VariableDeclaration",
              "scope": 2112,
              "src": "513:16:13",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 2018,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "513:7:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "body": {
                "id": 2030,
                "nodeType": "Block",
                "src": "575:34:13",
                "statements": [
                  {
                    "expression": {
                      "id": 2028,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2026,
                        "name": "nftPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2019,
                        "src": "585:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "313030653138",
                        "id": 2027,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "596:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000000_by_1",
                          "typeString": "int_const 100000000000000000000"
                        },
                        "value": "100e18"
                      },
                      "src": "585:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2029,
                    "nodeType": "ExpressionStatement",
                    "src": "585:17:13"
                  }
                ]
              },
              "id": 2031,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "4d794e465473",
                      "id": 2022,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "557:8:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_555b3b22d729d393e223758b2aa600995b735be980e9ee13fdf848d3d5b13f89",
                        "typeString": "literal_string \"MyNFTs\""
                      },
                      "value": "MyNFTs"
                    },
                    {
                      "hexValue": "4d4e4654",
                      "id": 2023,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "567:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_38f99777330a23b7254d6d34302160815d5489450b05e18c9e8ef3b4d4ed66f5",
                        "typeString": "literal_string \"MNFT\""
                      },
                      "value": "MNFT"
                    }
                  ],
                  "id": 2024,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 2021,
                    "name": "ERC721",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 1057,
                    "src": "550:6:13"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "550:24:13"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2020,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "547:2:13"
              },
              "returnParameters": {
                "id": 2025,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "575:0:13"
              },
              "scope": 2112,
              "src": "536:73:13",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2083,
                "nodeType": "Block",
                "src": "710:321:13",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 2045,
                                "name": "recipient",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2033,
                                "src": "744:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 2043,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2017,
                                "src": "728:5:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$190",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 2044,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 147,
                              "src": "728:15:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 2046,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "728:26:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 2047,
                            "name": "nftPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2019,
                            "src": "757:8:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "728:37:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 2042,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "720:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 2049,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "720:46:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2050,
                    "nodeType": "ExpressionStatement",
                    "src": "720:46:13"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 2054,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2033,
                          "src": "796:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 2055,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "807:3:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2056,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "807:10:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 2057,
                          "name": "nftPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2019,
                          "src": "819:8:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 2051,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2017,
                          "src": "777:5:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$190",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 2053,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 189,
                        "src": "777:18:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 2058,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "777:51:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 2059,
                    "nodeType": "ExpressionStatement",
                    "src": "777:51:13"
                  },
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 2060,
                          "name": "_tokenIds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2014,
                          "src": "847:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$1666_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 2062,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "increment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1692,
                        "src": "847:19:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1666_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$1666_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer)"
                        }
                      },
                      "id": 2063,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "847:21:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2064,
                    "nodeType": "ExpressionStatement",
                    "src": "847:21:13"
                  },
                  {
                    "assignments": [
                      2066
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2066,
                        "mutability": "mutable",
                        "name": "newItemId",
                        "nameLocation": "886:9:13",
                        "nodeType": "VariableDeclaration",
                        "scope": 2083,
                        "src": "878:17:13",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2065,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "878:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2070,
                    "initialValue": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 2067,
                          "name": "_tokenIds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2014,
                          "src": "898:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$1666_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 2068,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "current",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1678,
                        "src": "898:17:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1666_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1666_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                        }
                      },
                      "id": 2069,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "898:19:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "878:39:13"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 2072,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2033,
                          "src": "933:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 2073,
                          "name": "newItemId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2066,
                          "src": "944:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 2071,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 767,
                        "src": "927:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 2074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "927:27:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2075,
                    "nodeType": "ExpressionStatement",
                    "src": "927:27:13"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 2077,
                          "name": "newItemId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2066,
                          "src": "977:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2078,
                          "name": "tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2035,
                          "src": "988:8:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 2076,
                        "name": "_setTokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1285,
                        "src": "964:12:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,string memory)"
                        }
                      },
                      "id": 2079,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "964:33:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2080,
                    "nodeType": "ExpressionStatement",
                    "src": "964:33:13"
                  },
                  {
                    "expression": {
                      "id": 2081,
                      "name": "newItemId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2066,
                      "src": "1015:9:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 2041,
                    "id": 2082,
                    "nodeType": "Return",
                    "src": "1008:16:13"
                  }
                ]
              },
              "functionSelector": "eacabe14",
              "id": 2084,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 2038,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 2037,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31,
                    "src": "682:9:13"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "682:9:13"
                }
              ],
              "name": "mintNFT",
              "nameLocation": "624:7:13",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2036,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2033,
                    "mutability": "mutable",
                    "name": "recipient",
                    "nameLocation": "640:9:13",
                    "nodeType": "VariableDeclaration",
                    "scope": 2084,
                    "src": "632:17:13",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2032,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "632:7:13",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 2035,
                    "mutability": "mutable",
                    "name": "tokenURI",
                    "nameLocation": "665:8:13",
                    "nodeType": "VariableDeclaration",
                    "scope": 2084,
                    "src": "651:22:13",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 2034,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "651:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "631:43:13"
              },
              "returnParameters": {
                "id": 2041,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2040,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 2084,
                    "src": "701:7:13",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2039,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "701:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "700:9:13"
              },
              "scope": 2112,
              "src": "615:416:13",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2110,
                "nodeType": "Block",
                "src": "1110:113:13",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2094,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2086,
                            "src": "1128:12:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "arguments": [
                              {
                                "hexValue": "307830",
                                "id": 2097,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1152:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0x0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 2096,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1144:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 2095,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1144:7:13",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 2098,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1144:12:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1128:28:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 2093,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1120:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 2100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1120:37:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2101,
                    "nodeType": "ExpressionStatement",
                    "src": "1120:37:13"
                  },
                  {
                    "expression": {
                      "id": 2106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2102,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2017,
                        "src": "1167:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$190",
                          "typeString": "contract IERC20"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 2104,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2086,
                            "src": "1182:12:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 2103,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 190,
                          "src": "1175:6:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$190_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 2105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1175:20:13",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$190",
                          "typeString": "contract IERC20"
                        }
                      },
                      "src": "1167:28:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$190",
                        "typeString": "contract IERC20"
                      }
                    },
                    "id": 2107,
                    "nodeType": "ExpressionStatement",
                    "src": "1167:28:13"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 2108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1212:4:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 2092,
                    "id": 2109,
                    "nodeType": "Return",
                    "src": "1205:11:13"
                  }
                ]
              },
              "functionSelector": "144fa6d7",
              "id": 2111,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 2089,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 2088,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31,
                    "src": "1085:9:13"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1085:9:13"
                }
              ],
              "name": "setToken",
              "nameLocation": "1046:8:13",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2087,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2086,
                    "mutability": "mutable",
                    "name": "tokenAddress",
                    "nameLocation": "1064:12:13",
                    "nodeType": "VariableDeclaration",
                    "scope": 2111,
                    "src": "1056:20:13",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2085,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1056:7:13",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1055:22:13"
              },
              "returnParameters": {
                "id": 2092,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2091,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 2111,
                    "src": "1104:4:13",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 2090,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1104:4:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1103:6:13"
              },
              "scope": 2112,
              "src": "1037:186:13",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 2113,
          "src": "359:866:13",
          "usedErrors": []
        }
      ],
      "src": "32:1193:13"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.15+commit.e14f2714.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0x4E34363625765D439af88227B21BD52A92C84188",
        "transactionHash": "0x0693efd4ae48981a47c6d81e03e8b69b88e85afc58b4d618bfbafd138530dc68"
      }
    },
    "schemaVersion": "3.4.8",
    "updatedAt": "2022-08-17T20:01:05.514Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenURI(uint256)": {
          "details": "See {IERC721Metadata-tokenURI}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
  module.exports = NFT;
