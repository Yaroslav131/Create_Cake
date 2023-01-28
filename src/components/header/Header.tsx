import React, { Component } from 'react'
import ham from '../../images/hambergermenu.png';
import bag from '../../images/shoppingbag.png';
import './header.css'
import '../../reset.css'

export default function Header() {

  function myFunction() {
    document?.getElementById("myDropdown")?.classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event: any) {
    if (!event?.target?.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  return (
    <header className="header">
      <div className="menu">
        <div className="dropdown">
          <button onClick={myFunction} className="dropbtn" id="button">
            <img className="dropdown-content" src={ham}
              alt="menu" />

          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="about us.html">О НАС</a>
            <a href="#">ДЕСЕРТЫ</a>
            <a href="#">СОБЕРИ СВОЙ ТОРТ</a>
            <a href="#">КОНТАКТЫ</a>
          </div>
        </div>

        <div className="menu_text">
          <p>Menu</p>
        </div>
      </div>

      <div className="logo">
        <p>CHOCOFORNIA</p>
      </div>

      <div className="bag">
        <img width="50" height="50" src={bag} alt="shoppingbag" />
      </div>
    </header>
  );

}