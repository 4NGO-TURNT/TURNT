import React from 'react';
import $ from 'jquery';
import List from './List.jsx';

import Newgoal from './Newgoal.jsx';
import { Image } from 'cloudinary-react';

var Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                
                <button onClick={()=>props.changeViewOptions(1)}>new Goal</button>
                <Image className='img' cloudName='magico' public_id={props.person.image} />
                <h4 >{props.person.username}</h4>
                <button>profil</button>
            </nav>
            
            
            
           
            
            {props.viewoption===1 && <Newgoal changeViewOptions={props.changeViewOptions} addgoal={props.addgoal} change={props.change} changevalue={props.changevalue}/>}

            
            <List items={props.items} selectionItem={props.selectionItem} totalInc={props.totalInc} totalOut={props.totalOut}solde={props.solde}/>
            
            
        </div>)

}
export default Home