import React from "react";

import "./Receipt.css";


function Receipt({ expense }) {


  return (

    <section className="receipt card">


      <h2>
        Illinois Pass Receipt
      </h2>


      <div className="receipt-box">


        <p>
          <strong>
            Expense:
          </strong>

          {" "}
          {expense.title}

        </p>



        <p>

          <strong>
            Category:
          </strong>

          {" "}
          {expense.category}

        </p>



        <p>

          <strong>
            Payment:
          </strong>

          $
          {expense.amount}

        </p>



        <p>

          <strong>
            Status:
          </strong>

          Completed

        </p>


      </div>


    </section>

  );

}


export default Receipt;
