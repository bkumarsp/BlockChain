class Block {
    constructor() {
        this.index = 1;
        this.timeStamp = Date.now();
        this.transactions = [];
        this.nonce = 0;
        this.hash = "";
        this.prevBlockHash = "";
    }

    constructor(index, transactions, prevBlockHash, currentBlockHash){
        this.index = index;
        this.timeStamp = Date.now();
        this.transactions = transactions;
        this.nonce = currentBlockHash.nonce;
        this.hash = currentBlockHash.hash;
        this.prevBlockHash = prevBlockHash;
    }

    // Getters and Setters

    getPrevBlockHash = () => {return this.prevBlockHash;}

    getTransactions = () => { return this.transactions };

    setTransactions = (transaction) => { this.transactions = transaction; }
}

export default Block;