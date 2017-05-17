import React from 'react';
import PropTypes from 'prop-types';
import Layer from './components/layer';

const baseStyle = {
  position: 'relative',
};

class BrushCanvas extends React.Component {
  render() {
    const style = {
      ...baseStyle,
      width: this.props.width,
      height: this.props.height,
    };

    const layers = this.props.layers && this.props.layers.map(layer => <Layer />);
    return <div style={style}>{layers}</div>;
  }
}

BrushCanvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  layers: PropTypes.arrayOf(PropTypes.string),
};

BrushCanvas.defaultProps = {
  width: 600,
  height: 500,
  layers: [],
};

export default BrushCanvas;
