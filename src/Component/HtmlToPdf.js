import React from 'react'
import "./pdfDesign.css"
const logoImg = require('../asssets/todayImg.png')


function HtmlToPdf({ firstResult, secResult, thirdResult, fourthResult, date, gtime }) {
    console.log( fourthResult, "in_Pdf_Component")

    function convertHTMLtoPDF() {
        const { jsPDF } = window.jspdf;

        let doc = new jsPDF('l', 'mm', [1500, 1400]);
        let pdfjs = document.querySelector('#divID');

        doc.html(pdfjs, {
            callback: function (doc) {
                doc.save("newpdf.pdf");
            },
            x: 12,
            y: 12
        });
    }

    const TimeReturnFunction = (gtime) => {
        if (gtime.toLowerCase() === "morning")
            return "2:30 PM"
        if (gtime.toLowerCase() === "noon")
            return "6:30 PM"
        if (gtime.toLowerCase() === "evening")
            return "10:00 PM"


    }

    // const secondPrize = ['07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922']
    // const forthPrize = ['07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922', '07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922', '07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922', '07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922']

    return (
        <div class="containers">


            <div id="divID">
                <div class="mainDiv">
                    <div className='topHeading'><h1>Hong Kong Lottery</h1></div>
                    <div className='headingDiv'>

                        <div><img alt='noimage' src={logoImg} className='pdflogo'/></div>
                        <div className='hMiddle'>
                            <h4 className='pxh'>PXWELL</h4>
                            <p className='lRes'>Lottery Result</p>

                            <p className='mor'>{gtime.toUpperCase()}</p>
                            <p className='pCom'>Pxwell.Com</p>
                        </div>

                        <div><img alt='noimage' src={logoImg} className='pdflogo'/></div>

                    </div>
                    <div className='dTime'> <h1>{date}</h1> <h1>Time-{TimeReturnFunction(gtime)}</h1></div>
                    <div className='prHeading'><h1>1st Prize / {firstResult}</h1></div>
                    <div className='sHeading'><h1>2ndPrize</h1></div>
                    <div className='sPrizes'>
                        {
                            secResult.map((ele, id) => {
                                return <p key={id} className='sRest'>{ele}</p>
                            })
                        }
                    </div>
                    <div className='sHeading'><h1 className='prize3'>3rdPrize</h1></div>
                    <div className='sPrizes'>
                        {
                            thirdResult.map((ele, id) => {
                                return <p key={id} className='sRest'>{ele}</p>
                            })
                        }
                    </div>
                    <div className='sHeading'><h1 className='prize4'>4thPrize</h1></div>
                    <div className='sPrizes4'>
                        {
                            fourthResult.map((ele, id) => {
                              
                                return <p key={id} className='sRest'>{ele}</p>
                            })
                        }
                    </div>

                </div>
            </div>


            <button
                type="button"
                className="bg-green-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-brown-600 transition ease-in-out duration-300 transform hover:scale-105 flex align-middle  justify-center"
                onClick={() => { convertHTMLtoPDF() }}
            >
                PDF Download
            </button>
        </div>
    )
}

export default HtmlToPdf