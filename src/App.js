
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
import PublicRoute from "./components/Routes/PublicRoute"
import Profile from './components/User/Profile';
import PrivateRoute from "./components/Routes/PrivateRoute"

function App() {
  return (
    <>
    <UsersState>
    <ClothesState>
      <Router>
        <Header/>
      
      <Switch>
        <PrivateRoute exact path="/perfil" component={Profile}/>
        <AuthRoute exact path="/iniciar-sesion" component={Login}/>
        <AuthRoute exact path="/crear-cuenta" component={Signup}/>
        <PublicRoute exact path="/prendas/crear" component={CreateClothe}/>
        <PublicRoute exact path="/prendas/:id" component={SingleClothe}/>
        <PublicRoute exact path="/prendas" component={Clothe}/>
        <PublicRoute exact path="/" component={Home}/> 

      </Switch>
     </Router>
     </ClothesState>
     </UsersState>
    </> 
  );
}

export default App;
