import {
    ADD_EXPENSE_TYPE,
    GET_EXPENSES_TYPES_FROM_STORAGE,
    AGREGAR_GASTO,
    CARGAR_GASTOS,
    SELECCIONAR_CATEGORIA,
    GET_EXPENSES_LIST_FROM_STORAGE
}from './types'; 

export const addExpenseType = (expense) => {     
    return { 
        type: ADD_EXPENSE_TYPE, 
        payload: expense 
    };
};

export const loadExpensesTypesFromStorage = (expenses) => {
    return { 
        type: GET_EXPENSES_TYPES_FROM_STORAGE, 
        payload: expenses 
    };
};


export const agregarGasto = (gasto) => {     
    return { 
        type: AGREGAR_GASTO, 
        payload: gasto 
    };
};

export const seleccionarCategoria = (categoria) => {         
    return { 
        type: SELECCIONAR_CATEGORIA, 
        payload: categoria 
    };
};

export const loadExpensesListFromStorage = (expenses) => {
    return { 
        type: GET_EXPENSES_LIST_FROM_STORAGE, 
        payload: expenses 
    };
};