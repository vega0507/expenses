import React, {useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import useStyles from '../../theme/Estilos';

import { loadExpensesTypesFromStorage } from '../../actions';
import { connect } from 'react-redux';


const AdminTable = (props) =>{
    const classes = useStyles();

    useEffect(()=>{               
      props.loadExpensesTypesFromStorage();
      
    },[]); 

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell className={classes.tableHeader}>Expense Type</TableCell>
            <TableCell className={classes.tableHeader}>Expense Budget</TableCell>                       
          </TableRow>
        </TableHead>
        <TableBody>  
          {props.expensesTypesList.map((row,index) => (
            <TableRow key={index}>
              <TableCell  className={classes.tableCell} >{row.expenseType}</TableCell>
            <TableCell className={classes.tableCell}>{row.expenseBudget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};
const mapStateToProps = (state) =>{   
    return { 
      //reducers 
      expensesTypesList: state.expenseTypeReducer,
      
    };
  }
  
  export default connect(mapStateToProps, {
    //actions  
    loadExpensesTypesFromStorage  
  })(AdminTable); 
