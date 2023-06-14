import Block from "./components/Block";
import sha256Algorithm from "./Secrets/sha256Algorithm";

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
    }

    // Create a initial Block in the chain.
    createGenesisBlock() {
        return new Block();
    }

    // Retrieve the last Block from the chain of blocks.
    getLastBlock() { return this.chain[this.chain.length - 1]; }

    //get the hash value and nonce using SHA256 hashing algorithm.
    generateCustomHash() {
        let prevBlock = this.getLastBlock();
        let timeStamp = Date.now()
        return new sha256Algorithm(prevBlock.getPrevBlockHash(), timeStamp, this.pendingTransactions).generateHash()
    }


}