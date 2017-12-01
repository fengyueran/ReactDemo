/* eslint-disable jsx-a11y/anchor-is-valid, no-shadow */
import React, { PropTypes } from 'react';
import { Link, Route } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { match, product } = this.props;
    const productData = product ? (
      <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>) : (<h2> Sorry. Product doesnt exist </h2>);

    return (
      <div>
        {productData}
      </div>);
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default Product;
