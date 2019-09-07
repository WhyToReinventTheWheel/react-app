import React from 'react';
import './02-item.css'

const Item = props => {
    return (
        <div className='Item'>
            <p>{props.data}</p>
            <input type="text" value={props.name} />
        </div >
    )
}

export default Item
