import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Provider } from 'terra-avatar/lib/index';
import exampleAvatarImage from '../../../assets/150x150.jpg';

const AvatarProviderImage = () => (
  <Provider image={exampleAvatarImage} alt="John Doe" />
);

export default AvatarProviderImage;
