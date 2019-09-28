import React from 'react';

import './tbl.css';

class Blocks extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   return(
     <div className="PtableauBord">
       <div className="mt-3 row">
           <div className="mtt col-4">
           </div>
            <div className="rdm col-5">
            </div>
           <div className="mi col-3">
           </div>
       </div>
       <div className="row">
         <div className="mc mt-3 offset-4 col-5">
         </div>
       </div>

       <div className="row">
         <div className="ma mt-2 col-9">
         </div>
      </div>

    </div>
   );}
}
export default Blocks;
