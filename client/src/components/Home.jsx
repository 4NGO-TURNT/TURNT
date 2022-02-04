import React from 'react';
import $ from 'jquery';
import List from './List.jsx';

import Newgoal from './Newgoal.jsx';
import { Image } from 'cloudinary-react';

var Home = (props) => {
    return (
        <div>
            <h1>T.U.R.N.T</h1>
            <nav>
                {props.person.lastName === undefined && <button onClick={()=>props.changeView('login')}>Login</button>}
                <Image className='img' cloudName='magico' public_id={props.person.image} />
                <h4 >hello {props.person.lastName}</h4>
                {props.person.lastName !== undefined && <button onClick={()=>props.changeView('profil')}>profil</button>}
                
            </nav>
            
            
            
           
            
            {props.viewoption===1 && <Newgoal onChangeselection={props.onChangeselection} viewAirport={props.viewAirport} predictions={props.predictions}value={props.value} onChange = {props.onChange}changeViewOptions={props.changeViewOptions} addgoal={props.addgoal} change={props.change} changevalue={props.changevalue}/>}

            
            <List items={props.items} selectionItem={props.selectionItem} totalInc={props.totalInc} totalOut={props.totalOut}solde={props.solde}/>
            
            
        </div>)

}
export default Home