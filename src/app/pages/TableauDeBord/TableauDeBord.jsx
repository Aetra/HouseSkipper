import React from 'react';
import MesTravauxL from './Travaux/MesTravauxL';
import AlertesB from './Alertes/AlertesB';
import DepenceCT from './Depences/DepenceCT';
import CompetencesCB from './Competences/CompetencesCB';
import InterlocuteursR from './Interlocuteurs/InterlocuteursR';
import './tbl.css';

class TableauDeBord extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   var b=230430430;

   return(
     <div className="pl-4 mt-4 PtableauBord container-fluid">
       <div className= "firstrow row">

           <div className="gradient-border mtt col-3">
               <MesTravauxL/>
           </div>

            <div className="col-6">
              <div className="mb-2 gradient-border rdm">
                <DepenceCT/>
              </div>
              <div className="gradient-border mc">
                <CompetencesCB/>
              </div>
            </div>
           <div className="gradient-border mi col-3">
             <InterlocuteursR/>
           </div>
       </div>


       <div className="mt-2 row">
         <div className="gradient-border ma mt-2 col-9">
           <AlertesB/>
         </div>
      </div>
    </div>
   );}
}
export default TableauDeBord;
