import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import Linear from "./components/charts/Linear";
import Pie from "./components/charts/PieCustom";

import "./App.css";
const labelsPie = [
  "Palencia",
  "Villa Nueva",
  "Jalapa",
  "Chimaltenango",
  "San Marcos",
  "Mixco",
  "Mita",
  "Zacapa",
  "Quiche",
  "Xela",
];

const dataPie = [50, 140, 600, 750, 1500, 1200, 900, 250, 750, 600];
function App() {
  return (
    <>
      <NavBar />
      <div className='flex'>
        <SideBar />
        <div className='content'>
          <Routes>
            <Route path='/linear' exact={true} Component={Linear} />
            <Route
              path='/pie'
              exact={true}
              Component={Pie}
              title={"Departamento"}
              labels={labelsPie}
              data={dataPie}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
