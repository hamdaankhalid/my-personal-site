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
            companyName="Root Insurance"
            role="Software Engineer 1"
            description="I have been part of the Data Science Engineering Team and the Customer Engagement team. While on the Data Science Engineering team, I came up with and created
            Rrocket, an in-house software that enabled Data Scientists and Actuaries to write functional R programs locally, abstract away dockerization, and transform every program to a functional lambda component that could
            be plugged and chugged into AWS Sagmaker processing jobs, without any involvment of Engineers. I am now a part of the Customer Engagement Team, where I use React, Ruby, Rails to work on our mobile, web, and server applications."
            durationDate="02/21 - Now"
        />

        
        <CardItem 
            companyName="Root Insurance"
            role="Software Engineer - Intern"
            description="As an Intern on the Data Science Engineering team, I programmed an MVP for ETL processing using Grothendeick Construction using ECS cluster, lambdas, Aws Stepfunctions, and Terraform."
            durationDate="10/20 - 02/21"
        />

        <CardItem 
            companyName="Bayer Crop.Sci"
            role="Student-Partner"
            description="As a student partner with Bayer Cropscience in the Data Mine Community at Purdue University, we used R to analyze crop genotype data provided by Bayer."
            durationDate="05/19 - 07/19"
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
            description="OOP, Functional Paradigm, Python, Java, Javascript, Ruby, Flask, Django, Rails, Express, NoSql Databases (DynamoDB, MongoDB), SQL Databases (Postgres, Sqlite3, mysql), Docker, AWS"
        />

        <CardItem 
            companyName="Mathematics/Statistics"
            role=""
            durationDate=""
            description="I am proficient in the following languages as well R, Python, Matlab. My favorite classes during my B.S. in Mathemtics were Linear Algebra, Logic, Probability, Real Analysis, and Regression Modelling "
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