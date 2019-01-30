import React from 'react';
import ReactDOM from'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense,} from './actions/expenses';
import {setTextFilter,} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({
    type:'ADD_EXPENSE',
    description:'Water bill',
    amount:300,
    createdAt:1223
}));
store.dispatch(addExpense({
    type:'ADD_EXPENSE',
    description:'Gas bill',
    amount:8700,
    createdAt:123123
}));
store.dispatch(addExpense({
    type:'ADD_EXPENSE',
    description:'coffee',
    amount:1300,
    createdAt:2523420
}));
store.dispatch(addExpense({
    type:'ADD_EXPENSE',
    description:'tea',
    amount:5300,
    createdAt:1423
}));
store.dispatch(addExpense({
    type:'ADD_EXPENSE',
    description:'chocolate',
    amount:1200,
    createdAt:2222
}));


const visible = getVisibleExpenses(store.getState().expenses,store.getState().filters);

console.log(visible);

const jsx = (
    <Provider store = {store}>
      <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

