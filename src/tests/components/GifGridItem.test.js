import React from "react";
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe("Tests in <GifGridItem />", () => {

    const imageData = {
        id: "yJil9u57ybQ9movc6E",
        title: "Bad Bunny Shrug GIF by Corona USA",
        url: "https://media2.giphy.com/media/yJil9u57ybQ9movc6E/giphy.gif?cid=b9c5cc1dfusrl5u64bcxmqpvs036ha0wecergpemqicgvxmq&rid=giphy.gif&ct=g",
        username: "corona_usa",
        user_avatar: "https://media0.giphy.com/avatars/corona_usa/mMwlOHVpY6r0.jpg",
        user_profile: "https://giphy.com/corona_usa/",
        datetime: '2021-07-12'
    }
    //The snapshot is created
    const wrapper = shallow(<GifGridItem {...imageData} />)


    test('Should display the component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Should have a paragraph with the title', () => {
        const titleParentDOMElment = wrapper.find('h1')
        expect( titleParentDOMElment.children().text().trim() ).toBe( imageData.title )
    })

    test('Should have an image', () => {
        const img = wrapper.find('img.imageGif')
        expect( img.prop('src') ).toBe( imageData.url )
        expect( img.prop('alt') ).toBe( imageData.title )
    })
})
