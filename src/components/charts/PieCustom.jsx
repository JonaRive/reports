import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

/*
  Este componente es para crear graficas pie
  params:
  title: este es el titulo del encabezado de la grafica "Alumnos por centro de ayuda"
  labels: es una array de etiquetas para cada parte de la grafica
    Ej:
    [ "Palencia", "Villa Nueva", "Jalapa", "Chimaltenango", "San Marcos", "Mixco", "Mita", "Zacapa", "Quiche", "Xela",]
    
  data:
*/
function PieCustom({ data, options}) {
 

  return (
    <div className='mt-3'>
        <Pie  data={data} options={options}  />
    </div>  
  );
}

export default PieCustom;
