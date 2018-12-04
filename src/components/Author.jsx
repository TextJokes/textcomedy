import React, { Fragment } from 'react';
import moment from 'moment';


const Author = ({joke}) => (
  <Fragment>
    <img className="avatar" src={joke.authorImgUrl} ></img>
    <div>{joke.author}</div>
    <div>{moment(joke.created).fromNow()}</div>
  </Fragment>
  );

export default Author;