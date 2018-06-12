import React from 'react';
import moment from 'moment';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    excludeDates={[moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);


export default DateTimePickerExample;