import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app';
import { exportAllDeclaration } from '@babel/types';

describe('App component tests', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
})