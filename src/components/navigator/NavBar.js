import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='appName'>
          <p>Test App</p>
          <div className='actionItems'>
            <a href="/">Home</a> <p />
            <a href="/login">Login</a>
        </div>
        </div>
        
      </div>
    );
  }
}

export default NavBar;