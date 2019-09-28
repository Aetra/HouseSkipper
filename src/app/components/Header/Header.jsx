import React from 'react';
import './styleHeader.css';
import {NavLink} from "react-router-dom";
import imgMaison from './img/ImgMaison.png';
import { authenticationService } from '../.././_services';
import { history } from '../.././helpers';
  class Header extends React.Component{
    logout() {
  authenticationService.logout();
  history.push('/login');
}
  render(){
    return(
     <header className="header row">
         <div className="col-4">
           <NavLink to= "/home"> Home </NavLink>
           <img src={imgMaison} alt="Maison" className="imgMaison"/>
         </div>
         <div className="col-5 text-center">
           <h1 className="pt-5"> Tableau de bord</h1>
         </div>
          <div className="col-3">
            <div className="pt-5 pl-5 buttonO">
                <button onClick={this.logout} className="btn btn-outline-dark">Deconnexion</button>
            </div>
          </div>
    </header>
   );
 }
}
export default Header;
