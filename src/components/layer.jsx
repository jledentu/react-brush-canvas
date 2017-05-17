import React from 'react';
import PropTypes from 'prop-types';

const baseStyle = {
  position: 'absolute',
};

class Layer extends React.Component {
  render() {
    return <canvas style={baseStyle} width={this.props.width} height={this.props.height} />;
  }
}

Layer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Layer.defaultProps = {
  width: 600,
  height: 500,
};

export default Layer;
