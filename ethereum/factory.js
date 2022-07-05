import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0xe773CA873b9E14Bbb186112d9c69a55ed1F6b476"
);

export default instance;
