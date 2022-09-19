import React from "react";

import ExpenseList from "../ExpenseList";
import Add from "../AddNewExpense";
import "./style.css";
import GraphChart from "../Graph/graphchart";

function ExpenseApp(){
    return(
        <div>
            <Add />
            <GraphChart />
            <ExpenseList />
        </div>
    )
}

export default ExpenseApp;