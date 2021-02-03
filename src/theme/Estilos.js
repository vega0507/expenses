import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles( theme => ({    
    cardHeaderColor: {      
        //backgroundColor: theme.palette.primary.main,           
        fontSize: 15, color: theme.palette.common.white
      },
      table: {
        minWidth: 450,    
      },
      tableHeader:{
        //backgroundColor: theme.palette.primary.main,
        //color: theme.palette.common.white,
        fontSize: 14,
        color: theme.palette.common.white, 
        //borderStyle: 'solid',        
        //borderWidth: '0px 1px 1px 1px',
        borderColor: theme.palette.common.white,       
      },
      tableCell:{
        borderStyle: 'solid',        
        borderWidth: '0px 0px 1px 0px',
        borderColor: theme.palette.common.white,  
        color: theme.palette.common.white,      
        overflow: 'hidden',
      },
      cardHeader:{
        color: theme.palette.common.white,  
        fontStyle: 'italic',
        borderStyle: 'solid',        
        borderWidth: '0px 0px 1px 0px',
      },
      card:{
        borderStyle: 'inset',        
        //borderWidth: '1px 0px 3px 4px',
        //borderColor: 'grey',//theme.palette.primary.main, 
        //boxShadow: '1px 2px 1px grey',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }

  }));

  export default useStyles;