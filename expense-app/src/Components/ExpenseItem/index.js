import React, { useState } from "react";

import "./style.css";

function ExpenseItem(props) {
  const handleMouseEnter = () => {};
  const handleOnClickEdit = () => {};
  const handleOnClickRemove = () => {};
  return (
    <div className="expense-item" onMouseEnter={handleMouseEnter}>
      <span className="date">
        <h2 className="year">{props.year}</h2>
        <h2 className="month">{props.month}</h2>
        <h1 className="day">{props.day}</h1>
      </span>

      <span className="title">{props.title}</span>

      <span className="amount">$ {props.amount}</span>

      <i className="edit-button" onClick={handleOnClickEdit}>
        EDIT
      </i>
      <i className="remove-button" onClick={handleOnClickRemove}>
        REMOVE
      </i>
    </div>
  );
}

export default ExpenseItem;
