import React from 'react'

import ListUsingMap from './01-list-using-map'
import List from './02-list'
import '../../App.css'

const Main = () => {
    return (
        <div>
            <div className='Example'>
                <ListUsingMap />
            </div>
            <div className='Example'>
                <List />
            </div>
        </div>
    )
}

export default Main
