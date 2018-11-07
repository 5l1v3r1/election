pragma solidity ^0.4.25;
import "MyInfo.sol";
import "Form.sol";
import "AddressArray.sol";

contract Election {
    mapping (address => int) private points;
    mapping (address => mapping (address => int)) private votes;
    AddressArray private candidates;
    AddressArray private electors;
    mapping (address => MyInfo) private pendingElectorsInfo;
    mapping (address => MyInfo) private pendingCandidatesInfo;
    AddressArray private pendingElectors;
    AddressArray private pendingCandidates;
    address private issuer;
    Form private electorForm;
    Form private candidateForm;
    bool private isReady;
    
    constructor (Form _electorForm, Form _candidateForm) public {
        issuer = msg.sender;
        electorForm = _electorForm;
        candidateForm = _candidateForm;
    }
    
    modifier issuerOnly{
        require(issuer == msg.sender);
        _;
    }
    
    modifier readyAndIssuerOnly{
        require(issuer == msg.sender && isReady);
        _;
    }
    
    modifier electorOnly{
        require(electors.contains(msg.sender));
        _;
    }
    
    modifier candidateOnly{
        require(candidates.contains(msg.sender));
        _;
    }
    
    modifier readyOnly{
        require(isReady);
        _;
    }
    
    modifier onProgressOnly {
        require(!isReady);
        _;
    }
    
    function publish() external{
        isReady = true;
    }
    
    function electorObbligatoryCount() external view returns (uint256) {
        return electorForm.obbligatoryCount();
    }
    
    function electorOptionalCount() external view returns (uint256) {
        return electorForm.optionalCount();
    }
    
    function candidateObbligatoryCount() external view returns (uint256) {
        return candidateForm.obbligatoryCount();
    }
    
    function candidateOptionalCount() external view returns (uint256) {
        return candidateForm.optionalCount();
    }
    
    function addCandidateObbligatory(string _key) external onProgressOnly {
        candidateForm.addObbligatory(_key);
    }
    
    function addCandidateOptional(string _key) external onProgressOnly {
        candidateForm.addOptional(_key);
    }
    
    function addElectorObbligatory(string _key) external onProgressOnly {
        electorForm.addObbligatory(_key);
    }
    
    function addElectorOptional(string _key) external onProgressOnly {
        electorForm.addOptional(_key);
    }
    
    function applyAsCandidate(MyInfo info) external readyOnly {
        pendingCandidates.add(msg.sender);
        pendingCandidatesInfo[msg.sender] = info;
    }
    
    function applyAsElector(MyInfo info) external readyOnly {
        pendingElectors.add(msg.sender);
        pendingElectorsInfo[msg.sender] = info;
    }
    
    function listCandidates() external readyOnly view returns (address[]) {
        return candidates.list();
    }
    
    function listPendingCandidates() external readyOnly view returns (address[]) {
        return pendingCandidates.list();
    }
    
    function listPendingElectors() external readyOnly view returns (address[]) {
        return pendingElectors.list();
    }
    
    function giveElectorRight(address _applicant) external readyAndIssuerOnly {
        electors.add(_applicant);
        pendingElectors.remove(_applicant);
    }
    
    function dontGiveElectorRight(address _applicant) external readyAndIssuerOnly {
        pendingElectors.remove(_applicant);
    }
    
    function giveCandidateRight(address _applicant) external readyAndIssuerOnly {
        pendingCandidates.remove(_applicant);
        candidates.add(_applicant);
    }
    
    function dontGiveCandidateRight(address _applicant) external readyAndIssuerOnly {
        pendingCandidates.remove(_applicant);
        candidates.remove(_applicant);
    }
    
    function takeBackCandidateRight(address _candidateAddress) external readyAndIssuerOnly {
        candidates.remove(_candidateAddress);
    }
    
    function takeBackElectorRight(address _electorAddress) external readyAndIssuerOnly {
        electors.remove(_electorAddress);
    }
    
    
    function vote(address _to, int _point) external electorOnly {
        if(votes[msg.sender][_to] != 0){
            points[_to] -= votes[msg.sender][_to];
        }
        votes[msg.sender][_to] = _point;
        points[_to] += _point;
    }
    
    function countVote(address _candidateAddress) external readyOnly view returns (int){
        return points[_candidateAddress];
    }
}