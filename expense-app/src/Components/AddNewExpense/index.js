import "./style.css";
import React, { useState } from "react";
const Add = (props) => {
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
  const addExpense = () => {
    if (name && date && amount) {
      let ngay, thang, nam;
      let tmp = date;
      let arr = tmp.split("-");
      nam = Number.parseInt(arr[0], 10);
      thang = Number.parseInt(arr[1], 10);
      ngay = Number.parseInt(arr[2], 10);
      const newItem = {
        name: name,
        amount: amount,
        day: ngay,
        month: thang,
        year: nam,
      };

      props.handleAddExpense(newItem);

      setName("");
      setAmount("");
      setDate("");
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const ChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const ChangeDate = (e) => {
    setDate(e.target.value);
  };

  if (check) {
    return (
      <div>
        <div className="container-second">
          <div>
            <span
              style={{ fontweigh: "bold", color: "#ffffff", fontSize: "20px" }}
            >
              Name
            </span>
            <input
              type="text"
              placeholder="hello"
              onChange={changeName}
              value={name}
            ></input>
          </div>

          <div>
            <span
              style={{ fontweigh: "bold", color: "#ffffff", fontSize: "20px" }}
            >
              Amount
            </span>
            <input
              type="text"
              placeholder="lolo"
              onChange={ChangeAmount}
              value={amount}
            ></input>
          </div>
          <div>
            <span
              style={{ fontweigh: "bold", color: "#ffffff", fontSize: "20px" }}
            >
              Date
            </span>
            <input
              type="date"
              placeholder="hi"
              onChange={ChangeDate}
              value={date}
            ></input>
          </div>
        </div>

        <div className="container-third">
          <button style={{ background: "#862796" }} onClick={addExpense}>
            ADD
          </button>
          <button onClick={close}>CANCEL</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div onClick={open} className="child">
        ADD NEW EXPENSE
      </div>
    </div>
  );
};
export default Add;
