import React from "react";
import {GifGridItem} from "./GifGridItem";
import { useRequestGif } from '../hooks/useRequestGif'




export const GifGrid = ({ category, setLoading }) => {

    const { loading, data } = useRequestGif( category );

    return (
        <>
            {setLoading(loading)}
            {
                data.map( image => {
                    //When you need to pass a lot of parameters, you should use the spread operator without variable assignment
                    return <GifGridItem key={image.id} {...image} />
                })
            }
        </>
    )
}
