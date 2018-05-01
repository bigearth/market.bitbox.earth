// react imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

// custom components
// import Test from './components/Test';
// import Homepage from './components/Homepage';
//
// css
import './styles/app.scss';

class App extends Component {

  handlePathMatch(path) {
    if(path === '/' || path === '/blocks' || path === '/transactions' || path === '/logs' || path === '/configuration/accounts-and-keys') {
      return true;
    } else {
      return false;
    }
  }

  render() {

    const pathMatch = (match, location) => {
      if (!match) {
        return false
      }
      return this.handlePathMatch(match.path);
    }

    const BitboxCliPage = (props) => {
      return (
        <BitboxCli
        />
      );
    };

    return (
<Router>
  <div>
    <div className="header">
      <div className="pure-menu pure-menu-horizontal">
        <Link className="pure-menu-heading header-logo" to="/">
          <img src='assets/logo.png' /> <br />BitBox
        </Link>

        <ul className="pure-menu-list">
          <li className="pure-menu-item"><a href="https://www.bitbox.earth" className="pure-menu-link">Docs</a></li>
          <li className="pure-menu-item"><a href="https://cloud.bitbox.earth" className="pure-menu-link">Cloud</a></li>
        </ul>
      </div>
    </div>

    <div className="pure-g">
      <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
        <a href="https://www.bitbox.earth">
          <img src="assets/screenshot1.png" alt="BITBOX" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://www.bitbox.earth">bitbox.earth</a></span>
        </aside>
      </div>

      <div className="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-2-3">
        <div className="l-box">
          <h1 className="text-box-head">BITBOX Market</h1>
          <p className="text-box-subhead">Amazing things built w/ BITBOX</p>
        </div>
      </div>

      <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
        <a href="https://www.query.cash">
          <img src="assets/query.cash.2.png" alt="query.cash" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://www.query.cash">query.cash</a></span>
        </aside>
      </div>

      <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
        <a href="https://www.query.cash">
          <img src="assets/query.cash.1.png" alt="query.cash" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://www.query.cash">query.cash</a></span>
        </aside>
      </div>

      <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
        <a href="https://www.bitbox.earth">
          <img src="assets/screenshot5.png" alt="BITBOX" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://www.bitbox.earth">bitbox.earth</a></span>
        </aside>
      </div>

      <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
        <a href="https://www.bitbox.earth">
          <img src="assets/screenshot6.png" alt="BITBOX" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://www.bitbox.earth">bitbox.earth</a></span>
        </aside>
      </div>

      <div className="photo-box photo-box-thin pure-u-1 pure-u-lg-2-3">
        <a href="https://github.com/bigearth/bitbox-scaffold-node">
          <img src="assets/node.png" alt="nodejs" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://github.com/bigearth/bitbox-scaffold-node">NodeJS Scaffold</a></span>
        </aside>
      </div>

      <div className="photo-box photo-box-thin pure-u-1 pure-u-md-2-3">
        <a href="https://www.hellobitbox.cash">
          <img src="assets/hellobitbox.png" alt="query.cash" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://www.hellobitbox.cash">hellobitbox</a></span>
        </aside>
      </div>

      <div className="photo-box pure-u-1 pure-u-md-1-3">
        <a href="https://www.bitbox.earth">
          <img src="assets/screenshot7.png" alt="BITBOX" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://www.bitbox.earth">bitbox.earth</a></span>
        </aside>
      </div>

      <div className="photo-box pure-u-1 pure-u-md-1-3">
        <a href="https://rest.bitbox.earth">
          <img src="assets/screenshot8.png" alt="BITBOX" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://rest.bitbox.earth">rest.bitbox.earth</a></span>
        </aside>
      </div>

      <div className="photo-box pure-u-1 pure-u-md-2-3">
        <a href="https://rest.bitbox.earth/v1/blockchain/getTxOut/d94b98cf5b192f15abaac6201a407f500ce2cba23d4cbb79c712e3aa4e1bb7cf/0">
          <img src="assets/screenshot9.png" alt="BITBOX" />
        </a>

        <aside className="photo-box-caption">
          <span>by <a href="https://rest.bitbox.earth/v1/blockchain/getTxOut/d94b98cf5b192f15abaac6201a407f500ce2cba23d4cbb79c712e3aa4e1bb7cf/0">rest.bitbox.earth</a></span>
        </aside>
      </div>
    </div>

    <div className="footer l-box">
      Created w/ ❤️ on EARTH by <a href='https://twitter.com/bitboxearth'>@bitboxearth</a>. Donations <strong>bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz</strong>
    </div>
  </div>
</Router>
  );
  }
}

export default App;
