import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { Provider } from 'terra-avatar/lib/index';
import ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const AvatarProviderColorVariants = ({
  ...props
}) => (
  <Provider alt="User" color={props.color} />
);

AvatarProviderColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(AvatarProviderColorVariants);
