import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/pizza.json")
      .then((oResponse) => oResponse.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
