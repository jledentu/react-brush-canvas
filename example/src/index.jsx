import React from 'react';
import ReactDOM from 'react-dom';
import BrushCanvas from '../../src/brush-canvas';

const layers = [
  { id: 'layer1' },
  { id: 'layer2' },
];

const options = {
  brushOptions: {
    lineWidth: 5,
    color: '#0000ff',
  },
};

ReactDOM.render(<BrushCanvas layers={layers} currentLayer={'layer1'} options={options} />, document.getElementById('app'));
