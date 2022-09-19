import React from "react";
function GraphItem(props) {
  const max = 5000;
  console.log((props.amount / 5000) * 178);
  return (
    <div className="graph">
      <div
        style={{
          backgroundColor: "#E1CAE4",
          height: "178px",
          width: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            backgroundColor: "#3D15A9",
            height: `50px`,
            width: "20px",       
            borderRadius: "10px",
            margins: 0,
          }}
        ></div>
      </div>
    </div>
  );
}
export default GraphItem;
