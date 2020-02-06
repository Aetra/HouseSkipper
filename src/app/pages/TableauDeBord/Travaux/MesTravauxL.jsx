import React from 'react';
import '.././tbl.css';

class MesTravauxL extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   var redac=4;
   var valid=2;
   var soumi=1;
   var eva=0;
   var decision=6;
   var final=1;
   var exploit=6;
   var total=4+2+1+0+6+1+7;

   return(
     <div className="MesTravaux">
      <h2 className="text-bold"> Mes Travaux </h2>
      <h4 className="text-center">Total: {total} </h4>
        <hr className="hrTr"/>

      <div className="pt-4 row">
        <div className="offset-1 col-8">
          <p> Redaction </p>
          <p> Validation </p>
          <p> Soumission </p>
          <p> Evaluation </p>
          <p> Decision </p>
          <p> Finalisation </p>
          <p> Exploitation </p>
        </div>
        <div className="col-3">
          <p> {redac} </p>
          <p> {valid} </p>
          <p> {soumi} </p>
          <p> {eva} </p>
          <p> {decision} </p>
          <p>{final} </p>
          <p> {exploit} </p>
        </div>
        <div className="offset-1 col-11">
          <button className="pl-2 btn btn-outline-success">Mois</button>
          <button  className="ml-2 btn btn-outline-success">Année</button>
          <button className="ml-2 btn btn-outline-success">Tous</button>
        </div>
      </div>
    </div>
   );}
}
export default MesTravauxL;
