import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app';

describe('App component tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should add one item to state', () => {
        const text = 'Example Text'
        const startLength = wrapper.state().items.length;
        wrapper.instance().handleAddItem(text);
        expect(wrapper.state().items.length).toEqual(startLength + 1);
        expect(wrapper.state().items[startLength].text).toEqual(text);
    });

    it('should remove completed items', () => {
        wrapper.instance().handleRemoveCompleted();
        const everyResult = wrapper.state().items.every(item => item.completed);
        expect(everyResult).toEqual(false);
    });

    it('should remove one item from state', () => {
        const id = wrapper.state().items[0].id;
        const startLength = wrapper.state().items.length
        wrapper.instance().handleRemoveOne(id);
        expect(wrapper.state().items).toHaveLength(startLength - 1);
    });

    it('should remove all items from state', () => {
        wrapper.instance().handleRemoveAll();
        expect(wrapper.state().items.length).toEqual(0);
    });


});