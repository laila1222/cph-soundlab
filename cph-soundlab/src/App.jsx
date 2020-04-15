import React, { Component } from 'react'
import AOS from 'aos';


import Header from './components/header/header';
import About from './components/about/about';
import Work from './components/work/work';
import Studio from './components/studio/studio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import './css/style.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
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

