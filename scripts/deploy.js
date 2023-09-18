const hre = require('hardhat');

const main = async()=>{
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log("Library deployed to :",upload.address);
}

main().catch((e)=>{
  console.error(e);
  process.exitCode = 1;    
})