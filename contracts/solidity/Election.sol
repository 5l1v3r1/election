pragma solidity ^0.4.25;
import "Election.sol";


contract Elections {
    mapping (address => mapping (uint => Election)) private elections;

    function addElection(uint _ver) external {
        require(elections[msg.sender][_ver]==0x0000000000000000000000000000000000000000);
        Election _el = new Election(new Form(), new Form());
        elections[msg.sender][_ver] = _el;
    }
    
    function addCandidateObbligatory(uint256 _ver, string _key) external {
        Election _el = elections[msg.sender][_ver];
        _el.addCandidateObbligatory(_key);
    }
    
    function addCandidateOptional(uint256 _ver, string _key) external {
        Election _el = elections[msg.sender][_ver];
        _el.addCandidateOptional(_key);
    }
    
    function addElectorObbligatory(uint256 _ver, string _key) external {
        Election _el = elections[msg.sender][_ver];
        _el.addElectorObbligatory(_key);
    }
    
    function addElectorOptional(uint256 _ver, string _key) external {
        Election _el = elections[msg.sender][_ver];
        _el.addElectorOptional(_key);
    }
    
    function electorObbligatoryCount(address _addr, uint256 _ver) external view returns (uint256) {
        Election _el = elections[_addr][_ver];
        return _el.electorObbligatoryCount();
    }
    
    function electorOptionalCount(address _addr, uint256 _ver) external view returns (uint256) {
        Election _el = elections[_addr][_ver];
        return _el.electorOptionalCount();
    }
    
    function applyAsCandidate(address _electionAddress, uint256 _ver, MyInfo info) external {
        Election _el = elections[_electionAddress][_ver];
        _el.applyAsCandidate(info);
    }
    
    function applyAsElector(address _electionAddress, uint256 _ver, MyInfo info) external {
        Election _el = elections[_electionAddress][_ver];
        _el.applyAsCandidate(info);
    }
    
    function listCandidates(address _electionAddress, uint256 _ver) external view returns (address[]) {
        Election _el = elections[_electionAddress][_ver];
        return _el.listCandidates();
    }
    
    function listPendingCandidates(address _electionAddress, uint256 _ver) external view returns (address[]) {
        Election _el = elections[_electionAddress][_ver];
        return _el.listPendingCandidates();
    }
    
    function listPendingElectors(address _electionAddress, uint256 _ver) external view returns (address[]) {
        Election _el = elections[_electionAddress][_ver];
        return _el.listPendingElectors();
    }
    
    function giveElectorRight(address _electionAddress, uint256 _ver, address _applicant) external {
        Election _el = elections[_electionAddress][_ver];
        _el.giveElectorRight(_applicant);
    }
    
    function dontGiveElectorRight(address _electionAddress, uint256 _ver, address _applicant) external {
        Election _el = elections[_electionAddress][_ver];
        _el.dontGiveElectorRight(_applicant);
    }
    
    function giveCandidateRight(address _electionAddress, uint256 _ver, address _applicant) external {
        Election _el = elections[_electionAddress][_ver];
        _el.giveCandidateRight(_applicant);
    }
    
    function dontGiveCandidateRight(address _electionAddress, uint256 _ver, address _applicant) external {
        Election _el = elections[_electionAddress][_ver];
        _el.dontGiveCandidateRight(_applicant);
    }
    
    function takeBackCandidateRight(address _electionAddress, uint256 _ver, address _candidateAddress) external {
        Election _el = elections[_electionAddress][_ver];
        _el.takeBackCandidateRight(_candidateAddress);
    }
    
    function takeBackElectorRight(address _electionAddress, uint256 _ver, address _electorAddress) external {
        Election _el = elections[_electionAddress][_ver];
        _el.takeBackElectorRight(_electorAddress);
    }
    
    function vote(address _electionAddress, uint256 _ver, address _to, int _point) external {
        Election _el = elections[_electionAddress][_ver];
        _el.vote(_to, _point);
    }
    
    function countVote(address _electionAddress, uint256 _ver, address _candidateAddress) external view returns (int){
        Election _el = elections[_electionAddress][_ver];
        return _el.countVote(_candidateAddress);
    }
}