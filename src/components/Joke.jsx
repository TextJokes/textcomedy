import React from 'react';
import moment from 'moment';
import JokeText from './JokeText';

const Joke = ({joke}) => (
  <div className="one-review-wrapper" >
    <div className="text-container" ><JokeText text={joke.body}/></div>
  </div>
  );

export default Joke;