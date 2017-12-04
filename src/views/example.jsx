import React, { Component, PropTypes } from 'react';

class Example extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <button style={{ width: '180px', height: '135px', marginBottom: '10px' }} >
          {name}
        </button>
      </div>
    );
  }
}

Example.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Example;
