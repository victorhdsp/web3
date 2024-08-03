import BlockService, { BlockData } from "./block";

class BlockchainService {
    private blockchain: BlockService[];
    private difficulty: number;

    constructor(difficulty: number) {
        const genesis = new BlockService(0, { transactions: [] }, "0");
        this.blockchain = [genesis]
        this.difficulty = difficulty;
    }

    push (block: BlockService) {
        this.blockchain.push(block);
    }

    getLast() {
        return this.blockchain[this.blockchain.length - 1]
    }

    chainIsValid() {
        try {
            let previousHash = "0";
            this.blockchain.forEach((block) => {
                if (block.createHash() !== block.hash) {
                    throw new Error("Current hash is invalid");
                } if (block.previousHash !== previousHash)
                    throw new Error("Previous hash is invalid");
                else {
                    previousHash = block.hash;
                }
            })
            return true;
        } catch (error: any) {
            console.error((error as Error).message)
            return false;
        }
    }

    mine(block: BlockService) {
        let start = "";
        for (let i = 0; i < this.difficulty; i++) {
            start += "0";
        }

        if (block.hash.startsWith(start)) {
            return this.chainIsValid();
        } else {
            block.nonce++;
            block.hash = block.createHash();
            return false;
        }
    }
}

export default BlockchainService;