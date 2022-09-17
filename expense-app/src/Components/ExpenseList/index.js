import React, {useState} from "react";

import "./style.css";
import ExpenseItem from "../ExpenseItem";

function ExpenseList(){
    const [expenses,setExpenses] = useState ([
        { year: 2022, month: "January", day: 16, title: "Bao Trà Sữa", amount: 50 },
        { year: 2022, month: "October", day: 10, title: "Thắng Thì Bao", amount: 75 },
        { year: 2022, month: "May", day: 8, title: "Không Thắng Thì Cũng Bao", amount: 100 },
    ])

    const handleChangeList = (item) => {
        setExpenses([...expenses,item]);
    }

    return (
        <div>
            {/* filter-theo-year-neu-co-:D */}
            {/* chen-graph-dzo-day-ne */}
            {expenses}
        </div>
    )
}

export default ExpenseList