import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  '0xF97b29E3F0FaD7EA860b60F9ad1456580FC0773d'
);

export default instance;
