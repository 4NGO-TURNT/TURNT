import React from 'react'
var Newgoal = (props) => (
    <div className='form-row'>
        <div >
        
        <input class="form-control" placeholder='City of departure' type="div" name='departure' value={props.value} onChange={props.onChange} />
        {props.viewAirport===1 &&
        <div>
            <select  class="form-control"  name='nameAirport' onChange={props.onChangeselection}>
                <option value="">select airport</option>
                {
                    props.predictions.map((item, index) => (
                        <option value={item} key={index + item}>{item}</option>
                    ))
                }
            </select>
        </div>
        }
        </div>
        
        <input class="form-control"  type="date" name='from' onChange={props.change} />

       
        <input class="form-control"  type="date" name='to' onChange={props.change} />
       
        <input class="form-control" placeholder='What are you willing to pay?' type="text" name='budget' onChange={props.change} />
        <button onClick={props.addgoal}>OK</button>
        <p onClick={() => props.changeViewOptions(0)}>Cancel</p>
    </div>
)
export default Newgoal