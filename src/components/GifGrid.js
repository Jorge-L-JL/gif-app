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
                    return <GifGridItem key={image.id} image={image} />
                })
            }
        </>
    )
}
