import React from 'react';
import PropTypes from 'prop-types';
import Layer from './components/layer';
import Brush from './tools/brush';

const baseStyle = {
  position: 'relative',
};

class BrushCanvas extends React.Component {

  constructor() {
    super();
    this.layersContexts = {};
  }

  onClick = () => {
    console.log('click');
  }

  onMouseDown = (e) => {
    this.brush.down(e.clientX, e.clientY);
  }

  onMouseMove = (e) => {
    this.brush.move(e.clientX, e.clientY);
  }

  onMouseUp = (e) => {
    this.brush.up(e.clientX, e.clientY);

    if (this.props.currentLayer && this.layersContexts.hasOwnProperty(this.props.currentLayer)) {
      this.layersContexts[this.props.currentLayer].drawImage(this.drawingContext.canvas, 0, 0);
    }

    this.drawingContext.clearRect(0, 0, this.drawingContext.canvas.width, this.drawingContext.canvas.height);
  }

  componentDidMount() {
    this.brush = new Brush(this.drawingContext, this.props.options.brushOptions);
  }

  render() {
    const style = {
      ...baseStyle,
      width: this.props.width,
      height: this.props.height,
    };

    const canvasStyle = {
      position: 'absolute'
    }

    const layers = this.props.layers &&
      this.props.layers.map(layer => {
        return <canvas key={layer.id}
                       style={canvasStyle}
                       width={this.props.width}
                       height={this.props.height}
                       ref={canvas => this.layersContexts[layer.id] = canvas.getContext('2d')} />;
      });

    return (<div style={style}>
      {layers}
      <canvas
        style={canvasStyle}
        width={this.props.width}
        height={this.props.height}
        ref={(canvas) => { this.drawingContext = canvas.getContext('2d'); }}
        onClick={this.onClick}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}></canvas>
    </div>);
  }
}

BrushCanvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  layers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  })),
  currentLayer: PropTypes.string,
  options: PropTypes.shape({
    brushOptions: PropTypes.shape({
      lineWidth: PropTypes.number,
      color: PropTypes.string,
    }),
  }),
};

BrushCanvas.defaultProps = {
  width: 600,
  height: 500,
  layers: [],
  currentLayer: '',
  options: {
    brushOptions: {
      linewidth: 5,
      color: 'black'
    }
  }
};

export default BrushCanvas;
