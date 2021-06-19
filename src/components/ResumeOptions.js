import React from 'react';
import { Button } from './Button';
import { ScrollButton } from './ScrollButton';
import './ResumeOptions.css';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';

function ResumeOptions() {

    
    const savePdf = () => {
        const input = document.getElementById('resume');
    
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'px', 'a4');
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
    
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                pdf.save("HamdaanKhalidResume.pdf");
            });
    };
    


    return (
        <div className='btns-container'>

            
            <ScrollButton className="button"
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='Experience'
                >
                Experience
                </ScrollButton>

            <ScrollButton className="button"
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='Skills'
                >
                Skills
                </ScrollButton>

                <ScrollButton className="button"
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='Education'
                >
                Education
                </ScrollButton>

                
                <ScrollButton className="button"
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={savePdf}
                >
                Download
                </ScrollButton>
                
        </div>
    )
}

export default ResumeOptions;