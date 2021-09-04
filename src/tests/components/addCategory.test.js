import React from "react";
import {AddCategory} from "../../components/AddCategory.";
import { shallow } from "enzyme"

describe('Tests in <AddCategory />', () => {
    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={ setCategories } categories={['Prueba1', 'Prueba2']} />)

    test('Should display it rightly', () => {
        expect( wrapper ).toMatchSnapshot()
    })
})
