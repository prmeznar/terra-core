import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import ResponsiveElementSrc from '!raw-loader!../../../../src/ResponsiveElement';
import ControlledExample from '../example/ControlledExample';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ControlledExample';
import UncontrolledExample from '../example/UncontrolledExample';
import UncontrolledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/UncontrolledExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName="terra-responsive-element"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element"
    propsTables={[
      {
        componentName: 'Responsive Element',
        componentSrc: ResponsiveElementSrc,
      },
    ]}
    examples={[
      {
        title: 'Controlled Responsive Table Example',
        description: 'A table that will render as a list on small screen sizes.',
        example: <ControlledExample />,
        source: ControlledExampleSrc,
      },
      {
        title: 'Uncontrolled Responsive Table Example',
        description: 'A table that will render as a list on small screen sizes.',
        example: <UncontrolledExample />,
        source: UncontrolledExampleSrc,
      },
    ]}
  />
);

export default DocPage;
