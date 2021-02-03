import { useState, useEffect} from 'react'; 
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { addExpenseType } from '../../actions';
import { connect } from 'react-redux';

const Add = (props) =>{
  const [expense,setExpense] = useState({expenseType: '', expenseBudget: '' });
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  const add = () =>{    
    if(expense.expenseType === '' || expense.expenseBudget === ''){
      setOpenAlert(true);
      setAlertMessage('You should add a expense type'); 
    }else{
      var expenseType = props.expensesTypeList
        .filter(ex => ex.expenseType.toUpperCase() === expense.expenseType.toUpperCase());
    
      if(expenseType.length > 0){
        setOpenAlert(true);
        setAlertMessage(`Expense type ${expense.expenseType} already exists `);
      }else{
        props.addExpenseType(expense);
      }
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  
  

    return(
        <Grid container  spacing={1}>
        <Grid item xs={12} sm={3}>
            <TextField
              id="expenseType"
              label="Expense Type"
              size="small"
              margin="dense"
              type="string"
              value={expense.expenseType}
              onChange={(event)=> setExpense({...expense, expenseType: event.target.value})}
            />
        </Grid>
        <Grid item  xs={12} sm={3}>
            <TextField
              id="budget"
              label="Budget"
              size="small"
              margin="dense"
              type="number"              
              value={expense.expenseBudget}
              onChange={(event)=> setExpense({...expense,expenseBudget: event.target.value})}
            />
        </Grid>
        <Grid item xs={3}>
            <Button variant="contained" color="primary" size="small" onClick={add} >
              Add 
            </Button>
            <Snackbar open={openAlert} autoHideDuration={6000} 
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              onClose={handleClose}>
              <Alert                 
                onClose={handleClose} severity="error" variant="filled" >
                {alertMessage}
              </Alert>
            </Snackbar>           
        </Grid>
        <Grid item xs={12}><br/><br/></Grid>
    </Grid>
    );
};

const mapStateToProps = (state) =>{   
  return { 
    //reducers 
    expensesTypeList: state.expenseTypeReducer, 
  };
}

export default connect(mapStateToProps, {
  //actions
  addExpenseType  
   
})(Add); 
