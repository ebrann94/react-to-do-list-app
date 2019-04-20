import React from 'react';
import { shallow, mount } from 'enzyme';
import AddItem from '../components/AddItem';

describe('AddItem component tests', () => {
    it('renders without crashing with props', () => {
        const props = {
            handleAddItem: jest.fn()
        }
        const wrapper = shallow(<AddItem {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('on input change, sets the state', () => {
        const event = {
            target: {
                value: 'Hello'
            }
        }
        const wrapper = mount(<AddItem />);
        wrapper.find('input').simulate('change', event);
        expect(wrapper.find('input').props().value).toBe('Hello');
    });

    it('calls handler function on submit', () => {
        const handleAddItem = jest.fn();
        const props = {
            handleAddItem
        }
        const event = {
            target: {
                value: 'Washing Up'
            }
        }

        const wrapper = mount(<AddItem {...props}/>);
        wrapper.find('input').simulate('change', event);
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(handleAddItem).toHaveBeenCalledWith('Washing Up');
    });
});