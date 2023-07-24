import React from 'react';
import Item from './item';

export default function Box(props) {
    const items = props.data.map(
        (singleData, index) => {
            
            return <Item handleEdit = {props.handleEdit} removeHandler={props.removeHandler} key={index} id={index} item={singleData.item} time={singleData.time} />
    
        }
    )
  return (
    <div className="p-3">
        {items}
            {/* <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/> */}
    </div>
  )
}
