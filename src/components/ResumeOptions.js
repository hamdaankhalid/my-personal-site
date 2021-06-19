import React from 'react';
import { ScrollButton } from './ScrollButton';
import './ResumeOptions.css';
import { jsPDF } from 'jspdf';

function ResumeOptions() {

    
    const savePdf = () => {
        var img = new Image()
        img.src = 'resume/HamdaanKhalidResume.png';
        
                const pdf = new jsPDF('p', 'px', 'a4');
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                console.log("DOwnloading")
                img.onload = function () {
                    console.log("DOwnloading really")
                    pdf.addImage(img, 'png', 0, 0, width, height);
                    pdf.save("HamdaanKhalidResume.pdf");
                }
                
            
    };
    


    return (
        <div className='btns-container'>

           
            <ScrollButton
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='Experience'
                >
                Experience
                </ScrollButton>
            
            <ScrollButton
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='Skills'
                >
                Skills
                </ScrollButton>
          

         
            <ScrollButton
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='Education'
                >
                Education
                </ScrollButton>
            

           
            <ScrollButton
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