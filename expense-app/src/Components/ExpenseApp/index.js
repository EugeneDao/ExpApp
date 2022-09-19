import React, { useState } from "react";

import ExpenseList from "../ExpenseList";
import Add from "../AddNewExpense";
import "./style.css";
import GraphChart from "../Graph/graphchart";

function ExpenseApp(props) {
  const [dataExpense, setDataExpense] = useState([]);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const open = () => {
    setCheck(true);
  };
  const close = () => {
    setCheck(false);
  };
  const addExpense = (item) => {
    setDataExpense([...dataExpense, item]);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <Add handleAddExpense={addExpense} />
      <GraphChart dataExpense={dataExpense} />
      <ExpenseList dataExpense={dataExpense} />
    </div>
  );
}

export default ExpenseApp;
