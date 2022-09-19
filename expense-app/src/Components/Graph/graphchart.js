import React from "react";
import GraphItem from "./graphitems";
function GraphChart(props) {
  const totalExpenseMonthly = Object.values(
    props.dataExpense.reduce((totalValue, o) => {
      totalValue[o.month] = totalValue[o.month] || { amount: 0, month: o.month };
      totalValue[o.month].amount += Number(o.amount);
      return totalValue;
    }, {})
  );

  console.log(totalExpenseMonthly);
  return totalExpenseMonthly.map((item, index) => {
    return <GraphItem key={index} percentage={item.amount} />;
  });
}

export default GraphChart;
