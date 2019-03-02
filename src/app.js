import React from 'react';
import Header from './components/Header';
import List from './components/List';
import AddItem from './components/AddItem';
import RemoveItems from './components/RemoveItems';
import uuid from 'uuid';

class App extends React.Component {
    constructor() {
        super();

        this.state = JSON.parse(localStorage.getItem('toDos')) || {
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

        this.handleCompleteItem = this.handleCompleteItem.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveCompleted = this.handleRemoveCompleted.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
    }

    handleRemoveAll() {
        this.setState(() => ({items: []}));
    }

    handleRemoveCompleted() {
        this.setState(prevState => {
            return ({
                items: prevState.items.filter(el => !el.completed)
            });
        });
    }

    handleRemoveOne(idToRemove) {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== idToRemove)
        }));
    }

    handleAddItem(e) {
        e.preventDefault();
        if (e.target.elements[0].value) {
            const newItem = {
                id: uuid(),
                text: e.target.elements[0].value,
                completed: false
            }
    
            e.target.elements[0].value = '';
    
            this.setState((prevState) => {
                prevState.items.push(newItem);
                return {
                    items: prevState.items
                }
            });
        }

    }

    handleCompleteItem(idToComplete) {
        this.setState(prevState => {
            return {
                items: prevState.items.map((item) => {
                    return item.id === idToComplete ? {...item, completed: !item.completed} : item;
                })
            }
        });
    }

    componentDidUpdate() {
        // console.log(this.state);
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