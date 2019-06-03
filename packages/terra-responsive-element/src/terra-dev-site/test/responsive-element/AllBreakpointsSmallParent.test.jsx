import React from 'react';
import ResponsiveElement from '../../../ResponsiveElement';

const DefaultExample = () => (
  <div style={{ border: '1px dashed', width: '500px' }}>
    <ResponsiveElement
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
      enormous={<div>Enormous</div>}
    />
  </div>
);

export default DefaultExample;
