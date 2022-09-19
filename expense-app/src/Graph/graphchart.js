import React from 'react';
import GraphItem from './graphitems';
import Add from '../AddNewExpense';
function GraphChart(){

        const totalExpenseMonthly = Object.values( dataexpense.reduce((totalValue,o)=>{
            totalValue[o.month]=totalValue[o.month] || {value:0, month:o.month}
            totalValue[o.month].value += o.value;
            return totalExpenseMonthly;

        },{}))
        return (
            
            totalExpenseMonthly.map((item) => {
              return (
                <GraphItem
                percentage={item.value}
                />
              );
            }))
        }

export default GraphChart;