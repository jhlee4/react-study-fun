import{createStore,combineReducers} from 'redux';
import uuid from 'uuid';
import { AST_Expansion } from 'terser';

const addExpense = ({description='',note = '', createdAt=0,amount=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description:description,
        note : note,
        createdAt : createdAt,
        amount:amount
    }
});

const removeExpense = ({id})=>({
    type:'REMOVE_EXPENSE',
    id:id
});

const editExpense = ({id},updates) =>({
    type:'EDIT_EXPENSE',
    id:id,
    updates
    
});

const expensesReducerDefaultState = [];

const expensesReducer = (state =expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return [...state,action.expense]
        case 'REMOVE_EXPENSE':
        return state.filter((item)=>item.id!=action.id);
        case 'EDIT_EXPENSE':
        return state.map((item)=>{
            if(item.id === action.id){
                return{
                    ...item,
                    ...action.updates
                };
            }else{
                return item;
            }
        })
        default:
        return state;
    }
};

const setTextFilter=(text='')=>({
    type:'SET_TEXT',
    text:text
});

const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
});


const sortByDate=()=>({
    type:'SORT_BY_DATE'
});

const setStartDate=(startDate = undefined)=>({
    type:'SET_START_DATE',
    startDate:startDate
});

const setEndDate=(endDate = undefined)=>({
    type:'SET_END_DATE',
    endDate:endDate
});

const filtersReducerDefaultState = {
    text: '',
    sortBy:'date',
    startDate:'undefined',
    endDate:'undefined'
};

const filtersReducer = (state = filtersReducerDefaultState , action ) =>{
    switch(action.type){
        case 'SET_TEXT':
        return {
            ...state,
            text:action.text
        };
        case 'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy:'amount'
        }
        case 'SORT_BY_DATE':
        return{
            ...state,
            sortBy:'date'
        }
        case 'SET_START_DATE':
        return {
            ...state,
            startDate:action.startDate
        }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate:action.endDate
        }
        
      default:
      return state;
  }
};

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
   return expenses.filter((expense)=>{
       const startDateMatch = typeof startDate !=='number' || expense.createdAt>=startDate;
       const endDateMatch = typeof endDate !=='number' || expense.createdAt<=endDate;
       const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

       return startDateMatch && endDateMatch&& textMatch;
   }).sort((a,b)=>{
    if(sortBy==='date'){
        return a.createdAt < b.createdAt ? 1:-1;
    }else if(sortBy==='amount'){
        return a.amount < b.amount?1:-1;
    }
   });
};

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description:'rent',amount:1,createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:2,createdAt:200}));
const expenseThree = store.dispatch(addExpense({description:'coffee',amount:3,createdAt:40}));
const expenseFour = store.dispatch(addExpense({description:'coffee',amount:4,createdAt:1400}));
const expenseFive = store.dispatch(addExpense({description:'coffee',amount:5,createdAt:120}));
const expenseSix = store.dispatch(addExpense({description:'coffee',amount:6,createdAt:2333}));

// store.dispatch(removeExpense(expenseOne.expense));

// store.dispatch(editExpense(expenseTwo.expense,{amount:500}));

 store.dispatch(setTextFilter('ee'));

// store.dispatch(setTextFilter(''));

// store.dispatch(sortByDate());
 store.dispatch(sortByAmount());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses:[{
        id:'ewrwer',
        description:'sfasdfasfasfsdf',
        note:'sfasdfasdf',
        amount: 45343,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}

