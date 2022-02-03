import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item.amount } { props.item.catecory } { props.item.date } { props.item.description }
  </div>
)

export default ListItem;