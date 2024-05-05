import React from 'react';
import './Header.css';
import Carousel from '../Carousel/Carousel';



const Header = () => {

  return (
    <div className="Header">
      <div className="mini-banner">
        La session de vacances 2023 se déroulera du 03 juillet au 12 aout 2023,
        le matin: 09h - 12h ; Après-midi: 13h - 16h L'admission Pour la Session
        Scolaire 2023 est Ouverte.
      </div>
      <div className="carousel">
        <Carousel />
        <div className="menu">
          <div className="menu-items">Home</div>
          <div className="menu-items active">About</div>
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
          <div className="about-title1">Tous sur Seven Kids code</div>
          <div className="about-title2">About Us</div>
          <div className="about-buttons">
            <div className="blog">Blog</div>
            <div className="blog active">
              Programs &nbsp;
              <img src="../src/assets/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="popup-stats">
        <div className="items-stats">
          <div className="item-icon">
            <img src="../src/assets/teacher.png" alt="" />
          </div>
          <div className="item-numb-desc">
            <div className="item-numb">600</div>
            <div className="item-desc">Students trained</div>
          </div>
        </div>
        <div className="items-stats active">
          <div className="item-icon active">
            <img src="../src/assets/people.png" alt="" />
          </div>
          <div className="item-numb-desc">
            <div className="item-numb active">10+</div>
            <div className="item-desc active">Expert Instructor</div>
          </div>
        </div>
        <div className="items-stats">
          <div className="item-icon">
            <img src="../src/assets/teacher.png" alt="" />
          </div>
          <div className="item-numb-desc">
            <div className="item-numb">96.55</div>
            <div className="item-desc">Satisfiction Rate</div>
          </div>
        </div>
      </div>
      <div className="transition"></div>
    </div>
  );
};



export default Header;
