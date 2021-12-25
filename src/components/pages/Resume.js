// page that will have my experience listed with images
import CardItem from '../CardItem'
import ResumeOptions from '../ResumeOptions';

function Resume () {
    return(
        <>
        <div className="resume" id="resume">
        
        {/* PUT A SUPER CUTE COMPONENT TO GO TO EXPERIENCE,  */}
        <ResumeOptions />

        <div className="resume-page" id="resume-page" Style="padding-bottom: 60px;">
        
        <div className="new-section Experience">
            Experience
        </div>

        <CardItem 
            companyName="Attune"
            role="Software Engineer"
            description="
            Full stack software engineer at Attune, working on our node js backend and and customer facing angular frontend, I am responsible for delivery full stack feautres decided by our product team."
            durationDate="12/01 - now"
        />


        <CardItem 
            companyName="Root Insurance"
            role="Software Engineer 1"
            description="
            Joined as an intern on the data science engineering team and programmed MVP for ETL processing using Grothendeick Construction with ECS cluster, lambdas, Aws Stepfunctions, and Terraform.
            Switch to full time Engineer on our Data Science productivity team in February 2021 where I came up with and created Rrocket, an in-house software that enabled Data Scientists and Actuaries
            to write functional R programs locally, abstract away dockerization, and transform every program to a functional lambda component that could be plugged and chugged into AWS Sagmaker processing
            jobs, without any involvment of Engineers. On Customer Engagement Team I worked as a full stack engineer delivering customer facing features on our mobile and web applications involving backend
            and frontend changes as needed"
            durationDate="10/20 - 10/30"
        />

        
        <CardItem 
            companyName="Real Estate Website"
            role="Full Stack @ http://139.59.36.119"
            description="
            Used Django, Postgres, (HTML+CSS+JS) to create a real estate Website, and deploy using Nginx on Digital Ocean.
            "
            durationDate=""
        /> 

        <CardItem 
            companyName="Leftover"
            role="Full Stack + Marketing @ www.leftover.one"
            description="
            Used Flask, Postgres, (HTML+CSS+JS), Docker, to create a web-app to connect grcoery store surpluse for budget constrained consumers, while mitigating grocery store loss.
            I also conduct my own market & customer research, along with the marketing at local food banks and stores.
            "
            durationDate=""
        />

        <CardItem 
            companyName="SmartFit"
            role="Full Stack + Marketing + Sales @ www.smart-fit.info"
            description="
            Created my own algorithm for taking body measurements via computer vision. Created using Javascript, HTML, CSS, and Wix for hosting.
            "
            durationDate=""
        />

        <div className="new-section Skills">
            Skills
        </div>

        <CardItem 
            companyName="Front-End"
            role=""
            durationDate=""
            description="HTML, CSS, JS, React.js , Vue.js , React Native, Swift"
        />

        <CardItem 
            companyName="Back-End"
            role=""
            durationDate=""
            description="Object Oriented Paradigm, Functional Paradigm, Procedural Paradigm, Python, Java, Javascript, Ruby, Flask, Django, Rails, Express, NoSql Databases (DynamoDB, MongoDB), SQL Databases (Postgres, Sqlite3, mysql), Docker, AWS, Terraform, Docker."
        />

        <CardItem 
            companyName="Mathematics/Statistics"
            role=""
            durationDate=""
            description="For projects involving mathematics and statistics I like to use R, Python, and Matlab. My favorite topics in Mathemtics are Linear Algebra, Logic, Probability, Real Analysis, and Regression Modelling.
            I program drones, computer vision projects with openCV, reinforcement learning, and creating data driven/intelligent applications."
        />

        <div className="new-section Education">
            Education
        </div>
        <CardItem 
            companyName="Purdue University"
            role="Mathematics-Business"
            description="
            As a mathematics undergraduate Student at Purdue. I had the opportunity to take courses including: Calculus, Linear Algebra, Real Analysis, Abstract Algebra, Numerical Analysis, Data Mine, CS-177,
            Statistics, and Regression Modelling.
            "
            durationDate="2017-2020"
        />

        <CardItem 
            description="
            Email: khalid.hamdaan@gmail.com & Phone: +1-224-607-4296
            "
        />

        </div>
        
        
        </div>
        
        </>
    )
};

export default Resume;