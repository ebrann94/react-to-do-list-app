import React from 'react';
import { shallow } from 'enzyme';
import List from '../components/List';

describe('List component tests', () => {
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
        const wrapper = shallow(<List {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});