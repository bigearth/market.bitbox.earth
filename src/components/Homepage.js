import React, { Component } from 'react';
import moment from 'moment';
import {
  Link,
  withRouter
} from 'react-router-dom';
import Slider from 'react-slick';

import "../styles/homepage.scss";

class Homepage extends Component {
  componentDidMount() {
    document.title = "BITBOX Market - A marketplace of apps build w/ BITBOX";
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        <div className="splash-container">
          <div className="splash">
            <h1 className="splash-head">BITBOX Market</h1>
            <p className="splash-subhead">
              A marketplace of apps build w/ BITBOX
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content features">
              <h2 className="content-head is-center">Features</h2>

              <div className="pure-g">
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                    <p className="header-icon"><i className="fa fa-cube" /></p>
                    <h3 className="content-subhead">
                      BCH Centric
                    </h3>
                    <p>
                      All BCH. All the time.
                    </p>
                  </div>
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                    <p className="header-icon"><i className="fa fa-eye" /></p>
                    <h3 className="content-subhead">
                      Built w/ BITBOX
                    </h3>
                    <p>
                      Marketplace of apps built w/ BITBOX 
                    </p>
                  </div>
              </div>
          </div>
          <div className="footer l-box is-center">
            Created w/ ❤️ on EARTH by <a href='https://twitter.com/bitboxearth'>@bitboxearth</a>. Donations <strong>bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
