import React from 'react';
import '.././tbl.css';

class InterlocuteursR extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   return(
     <div className="interlocuteurs">
      <h2 className="text-bold">Mes interlocuteurs </h2>
    </div>
   );}
}
export default InterlocuteursR;
