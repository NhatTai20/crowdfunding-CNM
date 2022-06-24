import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and Metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server or Metamask is not running.
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/fad49d1c281d4234bb8f0792fe9bffde"
  );
  web3 = new Web3(provider);
}

export default web3;
