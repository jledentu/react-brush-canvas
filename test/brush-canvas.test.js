import 'should';
import 'should-enzyme';

import React from 'react';
import { mount } from 'enzyme';

import BrushCanvas from '../src/brush-canvas';

describe('<BrushCanvas />', () => {
  it('should render a canvas for each layer', () => {
    const layers = [
      'layer1',
      'layer2',
    ];
    const wrapper = mount(<BrushCanvas layers={layers} />);
  });
});
