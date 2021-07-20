import React, {useState} from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (el) => {
        setInputValue( el.target.value )
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('Avoiding submit (Refreshing)')
    }

    const handleAddCategory = () => {
        setCategories(categories => [inputValue, ...categories])
        setInputValue('')
    }

    return (
        <form onSubmit={ handleSubmit } className="flex flex-col items-center">
            <h1 className="dark:text-white font-mono text-2xl">Save a Category</h1>
            <p className="italic font-mono text-base dark:text-white">When you come back, your category will be saved</p>
            <div className="p-4 flex">
                <input
                    className="bg-gray-100 dark:placeholder-gray-200 dark:bg-gray-600 w-full rounded-2xl h-8 outline-none p-5 -ml-10 pl-10 font-semibold
                    placeholder-gray-400 dark:text-white mr-7 sm:mr-0.5 focus:ring-yellow-400 dark:focus:ring-indigo-500 focus:ring-2 duration-300"
                    placeholder="Add Category"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
                <button
                    className="dark:bg-indigo-700 dark:hover:bg-indigo-800 bg-yellow-400 hover:bg-yellow-500 dark:text-white h-8 w-28 text-center rounded-xl
                     ml-2 p-5 font-semibold flex justify-center items-center"
                    onClick={ handleAddCategory }

                >
                    Save
                </button>
            </div>
            <div className='flex flex-wrap'>
                { categories.map( (category, i) => {
                    return (
                        <li
                            className="dark:text-white list-none dark:bg-indigo-800 bg-yellow-400 dark:hover:bg-purple-700 hover:bg-yellow-600 h-14 w-36 p-4
                             font-bold flex justify-center items-center rounded-xl mx-5" key={i}>
                            {category}
                        </li>
                    )
                })}
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}
