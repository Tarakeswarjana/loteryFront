import React from 'react'
import HtmlToPdf from './HtmlToPdf'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
const logo = require("../asssets/todayImg.png")


function TodyResult() {
    const navigate = useNavigate()
    const currentDate = () => {
        let date1 = new Date()
        console.log(moment(date1).format('DD-MM-YYYY'), "current date")
        return moment(date1).format('DD-MM-YYYY')
    }

    return (
        <div className='today-result-main '>
            <div className='toplogo flex align-middle justify-center'><img alt='noimg' className='logo' src={logo} /></div>
            <div className='morning flex text-center align-middle justify-center flex-col gap-8' > <h2 className='textTitle'>Morning 2:30 PM</h2> <button
                onClick={(ele) => {
                    navigate(`/pdfResult/${currentDate()}/Morning`)
                }} className='ViewButton text-center flex align-middle justify-center' >View Result</button></div>
            <div className='morning flex text-center align-middle justify-center flex-col gap-8' > <h2 className='textTitle'>Day 6:30 PM</h2> <button
                onClick={(ele) => {
                    navigate(`/pdfResult/${currentDate()}/Noon`)
                }} className='ViewButton text-center flex align-middle justify-center'>View Result</button></div>

            <div className='morning flex text-center align-middle justify-center flex-col gap-8' > <h2 className='textTitle'>Evening 10:00 PM</h2> <button
                onClick={(ele) => {
                    navigate(`/pdfResult/${currentDate()}/Evening`)
                }} className='ViewButton text-center flex align-middle justify-center'>View Result</button></div>


            {/* <div className='icons flex align-middle justify-center'></div>
            <div className='day flex align-middle justify-center'></div>
            <div className='evening flex align-middle justify-center'></div> */}
            <div className='bottomLogo flex align-middle justify-center'><img alt='noimg' className='logo' src={logo} /></div>



        </div>
    )
}

export default TodyResult