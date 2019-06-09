import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTask from '../components/TaskList/AddTask';

describe('AddTask component tests', () => {
    let wrapper;
    const props = {
        handleAddItem: jest.fn()
    }
    beforeEach(() => {
        wrapper = mount(<AddTask {...props} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders without crashing with props', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('on input change, sets the state', () => {
        const event = {
            target: {
                value: 'Hello'
            }
        }
        wrapper.find('input').simulate('change', event);
        expect(wrapper.find('input').props().value).toBe('Hello');
    });

    it('calls handler function on submit', () => {
        const event = {
            target: {
                value: 'Washing Up'
            }
        }
        wrapper.find('input').simulate('change', event);
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(props.handleAddItem).toHaveBeenCalledWith(event.target.value);
    });
});