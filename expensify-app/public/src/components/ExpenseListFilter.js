import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByAmount,sortByDate} from '../actions/filters';




const ExpenseListFilter = (props) => (
    <div>
    <h2>Current filter word is {props.filters.text}</h2>
    
        <input 
        type="text"
        placeholder = "Enter keyword to filter"
        onChange = {(e)=>{
            props.dispatch(setTextFilter(e.target.value))
        }}
        />
        <select 
        onChange = {(e)=>{
            props.dispatch(e.target.value==='date'?
             sortByDate()
             :sortByAmount())
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);