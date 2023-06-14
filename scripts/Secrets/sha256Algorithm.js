const SHA256 = require('sha256');   //Install the library: npm i sha256

class sha256Algorithm {
    constructor(prevBlockHash, timeStamp, pendingTransactions) {
        this.prevBlockHash = prevBlockHash;
        this.timeStamp = timeStamp;
        this.pendingTransactions = pendingTransactions;
    }

    generateHash() {
        let nonce = 0;
        let hash = "";

        let encode = this.prevBlockHash + this.timeStamp + JSON.stringify(this.pendingTransactions);
        do {
            nonce += 1;
            hash = SHA256(encode + nonce).toString();
        } while (!hash.startsWith("000"));

        return { hash, nonce };
    }
}

export default sha256Algorithm;