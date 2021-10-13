import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

function App() {
  const Tezos = new TezosToolkit("https://granadanet.api.tez.ie");
  const options = { name: "MyAwesomeDapp" };
  const wallet = new BeaconWallet(options);
  const contractAddress = "KT1Qbs6BhxLwkhhghKpF8ZR7nAVDx66cCSrm";
  let contractInstance;
  let storage;
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState(100);

  useEffect(async () => {
    await wallet.requestPermissions({ network: { type: "granadanet" } });
    Tezos.setWalletProvider(wallet);
    const taddress = await wallet.getPKH();
    const tbalance = await Tezos.tz.getBalance(taddress);
    setAddress(taddress);
    setBalance(tbalance / 1000000);
    contractInstance = await Tezos.wallet.at(contractAddress);
    storage = await contractInstance.storage();
  }, [address, balance]);

  return (
    <div className="App justify-content-center">
      <Header address={address} balance={balance} />
      <br />
      <Search />
      <br />
      <Footer />
    </div>
  );
}

export default App;
