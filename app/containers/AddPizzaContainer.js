import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AddPizzaPage from '../components/AddPizzaPage';

// eslint-disable-next-line
const pizzaName = 'LARGE';

const pizzaQuery = gql`
  query {
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
`;

const AddPizzaPageWithData = graphql(pizzaQuery)(AddPizzaPage);

export default AddPizzaPageWithData;
