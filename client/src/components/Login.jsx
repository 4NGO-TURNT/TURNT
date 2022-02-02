import React from 'react'
var Login = (props) => (
    <div>
        <h1>Login</h1>
        <label htmlFor="">username</label>
        <input type="text" onChange={props.change} name='username' />
        <label htmlFor="">password</label>
        <input type="password" onChange={props.change} name="password" />
        <button onClick={props.get}>LogIn</button>
        <p name='signup' onClick={()=>props.changeView('signup')}>create new account</p>
    </div>
)
export default Login