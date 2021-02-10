import {createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';
const theme = createMuiTheme({
    palette: {
      
      type:'light',
      primary: {
        main: green[900],//grey[900],        
        contrastText: '#fff',
      },
      secondary: {
        main: purple[400],    
        contrastText: '#fff',
      },
      alternateTextColor: green[500],
      action:{
        hover: green[100],    
      },
      divider: green[500],
      /*text: {
        primary: pink[900]
      },*/
    },
    
    typography: {
      fontFamily:'Roboto',
      fontSize: 14,
    },
    shape: {
      borderRadius: 1,
    },
    background: {
      paper: pink[900],   
      //default: '#aaaaaa',
      default: '#CCCCFF',
    },
    //revisar este : 
    overrides: {      
      /*MuiInput: {
        root: {
          color: 'white',
          
        }
      },*/
      MuiPaper:{        
        root : {
          //backgroundColor: indigo[900], //'linear-gradient(70deg, rgba(95,120,247,1) 4%, rgba(137,136,232,0.8883928571428571) 41%)', //green[50],   
          //background: 'linear-gradient(70deg, rgba(95,120,247,1) 10%, rgba(26,35,126,1) 41%)',
        },        
      },    
      /*MuiCard:{        
        root: {
                   
          /* glass*
          color: '#FFFFFF', //'#000000', //color del texto 
          borderRadius: '18px', //curva de las tarjetas
          padding: '5px',  //espacio de los bordes a la tarjeta
          background: 'rgba( 255, 255, 255, 0.2 )',      
          border: 'solid 1px rgba(255,255,255,0.3)',
          backgroudClip: 'padding-box',//'padding-box',
          backdropFilter: 'blur(40px)'
    
        }          
      },  */   
    },
  });

  export default theme;