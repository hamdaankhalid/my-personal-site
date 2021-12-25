import '../../App.css';
import HeroSection from '../HeroSection';

function Home () {
    return (
        <>
        <HeroSection />
        <div id={"aboutMe"}>

        <div className="MeSection">
        <h3>
        Hi <i class="fas fa-child"></i>
        </h3>
        </div>

        <div className="About">
        
            <p>
            I'm a passionate software engineer with a background in Mathematics.I am a creative at heart and love bringing
            crazy ideas to reality. I currently work at <a href="https://www.attuneinsurance.com" Style="color: light-blue;"><strong>Attune Insurance</strong></a>.
            Click on the résumé button above to learn more about my projects, experience, and education. I highly recommend you checking out my github as well!
            </p>
        </div>

        <div className="MeSection">
        <h3>
        When I'm not Working <i class="fas fa-hat-cowboy"></i>
        </h3>
        </div>
        <div className="About">
        
        <p>
        I like to deicate the majority of my time not spent at work to focus on constant learning and striving for technical excellence. My goal is to be an absolute unicorn engineer
        and for this I am constantly learning. My favorite books are Extreme Ownership, Clean code, and Pragmattic Programmer. I enjoy bodybuilding, basketball, and equestrian sports
        in my freetime. My favorite quote is by Marcus Aurelius, "Nothing is worth doing pointlessly." 
        </p>
        </div>
        </div>
        
        </>
    )
}

export default Home;