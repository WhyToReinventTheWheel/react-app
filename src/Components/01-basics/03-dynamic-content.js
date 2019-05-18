import React from 'react'

const dynamicContent = () => {
    // {} when java script variable need to show
    return (
        <div>
            <p>Dynamic age={Math.floor(Math.random() * 30)}.</p>
        </div>
    )
}

export default dynamicContent