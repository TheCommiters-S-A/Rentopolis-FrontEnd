import React from 'react';
import '@testing-library/jest-dom';
import { shallow, configure, mount } from 'enzyme';
import { RegisterForm } from "../../components/register/RegisterForm";
import { Button, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe('Test case for Register', () => {

    let wrapper;
    it('Should render component', () =>{
        shallow(<RegisterForm/>);
    });

    it('Should render input tags', () => {
        wrapper = shallow(<RegisterForm/>);
        expect(wrapper.find({ id: "name"}).exists()).toBe(true);
        expect(wrapper.find({ id: "lastName"}).exists()).toBe(true);
        expect(wrapper.find({ id: "email"}).exists()).toBe(true);
        expect(wrapper.find({ id: "standard-adornment-password"}).exists()).toBe(true);
    });

    it('Should render a submit button', () => {
        wrapper = shallow(<RegisterForm/>);
        expect(wrapper.find(Button).exists()).toBe(true);
    });

    it('the default value for all fields should be empty', () => {
        wrapper = shallow(<RegisterForm/>);
        expect(wrapper.find({ id: "name"}).prop('value')).toBe('');
        expect(wrapper.find({ id: "lastName"}).prop('value')).toBe('');
        expect(wrapper.find({ id: "email"}).prop('value')).toBe('');
        expect(wrapper.find({ id: "standard-adornment-password"}).prop('value')).toBe('');
    });

    it('value for all fields should change', () => {
        wrapper = shallow(<RegisterForm/>);
        wrapper.find({ id: "name"})
            .simulate('change',
                {
                    target:{
                        value: 'test'
                    }
                })
        expect(wrapper.find({ id: "name"}).prop('value')).toBe('test');

        wrapper.find({ id: "lastName"})
            .simulate('change',
                {
                    target:{
                        value: 'register'
                    }
                })
        expect(wrapper.find({ id: "lastName"}).prop('value')).toBe('register');

        wrapper.find({ id: "email"})
            .simulate('change',
                {
                    target:{
                        value: 'test@register.com'
                    }
                })
        expect(wrapper.find({ id: "email"}).prop('value')).toBe('test@register.com');

        wrapper.find({ id: "standard-adornment-password"})
            .simulate('change',
                {
                    target:{
                        value: 'test123'
                    }
                })
        expect(wrapper.find({ id: "standard-adornment-password"}).prop('value')).toBe('test123');
    });

    it('should have inputAdornment', () => {
        wrapper = mount(<RegisterForm />);
        expect(wrapper.find(InputAdornment).exists()).toBeTruthy();
    });

    it('should have change in inputAdornment visibility', () => {
        wrapper = mount(<RegisterForm />);
        wrapper.find(IconButton).simulate('click');
        expect(wrapper.find(Visibility).exists()).toBeTruthy();
    });

    it('should have change in inputAdornment visibility', () => {
        wrapper = mount(<RegisterForm />);
        wrapper.find(IconButton).simulate('click');
        wrapper.find(IconButton).simulate('mousedown');
        wrapper.find(IconButton).simulate('click');
        expect(wrapper.find(Visibility).exists()).toBeFalsy();
    });
});