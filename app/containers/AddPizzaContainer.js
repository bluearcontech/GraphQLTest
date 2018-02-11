import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AddPizzaPage from '../components/AddPizzaPage';
const pizzaName = 'LARGE'
// const pizzaQuery = gql`
//   query {
//     pizzaSizeByName(name: "SMALL") {
//       name
//       basePrice
//       toppings {
//         defaultSelected
//         topping {
//           name
//           price
//         }
//       }
//       maxToppings
//     }
//   }
// `;

const pizzaQuery = gql `
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