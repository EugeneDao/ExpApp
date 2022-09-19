import React, {useState} from "react";

import "./style.css";
import ExpenseItem from "../ExpenseItem";

function ExpenseList(props){

    return (
        <div className="expense-list">
            {props.dataExpense.map(
             (item, index)=>
                {
                  return(
                    <ExpenseItem
                        key={index}
                        year={item.year}
                        month={item.month}
                        day={item.day}
                        title={item.title}
                        amount={item.amount}
                    />
                  );
                }
                         )
            }
            
        </div>
    );
}

export default ExpenseList