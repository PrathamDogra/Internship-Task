import React, { Component } from "react";
import "./Top.scss";
class Top extends Component {
  render() {
    return (
      <div className="Top">
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
      </div>
    );
  }
}
export default Top;
