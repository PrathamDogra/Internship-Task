import React, { Component } from "react";
import "./Top.scss";
import Fade from "react-reveal/Fade";
class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div className="flex-container-1">
          <div className="flex-1">
            <Fade left>
              <div>
                <p>
                  The First Crypto <br />
                  Trading League
                  <br />
                  is here.
                </p>

                <p id="greyText">Play. Trade. Win.</p>
              </div>
            </Fade>

            <div className="box">
              <form>
                <input type="email" name="" placeholder="Email" />
                <input type="submit" name="" value="Register" disabled />
              </form>
            </div>
          </div>

          <div className="flex-2"></div>
        </div>
      </div>
    );
  }
}
export default Top;
