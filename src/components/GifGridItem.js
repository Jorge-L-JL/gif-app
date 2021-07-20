import React from 'react'

export const GifGridItem = ({url, user_profile, user_avatar, username, title, datetime} ) => {

    return(
        <>
            <div className="xl:p-6 ">
                <div className="w-96 m-auto h-96 ">
                    <div
                        className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md
                                             dark:bg-gray-800 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    >
                        <div className="col-span-3 row-span-4 p-1 sm:p-0 m-1">
                            <a href={ url } target="_blank" rel='noreferrer'>
                                <img
                                    src={url}
                                    alt="Placeholder"
                                    className="rounded-t-xl object-cover h-48 w-full"
                                />
                            </a>
                        </div>

                        <div className="col-span-3 row-span-1">
                            <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
                                <div className="flex flex-row justify-between items-center">
                                    <a
                                        className="flex dark:text-white items-center no-underline hover:underline text-black"
                                        href={user_profile}
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        <img
                                            alt="Avatar"
                                            className="block rounded-full"
                                            width="24px"
                                            height="24px"
                                            src={ user_avatar ? user_avatar : '/bag-on-head.png'}
                                        />
                                        <span className="ml-2 text-sm dark:text-white"> {username} </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-3 row-span-1">
                            <header
                                className="flex items-center justify-between leading-tight p-2 md:p-4"
                            >
                                <h1 className="text-lg dark:text-white">
                                    <a className="no-underline dark:text-white hover:underline text-black" href={url} target='_blank' rel='noreferrer'>
                                        {title}
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">{ datetime }</p>
                            </header>
                        </div>

                        <div className="col-span-3 row-span-1">
                            <ul
                                className="flex flex-row pl-2 text-gray-600 overflow-x-scroll hide-scroll-bar"
                            >
                                <li className="py-1">
                                    <div
                                        className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 dark:hover:bg-blue-200 hover:bg-yellow-300 text-gray-500 dark:hover:text-gray-800 hover:text-gray-900"
                                    >
                                        <a href='google.es' target='_blank' rel='noreferrer' >#hogehoge</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
