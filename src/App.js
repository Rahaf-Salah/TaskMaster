import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Todos from './components/Todos';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Errorpage from "./components/Errorpage";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
       <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/home"  Component={Home}/>
            <Route path="/signup"  Component={Signup}/>
            <Route path='/login' Component={Login} />
            <Route path='/todos' Component={Todos}/>
            <Route path="*" Component={Errorpage}/>
        </Routes>
        <Footer/>
      </div>
    </Router>        
  );
}

export default App;
