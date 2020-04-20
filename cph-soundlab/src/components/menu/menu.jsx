import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./_menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.menuOpenRef = React.createRef();

    this.state = {
      open: false,
    };
  }

  handleClick() {
    const menuOpen = this.menuOpenRef.current;
    const hamburger = document.querySelectorAll('.menu__hamburger span');
    const hamburgerLine1 = hamburger[0];
    const hamburgerLine2 = hamburger[2];

    this.setState({
      open: !this.state.open,
    },() => console.log(hamburgerLine1));

    if (this.state.open) {
        
        menuOpen.style.display = "none";
        hamburgerLine1.style.backgroundColor = "#5a5a5a";
        hamburgerLine2.style.backgroundColor = "#5a5a5a";
        

    } else {
        menuOpen.style.display = "block";
        menuOpen.style.backgroundColor = "#5a5a5a";
        hamburgerLine1.style.backgroundColor = "#f0c203";
        hamburgerLine2.style.backgroundColor = "#f0c203";
    }
  }

  render() {
    return (
      <div className="menu">
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={30}
          height={20}
          strokeWidth={2}
          borderRadius={3}
          animationDuration={0.5}
          className="menu__hamburger"
        />
        <div className="menu__background" ref={this.menuOpenRef}>
            <div className="menu__content u-center-middle">
                <a href="#about" className="menu__link">About</a>
                <a href="#work" className="menu__link">Work</a>
                <a href="#studio" className="menu__link">Studio</a>
                <a href="#contact" className="menu__link">Contact</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Menu;
