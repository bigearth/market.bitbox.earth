import React, { Component } from 'react';

import Installation from './Installation';
import GettingStarted from './GettingStarted';
import Conversion from './Conversion';
import SignAndVerify from './SignAndVerify';
import Configuration from './Configuration';
import BitboxNew from './BitboxNew';
import BitboxConsole from './BitboxConsole';
import BitboxPaper from './BitboxPaper';
import BitboxProxy from './BitboxProxy';

import {
  Link
} from 'react-router-dom';

import {
  Route
} from 'react-router-dom';

class Test extends Component {
  componentDidMount() {
    document.title = "Test - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="BitboxPaper">
        <h2 className="content-head is-center"><i className="fas fa-folder" /> Test</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
          <p>
            <button className="pure-button pure-button-primary">
              <i className="fas fa-long-arrow-alt-up"></i> Up
            </button>
          </p>

          <p>
            <button className="pure-button pure-button-primary">
              <i className="fas fa-long-arrow-alt-down"></i> Down
            </button>
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;

// instance of transaction builder
let transactionBuilder = new BITBOX.TransactionBuilder('bitcoincash')

// amount of satoshis at vout
let originalAmount = 7085;

// txid
let txid = "ac4420a2df62acc3c57d25230cf6c177f221f9de50a737b2f2d3d12ca6e8251c";

// add input txid, vout index
transactionBuilder.addInput(txid, 0)

let pubKey = '02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b';
let data = BITBOX.Script.pubKey.output.encode(Buffer.from(pubKey, 'hex'));

// get size of tx to calculate fee
let byteCount = BITBOX.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 2 });

// calculate fee @ 1 sat/B
let sendAmount = originalAmount - byteCount;

// add cash address output
transactionBuilder.addOutput("bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw", sendAmount);

// add OP_RETURN and data as output w/ 0 satoshis
transactionBuilder.addOutput(data, 0) ;

// instance of HDNode node
let node = BITBOX.HDNode.fromXPriv('xprvA3K6tyEw7iyArwibM7GGk1T8H9uqkYPfz9zsmW9DWpCrJR1kAeCi3EDct8GxqFyS2MYpdokiRpGQv1y9iDRakhirksu5g7yAhBKvfYsCa5D');

let key = BITBOX.HDNode.toKeyPair(node);

let redeemScript;
// sign tx
transactionBuilder.sign(0, key, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount)

// to raw hex
let hex = transactionBuilder.build().toHex()

// POST to full $BCH node
BITBOX.RawTransactions.sendRawTransaction(hex).then((result) => { console.log(result); }, (err) => { console.log(err); });
