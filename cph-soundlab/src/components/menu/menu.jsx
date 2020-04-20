import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./_menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.menuBgRef = React.createRef();
    this.menuContentRef = React.createRef();

    this.state = {
      open: false,
    };
  }

  handleClick() {
    const menuBg = this.menuBgRef.current;
    const menuContent = this.menuContentRef.current;
    const hamburgerWhole = document.querySelector(".menu__hamburger");
    const hamburgerLines = document.querySelectorAll(".menu__hamburger span");

    const hamburgerLine1 = hamburgerLines[0];
    const hamburgerLine2 = hamburgerLines[2];

    this.setState({
      open: !this.state.open,
    });

    if (this.state.open) {
      menuBg.style.display = "none";
      menuContent.style.display = "none";

      // hamburgerWhole.style.right = '3rem';

      hamburgerLine1.style.backgroundColor = "#5a5a5a";
      hamburgerLine2.style.backgroundColor = "#5a5a5a";
    } else {
      menuBg.style.display = "block";
      menuContent.style.display = "block";
      hamburgerLine1.style.backgroundColor = "#f0c203";
      hamburgerLine2.style.backgroundColor = "#f0c203";

      // hamburgerWhole.style.right = '-10rem';
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

        <div
          className="menu__background"
          ref={this.menuBgRef}
          onClick={() => {
            this.handleClick();
          }}
        ></div>
        <div className="menu__content" ref={this.menuContentRef}>
          <a href="#about" className="menu__link" onClick={() => {this.handleClick()}}>
            About
          </a>
          <a href="#work" className="menu__link" onClick={() => {this.handleClick()}}>
            Work
          </a>
          <a href="#studio" className="menu__link" onClick={() => {this.handleClick()}}>
            Studio
          </a>
          <a href="#contact" className="menu__link" onClick={() => {this.handleClick()}}>
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
