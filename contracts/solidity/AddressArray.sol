pragma solidity ^0.4.25;

contract AddressArray{
    address[] private values;
    
    // 1 based indexes
    mapping (address => uint256) private indexes;
    function list() external view returns (address[]){
        return values;
    }
    function add(address val) external {
        require(indexes[val] == 0);
        values.push(val);
        indexes[val] = values.length;
    }
    function remove(address val) external {
        require(indexes[val] != 0 );
        values[indexes[val] - 1] = values[values.length-1];
        delete values[values.length-1];
        values.length--;
    }
    function remove(uint256 i) external {
        values[i] = values[values.length-1];
        delete values[values.length-1];
        values.length--;
    }
    function get(uint256 index) external view returns (address){
        return values[index];
    }
    function indexOf(address value) external view returns (uint256){
        return indexes[value] - 1;
    }
    function size() external view returns (uint256){
        return values.length;
    }
    function contains (address val) external view returns (bool){
        return indexes[val] != 0;
    }
}