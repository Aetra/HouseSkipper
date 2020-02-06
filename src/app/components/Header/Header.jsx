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
         <div className="col-1">
           <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <a href="#"><li>TableauDeBord</li></a>
                  <a href="#"><li>Besoin d'aide</li></a>
                  <a href="#"><li>Mes informations</li></a>
                  <a href="#"><li>Mes travaux</li></a>
                  <a href="#"><li>Mes habitations</li></a>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-4">
             <img src={imgMaison} alt="Maison" className="align-left imgMaison"/>
          </div>
         <div className="col-5">
           <h1 className="pt-5"> Tableau de bord</h1>
         </div>
          <div className="col-2">
            <div className="pt-5 buttonO">
                <button onClick={this.logout} className="btn btn-outline-dark">Deconnexion</button>
            </div>
          </div>
    </header>
   );
 }
}
export default Header;
