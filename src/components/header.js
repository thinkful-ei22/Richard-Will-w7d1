import React from 'react';

import './header.css';
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  toggleModal() {
     console.log('hello')
  }
  render() {

    return (
        <header> 
          <nav> 
            <ul className="clearfix">
              <li> 
                <a className="What?" href="#" onClick={this.toggleModal}>What? </a> 
              </li> 
              <li> 
                <a className="+ New Game" href="#">+ New Game </a> 
              </li>
            </ul>
          </nav>
          <h1>Hot or Cold?</h1> 
        </header> )
  }
}
// export default function Header() {
//   return (
//   <header> 
//     <nav> 
//       <ul className="clearfix">
//         <li> 
//           <a className="What?" href="#">What? </a> 
//         </li> 
//         <li> 
//           <a className="+ New Game" href="#">+ New Game </a> 
//         </li>
//       </ul>
//     </nav>
//     <h1>Hot or Cold?</h1> 
//   </header> )
// }