import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";


import Exemple_Bar from "./views/dashboard/example_Bar";
import Exemple_Line from "./views/dashboard/example_Line";
import Exemple_Pie from "./views/dashboard/example_Pie";

import "./App.css";
import Exemple_Area from "./views/dashboard/example_Area";





function App() {
  return (
    <>
      <NavBar />
      <div className='flex'>
      <SideBar />
      <div className='content'>
          <Routes>
            <Route path='/line' exact={true}   Component={Exemple_Line} />
            <Route path='/pie'  exact={true}  Component={Exemple_Pie}/>
            <Route path='/bar'  exact={true}  Component={Exemple_Bar}/>
            <Route path='/area' exact={true}   Component={Exemple_Area} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
