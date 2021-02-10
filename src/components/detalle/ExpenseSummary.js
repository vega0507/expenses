import React, { useEffect, useState } from 'react'; 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../theme/Estilos';
import Typography from '@material-ui/core/Typography';
import { seleccionarCategoria, cargarGastos, loadExpensesFromStorage } from '../../actions';
import { connect } from 'react-redux';

const ExpenseSummary = (props) =>{
  const classes = useStyles();  
  const [spendAmount, setSpendAmount] = useState(0);
  const [pendingAmount, setPendingAmount] = useState(0);

  useEffect(()=>{
    var budget = props.selectedExpense.expenseBudget; 
    var spend = 0; 
    var pending = 0 ; 
    
    if(props.gastos[props.selectedExpense.expenseType] !== undefined ){
      props.gastos[props.selectedExpense.expenseType].map((g, index) => ( spend = spend + g.value))
      setSpendAmount(spend);
    }

    pending = budget - spend ;
    setPendingAmount(pending);
  },[props.gastos]);

  return(
    <Card style={{height: '250px'}}>
        <CardHeader title="Expense Summary" className={classes.cardHeaderColor}
          titleTypographyProps={{variant:'subtitle1'}}
        />          
          
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>                  
                  <Typography  >
                      Budget: $ {props.selectedExpense.expenseBudget}
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                    <Typography >
                        Spend: $ {spendAmount}
                    </Typography>
              </Grid>
              <Grid item xs={12}>                 
                 <Typography >
                   Pending: $ {pendingAmount}
                </Typography>
              </Grid>              
          </Grid>
        </CardContent>
        </Card>
    );
};

const mapStateToProps = (state) =>{   
    return { 
      //reducers 
      selectedExpense: state.gastosReducer.categoriaSeleccionada,       
      gastos: state.gastosReducer.gastos
    };
}
  
  export default connect(mapStateToProps, {
    
  })(ExpenseSummary); 
 