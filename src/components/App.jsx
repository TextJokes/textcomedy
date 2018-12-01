import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      screen: home,
      jokes: [],
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

  }
}



export default App;