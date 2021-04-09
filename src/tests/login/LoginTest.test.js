import React from 'react';
import '@testing-library/jest-dom';
import { shallow, configure, mount } from 'enzyme';
import { LoginForm } from '../../components/login/LoginForm';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TextField, Button, Input, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';

configure({ adapter: new Adapter() });

describe('Test case for testing login', () => {

    let wrapper;

    it('should render an email input tag', () => {
        wrapper = shallow(<LoginForm/>);
        expect(wrapper.find(TextField).exists()).toBe(true);
    });

    it('should render a password input tag', () => {
        wrapper = shallow(<LoginForm/>);
        expect(wrapper.find(Input, 'Input[id="standard-adornment-password"]').exists()).toBe(true);
    });

    it('should render a submit button', () => {
        wrapper = shallow(<LoginForm />);
        expect(wrapper.find(Button).exists()).toBe(true);
    });

    it('the default value for both fields should be empty', () => {
        wrapper = shallow(<LoginForm />);
        expect(wrapper.find(TextField).prop('value')).toBe('');
        expect(wrapper.find(Input, 'Input[id="standard-adornment-password"]').prop('value')).toBe('');
    });

    test('user state change', () => {
        wrapper = shallow(<LoginForm/>);
        wrapper.find(TextField)
               .simulate('change',
                        {
                            target:{
                                value: 'test@test.eci'
                            }
                        })
        expect(wrapper.find(TextField).prop('value')).toBe('test@test.eci');
    });

    test('password state change', () => {
        wrapper = shallow(<LoginForm/>);
        wrapper.find(Input, 'Input[id="standard-adornment-password"]')
            .simulate('change',
                {
                    target:{
                        value: 'test123'
                    }
                })
        expect(wrapper.find(Input, 'Input[id="standard-adornment-password"]').prop('value')).toBe('test123');
    });
/*
    it('on submitting, a submit handler function should be triggered on click event', () => {
        const handleSubmit = jest.fn();
        const wrapper = mount(<LoginForm/>);
        wrapper.find('form').setProps(handleSubmit);
        wrapper.find(Button).simulate('click')
        expect(handleSubmit).toHaveBeenCalled();
    });
*/
    it('should have inputAdornment', () => {
        wrapper = mount(<LoginForm />);
        expect(wrapper.find(InputAdornment).exists()).toBeTruthy();
    });

    it('should have change in inputAdornment visibility', () => {
        wrapper = mount(<LoginForm />);
        wrapper.find(IconButton).simulate('click');
        expect(wrapper.find(Visibility).exists()).toBeTruthy();
    });

    it('should have change in inputAdornment visibility', () => {
        wrapper = mount(<LoginForm />);
        wrapper.find(IconButton).simulate('click');
        wrapper.find(IconButton).simulate('mousedown');
        wrapper.find(IconButton).simulate('click');
        expect(wrapper.find(Visibility).exists()).toBeFalsy();
    });
})
