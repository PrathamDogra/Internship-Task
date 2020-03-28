import React, { Component } from "react";
import "./Top.scss";
import Fade from "react-reveal/Fade";
import SVG from "../../assets/intro-img.svg";
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
          <Fade right>
            <div className="flex-2">
              <img src={SVG} alt="" class="img-fluid" />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
export default Top;
