
import './App.css';
import{
  Switch,
  BrowserRouter as Router,
  Route
}from "react-router-dom"

import Header from './components/Layout/Header';
import CreateClothe from './components/CreateClothe';
import Login from './components/Login';
import Home from './components/Home';
import Clothe from './components/Clothe';
import Signup from './components/Signup';
import ClothesState from './context/Clothes/ClothesState';
import SingleClothe from './components/SingleClothe';
import UsersState from './context/Users/UsersState';
import AuthRoute from './components/Routes/AuthRoute';

function App() {
  return (
    <>
    <UsersState>
    <ClothesState>
      <Router>
        <Header/>
      
      <Switch>

        <AuthRoute exact path="/iniciar-sesion" component={Login}/>
        <AuthRoute exact path="/crear-cuenta" component={Signup}/>
        <Route exact path="/prendas/crear" component={CreateClothe}/>
        <Route exact path="/prendas/:id" component={SingleClothe}/>
        <Route exact path="/prendas" component={Clothe}/>
        <Route exact path="/" component={Home}/> 

      </Switch>
     </Router>
     </ClothesState>
     </UsersState>
    </> 
  );
}

export default App;
