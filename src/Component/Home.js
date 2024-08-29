import React, { useEffect, useState } from "react";
import { viewAllResult } from "../Config/AllApiCall";
import { ColorRing } from "react-loader-spinner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const imgee = require("../asssets/todayImg.png");

function Home() {
  const [results, setResults] = useState([]);
  const [noonresults, setnoonResults] = useState([]);
  const [eveningresults, seteveningResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchAllData = async () => {
    setisLoading(true);
    const newData = await viewAllResult("Morning");

    if (newData.length > 0) {
      setResults(newData);
      setisLoading(false);
      console.log(newData, "ooopp");
    }
    const noonResult = await viewAllResult("Noon");
    if (noonResult.length > 0) {
      setisLoading(false);
      setnoonResults(noonResult);
      console.log(noonResult, "ooopp");
    }

    const nightResult = await viewAllResult("Evening");
    if (nightResult.length > 0) {
      seteveningResults(nightResult);
      console.log(nightResult, "ooopp");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);
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
            colors={["green"]}
          />
        </div>
      )}

      <div className="ml-16 mr-16 mt-8 flex flex-col gap-6 flex-wrap">
        {!isLoading && (
          <Tabs>
            <TabList>
              <Tab>
                <div className="font-bold ">MorningResult</div>
              </Tab>
              <Tab>
                <div className="font-bold ">NoonResult</div>
              </Tab>
              <Tab>
                <div className="font-bold ">EveningResult</div>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="ml-16 mr-16 mt-8 flex flex-row gap-[1.4rem] flex-wrap">
                {results.map((ele) => {
                  return (
                    <div class="max-w-[200px] bg-slate-300 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img class="rounded-t-lg logo" src={imgee} alt="logo" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {ele.game_date}
                          </h5>
                        </a>
                        <a
                          href={`/pdfResult/${ele.game_date}/Morning`}
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          View Result
                          <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </TabPanel>
            <TabPanel>
              <div className="ml-16 mr-16 mt-8 flex flex-row gap-[1.4rem] flex-wrap">
                {noonresults.map((ele) => {
                  return (
                    <div class="max-w-[200px] bg-slate-300 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img class="rounded-t-lg logo" src={imgee} alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {ele.game_date}
                          </h5>
                        </a>
                        <a
                          href={`/pdfResult/${ele.game_date}/Noon`}
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          View Result
                          <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </TabPanel>
            <TabPanel>
              <div className="ml-16 mr-16 mt-8 flex flex-row gap-[1.4rem] flex-wrap">
                {eveningresults.map((ele) => {
                  return (
                    <div class="max-w-[200px] bg-slate-300 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img class="rounded-t-lg" src={imgee} alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {ele.game_date}
                          </h5>
                        </a>
                        <a
                          href={`/pdfResult/${ele.game_date}/Evening`}
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          View Result
                          <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </TabPanel>
          </Tabs>
        )}
      </div>

      {/* <div className='ml-16 mr-16 mt-8 flex flex-col gap-6 flex-wrap'>

               
            


            
              


            </div> */}
    </>
  );
}

export default Home;
