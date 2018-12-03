import React from 'react';
import Table, {
  Header, HeaderCell, Row, Cell,
} from '../../../../index';

const NoStripedTable = () => (
  <Table
    isStriped={false}
    id="Table"
    header={(
      <Header>
        <HeaderCell key="NAME" minWidth="small">Name</HeaderCell>
        <HeaderCell key="ADDRESS" minWidth="medium">Address</HeaderCell>
        <HeaderCell key="PHONE_NUMBER" minWidth="large">Phone Number</HeaderCell>
      </Header>
    )}
  >
    <Row key="PERSON_0">
      <Cell key="NAME">John Smith</Cell>
      <Cell key="ADDRESS">123 Adams Drive</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_1">
      <Cell key="NAME">Jane Smith</Cell>
      <Cell key="ADDRESS">321 Drive Street</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
    <Row key="PERSON_2">
      <Cell key="NAME">Dave Smith</Cell>
      <Cell key="ADDRESS">213 Raymond Road</Cell>
      <Cell key="PHONE_NUMBER">111-222-3333</Cell>
    </Row>
  </Table>
);

export default NoStripedTable;
