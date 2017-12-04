/* eslint-disable jsx-a11y/anchor-is-valid, no-shadow */
import React, { PropTypes } from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './product';

const productsData = [
  {
    id: "1",
    name: 'NIKE Liteforce Blue Sneakers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
    status: 'Available',
  },
  {
    id: "2",
    name: 'Stylised Flip Flops and Slippers',
    description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
    status: 'Out of Stock',
  },
  {
    id: "3",
    name: 'ADIDAS Adispree Running Shoes',
    description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
    status: 'Available',
  },
  {
    id: "4",
    name: 'ADIDAS Mid Sneakers',
    description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
    status: 'Out of Stock',
  },
];


class Products extends React.Component {
  render() {
    const { match } = this.props;
    const linkList = productsData.map((product) => (
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>
          {product.name}
        </Link>
      </li>
    ));
    return (
      <div>
        <div>
          <h3>Products</h3>
          <ul>{linkList}</ul>
        </div>
        <Route
          path={`${match.path}/:productId`} render={(info) => {
            const product = productsData.find(p => p.id === info.match.params.productId);
            return (
              <Product
                product={product}
                {...this.props}
              />
          );
         }} />
      </div>);
  }
}

Products.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Products;
