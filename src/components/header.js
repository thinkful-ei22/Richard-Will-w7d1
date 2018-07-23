import React from 'react';

import './header.css';

export default function Header() {
  return (
  <header> 
    <nav> 
      <ul className="clearfix">
        <li> 
          <a className="What?" href="#">What? </a> 
        </li> 
        <li> 
          <a className="+ New Game" href="#">+ New Game </a> 
        </li>
      </ul>
    </nav>
    <h1>Hot or Cold?</h1> 
  </header> )
}