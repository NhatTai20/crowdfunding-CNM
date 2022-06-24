import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  '0xc5C8530f3a94AC591E590Bdd0F5E8d155eF594c6'
);

export default instance;
