import React from 'react';

const persons = [{ name: 'test1' },
{ name: 'test2' },
{ name: 'test3' }
]

const List = props => {
    return (
        <div>
            {getListItems(persons)}
        </div>
    )
}

const getListItems = (personList) => {
    return (
        <div>
            {personList.map(person => {
                return <p> Name: {person.name}</p>
            })}
        </div >
    )
}

export default List
