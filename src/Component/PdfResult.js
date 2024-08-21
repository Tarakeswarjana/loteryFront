import React, { useEffect } from 'react'
import { searchLoteryResult, searchsecondResult } from '../Config/AllApiCall'
import { useParams } from 'react-router-dom'
import HtmlToPdf from './HtmlToPdf'

function PdfResult() {

    const { date, gtime } = useParams()
    console.log(date, gtime, "iiippp")
    const fetchSingleResult = async () => {

        const dataResult = await searchLoteryResult(date, gtime)
        const dataResult2 = await searchsecondResult(date, gtime)
        console.log(dataResult2, "kklloop")
    }

    useEffect(() => {
        fetchSingleResult()
    }, [])

    return (
        <div>
            <HtmlToPdf />

        </div>
    )
}

export default PdfResult