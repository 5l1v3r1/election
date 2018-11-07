pragma solidity ^0.4.23;

contract PaymentChannel{
address recipient;
uint256 timeout;
uint256 channelOpenTime;
address owner;
constructor (address _to, uint256 _timeout){
recipient = _to;
channelOpenTime = now;
timeout = _timeout;
owner = msg.sender;
}
function getSigner(bytes32 h, uint8 v, bytes32 r, bytes32 s) public pure returns(address){
return ecrecover(h,v,r,s);
}
}
