import { useState, useEffect } from "react";
import {getGif} from "../helpers/getGifs";

export const useRequestGif = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        //This is used, because useEffect is asynchronous, to use await functions you must make this or
        // use promises
        async function fetchData() {
            setTimeout(async () => {
                setState({
                    data: await getGif(category),
                    loading: false
                })
            }, 1500)
        }
        fetchData();
    }, [ category ])


    return state;
}
