import React from "react";
import Car from "../../assets/car.png";
import Bike from "../../assets/Bike.png";
import Blue from "../../assets/blue.png";
import "./Middle.scss";
function Middle() {
  return (
    <div className="container">
      <div className="flex-container-3">
        <p>What can you win?</p>
      </div>
      <div className="container">
        <div className="card-1">
          <div className="header">Yamaha</div>
          <img class="card-img-top" src={Bike} alt="Bike"></img>

          <div className="card-body"></div>
        </div>
        <div className="card-1">
          <div className="header">Honda</div>
          <img class="card-img-top" src={Blue} alt="Blue"></img>

          <div className="card-body"></div>
        </div>
        <div className="card-1">
          <div className="header">BMW</div>
          <img class="card-img-top" src={Car} alt="Car"></img>
          <div className="card-body"></div>
        </div>
      </div>
      <div className="container">
        <div className="card-2">
          <p>Ticket Price</p>
          <h3>$10</h3>
          <div className="card-body"></div>
        </div>
        <div className="card-2">
          <p>Ticket Price</p>
          <h3>$25</h3>
          <div className="card-body"></div>
        </div>
        <div className="card-2">
          <p>Ticket Price</p>
           
          <h3>$100</h3>

          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
