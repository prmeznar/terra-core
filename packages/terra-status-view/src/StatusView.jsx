import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Divider from 'terra-divider';
import styles from './StatusView.module.scss';

const cx = classNames.bind(styles);

const StatusViewVariants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
};

const propTypes = {
  /**
   * An array of actionable buttons to display.
   */
  children: PropTypes.node,

  /**
   * The glyph that is to be displayed for the `custom` variant.
   */
  customGlyph: PropTypes.node,

  /**
   * @private The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,

  /**
   *  Determines if the content should be aligned vertically at the top of the container rather than in the middle.
   */
  isAlignedTop: PropTypes.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text to display.
   */
  message: PropTypes.string,

  /**
   * The status view's title to display. Status views with variants of type `no-data`,
   * `no-matching-results`, `not-authorized`,
   * `error` will have defaulted values unless overridden with this prop.
   */
  title: PropTypes.string,

  /**
   * Determines the glyph to display, one of the following: `no-data`,
   * `no-matching-results`, `not-authorized`, or `error`
   */
  variant: PropTypes.oneOf(Object.values(StatusViewVariants)),
};

const defaultProps = {
  children: [],
  customGlyph: undefined,
  isAlignedTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  variant: undefined,
};

const StatusView = ({
  children,
  customGlyph,
  intl,
  isAlignedTop,
  isGlyphHidden,
  message,
  title,
  variant,
  ...customProps
}) => {
  let glyphSection;
  let messageSection;
  let actionSection;
  let dividerSection;
  let defaultTitle;

  if (!isGlyphHidden) {
    if (customGlyph) {
      glyphSection = (
        <div className={cx('glyph')}>
          {customGlyph}
        </div>
      );
    } else {
      glyphSection = (
        <div className={cx('glyph')}>
          <svg className={cx(variant)} />
        </div>
      );
    }
  }

  if (message) {
    messageSection = (
      <div className={cx('message')}>
        {message}
      </div>
    );
  }

  if (React.Children.count(children) > 0) {
    actionSection = (
      <div className={cx('actions')}>
        {children}
      </div>
    );
  }

  if (messageSection || actionSection) {
    dividerSection = (
      <div className={cx('divider')}>
        <Divider />
      </div>
    );
  }

  if (variant === StatusViewVariants.CUSTOM) {
    defaultTitle = '';
  } else {
    defaultTitle = intl.formatMessage({ id: `Terra.status-view.${variant}` });
  }

  // Custom title takes precedence
  const titleSection = (
    <div className={cx('title')}>
      {title || defaultTitle}
    </div>
  );

  const outerViewClassNames = cx([
    'outer-view',
    { 'is-aligned-top': isAlignedTop },
    customProps.className,
  ]);

  const innerViewClassNames = cx([
    'inner-view',
  ]);

  return (
    <div {...customProps} className={outerViewClassNames}>
      <div className={cx('top-space')} />
      <div className={innerViewClassNames}>
        {glyphSection}
        {titleSection}
        {dividerSection}
        {messageSection}
        {actionSection}
      </div>
      <div className={cx('bottom-space')} />
    </div>
  );
};

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;
export default injectIntl(StatusView);
export { StatusViewVariants };
