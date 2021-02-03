import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import theme from './theme/theme';
import { ThemeProvider} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import {BrowserRouter as Router} from 'react-router-dom';
//Rutas 
import { Route, Switch  } from 'react-router-dom';
import Detalle from './components/detalle/Detalle';
import AdminMain from './components/Admin/AdminMain';

//Redux
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

const componseEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers,componseEnhancers());

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <ThemeProvider theme={theme}>
    <Paper style={{height:"100vh", width:"100%"}}>
      
      <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/detalle" exact component={Detalle}/>
          <Route path="/admin" exact component={AdminMain}/>
        </Switch>
    </Paper>
  </ThemeProvider>  
  </Router>
  </Provider>,
  document.getElementById('root')
);

//npm install recharts