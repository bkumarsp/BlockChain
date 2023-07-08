class Block {
    constructor() {
        this.index = 1;
        this.timeStamp = Date.now();
        this.transactions = [];
        this.nonce = 0;
        this.hash = "";
        this.prevBlockHash = "";
    }

    // Getters and Setters

    getPrevBlockHash = () => {return this.prevBlockHash;}

    getTransactions = () => { return this.transactions };

    setTransactions = (transaction) => { this.transactions = transaction; }
}

module.exports=Block;