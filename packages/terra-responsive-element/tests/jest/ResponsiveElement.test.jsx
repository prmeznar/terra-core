import React from 'react';
import ResponsiveElement from '../../src/ResponsiveElement';

it('should render a default component', () => {
  const responsiveElement = shallow(<ResponsiveElement tiny={<div>Tiny</div>} />);
  expect(responsiveElement).toMatchSnapshot();
});
