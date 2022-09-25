// //  //  //  //   //  //  /
// <------------------------------------------------------------->
    //  I DONT UNDERSTAND Y I WAS HAVING PROBLEM WITH POST WHEN I WAS USING THE PROP
//<-------------------------------------------------------------->
// import React, { useState } from "react";


// const url = "http://localhost:8001/transactions";
// function AddTransactionForm({ transactions, setTransactions }) {
//   const [addTransactionForm, setAddTransactionForm] = useState(
//     {
//   //   // date: date,    this doent work the page goes blank
//   //   // description: description,
//   //   // category: category,
//   //   // amount: amount,

//   //   // date,  this doesnt work also
//   //   // description,
//   //   // category,
//   //   // amount,

//     date: "",
//     description: "",
//     category: "",
//     amount: 0,
//   });

//   // onchange
//   const handleChange = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setAddTransactionForm({...addTransactionForm, [name]: value });
//   };

//   // POST
//   const postTransaction = () => {
//     fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify( addTransactionForm
//         // {
//         //   addTransactionForm :{
//         //     date: date,
//         //     description:description,
//         //     category:category,
//         //     amount: amount
//         //   }
//         // }
//         // {...addTransactionForm,
//         // date,
//         // description,
//         // category,
//         // amount}
//       ),
//     })
//       .then((respon) => respon.json())
//       .then((data) => {
//         // console.log(data + "y isnt console logging")
//         const newData = [...transactions, data];
//         // console.log("hafsa"+newData)
//         setTransactions(newData);
//       });
//   };

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     //     fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify( addTransactionForm
//         // {
//         //   addTransactionForm :{
//         //     date: date,
//         //     description:description,
//         //     category:category,
//         //     amount: amount
//         //   }
//         // }
//         // {...addTransactionForm,
//         // date,
//         // description,
//         // category,
//         // amount}
//       ),
//     })
//       .then((respon) => respon.json())
//       .then((data) => {
//         // console.log(data + "y isnt console logging")
//         const newData = [...transactions, data];
//         // console.log("hafsa"+newData)
//         setTransactions(newData);
//       });//     fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify( addTransactionForm
//         // {
//         //   addTransactionForm :{
//         //     date: date,
//         //     description:description,
//         //     category:category,
//         //     amount: amount
//         //   }
//         // }
//         // {...addTransactionForm,
//         // date,
//         // description,
//         // category,
//         // amount}
//       ),
//     })
//       .then((respon) => respon.json())
//       .then((data) => {
//         // console.log(data + "y isnt console logging")
//         const newData = [...transactions, data];
//         // console.log("hafsa"+newData)
//         setTransactions(newData);
//       });//     fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify( addTransactionForm
//         // {
//         //   addTransactionForm :{
//         //     date: date,
//         //     description:description,
//         //     category:category,
//         //     amount: amount
//         //   }
//         // }
//         // {...addTransactionForm,
//         // date,
//         // description,
//         // category,
//         // amount}
//       ),
//     })
//       .then((respon) => respon.json())
//       .then((data) => {
//         // console.log(data + "y isnt console logging")
//         const newData = [...transactions, data];
//         // console.log("hafsa"+newData)
//         setTransactions(newData);
//       });
// //    postTransaction()
//   }

//   return (
//     <div className="ui segment">
//       <form className="ui form" onSubmit={handleSubmit} >
//         <div className="inline fields">
//           <input type="date" name="date" onChange={handleChange} />
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             name="amount"
//             placeholder="Amount"
//             step="0.01"
//             onChange={handleChange}
//           />
//         </div>
//         <button className="ui button" type="submit">
//           Add Transaction
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddTransactionForm;

//<-------- THIS WAS ADDING AN EMPTY OBJECT TO THE API----------->
// <------------------------------------------------------------->


// // // //  // // // // // // // 
//<------------------------------------------------------------->
    //  IN THE BELOW POST METHOD IT WORKS BUT I FEEL ITS REPETETIVE (NOT DIY)
//<------------------------------------------------------------->
// import React, { useState } from "react";

// const url = "http://localhost:8001/transactions";
// function AddTransactionForm() {
//   //  lets try this form
//   const [date, setDate] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");

//   // POST
//   const postTransaction = () => {
//     let data = { date, description, category, amount };
//     fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((respon) => respon.json())
//       .then((data) => {
//         console.warn(data);
//       });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postTransaction();
//   };

//   return (
//     <div className="ui segment">
//       <form className="ui form" onSubmit={handleSubmit}>
//         <div className="inline fields">
//           <input
//             type="date"
//             name="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//           <input
//             type="text"
//             name="description"
//             value={description}
//             placeholder="Description"
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <input
//             type="text"
//             name="category"
//             value={category}
//             placeholder="Category"
//             onChange={(e) => setCategory(e.target.value)}
//           />
//           <input
//             type="number"
//             name="amount"
//             value={amount}
//             placeholder="Amount"
//             step="0.01"
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//         <button className="ui button" type="submit">
//           Add Transaction
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddTransactionForm;

//<------------------ there isnt a prop also -------------------->
