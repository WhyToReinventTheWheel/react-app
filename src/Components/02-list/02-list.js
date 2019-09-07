import React, { Component } from 'react';
import Item from './02-item'

class List extends Component {
    state = {
        list: [
            { id: '11', data: '1111111' },
            { id: '22', data: '2222222' },
            { id: '33', data: '3333333' }
        ],
        showList: false
    }

    togglePersonsHandler = () => {
        this.setState({ showList: !this.state.showList });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showList) {
            persons = (
                <div>
                    {this.state.list.map((item, index) => {
                        return <Item
                            data={item.data}
                            key={item.id}
                        />
                    })}
                </div>
            );
        }

        return (
            <div>
                <h3>List Demo</h3>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle-List</button>
                {persons}
            </div>
        );
    }
}

export default List;
