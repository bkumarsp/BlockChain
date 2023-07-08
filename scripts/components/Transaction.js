const Transaction = (sender, recepient, amount) =>{
    return {
        // TODO: id: a unique id to be added for each new transaction
        sender,
        recepient,
        amount,
        createdAt: Date.now()
    }
}

module.exports=Transaction;