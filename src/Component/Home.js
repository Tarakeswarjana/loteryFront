import React, { useEffect, useState } from 'react'
import { viewAllResult } from '../Config/AllApiCall'
const imgee = require('../asssets/todayImg.png')

function Home() {
    const [results, setResults] = useState([])
    const [noonresults, setnoonResults] = useState([])

    const [eveningresults, seteveningResults] = useState([])



    const fetchAllData = async () => {
        const newData = await viewAllResult("Morning")

        if (newData.length > 0) {
            setResults(newData)
            console.log(newData, "ooopp")


        }
        const noonResult = await viewAllResult("Noon")
        if (noonResult.length > 0) {
            setnoonResults(noonResult)
            console.log(noonResult, "ooopp")


        }


        const nightResult = await viewAllResult("Evening")
        if (nightResult.length > 0) {
            seteveningResults(nightResult)
            console.log(nightResult, "ooopp")


        }

    }
    useEffect(() => {
        fetchAllData()
    }, [])
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return (
        <div className='ml-16 mr-16 mt-8 flex flex-col gap-6 flex-wrap'>
            <h1>MorningResult</h1>
            <div className='ml-16 mr-16 mt-8 flex flex-row gap-6 flex-wrap'>
                {results.map((ele) => {
                    return (


                        <div class="max-w-[200px] bg-slate-300 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={imgee} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.game_date}</h5>
                                </a>
                                <a href={`/pdfResult/${ele.game_date}/Morning`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View Result
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>
            <h1>NoonResult</h1>
            <div className='ml-16 mr-16 mt-8 flex flex-row gap-6 flex-wrap'>

                {noonresults.map((ele) => {
                    return (


                        <div class="max-w-[200px] bg-slate-300 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={imgee} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.game_date}</h5>
                                </a>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View Result
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>

            <h1>EveningResult</h1>
            <div className='ml-16 mr-16 mt-8 flex flex-row gap-6 flex-wrap'>

                {eveningresults.map((ele) => {
                    return (


                        <div class="max-w-[200px] bg-slate-300 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={imgee} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.game_date}</h5>
                                </a>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View Result
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default Home