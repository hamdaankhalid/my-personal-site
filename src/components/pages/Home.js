import '../../App.css';
import HeroSection from '../HeroSection';

function Home () {
    return (
        <>
        <HeroSection />
        <section id={"aboutMe"}>
        <div className="About">
            <p>
            <strong>Who Am I?</strong> <br/>
            I'm a passionate software engineer with a background in Mathematics. I enjoy exploring ideas and fixing broken systems. I am a creative at heart and love bringing
            crazy ideas to reality. I have a year of professional experience at <a href="https://www.joinroot.com" Style="color: white;"><strong>Root Insurance</strong></a>, and almost two years of self learning, and project based experience. Although two years may not sound like alot,
            I am confident that my sheer hours of daily programming and innnovating make up for it. So far I have on worked 3 major business problems, 
             <a href="http://139.59.36.119" Style="color: white;"> <strong>Hijrat Turkey (Real estate website)</strong></a> , <a href="https://www.leftover.one" Style="color: white;"> <strong>LeftOver (marketplace for food wastage and insecurity) </strong></a>, 
               <a href="https://www.smart-fit.info" Style="color: white;"><strong>SmartFit (Virtual Body Measurement)</strong></a>.  I am also developing an application that will add lane assist to any car.
            </p>
        </div>

        <div className="About">
        <p>
        <strong>When Not In My Office</strong><br/>
        I enjoy the outdoors and physical activites such as enjoy Powerlifting, Horse Polo and equestrian sports, Swimming, Running, Biking, and Basketball.
        I like to cook Indian, chinese, American , and italian cuisine. When life gets too much for me, I like to go sit by the river and listen to hozier, and sip on some chai.
        </p>
        </div>
        </section>
        
        </>
    )
}

export default Home;