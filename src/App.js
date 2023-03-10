import { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Products";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Products">
            <Header />
            <Products />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
