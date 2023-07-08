const BlockChain = require("./blockchain")

let bitcoin = new BlockChain();

bitcoin.createNewTransaction(
            "100",
            "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
            "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
        );

bitcoin.createNewBlock();
        

console.log(bitcoin);

console.log("\n");
console.log("Second Block Transactions", bitcoin.chain[1].getTransactions());