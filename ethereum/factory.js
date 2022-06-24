import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0xa0488AA07b64a6CF7D334d56AaDaC9F4d9094A10"
);

export default instance;
