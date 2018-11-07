pragma solidity ^0.4.25;
import "StringArray.sol";


contract Form{
    StringArray private obbFields;
    StringArray private optFields;

    function addObbligatory(string _key) external {
        obbFields.add(_key);
    }
    function getObbligatoryField(uint256 _index) external view returns (string) {
        return obbFields.get(_index);
    }
    function addOptional(string _key) external {
        optFields.add(_key);
    }
    function getOptionalField(uint256 _index) external view returns (string) {
        return optFields.get(_index);
    }
    
    function removeObbligatoryField(uint256 _index) external {
        obbFields.remove(_index);
    }
    function removeOptionalField(uint256 _index) external {
        optFields.remove(_index);
    }
    function obbligatoryCount() external view returns (uint256){
        return obbFields.size();
    }
    function optionalCount() external view returns (uint256){
        return optFields.size();
    }
}