import React from 'react'
var Newgoal = (props) => (
    <div>
        <h1>New goal</h1>
        <label htmlFor="">the goal</label>
        <input type="text" name='goal_lb' onChange={props.change} />
        <label htmlFor="">depart</label>
        <select name='category' onChange={props.changevalue}>
            <option value=""></option>
            <option value="vision">vision (more 5 years)</option>
            <option value="Long">Long term (less then 5 years)</option>
            <option value="short">short term (less then 1 year)</option>
            <option value="annual">annual</option>
            <option value="half-yearly">half-yearly</option>
            <option value="Monthly">Monthly</option>
            <option value="weekly">weekly</option>
            <option value="daily">daily</option>

        </select>
        <label htmlFor="">date</label>
        <input type="date" name='date' onChange={props.change} />
        <label htmlFor="">comment</label>
        <input type="text" name='description' onChange={props.change} />
        <button onClick={props.addgoal}>OK</button>
        <p onClick={()=>props.changeViewOptions(0)}>Cancel</p>
    </div>
)
export default Newgoal