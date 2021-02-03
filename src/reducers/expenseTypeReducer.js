import {
    ADD_EXPENSE_TYPE,
    GET_EXPENSES_TYPES_FROM_STORAGE
}from '../actions/types'; 


export default (state = [] , action) =>{ 
    switch(action.type){

        case ADD_EXPENSE_TYPE: 
            var newState = [...state,  action.payload] ;
            localStorage.setItem("expensesTypeList", JSON.stringify(newState));               
            return newState;      

        case GET_EXPENSES_TYPES_FROM_STORAGE: 
            var expenses = JSON.parse(localStorage.getItem("expensesTypeList"));  
            if(expenses === null){ 
                expenses = [];
            }                
            return expenses ;        

        default:
            return state;
    }
}