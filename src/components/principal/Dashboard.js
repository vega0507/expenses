import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Rutas 
import { Link  } from 'react-router-dom';
import { seleccionarCategoria, 
    loadExpensesListFromStorage, 
    loadExpensesTypesFromStorage } from '../../actions';
import { connect } from 'react-redux';

const useStyles = makeStyles( theme => ({
    root: {
      //maxWidth: 800,
      width: "200px",      
      height:"200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.primary.main,
      /* glass*/
      //color: '#FFFFFF', //'#000000', //color del texto 
      borderRadius: '18px', //curva de las tarjetas
      padding: '5px',  //espacio de los bordes a la tarjeta
      background: 'rgba( 255, 255, 255, 0.2 )',      
      border: 'solid 1px rgba(255,255,255,0.3)',
      backgroudClip: 'padding-box',//'padding-box',
      backdropFilter: 'blur(40px)'

    }    
}));

const Dashboard = (props) =>{
    const classes = useStyles();
    
    useEffect(()=>{          
        //loading expenses types      
        props.loadExpensesTypesFromStorage();

        //loading expenses conf         
        props.loadExpensesListFromStorage();
        
    },[]);

    const onClick = (selectedCard) =>{        
        localStorage.setItem('selectedCard', JSON.stringify(selectedCard));        
        props.seleccionarCategoria(selectedCard);
    }

    return (  
        <Grid container spacing={2}>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <CardActionArea component={Link} to="/admin">
                            <Card key="0" className={classes.root} 
                                onClick={()=> onClick('Admin')} >   
                                <CardHeader
                                    component="div"
                                    title="Admin" style={{color: 'white'}}
                                />      
                            </Card>
                        </CardActionArea>                        
                    </Grid>
                    {
                        props.expensesTypesList.map((punto, index) =>(
                        <Grid item xs={6} sm={3}>
                        <CardActionArea component={Link} to="/detalle">
                            <Card key={index} className={classes.root} 
                                onClick={()=> onClick(punto)} > 
                                <CardHeader
                                    component="div"
                                    title={punto.expenseType} style={{color: 'white'}}
                                />      
                            </Card>
                        </CardActionArea>                        
                        </Grid>
                    
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item xs={1}/>
        </Grid> 
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
    seleccionarCategoria,
    loadExpensesTypesFromStorage,
    loadExpensesListFromStorage
  })(Dashboard); 
