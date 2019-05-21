import React, { useState } from 'react';

const stateHookExample = props => {
    const [name, setName] = useState('Test Test');
    const [age, setAge] = useState(20);

    const setNameHandler = () => {
        setName('Test1 Test2')
    }

    const setAgeHandler = () => {
        setAge(21)
    }

    return (
        <div>
            <button onClick={setNameHandler}>Hook:SetName={name}</button>
            <br />
            <button onClick={setAgeHandler}>Hook:SetAge={age}</button>
        </div>
    )
}

export default stateHookExample;
