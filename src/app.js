import React from 'react';
import Header from './components/Header';
import List from './components/List';
import AddItem from './components/AddItem';
import RemoveItems from './components/RemoveItems';
import uuid from 'uuid';

class App extends React.Component {
    state = JSON.parse(localStorage.getItem('toDos')) || {
        items: [{
            id: uuid(),
            text: 'Laundry',
            completed: false
        }, {
            id: uuid(),
            text: 'Make Dinner',
            completed: false
        }]
    };

    handleRemoveAll = () => {
        this.setState(() => ({items: []}));
    }

    handleRemoveCompleted = () => {
        this.setState(prevState =>  ({
            items: prevState.items.filter(el => !el.completed)
        }));
    }

    handleRemoveOne = (idToRemove) => {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== idToRemove)
        }));
    }

    handleAddItem = (newText) => {
        const newItem = {
            id: uuid(),
            text: newText,
            completed: false
        }
        this.setState((prevState) =>  ({
            items: prevState.items.concat(newItem)
        }));
    }

    handleCompleteItem = (idToComplete) => {
        this.setState(prevState => ({
            items: prevState.items.map((item) => {
                return item.id === idToComplete ? {...item, completed: !item.completed} : item;
            })
        }));
    }

    componentDidUpdate() {
        localStorage.setItem('toDos', JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="list-widget">
                        <div className="list-controls">
                            <AddItem handleAddItem={this.handleAddItem} />
                            <RemoveItems handleRemoveAll={this.handleRemoveAll} handleRemoveCompleted={this.handleRemoveCompleted} />
                        </div>
                        <List 
                            items={this.state.items} 
                            handleCompleteItem={this.handleCompleteItem}
                            handleRemoveOne={this.handleRemoveOne}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;