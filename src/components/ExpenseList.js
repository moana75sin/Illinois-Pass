import React from "react";

import "./ExpenseList.css";


function ExpenseList({
  expenses,
  removeExpense,
  selectExpense
}) {


  return (

    <section className="expense-list card">


      <h2>
        Expense History
      </h2>



      {
        expenses.length === 0 ? (

          <p>
            No Illinois Pass expenses available.
          </p>

        ) : (


          expenses.map((expense) => (

            <div

              className="expense-item"

              key={expense.id}

            >


              <div>

                <h3>
                  {expense.title}
                </h3>


                <p>
                  Category:
                  {" "}
                  {expense.category}
                </p>


                <p>
                  Amount:
                  $
                  {expense.amount}
                </p>


              </div>



              <div className="actions">


                <button

                  onClick={() =>
                    selectExpense(expense)
                  }

                >

                  Receipt

                </button>



                <button

                  onClick={() =>
                    removeExpense(expense.id)
                  }

                >

                  Delete

                </button>


              </div>


            </div>


          ))

        )

      }


    </section>

  );

}


export default ExpenseList;
