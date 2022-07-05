import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0x2fea4CD3B96d74CE8965B47853613857998FEfDE"
);

export default instance;
