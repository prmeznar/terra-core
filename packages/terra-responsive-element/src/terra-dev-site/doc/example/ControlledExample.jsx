/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';

class ResponsiveTableExample extends React.Component {
  constructor() {
    super();

    this.state = { viewport: undefined };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(breakpoint) {
    const viewport = breakpoint === 'tiny' || breakpoint === 'medium' ? 'mobile' : 'desktop';

    if (viewport !== this.state.viewport) {
      this.setState({ viewport });
    }
  }

  render() {
    const { viewport } = this.state;

    let children = null;
    if (viewport === 'mobile') {
      children = (
        <ul>
          <li>John Smith, 22</li>
          <li>David Johnson, 25</li>
          <li>Leeroy Jenkins, 31</li>
        </ul>
      );
    } else if (viewport === 'desktop') {
      children = (
        <table style={{ width: '100%', textAlign: 'left' }}>
          <tbody>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>John</td>
              <td>Smith</td>
              <td>22</td>
            </tr>
            <tr>
              <td>David</td>
              <td>Johnson</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Leeroy</td>
              <td>Jenkins</td>
              <td>31</td>
            </tr>
          </tbody>
        </table>
      );
    }

    return (
      <ResponsiveElement onChange={this.handleOnChange}>
        {children}
      </ResponsiveElement>
    );
  }
}

export default ResponsiveTableExample;
