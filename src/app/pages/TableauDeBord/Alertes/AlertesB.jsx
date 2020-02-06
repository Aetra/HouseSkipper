import React from 'react';
import LightAlertes from './LightAlertes';
import '.././tbl.css';

class AlertesB extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   return(
     <div className="MesAlertes">
       <h2 className="text-bold"> Mes Alertes </h2>
       <div className="row">
        <div className="offset-3  col-2">
          <LightAlertes/>
        </div>
        <div className="col-2">
          <LightAlertes/>
        </div>
        <div className="col-2">
          <LightAlertes/>
        </div>
        <div className="col-2">
          <LightAlertes/>
        </div>
      </div>
      <div className="pt-3 row">
        <div className="offset-3 col-2">
          <p className="">Alerte soumission</p>
        </div>
        <div className="col-2">
          <p>Alerte Evaluation</p>
        </div>
        <div className="col-2">
          <p>Alerte Evaluation</p>
        </div>
        <div className="col-2">
          <p> Alerte Evaluation</p>
        </div>
      </div>
    </div>
   );}
}
export default AlertesB;
