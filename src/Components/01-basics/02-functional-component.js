import React from 'react'

const functionalComponent = (props) => {
    return (
        <div>
            <p>FunctionalComponent Name={props.name}, Age={props.age}.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default functionalComponent