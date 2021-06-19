import '../../App.css';
import HeroSection from '../HeroSection';

function Home () {
    return (
        <>
        <HeroSection />
        <div id={"aboutMe"}>
        <div className="About">
            <p>
            <strong>Who Am I?</strong> <br/>
            I'm a passionate software engineer with a background in Mathematics. I enjoy exploring ideas and fixing broken systems. I am a creative at heart and love bringing
            crazy ideas to reality. I have a year of professional experience at <a href="https://www.joinroot.com" Style="color: white;"><strong>Root Insurance</strong></a>, and almost two years of self learning, and project based experience. 
            Click on the résumé button to learn more about my projects and experience!
            </p>
        </div>

        <div className="About">
        <p>
        <strong>When Not In My Office</strong><br/>
        I enjoy the outdoors and physical activites such as enjoy Powerlifting, Horse Polo and equestrian sports, Swimming, Running, Biking, and Basketball.
        I like to cook Indian, chinese, American , and italian cuisine. When life gets too much for me, I like to go sit by the river and listen to hozier, and sip on some chai.
        </p>
        </div>
        </div>
        
        </>
    )
}

export default Home;