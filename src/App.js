import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Vainglory from 'vainglory';


class App extends Component {
  

  getPlayerInfo(vainglory, playerNames) {
    vainglory.players.getByName(playerNames).then((players) => {
      if (players.errors || players.player) {
        console.log(players)
        return
      };
      players.player.forEach(player => {
        console.log(player.id);
        console.log(player.stats);
      }).catch((errors) => {
        console.log(errors);
      });
    })
  }
  render() {
    const options = {
      host: 'https://api.dc01.gamelockerapp.com/shards/',
      region: 'sg',
      title: 'semc-vainglory',
    }
    const vainglory = new Vainglory('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2OWIyMWY0MC0xM2U2LTAxMzYtMWRkOS0wYTU4NjQ2MGE2MTciLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyMTUyOTA3LCJwdWIiOiJzZW1jIiwidGl0bGUiOiJ2YWluZ2xvcnkiLCJhcHAiOiJnbG9yeXRlYW0iLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0Ijo1MH0.JIopTQwcBMVBa2hUOMlqOm6Jfypk3Sm2bmdgVbqkqlI', options)
    const playerNames = ['Electricat'];
    
    this.getPlayerInfo(vainglory, playerNames) 
    
    // this.callAPI()
    console.log(options, vainglory)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VG STATS</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
