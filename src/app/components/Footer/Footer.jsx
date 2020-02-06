import React from 'react';
import './styleFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LogoHouseNoir from './img/LogoHouseNoir.jpg';

const Footer = () => (
  <footer className="wn-footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-4">
          <img src={LogoHouseNoir} alt="logo_houseS" className="img-fluid home-logo"/>
        </div>
        <div className="blMenu col-4 col-md-4 mt-lg-4 mt-md-2">
          <p><a href="mailto:support@HouseSkipper.com" class="menu-item font-weight-light align-bottom mt-lg-2">support@HouseSkipper.com</a></p>
        </div>
        <div className=" col-4 col-md-4 align-bottom mt-lg-4 mt-md-2">
          <p className="font-weight-lighter">Rejoignez nous sur:</p>
          <div className="iconLnk">
            <a href="https://www.linkedin.com/showcase/HouseSkipper/" ><FontAwesomeIcon icon={faLinkedin} className="fa" /></a>
          </div>
        </div>
      </div>
      <hr className="hrOne"/>
      <div className="col-12">
        <div className="row copyright flex-row justify-content-center">
          <p className="text-muted">HouseSkipper 2019</p>
          </div>
      </div>
    </div>
  </footer>
);

export default Footer;
