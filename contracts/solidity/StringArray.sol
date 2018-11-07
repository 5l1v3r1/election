pragma solidity ^0.4.25;

contract StringArray{
    string[] private values;
    
    // 1 based indexes
    mapping (string => uint256) private indexes;
    function add(string s) external {
        require(indexes[s] == 0);
        values.push(s);
        indexes[s] = values.length;
    }
    function remove(string s) external {
        require(indexes[s] != 0 );
        values[indexes[s] - 1] = values[values.length-1];
        delete values[values.length-1];
        values.length--;
    }
    function remove(uint256 i) external {
        values[i] = values[values.length-1];
        delete values[values.length-1];
        values.length--;
    }
    function get(uint256 index) external view returns (string){
        return values[index];
    }
    function indexOf(string value) external view returns (uint256){
        return indexes[value] - 1;
    }
    function size() external view returns (uint256){
        return values.length;
    }
    function contains (string val) external view returns (bool){
        return indexes[val] != 0;
    }
}