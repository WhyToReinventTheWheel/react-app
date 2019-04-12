import React from 'react'
import FunctionalComponent from './functional-component'
import ClassBasedComponent from './class-based-component'

const Main = () => {
    return (
        <div>
            <FunctionalComponent name='abc' age='20'>Child Props.</FunctionalComponent>
            <FunctionalComponent name='xyz' age='21'/>
            <ClassBasedComponent/>
        </div>
    )
}

export default Main