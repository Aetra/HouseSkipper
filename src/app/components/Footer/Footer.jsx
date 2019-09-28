import React from 'react';
import './styleFooter.css';

  class Footer extends React.Component{
  render(){
   return(
     <footer className="wn-footer">
       <div className="container-fluid">
         <div className="row">
           <div className="rounded mx-auto">
           </div>
         </div>
         <hr className="hrOne"/>
         <div className="col-lg-12">
           <div className="row justify-content-center">
             <p className="text-muted">HouseSkipper 2019 - All right Reserved</p>
           </div>
         </div>
       </div>
     </footer>
   );
 }
}
export default Footer;
