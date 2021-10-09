import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App justify-content-center">
      <Header />
      <br />
      <Search />
      <br />
      <Footer />
    </div>
  );
}

export default App;
