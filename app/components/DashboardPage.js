import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removePizzaAction } from '../actions';

const DashboardPage = props => {
  const pizzas = props.pizzas;
  if (!pizzas) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>There is not pizzas</h1>
          </div>
        </div>
      </div>
    );
  }

  const removePizza = index => {
    props.removePizzaAction(index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Pizzas</h1>
          <table className="table mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Base price</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{pizza.name}</td>
                    <td>{pizza.basePrice}</td>
                    <td>{pizza.price}</td>
                    <td>
                      <button onClick={() => removePizza(index)}>Remove</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

DashboardPage.propTypes = {
  pizzas: PropTypes.array.isRequired,
  removePizza: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas,
  };
};

const mapDispatchToProps = {
  removePizzaAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);
