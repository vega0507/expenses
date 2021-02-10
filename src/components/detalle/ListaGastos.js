import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { seleccionarCategoria, loadExpensesListFromStorage } from '../../actions';
import { connect } from 'react-redux';
import useStyles from '../../theme/Estilos';
import Card from '@material-ui/core/Card';
import TablePagination from '@material-ui/core/TablePagination';
/*const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 450,
    //boxShadow: '5px 10px 8px 10px #888888',
  },
  header:{
    color: theme.palette.common.white,//color del texto
    backgroundColor: theme.palette.primary.main
  }
}));*/

function BasicTable(props) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  var rubro = props.selectedExpense.expenseType;  
   


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card style={{height: '560px', width: "725px"}}>
    <TableContainer style={{height:'560px', overflow: 'auto'}}>
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell className={classes.tableHeader}>Gasto</TableCell>
            <TableCell className={classes.tableHeader}>Monto</TableCell>
            <TableCell className={classes.tableHeader}>%</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody > 
          { props.gastos[rubro] !== undefined && 
            props.gastos[rubro] !==null  ? props.gastos[rubro].map((row, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCell} >
                {row.name}
              </TableCell>
              <TableCell className={classes.tableCell} >{row.name}</TableCell>
              <TableCell className={classes.tableCell} >{row.value}</TableCell>              
            </TableRow>
          )) : "No data to display" }
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Card>
  );
}
const mapStateToProps = (state) =>{   
  return { 
    //reducers 
    selectedExpense: state.gastosReducer.categoriaSeleccionada,
    gastos: state.gastosReducer.gastos
  };
}

export default connect(mapStateToProps, {
  //actions
  seleccionarCategoria//,
  //loadExpensesListFromStorage 
   
})(BasicTable); 