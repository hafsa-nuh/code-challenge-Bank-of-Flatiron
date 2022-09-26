import React, { useState } from "react";

function AddTransactionForm({ transactions, setTransactions, url }) {
  // console.log(transactions);
  // leaving the object values blank
  const [addTransactionForm, setAddTransactionForm] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // onchange
  const handleChange = (e) => {
    // spreading and adding new object
    setAddTransactionForm({
      ...addTransactionForm,
      // my error was not targeting the name
      [e.target.name]: e.target.value,
    });
  };

  // POST method inside the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addTransactionForm),
    })
      .then((respon) => respon.json())
      .then((data) => {
        // console.log(data + "y isnt console logging")
        const newData = [...transactions, data];
        // console.log("hafsa"+newData)
        setTransactions(newData);
      });
    // reset() method == to clear the values of all input fields in the form.
    e.target.reset();
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} />
          <input
            type="text"
            name="description"
            // value= {description}
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;