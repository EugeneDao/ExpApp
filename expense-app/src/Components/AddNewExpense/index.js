import "./style.css";
import { useState } from "react";
const Add = (props) => {
  const [check, setCheck] = useState(false);
  const open = () => {
    setCheck(true);
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
            </span>{" "}
            <input type="text" placeholder="hello"></input>
          </div>

          <div>
            <span
              style={{ fontweigh: "bold", color: "#ffffff", fontSize: "20px" }}
            >
              Amount
            </span>{" "}
            <input type="text" placeholder="lolo"></input>
          </div>
          <div>
            <span
              style={{ fontweigh: "bold", color: "#ffffff", fontSize: "20px" }}
            >
              Date
            </span>{" "}
            <input type="text" placeholder="hi"></input>
          </div>
        </div>
        <div className="container-third">
          <button style={{ background: "#862796" }}>ADD</button>
          <button>CANCEL</button>
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
