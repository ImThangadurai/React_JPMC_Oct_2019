import React from 'react'
import Counter from './Counter';

import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';


configure({adapter: new Adapter()})


//Test Suite
describe("CounterTests", () => {

    //Unit Test
    fit("should be created", () => {
        // var x = 10;
        // expect(x).toBe(1);
        const wrapper= mount(<Counter value="0"/>);
        const instance = wrapper.instance();
        expect(instance).toBeTruthy();

    });

    fit("should have state.count = 0", () => {
        // var x = 10;
        // expect(x).toBe(1);
        const wrapper= mount(<Counter value="0"/>);
        const state = wrapper.state();
        const count = state.count;
        expect(count).toBe(0);

    });
    fit("should have state.count incremented by 1", () => {
        // var x = 10;
        // expect(x).toBe(1);
        const wrapper= mount(<Counter value="0"/>);
        const instance = wrapper.instance();
        instance.inc();
        const state = wrapper.state();
        const count = state.count;
        expect(count).toBe(1);

    });

    fit("should have state.count incremented by 1 on button click", () => {
        // var x = 10;
        // expect(x).toBe(1);
        const wrapper= shallow(<Counter value="0"/>);
        
        wrapper.find("#incBtn").simulate('click');
        //wrapper.find("#incBtn").simulate('click');

        const state = wrapper.state();
        const count = state.count;
        expect(count).toBe(1);

    });

    fit("snapshot", () => {
       
        const wrapper= create(<Counter value="0" title="Counter"/>);
        expect(wrapper.toJSON()).toMatchSnapshot();
       

    });


});