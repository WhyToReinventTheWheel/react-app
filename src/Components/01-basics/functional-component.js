import React from 'react'

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>FunctionalComponent Name={props.name}, Age={props.age}.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default FunctionalComponent