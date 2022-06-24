// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CampaignFactory {
    address[] public deployedCampaigns;

    struct campaignDeploy {
        address campaign;
        string title;
        uint goal;
        string description;
        uint totalContribution;
    }

    campaignDeploy[] public campaigns;

    function createCampaign(uint minimum, uint goal, string memory title, string memory desc) external {
        // Create a new campaign
        Campaign newCampaign = new Campaign(minimum, msg.sender, title, goal, desc);        
        // deployedCampaigns.push(address(newCampaign));
        campaigns.push(campaignDeploy(address(newCampaign), title, goal, desc, newCampaign.getTotalContribution()));
    }
    
    function getDeployedContracts() external view returns(campaignDeploy[] memory) {
        return campaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    address public manager;
    
    string public titleCompaign; //title of the campaign
    uint public amountGoal; //amount of ether to be raised
    string public CampaignDescription; //description of the campaign
    uint public totalContribution; //total amount of ether raised

    uint public minimumContribution;
    mapping(address => bool) public approvers;
    mapping(uint => Request) public requests;
    uint public requestCount;
    uint public approversCount;
    
    modifier managerOnly() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator, string memory title, uint goal, string memory description) {
        manager = creator;
        minimumContribution = minimum;
        titleCompaign = title;
        amountGoal = goal;
        CampaignDescription = description;
        totalContribution = 0;
    }
    
    function contribute() external payable {
        require(msg.value >= minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
        totalContribution += msg.value; //wei 
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

    function getSummary() external view returns (
      uint,
      uint,
      uint,
      uint,
      address,
      string memory,
      uint,
      string memory,
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
        totalContribution
      );
    }
}