import React from 'react'

import ClassBasedComponent from './01-class-based-component'
import FunctionalComponent from './02-functional-component'
import DynamicContent from './03-dynamic-content'
import State from './04-state'
import StateHookExample from './05-state-hook'
import ConditionalRendering from './06-conditional-rendering'
import ConditionalRendering1 from './07-conditional-rendering'

import '../../App.css'

const Main = () => {
    return (
        <div>
            <div className='Example'>
                <FunctionalComponent name='xyz' age='21' />
            </div>
            <div className='Example'>
                <FunctionalComponent name='abc1' age='20'>
                    Child Props.</FunctionalComponent>
            </div>
            <div className='Example'>
                <ClassBasedComponent />
            </div>
            <div className='Example'>
                <DynamicContent />
            </div>
            <div className='Example'>
                <State />
            </div>
            <div className='Example'>
                <StateHookExample />
            </div>
            <div className='Example'>
                <ConditionalRendering />
            </div>
            <div className='Example'>
                <ConditionalRendering1 />
            </div>
        </div>
    )
}

export default Main
