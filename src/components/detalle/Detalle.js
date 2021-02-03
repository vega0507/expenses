import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AgregarGasto from './AgregarGasto';
import ListaGastos from './ListaGastos';
import Grafico2 from './Grafico2';
import ExpenseSummary from './ExpenseSummary';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const Detalle = (props) =>{   

    return(
        <Paper style={{height:"100vh", width:"100vw" }}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <center>
                <Typography variant="h4" style={{color: 'white'}}>
                    {props.selectedExpense.expenseType}
                </Typography>
                </center>
                <br/>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={10}>                
                <Grid container spacing={1}>
                    <Grid item  xs={12} sm={6}>
                        <AgregarGasto rubro={localStorage.getItem('selectedCard')}/>
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <ExpenseSummary/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={12}><br/></Grid>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <ListaGastos/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grafico2/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}/>            
        </Grid>
        </Paper>
    );
};
const mapStateToProps = (state) =>{   
    return { 
      //reducers 
      selectedExpense: state.gastosReducer.categoriaSeleccionada,       
    };
}
  
  export default connect(mapStateToProps, {
    
  })(Detalle); 

