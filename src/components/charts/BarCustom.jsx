import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/* 
    Este componente es para crear graficas de barra vertical
    params: 
    title: Es el titulo del encabezado  de la grafica "Total de alumnos por año y meses"
    labels: 2021 
              [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte']
            2022
              [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte']
    Data: 
 
*/



function BarCustom({ data, options }) {
  return (
    <>
     <div style={{width:"3000px", height:"500px"}} className="mt-5">
      <Bar data={data} options={options}   />;
      </div>  
     </>
  ) 
}

export default BarCustom
