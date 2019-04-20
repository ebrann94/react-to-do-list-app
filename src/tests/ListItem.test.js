import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItem from '../components/ListItem';
import { jsxText } from '@babel/types';

describe('ListItem component tests', () => {
    it('renders without crashing given required props', () => {
        const props = {
            text: 'Example text',
            id: '1234',
            completed: true,
            handleCompleteItem: jest.fn(),
            handleRemoveOne: jest.fn()
        }
        const wrapper = shallow(<ListItem {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text correctly', () => {
        const props = {
            text: 'Example Text'
        }
        const wrapper = shallow(<ListItem {...props}/>);
        expect(wrapper.find('p').text()).toBe('Example Text');
    });

    it('calls complete item when clicked', () => {
        const handleCompleteItem = jest.fn();
        const props = {
            handleCompleteItem,
            id: '1234',
            completed: false
        }
        const event = {
            target: {
                id: '---'
            }
        }
        const wrapper = shallow(<ListItem {...props}/>);
        wrapper.find('div.list-item').simulate('click', event);
        expect(handleCompleteItem).toHaveBeenCalledWith(props.id);
    });

    it('calls remove item when delete button clicked', () => {
        const handleRemoveOne = jest.fn();
        const props = {
            handleRemoveOne,
            id: '1234'
        }
        const wrapper = shallow(<ListItem {...props} />);
        wrapper.find('button').simulate('click');
        expect(handleRemoveOne).toHaveBeenCalledWith(props.id);
    });
});