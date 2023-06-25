import Block from "./components/Block";
import Transaction from "./components/Transaction";
import sha256Algorithm from "./Secrets/sha256Algorithm";


/////// Main Class of the Project /////

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
    }

    // Create a initial Block in the chain.
    createGenesisBlock() {
        return new Block();
    }

    createNewTransaction(sender, recepient, amount){
        let newTransaction = new Transaction(sender, recepient, amount);
        this.pendingTransactions.push(newTransaction);
    }

    // Retrieve the last Block from the chain of blocks.
    getLastBlock() { return this.chain[this.chain.length - 1]; }

    clearPendingTransaction(){ 
        console.log(">>> Clearing " +this.pendingTransactions.length+ " Transaction\n");
        this.pendingTransactions = []; 
    }

    addBlockToChain(block){
        try{
            this.chain.push(block);
        }catch{
            console.log("An error occured which adding block to chain...\n");
        }
    }
    //get the hash value and nonce using SHA256 hashing algorithm.
    generateCustomHash() {
        let prevBlock = this.getLastBlock();
        let timeStamp = Date.now()
        return new sha256Algorithm(prevBlock.getPrevBlockHash(), timeStamp, this.pendingTransactions).generateHash()
    }

    createNewBlock(){
        let index = this.chain.length + 1; 
        let transactions = this.pendingTransactions;
        let prevBlockHash = this.getLastBlock().getPrevBlockHash();
        let currentBlockHash = this.generateCustomHash();

        // Create new block
        let newBlock =  new Block(index, transactions, prevBlockHash, currentBlockHash);

        //Clear pending transaction;
        this.clearPendingTransaction();
        this.addBlockToChain(newBlock);

        return newBlock;
    }


}


module.exports = Blockchain;