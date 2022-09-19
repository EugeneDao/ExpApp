import React from "react";

import ExpenseList from "../ExpenseList";
import Add from "../AddNewExpense";
import "./style.css";

function ExpenseApp(){
    return(
        <div>
            <Add />
            <ExpenseList />
        </div>
    )
}

export default ExpenseApp;