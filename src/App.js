
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

function App() {
  return (
    <>
    <ClothesState>
      <Router>
        <Header/>
      
      <Switch>
        <Route exact path="/iniciar-sesion" component={Login}/>
        <Route exact path="/crear-cuenta" component={Signup}/>
        <Route exact path="/prendas/crear" component={CreateClothe}/>
        <Route exact path="/prendas" component={Clothe}/>
        <Route exact path="/" component={Home}/> 

      </Switch>
     </Router>
     </ClothesState>
    </> 
  );
}

export default App;
