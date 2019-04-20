import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app';

describe('App component tests', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should add one item to state', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleAddItem('Example Text');
        expect(wrapper.state().items.length).toEqual(3);
    });

    it('should remove completed items', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleRemoveCompleted();
        const everyResult = wrapper.state().items.every(item => item.completed);
        expect(everyResult).toEqual(false);
    });

    it('should remove all items from state', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleRemoveAll();
        expect(wrapper.state().items.length).toEqual(0);
    });

});