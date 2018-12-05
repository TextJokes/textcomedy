import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Joke from './Joke';
import Author from './Author';
import Controls from './Controls';
import TopMenu from './TopMenu';

class App extends Component {
  constructor(){
    super();
    this.state = {
      screen: 'top_rated',
      jokes: null,
      currentJoke: 0,
    }
  }
  
  componentDidMount(){
    axios
      .get('/jokes', {
        params:{
          screen: this.state.screen, 
          currentJoke:this.state.currentJoke,
        }
      })
      .then(res => {
        console.log(res.data, 'this is  my data');
        this.setState({
          jokes: res.data
        })
      })
      .catch(err => console.log('Could not get the jokes...' , err))
  }

  handleBestClick(e){
    e.preventDefault();    
    this.setState({
      screen: 'top_rated',
    })
  }

  handleAddJokeClick(e){
    e.preventDefault();    
    this.setState({
      screen: 'add_joke',
    })
  }

  handleLoginClick(e){
    e.preventDefault(); 
    this.setState({
      screen: 'login_page',
    })
  }

  handleNextJokeClick(e){
    e.preventDefault();    
    let val = this.state.currentJoke + 1;
    if (val > this.state.jokes.length - 1){val--}
    this.setState({
      currentJoke: val,
    })
  }

  handlePreviousJokeClick(e){
    e.preventDefault();
    let val = this.state.currentJoke - 1;
    if (val < 0){val = 0}
    this.setState({
      currentJoke: val,
    })
  }

  handleUpvoteClick(e){
    let newRating = this.state.jokes[this.state.currentJoke].rating + 1;    
    let _id = this.state.jokes[this.state.currentJoke]._id;
    let screen = this.state.screen;
    axios
    .patch('/joke/rate', {
      params:{
        _id: _id,
        screen: screen, 
        newRating: newRating,
      }
    })
    .then(res => {
      console.log(res.data, 'this is  my data');
      this.setState({
        jokes: res.data
      })
    })
    .catch(err => console.log('Could not get the jokes...' , err))
  }

  handleDownvoteClick(e){
    let newRating = this.state.jokes[this.state.currentJoke].rating - 1;    
    let _id = this.state.jokes[this.state.currentJoke]._id;
    let screen = this.state.screen;
    axios
    .patch('/joke/rate', {
      params:{
        _id: _id,
        screen: screen, 
        newRating: newRating,
      }
    })
  }


  render() {
    if (this.state.screen === 'top_rated'){
      if (this.state.jokes === null) {
        return(
          <div>
            Loading...
          </div>
        );
      } else {
        return(
          <Fragment>
            <TopMenu best={this.handleBestClick.bind(this)} add={this.handleAddJokeClick.bind(this)} login={this.handleLoginClick.bind(this)} style={jokeBody}/>
            <hr></hr>
            <div style={jokeBody}>
              <Author joke={this.state.jokes[this.state.currentJoke]} />
              <Joke joke={this.state.jokes[this.state.currentJoke]} />
            </div>
            <hr></hr>
            <Controls joke={this.state.jokes[this.state.currentJoke] } next={this.handleNextJokeClick.bind(this)} previous={this.handlePreviousJokeClick.bind(this)} up={this.handleUpvoteClick.bind(this)}   down={this.handleDownvoteClick.bind(this)} style={jokeBody}/>
          </Fragment>
        );
      }
    }
    if (this.state.screen === 'add_joke'){
      return(
        <Fragment>
          <TopMenu style={jokeBody} best={this.handleBestClick.bind(this)} add={this.handleAddJokeClick.bind(this)} login={this.handleLoginClick.bind(this)}/>
          <br></br>
          <hr></hr>
          <span>Loading add joke Page</span>
          <hr></hr>
        </Fragment>
      );
    }
    if (this.state.screen === 'login_page'){
      return(
        <Fragment>
          <TopMenu style={jokeBody} best={this.handleBestClick.bind(this)} add={this.handleAddJokeClick.bind(this)} login={this.handleLoginClick.bind(this)}/>
          <br></br>
          <hr></hr>
          <span>Loading login Page</span>
          <hr></hr>
        </Fragment>
      );
    }

  }
}

const jokeBody = {
  paddingLeft: '50px',  
  maxWidth:'100%',
  textAllign: 'center',
  fontSize: '20px',
}




export default App;