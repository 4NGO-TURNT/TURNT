import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }



  render () {
    return (
    <div>
      {/* <h1 id="p">FLYDO </h1>  */}
      
      <div id="sign">
        <form  id="input" >
          <input id="i1"  type="email" placeholder="Enter email" /> <br /> <br />
          <input id="i2"  type="password" placeholder="Enter password"/>
        </form>
        <div>
          <button id="but1">login</button>
        </div>
      <a href="#" id="text">Forgot Email/Password?</a>
      </div>
      <div>
        <a href="#" id="text2">Create new account</a>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




