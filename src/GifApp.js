import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory.";
import {GifGrid} from "./components/GifGrid";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
require('dotenv').config()

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const GifApp = () => {

    const [categories, setCategories] = useState(['Cats', 'Coding', 'ReactJs']);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    return (
        <div className="dark:bg-gray-700 w-full h-full">
            {loading &&
                <div className={[classes.root, 'relative w-full']}>
                    <LinearProgress color={ window.matchMedia('(prefers-color-scheme: dark)').matches ? 'secondary' : 'primary'}/>
                </div>
            }
            <h1 className="dark:text-white text-3xl font-mono subpixel-antialiased tracking-wide text-center p-4" >Gif App | By Jorge Granados 😁</h1>
            <AddCategory setCategories={ setCategories } categories={ categories }/>
            <div className="w-full flex justify-around items-center my-5 flex-col">
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-1 w-full p-5'>
                    {
                        categories.map( (category, i) => {
                            return <GifGrid key={ i } category={ category } setLoading={setLoading}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default GifApp;
