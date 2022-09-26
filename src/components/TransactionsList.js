import React, { useEffect } from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions,setTransactions,search, url}) {
  
  // fetching the transaction data
  const fetchTransaction = async () => {
    const response = await fetch(url);
    const transactions = await response.json();
    //  console.log(transactions);
    setTransactions(transactions);
  } 
  useEffect(()=>{
    fetchTransaction()
  },[]) 

  // filtering throu the data for the search 
  const filteredTransactions = transactions.filter((transaction) =>(
    // console.log(transaction)
    // making the transaction accessible even in ALL CASES
    transaction.description.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th><h3 className="ui center aligned header">Date</h3></th>
          <th><h3 className="ui center aligned header">Description</h3></th>
          <th><h3 className="ui center aligned header">Category</h3></th>
          <th><h3 className="ui center aligned header">Amount</h3></th>
        </tr>
        {filteredTransactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              {...transaction}
              transactions={transactions}
              setTransactions={setTransactions}
              url={url}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;