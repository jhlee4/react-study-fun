import React from 'react';
import{connect} from 'react-redux';
import ExpenseItem from './ExpenseLIstItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) =>(
    <div>
    <h1>Expense List</h1>
    {
        props.expenses.map((expense)=><ExpenseItem expense = {expense}/>)
    }
    </div>
)

const mapStateToProps = (state) =>{
    return {
        expenses:selectExpenses(state.expenses,state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList);