import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component{
state = { text: '' }

getNewTextValue = (e) => {
  this.setState({ text: e.target.value})
}

onFormSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  this.setState({
    text: ''
  })
}

render(){
return(

  <div className="container">
  <div className="ui container comments">
  <div className="ui card">
  <div className="content"></div>

  <div className="comment">
    <p>Enter Text Below: </p>
      <p>{this.state.text}</p>
  </div>

    <div className="extra content">
    <form onSubmit = {(e) => this.onFormSubmit(e)}>
      <div className="ui input">
      <input
      type="text"
      placeholder="Comment"
      value={this.state.text}
      onChange = {e => this.getNewTextValue(e)}
      />
      </div>
      <div className="ui green basic button" onClick={(e) => this.onFormSubmit(e)}>Clear</div>
    </form>
    </div>
    </div>
    </div>
    </div>
  );
};
}


ReactDOM.render(<App />, document.querySelector('#root'))
