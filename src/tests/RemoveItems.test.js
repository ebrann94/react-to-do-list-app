import React from 'react';
import { shallow } from 'enzyme';

import RemoveItems from '../components/RemoveItems';

describe('Remove Items components', () => {
    let wrapper;
    const props = {
        handleRemoveAll: jest.fn(),
        handleRemoveCompleted: jest.fn()
    }

    beforeEach(() => {
        wrapper = shallow(<RemoveItems {...props}/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders with out crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('calls handleRemoveAll function correctly', () => {
        wrapper.find('.remove-all-btn').simulate('click');
        expect(props.handleRemoveAll).toHaveBeenCalled();
    });

    it('calls handleRemoveCompleted correctly', () => {
        wrapper.find('.remove-completed-btn').simulate('click');
        expect(props.handleRemoveCompleted).toHaveBeenCalled();
    });
});