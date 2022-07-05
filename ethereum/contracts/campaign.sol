// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract CampaignFactory {
    // using SafeMath for uint;

    address[] public deployedCampaigns;

    struct campaignDeploy {
        address campaign;
        string title;
        uint goal;
        string description;
        uint raiseUntil;
        uint totalContribution;
    }

    campaignDeploy[] public campaigns;

    function createCampaign(uint minimum, uint goal, string memory title, string memory desc, uint durationInDays) external {
        uint raiseUntil = block.timestamp + (durationInDays * (1 days));
        // Create a new campaign
        Campaign newCampaign = new Campaign(minimum, msg.sender, title, goal, desc, raiseUntil);        
        // deployedCampaigns.push(address(newCampaign));
        campaigns.push(campaignDeploy(address(newCampaign), title, goal, desc, raiseUntil ,newCampaign.getTotalContribution()));
    }
    
    function getDeployedContracts() external view returns(campaignDeploy[] memory) {
        return campaigns;
    }
}

contract Campaign {
    // using SafeMath for uint;
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    enum State {
        Fundraising,
        Expired
    }
    
    address public manager;
    
    string public titleCompaign; //title of the campaign
    uint public amountGoal; //amount of ether to be raised
    string public CampaignDescription; //description of the campaign
    uint public totalContribution; //total amount of ether raised
    mapping(address => uint) public contributions; 
    State public state = State.Fundraising; // initial state of the campaign
    uint public raiseBy; //date when the campaign will be expired
    uint public currentBalance;

    uint public minimumContribution;
    mapping(address => bool) public approvers;
    mapping(uint => Request) public requests;
    uint public requestCount;
    uint public approversCount;
    
    // Modifier to check current state
    modifier inState(State _state) {
        require(state == _state);
        _;
    }

    modifier managerOnly() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator, string memory title, uint goal, string memory description, uint deadline) {
        manager = creator;
        minimumContribution = minimum;
        titleCompaign = title;
        amountGoal = goal;
        CampaignDescription = description;
        totalContribution = 0;
        raiseBy = deadline;
        currentBalance = 0;
    }
    
    function checkIfFundingExpired() public {
        if (block.timestamp > raiseBy) {
            state = State.Expired;
        }
    }

    function contribute() external payable inState(State.Fundraising) {
        require(msg.sender != manager);
        require(msg.value >= minimumContribution);
        contributions[msg.sender] = contributions[msg.sender] + (msg.value);
        approvers[msg.sender] = true;
        approversCount++;
        totalContribution = totalContribution + msg.value; //wei 
        currentBalance = currentBalance + (msg.value);
        checkIfFundingExpired();
    }
    
    function createRequest(
        string memory description,
        uint value,
        address recipient) external managerOnly
    {
        require(address(this).balance >= value);
        Request storage newRequest = requests[requestCount];
        newRequest.description = description;
        newRequest.value = value;
        newRequest.recipient = recipient;
        newRequest.complete = false;
        
        requestCount++;
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    } 
    
    function finalizeRequest(uint index) public managerOnly {
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));
        
        payable(request.recipient).transfer(request.value);
        request.complete = true;
    }

    function getTotalContribution() public view returns(uint) {
        return totalContribution;
    }

    function getRefund() public inState(State.Expired) returns (bool) 
    {
        require(contributions[msg.sender] > 0);

        uint amountToRefund = contributions[msg.sender];
        contributions[msg.sender] = 0;

        if (!payable(msg.sender).send(amountToRefund)) {
            contributions[msg.sender] = amountToRefund;
            return false;
        } else {
            totalContribution = totalContribution - (amountToRefund);
            approversCount--;
        }

        return true;
    }

    function getSummary() external view returns (
      uint,
      uint,
      uint,
      uint,
      address,
      string memory,
      uint,
      string memory,
      uint,
      uint
    ) {
      return (
        minimumContribution,
        address(this).balance,
        requestCount,
        approversCount,
        manager,
        titleCompaign,
        amountGoal,
        CampaignDescription,
        totalContribution,
        raiseBy
      );
    }
}