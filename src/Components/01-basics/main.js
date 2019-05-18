import React from 'react'

import ClassBasedComponent from './01-class-based-component'
import FunctionalComponent from './02-functional-component'
import DynamicContent from './03-dynamic-content'


const main = () => {
    return (
        <div>
            <FunctionalComponent name='abc1' age='20'>Child Props.</FunctionalComponent>
            <FunctionalComponent name='xyz' age='21' />
            <ClassBasedComponent />
            <DynamicContent />
        </div>
    )
}

export default main