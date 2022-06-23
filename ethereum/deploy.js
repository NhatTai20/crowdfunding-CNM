const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const factory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'team decade canoe polar fragile twice pledge cube ethics oxygen fee caught',
  'https://rinkeby.infura.io/v3/32831e346ec94babbd2db96425e3f69b'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(factory.abi)
    .deploy({
      data: factory.evm.bytecode.object
    })
    .send({
      gas: '2000000',
      from: accounts[0]
    });

  console.log('Contract deployed to', result.options.address);
};

deploy();