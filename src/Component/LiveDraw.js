import React, { useEffect, useState } from 'react'
import { viewAllResult, viewliveUrl } from '../Config/AllApiCall'
import { ColorRing } from 'react-loader-spinner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast } from 'react-toastify';
const imgee = require('../asssets/todayImg.png')


function Home() {

    const [results, setResults] = useState(null)


    const [isLoading, setisLoading] = useState(false)
    function getCurrentDateFormatted() {
        // Get the current date
        const now = new Date();
        // const now = getRandomDateIn2022();

        // Extract day, month, and year
        const day = String(now.getDate()).padStart(2, "0");
        const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
        const year = now.getFullYear();

        // Format the date as 'dd-mm-yyyy'
        const formattedDate = `${day}-${month}-${year}`;
        console.log(formattedDate, "iii");
        return formattedDate;
    }


    const fetchAllData = async (gtime) => {
        setisLoading(true)

        const liveres = await viewliveUrl(gtime, getCurrentDateFormatted())
        if (liveres?.data && liveres?.data[0]?.embededUrl) {
            setResults(liveres?.data[0]?.embededUrl)
            setisLoading(false)
        } else {
            toast.error("No data found")
            setisLoading(false)
        }
        console.log(liveres, "jjjjjjjj")



    }


    useEffect(() => {
        fetchAllData("Morning")
    }, [])
    return (
        <>
            {isLoading && (
                <div className="loader">
                    <ColorRing
                        visible={true}
                        height="150"
                        width="150"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['green']}
                    />
                </div>
            )}


            <div className='ml-16 mr-16 mt-8 flex flex-col gap-6 flex-wrap'>
                {!isLoading && <Tabs>
                    <TabList>
                        <Tab >
                            <div className='font-bold ' onClick={() => { fetchAllData("Morning") }}>
                                MorningResult
                            </div>
                        </Tab>
                        <Tab>
                            <div className='font-bold ' onClick={() => { fetchAllData("Noon") }}>
                                NoonResult
                            </div>
                        </Tab>
                        <Tab>
                            <div className='font-bold ' onClick={() => { fetchAllData("Evening") }}>
                                EveningResult
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div class="responsive-container">
                            <iframe src={results}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="responsive-container">
                            <iframe src={results}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </TabPanel>
                    <TabPanel>

                        <div class="responsive-container">
                            <iframe src={results}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </TabPanel>
                </Tabs>}
            </div>

            {/* <div className='ml-16 mr-16 mt-8 flex flex-col gap-6 flex-wrap'>

               
            


            
              


            </div> */}
        </>
    )
}

export default Home