import React, { Component, PropTypes } from 'react';

class ExampleButton extends Component {
  render() {
    const { name, onClick } = this.props;
    return (
      <div>
        <button style={{ width: '80px', height: '35px', marginBottom: '10px' }} onClick={onClick}>
          {name}
        </button>
      </div>
    );
  }
}

ExampleButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExampleButton;
