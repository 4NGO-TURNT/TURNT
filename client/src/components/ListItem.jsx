import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item.destination} | 
    { props.item.departureDate } | 
    { props.item.origin } | 
    { props.item.returnDate } |
    { props.item.price.total}
  </div>
)

export default ListItem;