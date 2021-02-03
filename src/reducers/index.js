import { combineReducers } from 'redux';
import gastosReducer from './gastosReducer';
import expenseTypeReducer from './expenseTypeReducer';
/*Esto es lo que tiene el state y quien me lo puede dar o modificar(que serian los reducers) 
    son nombre:valor, nombre el que querramos darle y valor corresponde al reducer, 
    escribir limitesReducer:limitesReducer se puede abreviar solamente escribiendo limitesReducer
*/
export default combineReducers({
    gastosReducer,
    expenseTypeReducer
});