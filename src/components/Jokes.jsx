import React from 'react';
import Joke from './Joke'

  const Jokes = (props) => (
    <div className="reviewsWrapper">
            
      {
        props.jokes.map((joke, i)=>{
          return(         
              <Joke key={joke._id} joke={joke}/>
          )
        })
      }
    </div>
  );

export default Jokes;