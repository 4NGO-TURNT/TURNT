import React from 'react';
var SignUp = (props) => (
    <div>
        {/* <form  id="input" > */}
        <h1>SignUp</h1>
        <label htmlFor="">First name :</label>
        <input type="text" name='firstName'onChange={props.change}/>
        <label htmlFor="">Last name</label>
        <input type="text" name='lastName'onChange={props.change}/>
        <label htmlFor="">email :</label>
        <input type="email" name='email'onChange={props.change}/>
        <label htmlFor="">password :</label>
        <input type="password" name='password'onChange={props.change} />
        <label htmlFor="">date of birth :</label>
        <input type="date" name='dob'onChange={props.change}/>
        <label htmlFor="">country :</label>
        <input type="text" name='country'onChange={props.change}/>
        <label htmlFor="">phone Number :</label>
        <input type="number" name='phoneNumber'onChange={props.change}/>
        <label htmlFor="">image</label>
        <input type="file" name='image'onChange={props.changefile} />
        
        <button onClick={props.newAccount}>SignUp</button>
        <p name='login' onClick={()=>props.changeView('login')}>Login</p>
        {/* </form> */}
    </div>

)
export default SignUp