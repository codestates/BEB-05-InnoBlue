const ICToken= artifacts.require("ICToken");
const NFTLootBox= artifacts.require("NFTLootBox");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(ICToken, "InnoBlue", "INB");
    await deployer.deploy(NFTLootBox, ICToken.address);
  })
};
