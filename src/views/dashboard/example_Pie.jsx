import React from "react";
import PieCustom from "../../components/charts/PieCustom";

const  Exemple_Pie = () => {

    


    const dataGraph = {
        labels: ["Palencia", "Villa Nueva", "Jalapa", "Chimaltenango", "San Marcos", "Mixco", "Mita", "Zacapa", "Quiche", "Xela"],
        datasets: [
          {
            label:['Departamentos '],
    
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 2, 25, 0.5)",
              "rgba(255, 151, 415, 0.2)",
              "rgba(255, 1, 50, 0.6)",
              "rgba(255, 14, 500, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "(rgba(255,2, 25, 0.5)",
              "rgba(255, 151, 415, 0.2)",
              "rgba(255, 1, 50, 0.6)",
              "rgba(255, 14, 500, 0.2)",
            ],
            borderWidth: 1,
            hoverBorderColor: "#FF0000",
            data: [  10, 25 , 45, 60, 75, 10, 25 , 45, 60, 75]
          },
        ],
      };
    
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          
        },
      };

    return (<>

        <PieCustom data={dataGraph} options={options}  />

    </> )
} 

export default Exemple_Pie