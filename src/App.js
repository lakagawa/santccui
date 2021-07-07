import logo from './logo.svg';
import './App.css';
import 'materialize-css';
import { Switch, Route, Redirect, NavLink} from 'react-router-dom'
import PatientList from './containers/PatientList';
import Patient from './containers/Patient';
import Login from './containers/Login'
import PatientCad from './containers/PatientCad';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"} exact component={Login}></Route>
        <Route path={"/cadastro"} exact component={PatientCad}></Route>
        <Route path={"/"} exact component={PatientList}></Route>
        <Route path={"/patient/:patient"} exact component={Patient}></Route>
        <Redirect to={"/"}></Redirect>
      </Switch>

    </div>
  );
}

export default App;
