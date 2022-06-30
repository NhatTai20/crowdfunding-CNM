import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0x54d81d29c01C6496De58de68e55e34dFA43005b3"
);

export default instance;
