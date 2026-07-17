import React, { useState } from "react";

import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Receipt from "./components/Receipt";

import "./App.css";


function App() {

  const [expenses, setExpenses] = useState([]);

  const [selectedExpense, setSelectedExpense] = useState(null);


  const addExpense = (expense) => {

    const newExpense = {
      id: Date.now(),
      ...expense
    };

    setExpenses([
      ...expenses,
      newExpense
    ]);

  };


  const removeExpense = (id) => {

    setExpenses(
      expenses.filter(
        expense => expense.id !== id
      )
    );

  };


  return (

    <div className="app">

      <Header />

      <main className="container">

        <ExpenseForm 
          addExpense={addExpense}
        />


        <ExpenseList

          expenses={expenses}

          removeExpense={removeExpense}

          selectExpense={setSelectedExpense}

        />


        {
          selectedExpense &&
          <Receipt 
            expense={selectedExpense}
          />
        }


      </main>

    </div>

  );

}


export default App;
