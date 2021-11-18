const { ethers } = require("hardhat");

async function main() {

  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldCollection");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldCollection", "SPWC", "https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/");
  await superMarioWorld.deployed();

  console.log("Success! Contract is deployed to ", superMarioWorld.address);
  //console.log(SuperMarioWorld);
  console.log(superMarioWorld);

  //One NFT will have 1 line of code for minting
  await superMarioWorld.mint(9); //Mario tokenId 1
  await superMarioWorld.mint(6); //Luigi tokenId 2
  await superMarioWorld.mint(7); //Yoshi tokenId 3
  await superMarioWorld.mint(8); //Browser tokenId 4
  await superMarioWorld.mint(1); //Gold Mario tokenId 5
  await superMarioWorld.mint(3); //Gold Luigi tokenId 6
  await superMarioWorld.mint(2); //Gold Yoshi tokenId 7
  await superMarioWorld.mint(4); //Gold Browser tokenId 8


  console.log("NFT successfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
