import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseItem = (props) =>{
    console.log(props);
    return(
        <div>
        <h2>Description : {props.expense.description}</h2>
        <h2>Amount : {props.expense.amount}</h2>
        <h2>CreatedAt : {props.expense.createdAt}</h2>
        <button 
        onClick={()=>{
            props.dispatch(removeExpense(props.expense))
        }}>
        Remove Item
        </button>
        </div>
    )
};

export default connect()(ExpenseItem);