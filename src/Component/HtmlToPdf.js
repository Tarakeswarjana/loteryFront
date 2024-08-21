import React from 'react'

function HtmlToPdf() {
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



    return (
        <div class="container">

            <button type="button"
                className='bg-red-400'
                onClick={() => { convertHTMLtoPDF() }} >
                Pdf Download

            </button>
            <div id="divID">
                <div class="">
                    <h1>Learning Computer Science</h1>

                    <p class="">
                        CPP:<br />My first implementation was in this
                    </p>
                    <p class="">
                        ALGO:<br />Algorithms are fun
                    </p>
                    <p class="">
                        TYPESCRIPT:<br />New technology
                    </p>
                    <p class="">
                        JAVASCRIPT:<br />Client side programming
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HtmlToPdf