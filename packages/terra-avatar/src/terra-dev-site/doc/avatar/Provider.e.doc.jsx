import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/provider.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ProviderSrc from '!raw-loader!../../../../src/variants/Provider.jsx';

import Provider from '../example/provider/Provider';
import ProviderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/provider/Provider';
import ProviderImage from '../example/provider/ProviderImage';
import ProviderImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/provider/ProviderImage';
import ProviderSize from '../example/provider/ProviderSize';
import ProviderSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/provider/ProviderSize';
import ProviderColorVariants from '../example/provider/ProviderColorVariants';
import ProviderColorVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/provider/ProviderColorVariants';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default - Fallback Icon',
        example: <Provider />,
        source: ProviderExampleSrc,
      },
      {
        title: 'Image',
        example: <ProviderImage />,
        source: ProviderImageSrc,
      },
      {
        title: 'Override Size',
        example: <ProviderSize />,
        source: ProviderSizeSrc,
      },
      {
        title: 'Toggle Color Variants - Theme Specific',
        example: <ProviderColorVariants />,
        source: ProviderColorVariantsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Provider',
        componentSrc: ProviderSrc,
      },
    ]}
  />
);

export default DocPage;
