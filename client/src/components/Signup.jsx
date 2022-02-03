
import React from 'react';
var SignUp = (props) => (
    <div>
        <h1>SignUp</h1>
        <label htmlFor="">full name :</label>
        <input type="text" name='name'onChange={props.change}/>
        <label htmlFor="">email :</label>
        <input type="text" name='email'onChange={props.change}/>
        <label htmlFor="">password :</label>
        <input type="password" name='password'onChange={props.change} />
        <label htmlFor="">birthday :</label>
        <input type="date" name='birthday'onChange={props.change}/>
        <label htmlFor="">country :</label>
        <input type="text" name='country'onChange={props.change}/>
        <label htmlFor="">phone Number :</label>
        <input type="number" name='phoneNumber'onChange={props.change}/>
        <label htmlFor="">image</label>
        <input type="file" name='image'onChange={props.changefile} />
        {/* <label htmlFor=""></label>
        <input type="text" /> */}
        <button onClick={props.post}>SignUp</button>
        <p name='login' onClick={()=>props.changeView('login')}>Login</p>
    </div>

)
export default SignUp

