import React from 'react';
import ResponsiveElement from '../../../ResponsiveElement';

const DefaultExample = () => (
  <ResponsiveElement
    tiny={<div>Tiny</div>}
    small={<div>Small</div>}
    medium={<div>Medium</div>}
    large={<div>Large</div>}
    huge={<div>Huge</div>}
    enormous={<div>Enormous</div>}
  />
);

export default DefaultExample;
