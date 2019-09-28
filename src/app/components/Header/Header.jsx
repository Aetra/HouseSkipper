import React from 'react';
import './styleHeader.css';
import imgMaison from './img/ImgMaison.png'
  class Header extends React.Component{

  render(){
    return(
     <header className="headerStyle container-fluids">
       <div className="row align-items-start">
         <div className="col-3">
           <img src={imgMaison} alt="Maison" className="imgMaison"/>
         </div>
         <div className="col-5 centerVert">
           <h1> Tableau de bord</h1>
         </div>
          <div className="col-4">
            <div className="pt-3 buttonO">
                <button onClick={this.logout} className="btn btn-outline-dark">Logout</button>
            </div>
          </div>
      </div>
    </header>
   );
 }
}
export default Header;
