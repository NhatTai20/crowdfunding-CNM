import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  '0x0E0aE8147d3DebF339d7B0823dE6489115d4Ad2d'
);

export default instance;
