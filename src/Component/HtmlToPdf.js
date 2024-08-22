import React from 'react'
import "./pdfDesign.css"
const logoImg = require('../asssets/todayImg.png')


function HtmlToPdf({ firstResult, restallResult }) {
    console.log(firstResult, restallResult)
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

    const secondPrize = ['07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922']
    const forthPrize = ['07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922', '07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922', '07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922', '07474', '34994', '37779', '40166', '64668', '74023', '80332', '81893', '98451', '98922']

    return (
        <div class="container">

            <button type="button"
                className='bg-red-400'
                onClick={() => { convertHTMLtoPDF() }} >
                Pdf Download

            </button>
            <div id="divID">
                <div class="mainDiv">
                    <div className='topHeading'><h1>Hong Kong Lottery</h1></div>
                    <div className='headingDiv'>

                        <div><img alt='noimage' src={logoImg} /></div>
                        <div className='hMiddle'>
                            <h1 className='pxh'>PXWELL</h1>
                            <p className='lRes'>Lottery Result</p>

                            <p className='mor'>Morning</p>
                            <p className='pCom'>Pxwell.Com</p>
                        </div>

                        <div><img alt='noimage' src={logoImg} /></div>

                    </div>
                    <div className='dTime'> <h1>26/11/2009</h1> <h1>Time-2:30PM</h1></div>
                    <div className='prHeading'><h1>1st Prize/ 11A-89216</h1></div>
                    <div className='sHeading'><h1>2ndPrize</h1></div>
                    <div className='sPrizes'>
                        {
                            secondPrize.map((ele, id) => {
                                return <p key={id} className='sRest'>{ele}</p>
                            })
                        }
                    </div>
                    <div className='sHeading'><h1 className='prize3'>3rdPrize</h1></div>
                    <div className='sPrizes'>
                        {
                            secondPrize.map((ele, id) => {
                                return <p key={id} className='sRest'>{ele}</p>
                            })
                        }
                    </div>
                    <div className='sHeading'><h1 className='prize4'>4thPrize</h1></div>
                    <div className='sPrizes4'>
                        {
                            forthPrize.map((ele, id) => {
                                return <p key={id} className='sRest'>{ele}</p>
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HtmlToPdf