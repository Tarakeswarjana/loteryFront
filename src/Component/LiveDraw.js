import React, { useEffect } from 'react'
import { viewliveUrl } from '../Config/AllApiCall'

function LiveDraw() {


    const getLiveUrl = async () => {

        const nightResult = await viewliveUrl("Evening")
    }
    useEffect(() => {
        getLiveUrl()
    }, [])

    return (
        <div className='flex align-middle justify-center  text-center mt-11'>


            <iframe width="720" height="415"
                // src="https://www.youtube.com/embed/NQALJ-nFlFQ?si=IgMlKCq3UmrpUUEJ">
                src='https://www.youtube.com/embed/p3c22ANp5yQ?si=ZshgU1bM7vm071l0'>
            </iframe>

        </div>
    )
}

export default LiveDraw