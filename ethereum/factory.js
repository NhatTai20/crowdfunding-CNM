import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0xEbB0657F96107237e05a78f4060E7C91A8ADC6df"
);

export default instance;
