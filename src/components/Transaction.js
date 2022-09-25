import React from "react";

// for the deleting method we need to delete by ID
function Transaction({id,date,description,category,amount,transactions,setTransactions,
}){
  // when i tried to pass the url from parent to childe the delete method didnt work
  const deleteTransaction=()=>{
    fetch(` http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const newTransaction = transactions.filter((transaction) => {
          return transaction.id !== id;
        });
        setTransactions(newTransaction);
      });
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      {/* <td> */}
        <button onClick={deleteTransaction}>Delete</button>
      {/* </td> */}
    </tr>
  );
}

export default Transaction;
