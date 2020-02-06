import React from 'react';
import '.././tbl.css';
import Chart from "chart.js";
import { Doughnut } from 'react-chartjs-2';
class DepenceCT extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };

}
  componentDidMount() {
    }
 render(){

   const data = {
     labels:['Gros Oeuvre','Second Oeuvre', 'Petit Travaux','Aménagement extérieur'],
      datasets: [{
      data: [
        5000,
        6500,
        2000,
        10000],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green'
      ]
    }],
  };
   return(
     <div className="MesDepences">
      <h2 className="text-bold"> Répartition de mes dépences </h2>
      <div className="mx-auto mychart col-12">
             <Doughnut data={data}
               options={{
          responsive: true,
          maintainAspectRatio: true,
        }} />
      </div>
      <div className="col-12">
        <button className="pl-2 btn btn-outline-success">Mois</button>
        <button  className="ml-2 btn btn-outline-success">Année</button>
        <button className="ml-2 btn btn-outline-success">Tous</button>

      </div>

    </div>
   );}
}
export default DepenceCT;
