/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import './header.scss'
class HeaderComponenet extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="background-texture"></div>
        <header className="header">
          <div className="left-content">
            <p className="stay-home">Olah Raga ita!!</p>
            <h1>OSI kumpulan Olahraga </h1>
            <p></p>
            <p className="para">
              Di OSI kita Bisa tau tempat Olahrage, Putsal, Volley Ball, Basket Ball, dan lainnya.
              Dan Bertemu Lawan sesuai Dan bisa Bergabung dengan Team Lain, so ayo
            </p>
            <a href="http://" className="btn btn-primary">Gabung Yu</a>
          </div>
         
        </header>
        <script src="main.js"></script>
      </div>
    );
  }
}

export default HeaderComponenet;