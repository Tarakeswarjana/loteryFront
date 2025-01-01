import React, { useEffect, useRef } from 'react';
import { usePDF } from 'react-to-pdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import './pdfDesign.css';
const logoImg = require('../asssets/todayImg.png');

function InnerHtmlToPdf({ firstResult, secResult, thirdResult, fourthResult, date, gtime }) {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    alert("kkkk")
    const TimeReturnFunction = (gtime) => {
        if (gtime.toLowerCase() === 'morning') return '2:30 PM';
        if (gtime.toLowerCase() === 'noon') return '6:30 PM';
        if (gtime.toLowerCase() === 'evening') return '10:00 PM';
    };
    const downloadPDF = () => {

        alert("iii")
        const { jsPDF } = window.jspdf;

        let doc = new jsPDF('l', 'mm', [1500, 1400]);
        let pdfjs = document.querySelector('#pdfDiv');

        doc.html(pdfjs, {
            callback: function (doc) {
                doc.save("newpdf.pdf");
            },
            x: 12,
            y: 12
        });
    };

    useEffect(() => {
        downloadPDF()
    }, [])









    return (
        <div className="container mx-auto p-4">
            <div id='pdfDiv' className="flex flex-col p-4 bg-white shadow-md rounded-lg w-full max-w-3xl mx-auto">
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold mb-2">Hong Kong Lottery</h1>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <img alt="logo" src={logoImg} className="w-20 h-auto" />
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-blue-500">PXWELL</h4>

                        <p className="text-lg text-green-500">Lottery Result</p>

                        <p className="text-md font-medium text-red-500">{gtime.toUpperCase()}</p>

                        <p className="text-sm text-black font-bold">Pxwell.Com</p>

                    </div>
                    <img alt="logo" src={logoImg} className="w-20 h-auto" />
                </div>
                <div className="mb-4 flex  items-center justify-between whitespace-nowrap">
                    <h1 className="text-[18px] font-semibold">{date}</h1>
                    <h1 className="text-[18px] font-semibold">{date}</h1>
                </div>
                <div className="mb-4 flex justify-center whitespace-nowrap">
                    <h1 className="text-lg">Time - {TimeReturnFunction(gtime)}</h1>
                </div>
                <div className="mb-4 text-center">
                    <h1 className="text-xl font-semibold mb-2">1st Prize/{firstResult}</h1>
                    {/* <p className="text-lg font-semibold">1st Prize/{firstResult}</p> */}
                </div>
                <div className="mb-4">

                    <div className="mb-4 flex justify-center">
                        <h1 className="text-2xl font-semibold mb-2 relative inline-block">
                            2nd Prize
                            {/* <span className="absolute left-0 bottom-0 w-full border-b-2 border-gray-800"></span> */}
                        </h1>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {secResult.map((ele, id) => (
                            <p key={id} className="text-lg font-semibold flex-1">{ele}</p>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mb-4 flex justify-center">
                        <h1 className="text-2xl font-semibold mb-2 relative inline-block">
                            3rd Prize
                            {/* <span className="absolute left-0 bottom-0 w-full border-b-2 border-gray-800"></span> */}
                        </h1>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {thirdResult.map((ele, id) => (
                            <p key={id} className="text-lg font-semibold flex-1">{ele}</p>
                        ))}
                    </div>
                </div>
                <div className="mb-4">

                    <div className="mb-4 flex justify-center">
                        <h1 className="text-2xl font-semibold mb-2 relative inline-block">
                            4th Prize
                            {/* <span className="absolute left-0 bottom-0 w-full border-b-2 border-gray-800"></span> */}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {fourthResult.map((ele, id) => (
                            <p key={id} className="text-lg flex-1">{ele}</p>
                        ))}
                    </div>
                </div>
                {/* <div>
                    <h1 className="text-xl font-semibold mb-2">4th Prize</h1>
                    <div>
                        {fourthResult.map((ele, id) => (
                            <p key={id} className="text-lg">{ele}</p>
                        ))}
                    </div>
                </div> */}
            </div>
            <div className="text-center mt-4">
                <button
                    type="button"
                    className="bg-green-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-800 transition ease-in-out duration-300"
                    onClick={() => downloadPDF()}
                >
                    Download
                </button>
            </div>
        </div>
    );
}

export default InnerHtmlToPdf;
