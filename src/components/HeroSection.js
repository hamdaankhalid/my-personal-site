import React from 'react';
import { Button } from './Button';
import { ScrollButton } from './ScrollButton';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>Need an Engineer?</h1>
            <p>
                Product Focussed - Customer Centric
            </p>
            
            <div className="hero-btns">

            <ScrollButton className="btns"
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='aboutMe'
                >
                Who Am I?
                </ScrollButton>

                <Button className="btns"
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                goTo='/resume'
                >
                Résumé
                </Button>

                

                <Button className="btns"
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                goTo='/connect'
                >
                Connect With Me!
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection;