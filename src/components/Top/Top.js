import React, { Component } from "react";
import "./Top.scss";
class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div className="flex-1">
          <p>
            The First Crypto <br />
            Trading League
            <br />
            is here.
          </p>

          <p id="greyText">Play. Trade. Win.</p>
        </div>
      </div>
    );
  }
}
export default Top;
