import React, { useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import logo from "../logo.jpg";
const Tezos = new TezosToolkit("https://testnet-tezos.giganode.io");
const options = { name: "MyAwesomeDapp" };
const wallet = new BeaconWallet(options);

const Header = (props) => {
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState(100);

  useEffect(async () => {
    await wallet.requestPermissions({ network: { type: "granadanet" } });
    Tezos.setWalletProvider(wallet);
    setAddress(await wallet.getPKH());
    alert(JSON.stringify({ address }).toString());
    setBalance(await Tezos.tz.getBalance({ address }));
  }, []);

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
                  ? `Wallet connected at ${address} with balance ${balance}`
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
