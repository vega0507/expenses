import {
    AGREGAR_GASTO,
    SELECCIONAR_CATEGORIA,
    GET_EXPENSES_LIST_FROM_STORAGE
}from '../actions/types'; 


export default (state = { gastos: {}, categoriaSeleccionada: ''} , action) =>{  
    switch(action.type){

        case SELECCIONAR_CATEGORIA:                
            return {...state, categoriaSeleccionada: action.payload }; 

        case AGREGAR_GASTO:  
            //a la categoria seleccionada se le debe agregar el nuevo gasto
            var listaGastosRubro = [];            
            var gastos = {};
            var spend = 0;
            if(state.gastos === undefined){ 
                listaGastosRubro.push(action.payload);                
                gastos = {[state.categoriaSeleccionada.expenseType]: listaGastosRubro};
               
            }else{
                //ya hay gastos pero no de la categoria seleccionada 
                if(state.gastos === null || state.gastos[state.categoriaSeleccionada.expenseType] === undefined){
                    
                    listaGastosRubro.push(action.payload);  
                    gastos = {...state.gastos, [state.categoriaSeleccionada.expenseType]: listaGastosRubro };
                    
                }else{
                    listaGastosRubro = state.gastos[state.categoriaSeleccionada.expenseType];
                    listaGastosRubro.push(action.payload);                
                    gastos = {[state.categoriaSeleccionada.expenseType]: listaGastosRubro};

                }      
               

            }localStorage.setItem("expensesList", JSON.stringify(gastos)); 
            return {...state, gastos : gastos };

        /*case CARGAR_GASTOS:                
            return {...state, gastos: action.payload }; 
*/
        case GET_EXPENSES_LIST_FROM_STORAGE:
            var gastos = JSON.parse(localStorage.getItem("expensesList"));  
            if(gastos === null){ 
                gastos = {};
            }              
            return {...state, gastos} ; 
        default:
            return state;
    }
}

