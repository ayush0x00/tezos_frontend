import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
// import TokenizeTweet from "./Components/TokenizeTweet";

function App() {
  let Tezos = new TezosToolkit("https://granadanet.api.tez.ie");
  //Tezos.setProvider({ signer: new TezBridgeSigner() });
  const options = { name: "MyAwesomeDapp" };
  let wallet = new BeaconWallet(options);
  const contractAddress = "KT1X6UZJwYHvZnwGJGi1g22fXJdHTRk5mEp4";
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState(100);
  const [storage, setStorage] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    (async function init() {
      await wallet.requestPermissions({ network: { type: "granadanet" } });
      Tezos.setWalletProvider(wallet);
      const taddress = await wallet.getPKH();
      const tbalance = await Tezos.tz.getBalance(taddress);
      setAddress(taddress);
      setBalance(tbalance / 1000000);
      const contractInstance = await Tezos.wallet.at(contractAddress);
      setContract(contractInstance);
      const tstorage = await contractInstance.storage();
      setStorage(tstorage);
    })();
  }, []);
  return (
    <div className="App justify-content-center">
      <Header address={address} balance={balance} />
      <br />
      <Search storage={storage} />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
