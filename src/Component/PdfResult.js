import React, { useEffect, useState } from 'react'
import { searchLoteryResult, searchsecondResult } from '../Config/AllApiCall'
import { useParams } from 'react-router-dom'
import HtmlToPdf from './HtmlToPdf'
import { ColorRing } from 'react-loader-spinner'
import { toast } from 'react-toastify'

function PdfResult() {
    const [firstResult, setfirstResult] = useState(null)
    const [secResult, setSecResult] = useState([])
    const [thirdResult, setThirdResult] = useState([])
    const [fourthResult, setFourthdResult] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [isResultNotFound, setisResultNotFound] = useState(false)


    const { date, gtime } = useParams()
    const fetchSingleResult = async () => {
        setisLoading(true)
        const dataResult = await searchLoteryResult(date, gtime)//first Result
        if (dataResult?.data?.length > 0) {

            let firstRes = `11 ${dataResult.data[0].series}- ${dataResult.data[0].result}`
            setfirstResult(firstRes)

        } else {
            setisResultNotFound(true)
            toast.error("Result Not Found")
            setisLoading(false)
        }

        const dataResult2 = await searchsecondResult(date, gtime)//second Result
        if (dataResult2?.data?.length > 0) {
            let secondres = []
            let thirdRes = []
            let fourthRes = []
            dataResult2.data.forEach((ele, id) => {
                secondres.push(ele['2ndresult']);
                thirdRes.push(ele['3rdresult']);
                fourthRes.push(ele['4thresult']);
            })
            setSecResult(secondres)
            setThirdResult(thirdRes)
            setFourthdResult(fourthRes)
        }
        setisLoading(false)
    }

    useEffect(() => {
        fetchSingleResult()
    }, [])

    if (isResultNotFound) {
        return <div className='loader'>
            result Not found
        </div>
    }

    return (
        <div>


            {isLoading ? <div className='loader'><ColorRing
                visible={true}
                height="150"
                width="150"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['green']}
            /> </div> :
                <HtmlToPdf firstResult={firstResult} secResult={secResult} thirdResult={thirdResult} fourthResult={fourthResult} date={date} gtime={gtime} />
            }
        </div>
    )
}

export default PdfResult