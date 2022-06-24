const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const factory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "team decade canoe polar fragile twice pledge cube ethics oxygen fee caught",
  "https://rinkeby.infura.io/v3/fad49d1c281d4234bb8f0792fe9bffde"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(factory.abi)
    .deploy({
      data: factory.evm.bytecode.object,
    })
    .send({
      gas: "2500000",
      from: accounts[0],
    });

  console.log("Contract deployed to", result.options.address);
};

deploy();
