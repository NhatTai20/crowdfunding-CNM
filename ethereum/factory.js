import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0x4031C8Ed5f7F4967012af0833486043D772C6287"
);

export default instance;
