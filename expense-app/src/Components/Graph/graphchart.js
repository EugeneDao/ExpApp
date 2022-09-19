import React from 'react';
import GraphItem from './graphitems';
function GraphChart() {
    return ({
        // return array of items
         totalExpenseMonthly = Object.values( expenseData.reduce((totalValue,o)=>{
            totalValue[o.month]=totalValue[o.month] || {value:0, month:o.month}
            totalValue[o.month].value += o.value;
            return totalValue;
        },{}))}
    )
};
export default GraphChart;