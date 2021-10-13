import React, { useState, useEffect } from "react";

import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import logo from "../logo.jpg";

const Header = (props) => {
  const address = props.address;
  const balance = props.balance;
  return (
    <div class="container">
      <div class="row">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" class="col-md-6">
            <div>
              <img src={logo} style={{ width: 80 }}></img>
              <p>Tezos</p>
            </div>
          </NavbarBrand>
          <div class="col">
            <div>
              <p>
                {{ address }
                  ? `Wallet connected at ${address} with balance ${balance} Tz`
                  : "Wallet not connected"}
              </p>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};
export default Header;
