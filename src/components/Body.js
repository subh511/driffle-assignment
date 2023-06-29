import React from "react";
import "./Body.css";
import gta from "./assets/Logos/gta.png";
import batman from "./assets/Logos/Batman.png";
import giftcard from "./assets/Logos/Giftcard.png";
import monster from "./assets/Logos/monster.png";
import mortal from "./assets/Logos/mortal.png";
import mvappe from "./assets/Logos/mvappe.png";


function Body() {
  return (
    <div className="centered-content">
      <div className="background-image-1"></div>
      <div className="background-image-2"><img src={gta} alt="none" className="Gta"/></div>
      <div className="background-image-3">
      <img src={batman} alt="none" className="Bat"/>
      <img src={giftcard} alt="none" className="Gift"/>
      </div>
      <div className="background-image-4">
      <img src={monster} alt="none" className="monst"/>
      <img src={mortal} alt="none" className="combat"/>
      <img src={mvappe} alt="none" className="footballer"/>
      </div>
      <div className="centered-content__background">
        <h1 className="centered-content__headline">
          Driffle is a <span className="green">one-stop shop</span><br/> for all your gaming needs.
        </h1>
        <p className="centered-content__paragraph">
          Not only do we sell games, but also offer gift cards, DLC's, and more. Driffle is a marketplace, so you can find a <br/> wide variety of items from different sellers in one place. We are committed to the future of gaming and strive to <br/> make our platform safe, affordable, and sustainable for all users. Whether you're looking for the latest releases<br/> 
          or hard-to-find classics, you're sure to find what you're looking for on Driffle.
        </p>
        <button>Visit our store</button>
      </div>
    </div>
  );
}

export default Body;
