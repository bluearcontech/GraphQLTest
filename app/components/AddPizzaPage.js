import React from 'react';
import { connect } from 'react-redux';
import { addPizzaAction } from '../actions/';
import { RingLoader } from 'react-spinners';

class AddPizzaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaSizes: [],
      selectedPizza: null,
      toppings: [],
      pizzaPrice: 0,
      error: false,
    };
    this.selectPizza = this.selectPizza.bind(this);
    this.selectToppings = this.selectToppings.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.pizzaSizes.length === 0 && nextProps.data.pizzaSizes.length > 0) {
      let selectedPizza;
      const selectedPizzaName = nextProps.data.pizzaSizes[0].name;
      nextProps.data.pizzaSizes.forEach(pizza => {
        if (pizza.name === selectedPizzaName) {
          selectedPizza = pizza;
        }
      });
      const toppings = selectedPizza.toppings.map(item => {
        return {
          defaultSelected: item.defaultSelected,
          name: item.topping.name,
          price: item.topping.price,
        };
      });
      this.setState({
        pizzaSizes: nextProps.data.pizzaSizes,
        toppings,
        pizzaPrice: selectedPizza.basePrice,
        selectedPizza,
      });
    }
  }

  selectPizza(event) {
    let selectedPizza;
    const { pizzaSizes } = this.state;
    pizzaSizes.forEach(pizza => {
      if (pizza.name === event.target.value) {
        selectedPizza = pizza;
      }
    });
    const toppings = selectedPizza.toppings.map(item => {
      return {
        defaultSelected: item.defaultSelected,
        name: item.topping.name,
        price: item.topping.price,
      };
    });
    this.setState({
      toppings,
      pizzaPrice: selectedPizza.basePrice,
      selectedPizza,
      error: false,
    });
  }

  selectToppings(e, index) {
    const { selectedPizza } = this.state;
    const toppings = this.state.toppings.slice();
    const selectedToppings = toppings.filter(topping => topping.defaultSelected === true);
    if (selectedToppings.length === selectedPizza.maxToppings && toppings[index].defaultSelected === false) {
      this.setState({
        error: true,
      });
      return;
    }
    toppings[index].defaultSelected = !toppings[index].defaultSelected;
    let pizzaPrice = this.state.selectedPizza.basePrice;
    toppings.forEach(topping => {
      if (topping.defaultSelected === true) {
        pizzaPrice += topping.price;
      }
    });
    this.setState({
      toppings,
      pizzaPrice,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { selectedPizza, pizzaPrice } = this.state;
    if (selectedPizza) {
      this.props.addPizzaAction(selectedPizza.name, selectedPizza.basePrice, pizzaPrice.toFixed(2));
      this.props.history.push('/');
    }
  }
  render() {
    const { pizzaSizes, selectedPizza, toppings, pizzaPrice, error } = this.state;
    let loading = this.props.data.loading;
    let checkBoxes;
    if (selectedPizza) {
      checkBoxes = toppings.map((item, index) => {
        return (
          <li style={{ listStyle: 'none' }} key={index}>
            <label key={index}>
              <input type="checkbox" checked={item.defaultSelected} onChange={e => this.selectToppings(e, index)} />
              {item.name}
            </label>
          </li>
        );
      });
    } else {
      checkBoxes = null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {loading === true ? (
              <RingLoader color={'#123abc'} loading={loading} />
            ) : (
              <form onSubmit={this.handleFormSubmit}>
                <h1>Please select pizza</h1>
                {selectedPizza && (
                  <select name="test" value={selectedPizza.name} onChange={this.selectPizza}>
                    {pizzaSizes.map((pizza, index) => (
                      <option key={index} value={pizza.name}>
                        {pizza.name}
                      </option>
                    ))}
                  </select>
                )}
                {selectedPizza && (
                  <div>
                    <h2>name: {selectedPizza.name}</h2>
                    <h2>base Price: {selectedPizza.basePrice}</h2>
                  </div>
                )}
                {error && (
                  <div
                    style={{ color: 'red' }}
                    onClick={() => {
                      this.setState({ error: false });
                    }}
                  >
                    You can select {selectedPizza.maxToppings} toppings
                  </div>
                )}
                {checkBoxes}
                <h3 style={{ color: 'red' }}>Price: {pizzaPrice.toFixed(2)}</h3>
                <button className="btn btn-default" type="submit">
                  Add
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addPizzaAction,
};

export default connect(null, mapDispatchToProps)(AddPizzaPage);
