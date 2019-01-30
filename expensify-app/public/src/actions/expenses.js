import uuid from 'uuid';
export const addExpense = ({description='',note = '', createdAt=0,amount=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description:description,
        note : note,
        createdAt : createdAt,
        amount:amount
    }
});

export const removeExpense = ({id})=>({
    type:'REMOVE_EXPENSE',
    id:id
});

export const editExpense = ({id},updates) =>({
    type:'EDIT_EXPENSE',
    id:id,
    updates
});