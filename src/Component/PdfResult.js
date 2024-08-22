import React, { useEffect, useState } from 'react'
import { searchLoteryResult, searchsecondResult } from '../Config/AllApiCall'
import { useParams } from 'react-router-dom'
import HtmlToPdf from './HtmlToPdf'

function PdfResult() {
    const [firstResult, setfirstResult] = useState(null)
    const [restallResult, setrestallResult] = useState(null)

    const { date, gtime } = useParams()
    console.log(date, gtime, "iiippp")
    const fetchSingleResult = async () => {

        const dataResult = await searchLoteryResult(date, gtime)
        if (dataResult.length > 0) {
            setfirstResult(dataResult)
        }
        const dataResult2 = await searchsecondResult(date, gtime)
        if (dataResult2.length > 0) {
            setrestallResult(dataResult2)
        }
        console.log(dataResult2, "kklloop")
    }

    useEffect(() => {
        fetchSingleResult()
    }, [])

    return (
        <div>
            <HtmlToPdf firstResult={firstResult} restallResult={restallResult} />

        </div>
    )
}

export default PdfResult