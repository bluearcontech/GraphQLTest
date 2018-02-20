const typeDefs = [
  `
  # Topping type
  type pizzaToppingConnection {
    defaultSelected: Boolean
    topping: Topping!
  }

  type Topping {
    name: String!
    price: Float!
  }

  # Pizze type.
  type Pizza {
    name: String!
    basePrice: Float!
    maxToppings: Int
    toppings: [pizzaToppingConnection]
  }

  #Query type.
  type Query {
    # Fetch Pizza type name
    pizzaSizeByName(name: String!): Pizza
    pizzaSizes: [Pizza]!
    pizzas: [Pizza]!
  }
`,
];

module.exports = typeDefs;
