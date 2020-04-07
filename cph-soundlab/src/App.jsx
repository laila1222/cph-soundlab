import React, { Component } from 'react'
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/Navbar';
import './css/style.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <header className="u-flex u-space-between">
          <Logo />
          <Navbar />

        </header>
      </div>
    )
  }
}

export default App;

