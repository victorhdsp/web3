import crypto from "node:crypto";

export interface BlockData {
    transactions: string[]
}

class BlockService {
    index: number
    private timestamp: number
    private data: BlockData
    previousHash: string
    nonce: number
    hash: string

    constructor(index: number, data: BlockData, previousHash:string, nonce=0) {
        this.index = index;
        this.timestamp = Date.now();
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.hash = this.createHash()
    }

    createHash() {
        const hash = crypto.createHash("sha256");
        const {index, timestamp, data, previousHash, nonce} = this;
        const block = JSON.stringify({index, timestamp, data, previousHash, nonce});
        return hash.update(block).digest("hex");
    }

    addTransaction(sign: string) {
        this.data.transactions.push(sign);
    }
}

export default BlockService;