import React from 'react'
import HtmlToPdf from './HtmlToPdf'
const logo = require("../asssets/todayImg.png")

function TodyResult() {

    return (
        <div className='today-result-main '>
            <div className='toplogo flex align-middle justify-center'><img alt='noimg' src={logo} /></div>
            <div className='morning flex text-center align-middle justify-center flex-col gap-8' > <h2 className='textTitle'>Morning 2:30 PM</h2> <button className='ViewButton text-center flex align-middle justify-center'>View Result</button></div>
            <div className='morning flex text-center align-middle justify-center flex-col gap-8' > <h2 className='textTitle'>Day 6:30 PM</h2> <button className='ViewButton text-center flex align-middle justify-center'>View Result</button></div>

            <div className='morning flex text-center align-middle justify-center flex-col gap-8' > <h2 className='textTitle'>Evening 10:00 PM</h2> <button className='ViewButton text-center flex align-middle justify-center'>View Result</button></div>


            {/* <div className='icons flex align-middle justify-center'></div>
            <div className='day flex align-middle justify-center'></div>
            <div className='evening flex align-middle justify-center'></div> */}
            <div className='bottomLogo flex align-middle justify-center'><img alt='noimg' src={logo} /></div>


            <HtmlToPdf />
        </div>
    )
}

export default TodyResult