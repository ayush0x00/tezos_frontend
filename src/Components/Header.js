import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import logo from "../logo.jpg";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <div class="d-flex align-items-center">
              <img src={logo} style={{ width: 80 }}></img>
              <p>Tezos</p>
            </div>
          </NavbarBrand>
        </Navbar>
      </div>
      <div className="container">Wallet Address</div>
    </>
  );
};
export default Header;
