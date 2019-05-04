import React from 'react';
import Swipe from 'react-easy-swipe';
import Select from '../../../Select';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      position: {
        x: '',
        y: '',
      },
    };

    this.onSwipeStart = this.onSwipeStart.bind(this);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
  }

  onSwipeStart(event) {
    console.log('Start swiping...', event);
    this.setState({ event });
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);
    this.setState({
      event,
      position: {
        x: position.x,
        y: position.y,
      },
    });
  }

  onSwipeEnd(event) {
    console.log('End swiping...', event);
    this.setState({ event });
  }

  render() {
    const boxStyle = {
      width: '100%',
      height: '300px',
      border: '1px solid black',
      background: '#ccc',
      padding: '20px',
      fontSize: '3em'
    };

    return (
      <div>
        <p>
          Event:
          { JSON.stringify(this.state.event) }
        </p>
        <p>
          Position:
          {JSON.stringify(this.state.position)}
        </p>
        <Swipe
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={this.onSwipeMove}
          onSwipeEnd={this.onSwipeEnd}
          tabIndex="-1"
          aria-label="test"
          role="application"
          style={{ background: '#f00' }}
          tagName="input"
          value="Hello world"
        >
        </Swipe>
      </div>
    );
  }
}

class AllowClear extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <React.Fragment>
        <MyComponent />
        {/* <Select
          allowClear
          id="allowclear"
          onChange={this.handleChange}
          placeholder="Select a color"
          value={this.state.value}
          variant="combobox"
        >
          <Select.Option value="blue" display="Blue" />
          <Select.Option value="green" display="Green" />
          <Select.Option value="purple" display="Purple" />
          <Select.Option value="red" display="Red" />
          <Select.Option value="violet" display="Violet" />
        </Select> */}
      </React.Fragment>
    );
  }
}

export default AllowClear;
