import BlockService, { BlockData } from "./block";
import crypto from "node:crypto";
import BlockchainService from "./blockchain";

class MinerService {
    private blockchain: BlockchainService;
    private name: string;

    constructor(blockchain: BlockchainService, name: string) {
        this.blockchain = blockchain;
        this.name = name;
    }

    private addBlock() {
        const { hash, index } = this.blockchain.getLast()
        const data: BlockData = { transactions: [] }
        return new BlockService(index + 1, data, hash)
    }
    
    async mineBlock() {  
        let lastBlock = this.blockchain.getLast();
        const mined = this.blockchain.mine(lastBlock);

        if (mined) {
            const newBlock = this.addBlock()
            lastBlock = this.blockchain.getLast()
            if (newBlock.previousHash === lastBlock.hash) {
                console.log(this.name, lastBlock);
                this.blockchain.push(newBlock);
            }
        } else {
            if (lastBlock.nonce % 5000 === 0)
                console.log(this.name, lastBlock.index, lastBlock.nonce, lastBlock.hash)
        }

        setTimeout(() => this.mineBlock(), 1)
    }
}

export default MinerService;