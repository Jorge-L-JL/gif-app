import React, {useState} from "react";
import {AddCategory} from "../../components/AddCategory";
import { shallow } from "enzyme"

describe('Tests in <AddCategory />', () => {
    let wrapper;
    let categories = ['Prueba1', 'Prueba2', 'Prueba3']
    beforeEach(() => {
        //const setCategories = () => {};
        const setCategories = jest.fn()
        wrapper = shallow( <AddCategory setCategories={ setCategories } categories={categories} />)
    })

    test('Should display it rightly', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Should change the input text', () => {
        const button = wrapper.find('#send-category');
        const input = wrapper.find('#input-category')
        const categoryList = wrapper.find('#category-list')
        const value = 'Test-Value'
        input.simulate('change', { target: { value } })
        button.simulate('click');
        console.log(wrapper.find('#custom-text').debug())
        console.log(wrapper.find('#custom-text').text())
        /*
        console.log(input.debug())
        console.log(button.debug())
        console.log(categoryList.debug())*/
        expect( categoryList.children().first().text().trim()).toBe(value)
    })
})
