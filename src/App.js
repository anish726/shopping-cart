import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cart from "./components/cart/Cart";
import Navbar from "./components/nabvar/Navbar";
import Products from "./components/product/Prodcuts";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path="/products" exact component={Products}>
      </Route>
      <Route path="/cart" exact component={Cart}>
      </Route>
      <Route path="/" exact component={Products}>
      </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
