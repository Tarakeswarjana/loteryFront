// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function Navbar() {
    // const [inputDate, setinputDate] = useState(null)
    // const navigate = useNavigate()
    // function reformatDate(dateStr) {
    //     const [year, month, day] = dateStr.split('-');
    //     return `${day}-${month}-${year}`;
    // }
    return (
        <nav class="bg-gray-800 p-4 flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <a href="/" class="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</a>
                {/* <a href="/today-result" class="text-white hover:bg-gray-700 px-3 py-2 rounded">Today Result</a> */}
                <a href="/old-result" class="text-white hover:bg-gray-700 px-3 py-2 rounded">Old Result</a>
                <a href="/live-draw" class="text-white hover:bg-gray-700 px-3 py-2 rounded">Live Draw</a>
                {/* <a href="/yputube-live" class="text-white hover:bg-gray-700 px-3 py-2 rounded">Youtube Live</a> */}
            </div>

        </nav>
    )
}

export default Navbar