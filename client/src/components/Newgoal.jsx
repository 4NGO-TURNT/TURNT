import React from 'react'
var Newgoal = (props) => (
    <div>
      
        <label >Departure</label>
        <input type="div" name='departure' value={props.value} onChange={props.onChange} />        {props.viewAirport===1 &&
        <div>
            <select  name='nameAirport' onChange={props.onChangeselection}>
                {
                    props.predictions.map((item, index) => (
                        <option value={item} key={index + item}>{item}</option>
                    ))
                }
            </select>
        </div>
        }
        <label htmlFor="">FROM</label>
        <input className='fl_search' type="date" name='from' onChange={props.change} />

        <label htmlFor="">TO</label>
        <input  className='fl_search' type="date" name='to' onChange={props.change} />
        <label htmlFor="">budget</label>
        <input className='fl_search' type="text" name='budget' onChange={props.change} />
        <button className='sub_button' onClick={props.addgoal}>OK</button>
        <p onClick={() => props.changeViewOptions(0)}>Cancel</p>
    </div>
)
export default Newgoal