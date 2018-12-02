import React, {Component} from 'react';
import axios from 'axios';
import Joke from './Joke';
import SampleText from '../../db/SampleText';

class App extends Component {
  constructor(){
    super();
    this.state = {
      screen: 1,
      jokes: SampleText,
      currentJoke: 1,
    }
  }
  
  componentDidMount(){
    const getRequestAddress = process.env.GET_REQUEST_ADDRESS || `https://jsonplaceholder.typicode.com/posts`;
    axios
      .get(getRequestAddress)
      .then(res => {
        console.log(res.data);
        this.setState({
          jokes: res.data
        })
      })
      .catch(err => console.log('Could not get the jokes...' , err))
  }

  render() {
    return(
      <div>
        <Joke joke={this.state.jokes[this.state.currentJoke]}/>
      </div>
    );
  }
}



export default App;