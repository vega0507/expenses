import { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import useStyles from '../../theme/Estilos';
import { agregarGasto, loadExpensesListFromStorage } from '../../actions';
import { connect } from 'react-redux';

const AgregarGasto = (props) =>{
  const classes = useStyles();
  const [gasto,setGasto] = useState({name: '', value: 0});
  
  /*useEffect(()=>{
    props.loadExpensesListFromStorage();
  },[]);*/


  const guardar = () =>{
    /*const rubro = props.rubro; 
    const listaGastos = localStorage.getItem("listaGastos");    
    const listaRubro = []; 
    if(listaGastos == null){
      console.log("no hay ninguno");
      listaRubro.push(gasto);
      const nuevoGasto = { [rubro] : listaRubro};
      const nuevoObj = JSON.stringify(nuevoGasto);
      localStorage.setItem("listaGastos",nuevoObj);
    }else{
      console.log("hay alguno");
      const objAnterior = JSON.parse(localStorage.getItem("listaGastos"));
      const objAntRubro = objAnterior[rubro];
      
      if(objAntRubro === undefined){
        listaRubro.push(gasto);
        //const nuevoGasto = { [rubro] : listaRubro};
        const nuevoObj = {...objAnterior, [rubro] : listaRubro};
        
        localStorage.setItem("listaGastos",JSON.stringify(nuevoObj));
      }else{
        console.log("se encontro el rubro");
        objAntRubro.push(gasto);     
        console.log(objAntRubro);   
        const nuevoGasto = {...objAnterior, [rubro] : objAntRubro};
        console.log(nuevoGasto);
        localStorage.setItem("listaGastos", JSON.stringify(nuevoGasto));        
      }
     
    }*/
    props.agregarGasto(gasto);
  }

  const [raised,setRaised] = useState(false); 
    const toggleRaised = () => setRaised(!raised);
    return(
      <Card 
        onMouseOver={toggleRaised} 
        onMouseOut={toggleRaised} 
        raised={raised} 
        style={{height: '250px'}}
        >
        
        <CardHeader className={classes.cardHeaderColor}
          title="Add Expense" 
          titleTypographyProps={{variant:'subtitle1'}}
        />
         
        <CardContent>
          <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                  <TextField
                    id="nombreGasto"
                    label="Gasto"
                    size="small"
                    type="string"
                    value={gasto.name}
                    onChange={(event)=>{setGasto({...gasto, name: event.target.value})}}
                  />
              </Grid>
              <Grid item  xs={12} sm={12}>
                  <TextField
                    id="montoGasto"
                    label="Monto"
                    size="small"
                    type="number"
                    value={gasto.value} color="inherit"
                    onChange={(event)=>{setGasto({...gasto, value: (parseInt(event.target.value))})}}
                  />
              </Grid>
              <Grid item xs={3}>
                  <Button variant="contained" color="primary" onClick={guardar}>
                    Add {process.env.REACT_APP_VIO_NAME}
                  </Button>
              </Grid>
              <Grid item xs={12}><br/><br/></Grid>
          </Grid>
        </CardContent>
        </Card>
    );
};

const mapStateToProps = (state) =>{   
  return { 
    //reducers 
    listaGastosR: state.gastosReducer, 
  };
}

export default connect(mapStateToProps, {
  //actions
  agregarGasto//,
  //loadExpensesListFromStorage 
   
})(AgregarGasto); 