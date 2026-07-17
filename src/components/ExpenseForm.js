import React, { useState } from "react";

import "./ExpenseForm.css";


function ExpenseForm({ addExpense }) {


  const [expense, setExpense] = useState({

    title: "",

    category: "",

    amount: ""

  });



  const handleChange = (event) => {

    setExpense({

      ...expense,

      [event.target.name]:
        event.target.value

    });

  };



  const handleSubmit = (event) => {

    event.preventDefault();


    if(
      !expense.title ||
      !expense.amount
    ){

      return;

    }


    addExpense(expense);


    setExpense({

      title: "",

      category: "",

      amount: ""

    });

  };



  return (

    <section className="expense-form card">

      <h2>
        Add Illinois Pass Expense
      </h2>


      <form onSubmit={handleSubmit}>


        <input

          type="text"

          name="title"

          placeholder="Expense Name"

          value={expense.title}

          onChange={handleChange}

        />


        <select

          name="category"

          value={expense.category}

          onChange={handleChange}

        >

          <option value="">
            Select Category
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Transport">
            Transport
          </option>

          <option value="Service">
            Service
          </option>


        </select>



        <input

          type="number"

          name="amount"

          placeholder="Amount"

          value={expense.amount}

          onChange={handleChange}

        />



        <button type="submit">

          Add Expense

        </button>


      </form>


    </section>

  );

}


export default ExpenseForm;
