import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import Linear from './components/charts/Linear';
import Pie from './components/charts/Pie';

import './App.css';




function App() {

  
  return (
    <>
    
    
     <NavBar /> 
     <div className="flex"> 
      <SideBar />
        <div className="content"> 
        <Routes>
            <Route path="/linear" exact={true} Component={Linear} />
            <Route path="/pie" exact={true} Component={Pie} />    
          </Routes>
        </div>
      </div>
     

      </>
    
    
    
      
    
  );
}

export default App;