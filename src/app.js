import React from 'react';
import Header from './components/Header';
import List from './components/List';
import AddItem from './components/AddItem';
import RemoveItems from './components/RemoveItems';
import uuid from 'uuid';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [{
                id: uuid(),
                item: 'Laundry',
                completed: false
            }, {
                id: uuid(),
                item: 'Make Dinner',
                completed: false
            }]
        };

        this.handleCompleteItem = this.handleCompleteItem.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveCompleted = this.handleRemoveCompleted.bind(this);
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

    handleAddItem(e) {
        e.preventDefault();
        if (e.target.elements[0].value) {
            const newItem = {
                id: uuid(),
                item: e.target.elements[0].value,
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
                    if (item.id === idToComplete) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })
            }
        });
    }

    componentDidUpdate() {
        console.log(this.state);
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
                        <List items={this.state.items} handleCompleteItem={this.handleCompleteItem}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;