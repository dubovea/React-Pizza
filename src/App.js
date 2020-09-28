import React from "react";
import Axios from "axios";
import { connect } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { setPizzas as setPizzasAction } from "./redux/actions/pizzas";

// function App() {
//   React.useEffect(() => {
//     Axios.get("http://localhost:3000/pizza.json").then(({ data }) =>
//       setPizzas(data.pizzas)
//     );
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" render={() => <Home items={pizzas} />} exact />
//         <Route path="/cart" component={Cart} exact />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    Axios.get("http://localhost:3000/pizza.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};
// const mapDispatchToProps = {setPizzas
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
