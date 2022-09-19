import React, {useState} from "react";

import "./style.css";
import ExpenseItem from "../ExpenseItem";

function ExpenseList(){
    const [expenses,setExpenses] = useState ([
        { year: 2022, month: 1, day: 16, title: "Bao Trà Sữa", amount: 50 },
        { year: 2022, month: 10, day: 10, title: "Thắng Thì Bao", amount: 75 },
        { year: 2022, month: 5, day: 8, title: "Không Thắng Thì Cũng Bao", amount: 100 },
    ])

    const handleChangeList = (item) => {
        setExpenses([...expenses, item]);
    };

    return (
        <div className="expense-list">
            {/* filter-theo-year-neu-co-:D */}
            {/* chen-graph-dzo-day-ne */}
            
            {expenses.map(
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