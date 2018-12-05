import React, { Fragment } from 'react';
import moment from 'moment';
import JokeText from './JokeText';

const Joke = ({joke}) => (
  <Fragment>
    <h5>{joke.title}</h5>
    <JokeText text={joke.body} punch={joke.punch} punchtext={joke.punchtext} />
  </Fragment>
  );

export default Joke;