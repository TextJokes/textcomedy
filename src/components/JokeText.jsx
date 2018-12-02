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
          if (this.props.text.length > 200){
              return(
                  <div>
                      <div > {this.props.text} </div>
                      <button onClick={this.handleClick.bind(this)} >+ See more</button>
                  </div>
              )
          } else {
              return(
                  <div>
                      <div > {this.props.text} </div>
                  </div>
              )
          }
      } else {
          return(
              <div>
                  <div>{this.props.text}</div>
                  <button onClick={this.handleClick.bind(this)} >+ See less</button>
              </div>
          )
      }
  }
}

export default JokeText;