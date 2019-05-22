import React, { useState } from 'react';

const ConditionalRendering = props => {
    const [flag, setFlag] = useState(true);
    const toggleFlag = () => {
        setFlag(!flag)
    }
    return (
        <div>
            <button onClick={toggleFlag}>Show/Hide Data</button>
            {flag ?
                <div>
                    <h3>Name: Test, Age:20</h3>
                </div>
                : null
            }
        </div>
    )
}

export default ConditionalRendering;
