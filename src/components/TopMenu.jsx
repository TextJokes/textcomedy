import React, { Fragment } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';


const TopMenu = ({best, add, login}) => (
  <Fragment>
    <Button onClick={best}  > Best </Button>
    <Button onClick={add}  > Add Joke </Button>
    <Button onClick={login}  > Login </Button>
  </Fragment>
  );

export default TopMenu;