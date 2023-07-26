import { ethers } from "ethers";
const API_KEY = "1c30bd8247e34d948122ec917e222b3f";
const  network = "homestead";
const provider = new ethers.InfuraProvider(network, API_KEY);
const blockNumber = await provider.getBlockNumber();
console.log(blockNumber);
