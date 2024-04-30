import React from 'react';
import './Header.css';



const Header = () => {

  return(
     <div className="Header">
      <div className="mini-banner">
         La session de vacances 2023 se déroulera du 03 
         juillet au 12 aout 2023, le matin: 09h - 12h ;
          Après-midi: 13h - 16h L'admission Pour la 
          Session Scolaire 2023 est Ouverte
      </div>
      <div className="menu">
        <div className="menu-items">Home</div>
        <div className="menu-items">About</div>
        <div className="menu-items">Program</div>
        <div className="menu-items">
          <img src="../src/assets/Seven.svg" alt="" />
        </div>
        <div className="menu-items">Events</div>
        <div className="menu-items">Blog</div>
        <div className="menu-items">Gallery</div>
        <div className="menu-items">Contact</div>
        <div className="menu-items">
          <img src="../src/assets/Frame8.svg" alt="" />
        </div>
      </div>
      <div className="about-us">
        <div className="about-title1">
          Tous sur Seven Kids code
        </div>
        <div className="about-title2">
          About Us
        </div>
        <div className="about-buttons">
           <div className="blog">Blog</div>
           <div className="blog">Programs</div>
        </div>
      </div>
     </div>
  );
};



export default Header;
