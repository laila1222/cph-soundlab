import React, { Component } from 'react'
import './css/style.css';

import Header from './components/header/header';
import About from './components/about/about';
import Work from './components/work/work';
import Studio from './components/studio/studio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <Header />
        <About />
        <Work />
        <Studio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;

