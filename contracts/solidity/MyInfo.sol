pragma solidity ^0.4.25;

contract MyInfo{
    address private owner;
    mapping (string => string) private info;
    
    modifier ownerOnly{
        require(owner == msg.sender);
        _;
    }
    
    constructor () public {
        owner = msg.sender;
    }
    
    function getValue(string _key) external view returns (string)  {
        return info[_key];
    }
    
    function add(string _key, string _val) external ownerOnly{
        info[_key] = _val;
    }
    
    function remove (string _key) external ownerOnly{
        delete info[_key];
    }
}