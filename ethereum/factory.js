import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  '0x3a6DE61b316444aCD52A6C1aCE6BD75Fb449722A'
);

export default instance;
