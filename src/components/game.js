'use strict'; 

import React from 'react';

import './game.css';
import Header from './header';
import Feedback from './feedback';
import Form from './form';

export default function Game() { 
  // <div className="overlay" id="modal" style="display">  ...</div> 
  return ( 
    <div>
      <Header />
      <main className="game">
        <Feedback />
        <Form />
        <p>"Guess #"
          <span className="count">6</span>
        </p>
      </main>
    </div>
  ); }