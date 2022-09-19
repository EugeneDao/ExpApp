import React, {useState} from "react";

import "./style.css";

function ExpenseItem(props){

    const convertMonth = (m) =>{
        let monthName;

        switch(m){
            case 1: monthName="January"; break;
            case 2: monthName="February"; break;
            case 3: monthName="March"; break;
            case 4: monthName="April"; break;
            case 5: monthName="May"; break;
            case 6: monthName="June"; break;
            case 7: monthName="July"; break;
            case 8: monthName="August"; break;
            case 9: monthName="September"; break;
            case 10: monthName="October"; break;
            case 11: monthName="November"; break;
            case 12: monthName="December"; break;
        }

        return monthName;
    }

    return (
        <div className="expense-item">
            
            <span className="date">
                <h2 className="year">{props.year}</h2>
                <h2 className="month">{convertMonth(props.month)}</h2>
                <h1 className="day">{props.day}</h1>
            </span>

            <span className="title">{props.title}</span>

            <span className="amount">$ {props.amount}</span>
        </div>
    );
};

export default ExpenseItem;