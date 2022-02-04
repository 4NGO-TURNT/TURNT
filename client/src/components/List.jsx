import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div id='list'>
    {/* <h4>Your Goal: </h4> */}
    {/* <select name="" id="" onChange={props.selectionItem} >
      <option value=""></option>
       <option value='outlay' >First Goal</option>
      <option value="income" >Second Goal</option>
      <option value="goals" >THird Goal</option> 
    </select> */}
    
    {/* <div>
      <h4>Total Balance: {props.solde}</h4>
      <h4>Total INCOMES: {props.totalInc}</h4>
      <h4>Total OUTLAYS: {props.totalOut}</h4>
    </div> */}
    There are {props.items.length} items.
    {props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} />
      </div>
    ))}
  </div>
);

export default List;
