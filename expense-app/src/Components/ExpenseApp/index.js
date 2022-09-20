import React, { useState } from "react";

import ExpenseList from "../ExpenseList";
import FilterByYear from "../FilterByYear";
import Add from "../AddNewExpense";
import "./style.css";
import GraphChart from "../Graph/graphchart";
import ExpenseItem from "../ExpenseItem";
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
  // const setData = (tmp) => {
  //   tmp.map((item, index) => {
  //     return (
  //       <ExpenseItem
  //         key={index}
  //         year={item.year}
  //         month={item.month}
  //         day={item.day}
  //         name={item.name}
  //         amount={item.amount}
  //       />
  //     );
  //   });
  // };
  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };

  // const [change, setChange] = useState("");
  // const filterExpense = (filterYear) => {
  //   const updatedExpense = dataExpense.filter((item) => {
  //     return item.year.toString(10) === filterYear;
  //   });
  //   console.log(dataExpense);
  //   console.log(updatedExpense);
  //   // props.setData(updatedExpense);

  //   updatedExpense.map((item, index) => {
  //     return (
  //       <ExpenseItem
  //         key={index}
  //         year={item.year}
  //         month={item.month}
  //         day={item.day}
  //         name={item.name}
  //         amount={item.amount}
  //       />
  //     );
  //     });
  // };

  // const handleChange = (e) => {
  //   if (e.target.value === "All") {
  //   } else {
  //     setChange(e.target.value);
  //     console.log(change);
  //     filterExpense(change);
  //   }
  // };
  return (
    <div className="box">
      <Add handleAddExpense={addExpense} />
      <div className="child-one">
        <FilterByYear dataExpense={dataExpense} />

        {/* <div className="boss">
          <div style={{ color: "#ffffff", fontWeight: "bold" }}>
            Filter by year
          </div>
          <select
            style={{
              borderRadius: "4px",
              padding: "10px",
              fontWeight: "bold",
              border: "none",
            }}
            onChange={handleChange}
          >
            <option style={{ fontWeight: "bold" }}>All</option>
            <option style={{ fontWeight: "bold" }}>2021</option>
            <option style={{ fontWeight: "bold" }}>2022</option>
            <option style={{ fontWeight: "bold" }}>2023</option>
            <option style={{ fontWeight: "bold" }}>2024</option>
          </select>
        </div> */}
        <GraphChart dataExpense={dataExpense} />
        <ExpenseList dataExpense={dataExpense} />
      </div>
    </div>
  );
}

export default ExpenseApp;
