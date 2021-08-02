// migrations/2_deploy_Tokens.js
const EthBlox = artifacts.require("EthBlox");

module.exports = function(deployer) {
  deployer.deploy(EthBlox, 100000);
};