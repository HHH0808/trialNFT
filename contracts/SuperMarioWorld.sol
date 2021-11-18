pragma solidity ^0.8.2;

import "./ERC721.sol";

contract SuperMarioWorld is ERC721 {
    
    string public name; //ERC721 Metadata
    string public symbol; //ERC721 Metadata
    uint256 public tokenCount;

    mapping(uint256 => string) private _tokenURIs;


    constructor(string memory _name, string memory _symbol){
        name = _name;
        symbol = _symbol;
    }

    //returns a URL that points to the metadata //ERC721 Metadata
    function tokenURI(uint256 tokenId) public view returns(string memory) {
        require(_owners[tokenId] != address(0), "TokenId does not exist");
        return _tokenURIs[tokenId];
    }
    
    //Create a new NFT inside our collection
    function mint(string memory _tokenURI) public {
        tokenCount += 1; //this is tokenId also
        _balances[msg.sender] += 1;
        _owners[tokenCount] = msg.sender;
        _tokenURIs[tokenCount] = _tokenURI;

        emit Transfer(address(0), msg.sender, tokenCount);
    }

    //supportsInterface
    function supportsInterface(bytes4 interfaceId) public pure override returns (bool) {
        return interfaceId == 0x80ac58cd || interfaceId == 0x5b5e139f;
    }
}