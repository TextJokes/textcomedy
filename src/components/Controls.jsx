import React, { Fragment } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';



const Controls = ({up, down, next, previous}) => (
  <Fragment>
    <Button onClick={previous}  > <Glyphicon glyph="hand-left"/></Button>
    <Button onClick={up}  ><Glyphicon glyph="thumbs-up"/></Button>
    <Button onClick={down}  ><Glyphicon glyph="thumbs-down"/></Button>
    <Button onClick={next}><Glyphicon glyph="hand-right"/></Button>
  </Fragment>
  );

export default Controls;