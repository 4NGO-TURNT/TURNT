import React from 'react'
var ForgetAccount = (props) => (
    <div>
        <h1>Find Your Account</h1>
        Please enter your email to search for your account.
        <label htmlFor="">email</label>
        <input type="text" onChange={props.change} name='username' />
        
        <button onClick={props.get}>LogIn</button>
        <p name='signup' onClick={()=>props.changeView('signup')}>create new account</p>
    </div>
)
export default ForgetAccount