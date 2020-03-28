import React, { Component } from "react";
import "./Top.scss";
class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div className="flex-container-1">
          <div className="flex-1">
            <div>
              <p>
                The First Crypto <br />
                Trading League
                <br />
                is here.
              </p>

              <p id="greyText">Play. Trade. Win.</p>
            </div>
            <div className="box">
              <form>
                <input type="email" name="" placeholder="Email" />
                <input type="submit" name="" value="Register" />
              </form>
            </div>
          </div>
          <div className="flex-2"></div>
        </div>

        <div className="flex-container-2">
          <p>Why Participate?</p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <i class="fas fa-gift"></i>
            </div>
            <div className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <i class="fas fa-gift"></i>
            </div>
            <div className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <i class="fas fa-gift"></i>
            </div>
            <div className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
        <div className="flex-container-3">
          <p>What can you win?</p>
        </div>
      </div>
    );
  }
}
export default Top;
