import fetch from 'isomorphic-fetch';
const connectors = require('./connectors');

const Pizza = require('./model/Pizza');
import gql from 'graphql-tag';

const pizzaQuerySizes = `{
  pizzaSizes {
    name
    basePrice
    toppings {
      defaultSelected
      topping {
        name
        price
      }
    }
    maxToppings
  }
}
`

const resolvers = {
  Query: {
    pizzas() {
      return connectors.Pizza.getPizzas()
        .then((pizzas) => {
          return pizzas.map(pizza => {
            return {
              name: pizza.name,
              basePrice: pizza.basePrice,
              maxToppings: pizza.maxToppings,
              toppings: pizza.toppings,
            }
          });
        })
        .catch(err => {
          throw new Error(err);
        });
    },
    pizzaSizeByName(root, { name }) {
      const pizzaQueryByName = `{
        pizzaSizeByName(name: ${name}) {
          name
          basePrice
          toppings {
            defaultSelected
            topping {
              name
              price
            }
          }
          maxToppings
        }
      }
      `;
      return fetch("https://core-graphql.dev.waldo.photos/pizza", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: pizzaQueryByName })
      })
        .then(res => res.json())
        .then(res => {
          return res.data.pizzaSizeByName;
        })
    },//
    pizzaSizes(root, args, context) {
      return fetch("https://core-graphql.dev.waldo.photos/pizza", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: pizzaQuerySizes })
      })
        .then(res => res.json())
        .then(res => {
          return res.data.pizzaSizes;
        })
    }
  }
}

module.exports = resolvers;