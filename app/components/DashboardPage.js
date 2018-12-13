import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removePizzaAction } from '../actions';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pizzas } = this.props;
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
                        <button onClick={() => this.props.removePizza(index)}>Remove</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  pizzas: PropTypes.array.isRequired,
  removePizza: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removePizza: index => dispatch(removePizzaAction(index)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);
