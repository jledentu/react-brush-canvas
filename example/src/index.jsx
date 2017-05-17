import React from 'react';
import ReactDOM from 'react-dom';
import BrushCanvas from '../../src/brush-canvas';

ReactDOM.render(<BrushCanvas layers={['layer1', 'layer2']} />, document.getElementById('app'));
