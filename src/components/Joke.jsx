import React, { Fragment } from 'react';
import moment from 'moment';
import JokeText from './JokeText';

const Joke = ({joke}) => (
  <Fragment>
    <h1>{joke.title}</h1>
    <JokeText text={joke.body}/>
  </Fragment>
  );

export default Joke;