import React from 'react';
import { shallow } from 'enzyme';

import TaskList from '../components/TaskList/TaskList';
import TaskListItem from '../components/TaskList/TaskListItem';

describe('TaskList component tests', () => {
    it('renders without crashing with required props', () => {
        const props = {
            items: [{
                id: '1234',
                text: 'Example text',
                completed: false
            }],
            handleCompleteItem: jest.fn(),
            handleRemoveOne: jest.fn()
        }
        const wrapper = shallow(<TaskList {...props}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(TaskListItem)).toHaveLength(props.items.length);
    });
});