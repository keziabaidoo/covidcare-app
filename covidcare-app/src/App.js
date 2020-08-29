import React from 'react';
import PatientDashboard from './Pages/PatientDashboard'
import {Route, Switch} from 'react-router-dom'
// import Test1 from './Pages/Test1';

class App extends React.Component{
  render(){
    return(
      <>
      <Switch>
        <Route exact path="/" component={PatientDashboard} />
        {/* <Route exact path="/" component={Test1} */}
      </Switch>
      </>
    )
  }
}
  

export default App;
