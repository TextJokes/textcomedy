import React, {Component} from 'react';

class JokeText extends Component {
  constructor(props) {
    super(props);
      this.state = {
      folded: true,
    };
  }

  handleClick(){
      this.setState({
          folded: !this.state.folded
      })
  }

  render(){
      if (this.state.folded){
          if (this.props.punch === true){
              return(
                  <div>
                      <div > {this.props.text} </div>
                      <br></br>
                      <button onClick={this.handleClick.bind(this)} >See Punch line</button>
                      <br></br>
                      <br></br>
                  </div>
              )
          } else {
              return(
                  <div>
                    <div > {this.props.text} </div>
                    <br></br>
                    <br></br>
                  </div>
              )
          }
      } else {
          return(
              <div>
                  <div>{this.props.text}</div>
                  <br></br>
                  <div>{this.props.punchtext}</div>
                  <br></br>
                  <button onClick={this.handleClick.bind(this)} >Hide Punch Line</button>
                  <br></br>
                  <br></br>
              </div>
          )
      }
  }
}

export default JokeText;