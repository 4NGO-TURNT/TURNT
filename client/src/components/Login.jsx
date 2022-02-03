import React from 'react'
var Login = (props) => (
    <div>
      {/* <h1 id="p">FLYDO </h1>  */}
      
      <div id="sign">
        <form  id="input" >
          <input id="i1" onChange={props.change}  type="email" placeholder="Enter email" /> <br /> <br />
          <input id="i2"  onChange={props.change}  type="password" placeholder="Enter password"/>
        </form>
        <div>
          <button onClick={props.get} id="but1">login</button>
        </div>
      <p id="text" onClick={()=>props.changeView('forgetaccount')}>Forgot Email/Password?</p>
      </div>
      <div>
        <p  id="text2" onClick={()=>props.changeView('signup')}>Create new account</p>
      </div>
    </div>
  
    
)
export default Login