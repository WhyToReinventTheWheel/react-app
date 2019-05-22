import React from 'react'

import ClassBasedComponent from './01-class-based-component'
import FunctionalComponent from './02-functional-component'
import DynamicContent from './03-dynamic-content'
import State from './04-state'
import StateHookExample from './05-state-hook'
import ConditionalRendering from './06-conditional-rendering'

import '../../App.css'

const Main = () => {
    return (
        <div>
            <div className='Grey'>
                <FunctionalComponent name='xyz' age='21' />
            </div>
            <div className='Green'>
                <FunctionalComponent name='abc1' age='20'>
                    Child Props.</FunctionalComponent>
            </div>
            <div className='Grey'>
                <ClassBasedComponent />
            </div>
            <div className='Green'>
                <DynamicContent />
            </div>
            <div className='Grey'>
                <State />
            </div>
            <div className='Green'>
                <StateHookExample />
            </div>
            <div className='Grey'>
                <ConditionalRendering />
            </div>
        </div>
    )
}

export default Main
