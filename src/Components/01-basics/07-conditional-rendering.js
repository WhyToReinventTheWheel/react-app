import React, { useState } from 'react';

const ConditionalRendering = props => {
    const [flag, setFlag] = useState(true);
    const toggleFlag = () => {
        setFlag(!flag)
    }
    let student = null
    if (flag) {
        student = getStudent()
    }
    return (
        <div>
            <button onClick={toggleFlag}>Show/Hide Data</button>
            {student}
        </div>
    )
}

const getStudent = () => {
    return (
        <div>
            <h3>Name: Test, Age:20</h3>
        </div>
    )
}

export default ConditionalRendering;
