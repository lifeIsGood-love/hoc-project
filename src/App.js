import React from 'react' ;
import ClassCom from './pages/classCom'
import FunCom from './pages/funCom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom' ;

function App() {
  return (
    // <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/classCom" component={ClassCom} />
          <Route path="/funCom" component={FunCom} />
          <Redirect to={"/funCom"} />
        </Switch>
      </HashRouter>
    // </div>
  );
}

export default App;
