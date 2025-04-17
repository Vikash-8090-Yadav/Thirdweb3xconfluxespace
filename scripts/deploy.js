const hre = require("hardhat");
// const fs = require('fs');

async function main() {
  const Community = await hre.ethers.getContractFactory("CommunityBountyBoard")
  const community = await Community.deploy();
  await community.deployed();
  console.log("Expense Management deployed to:", community.address);

  // fs.writeFileSync('./config.js', `export const marketplaceAddress = "${nftMarketplace.address}"`)
}

main()
  .then(() => process.exit(0))  
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

