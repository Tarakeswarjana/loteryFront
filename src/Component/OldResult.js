import React from 'react'
const imgee = require('../asssets/todayImg.png')

function OldResult() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return (
        <div className="ml-16 mr-16 mt-8 flex flex-row gap-6 flex-wrap md:flex-nowrap md:overflow-x-auto">
            {arr.map((ele) => {
                return (
                    <div className="max-w-[200px] bg-yellow-300 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0 md:flex-shrink">
                        <a href="#">
                            <img className="rounded-t-lg" src={imgee} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    21/08/2021
                                </h5>
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                View Result
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}

export default OldResult