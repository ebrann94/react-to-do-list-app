import React from 'react';
import { shallow, mount } from 'enzyme';
import TaskListItem from '../components/TaskList/TaskListItem';

describe('TaskListItem component tests', () => {
    let wrapper;
    const props = {
        text: 'Example text',
        id: '1234',
        completed: false,
        handleCompleteItem: jest.fn(),
        handleRemoveOne: jest.fn()
    }

    beforeEach(() => {
        wrapper = shallow(<TaskListItem {...props} />)
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders without crashing given required props', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text correctly', () => {
        expect(wrapper.find('p').text()).toBe(props.text);
    });

    it('calls complete item when clicked', () => {
        const event = {
            target: {
                id: '---'
            }
        }
        wrapper.find('div.list-item').simulate('click', event);
        expect(props.handleCompleteItem).toHaveBeenCalledWith(props.id);
    });

    it('calls remove item when delete button clicked', () => {
        wrapper.find('button').simulate('click');
        expect(props.handleRemoveOne).toHaveBeenCalledWith(props.id);
    });
});