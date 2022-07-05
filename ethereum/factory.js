import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0x70cf3ceE0a78db3d0F10aF5E3a2F545abC0d767a"
);

export default instance;
