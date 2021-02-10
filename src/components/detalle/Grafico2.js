import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {
  PieChart, Pie, Cell,Tooltip
} from 'recharts';
import { seleccionarCategoria, loadExpensesListFromStorage } from '../../actions';
import { connect } from 'react-redux';
import useStyles from '../../theme/Estilos';


const COLORS = ['#66ffcc', '#1ab2ff', '#2db300', '#0080ff'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


  const getIntroOfPage = (label) => {
    if (label === 'Group A') {
      return "Page A is about men's clothing";
    } if (label === 'Group B') {
      return "Page B is about women's dress";
    } if (label === 'Group C') {
      return "Page C is about women's bag";
    } if (label === 'Group D') {
      return 'Page D is about household goods';
    } if (label === 'Group E') {
      return 'Page E is about food';
    } if (label === 'Group F') {
      return 'Page F is about baby food';
    }
  };
  
  const CustomTooltip = ({ active, payload, label }) => { 
  
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here. {label}</p>
        </div>
      );
    }
  
    return null;
  };

//export default class Example extends PureComponent {
const Example = (props) =>{
  const  jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
  const classes = useStyles();
  const expenseTypeSelected = props.selectedExpense.expenseType;
  
  
  return (
    <Card style={{height: '300px', width: '590px'}}>
      <CardHeader className={classes.cardHeaderColor}
        titleTypographyProps={{variant:'subtitle1'}}
        title={`Expenses summary in  ${expenseTypeSelected}`}
      />     
      <CardContent>
        <PieChart width={475} height={225}>                  
          <Pie
            data={ props.gastos !== null && props.gastos[expenseTypeSelected] !== undefined 
                    && props.gastos[expenseTypeSelected] !==null ? 
                    props.gastos[expenseTypeSelected] : []
                  }
            cx={250}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {props.gastos !== null && props.gastos[expenseTypeSelected] !== undefined && 
            props.gastos[expenseTypeSelected] !==null  && 
            props.gastos[expenseTypeSelected].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip content={<CustomTooltip />}/>
        </PieChart>
      </CardContent>
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
  seleccionarCategoria,
  loadExpensesListFromStorage 
   
})(Example); 
