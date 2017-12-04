/* eslint-disable jsx-a11y/anchor-is-valid, no-shadow */
import React, { PropTypes } from 'react';
import { Link, Route } from 'react-router-dom';

class Category extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <li><Link to={`${match.url}/shoes`}>shoes</Link></li>
        <li><Link to={`${match.url}/fruits`}>fruits</Link></li>
        <li><Link to={`${match.url}/foods`}>foods</Link></li>
        <Route
          path={`${match.path}/:name`} render={(info) => {
            console.log(match);
            return (
              <div>
                <h3>{info.match.params.name}</h3>
              </div>
          );
         }} />
      </div>);
  }
}

Category.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Category;
