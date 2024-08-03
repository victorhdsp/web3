import BlockchainService from "./blockchain";
import MinerService from "./miner";

const blockchain = new BlockchainService(3);
const miner1 = new MinerService(blockchain, "miner 1");
const miner2 = new MinerService(blockchain, "miner 2");

miner1.mineBlock();
miner2.mineBlock();