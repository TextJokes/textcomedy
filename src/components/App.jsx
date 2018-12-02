import React, {Component} from 'react';
import axios from 'axios';
import Jokes from './Jokes';
import SampleText from '../../db/SampleText';

class App extends Component {
  constructor(){
    super();
    this.state = {
      screen: 1,
      jokes: SampleText,
      batchSize: 5,
    }
  }
  
  componentDidMount(){
    axios
      .get(`/`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log('Could not get the jokes...' , err))
  }

  render() {
    return(
      <div>
        <Jokes jokes={this.state.jokes}/>
      </div>
    );
  }
}



export default App;