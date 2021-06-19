import '../../App.css';
import HeroSection from '../HeroSection';

function Home () {
    return (
        <>
        <HeroSection />
        <div id={"aboutMe"}>
        <div className="About">
            <p>
            Hi <i class="fas fa-child"></i> <br/>
            I'm a passionate software engineer with a background in Mathematics. I enjoy exploring ideas and "un-breaking". I am a creative at heart and love bringing
            crazy ideas to reality. I have a year's worth of professional experience at <a href="https://www.joinroot.com" Style="color: black;"><strong>Root Insurance</strong></a>, and almost two years of self learning, and project based experience. 
            Click on the résumé button above to learn more about my projects, experience, and education.
            </p>
        </div>

        <div className="About">
        <p>
        When I'm not Working <i class="fas fa-hat-cowboy"></i><br/>
        I enjoy the outdoors and physical activites.I particularly enjoy Powerlifting, Horse Polo (Equestrian sports), Swimming, Running, Biking, and Basketball.
        In my spare time I like to cook. When life gets too much for me, I like to go sit by the river, listen to hozier, and sip on some chai.
        </p>
        </div>
        </div>
        
        </>
    )
}

export default Home;