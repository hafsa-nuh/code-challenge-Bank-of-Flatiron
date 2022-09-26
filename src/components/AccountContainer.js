import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  // making the url a prop fot the child components
  const url = "http://localhost:8001/transactions";
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <AddTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
        url={url}
      />
      <TransactionsList
        transactions={transactions}
        setTransactions={setTransactions}
        search={search}
        url={url}
      />
    </div>
  );
}

export default AccountContainer;