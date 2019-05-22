import React from 'react';
import { shallow } from 'enzyme';

import RemoveItems from '../components/RemoveItems';
import { exportAllDeclaration } from '@babel/types';
import { findNodeModule } from 'jest-resolve';

describe('Remove Items components', () => {
    it('renders with out crashing', () => {
        const wrapper = shallow(<RemoveItems />);
        expect(wrapper).toMatchSnapshot();
    });

    it('calls removeAll function correctly', () => {
        const props = {
            handleRemoveAll: jest.fn(),
            handleRemoveCompleted: jest.fn()
        }

        const wrapper = shallow(<RemoveItems {...props}/>);
        wrapper.find('.remove-all-btn').simulate('click');
        expect(props.handleRemoveAll).toHaveBeenCalled();
        wrapper.find('.remove-completed-btn').simulate('click');
        expect(props.handleRemoveCompleted).toHaveBeenCalled();
    })
})