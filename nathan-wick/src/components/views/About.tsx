import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Content from '../Content';
import Testimonial from '../Testimonial';
import HeaderIcon from '../../assets/images/profile-picture.png';
import EducationIcon from '../../assets/icons/education.png';
import ExperienceIcon from '../../assets/icons/experience.png';
import TestimonialsIcon from '../../assets/icons/testimonials.png';
import LearnMoreIcon from '../../assets/icons/learn-more.png';
import WelcomeBackground from '../../assets/images/cincinnati.jpeg';
import UniversityOfCincinnatiBackground from '../../assets/images/campus.jpeg';
import UCITSCBackground from '../../assets/images/itsc-team.png';
import MarketingSavageBackground from '../../assets/images/marketing-savage.jpeg';
import TestimonialsBackground from '../../assets/images/thumbs-up.jpeg';
import AbbyStroupImage from '../../assets/images/abby-stroup.png';
import BlakeSchriewerImage from '../../assets/images/blake-schriewer.png';
import DerrickAdkinsImage from '../../assets/images/derrick-adkins.png';
import AnthonyFoliviImage from '../../assets/images/anthony-folivi.png';
import AlexisConnerImage from '../../assets/images/alexis-conner.png';
import AlexanderSpurlockImage from '../../assets/images/alexander-spurlock.png';
import JacobMacleodImage from '../../assets/images/jacob-macleod.png';
import JeffSommerImage from '../../assets/images/jeff-sommer.png';


const WelcomeContent = () => {
    return (
        <>
            <p>
                Hello, my name is Nathan and I'm passionate about helping businesses by
            </p>
            <ul>
                <li>
                    Building high-quality Web, iOS, and Android applications
                </li>
                <li>
                    Testing and improving code for functionality, efficiency, and user experience
                </li>
                <li>
                    Quickly learning new technologies and solving complex problems
                </li>
            </ul>
        </>
    );
};

const UniversityOfCincinnatiContent = () => {
    return (
        <>
            <p>
                According to the Niche report, the University of Cincinnati is the overall best college location in Ohio.
            </p>
            <hr />
            <p>
                My Statistics
            </p>
            <ul>
                <li>
                    Degree: Bachelors of Science
                </li>
                <li>
                    Major: Software Development
                </li>
                <li>
                    Grade Point Average (GPA): 4.0
                </li>
            </ul>
        </>
    );
};

const UCITSCContent = () => {
    return (
        <>
            <p>
                The University of Cincinnati Information Technology Solutions Center (ITSC) develops web applications, mobile applications, and databases to serve government agencies, start-up companies, and research centers.
            </p>
        </>
    );
};

const MarketingSavageContent = () => {
    return (
        <>
            <p>
                Marketing Savage is a marketing agency that designs digital advertisements, websites, and customer relationship management (CRM) systems to bring businesses to the next level. Marketing Savage has been featured in Forbes, Thrive Global, and ABC News.
            </p>
            <hr />
            <p>
                While working with Marketing Savage, I
            </p>
            <ul>
                <li>
                    Created solutions to help teammates and clients complete projects
                </li>
                <li>
                    Monitored progress of hundreds of projects to ensure client’s needs were being met
                </li>
                <li>
                    Designed dozens of business processes to automate repetitive tasks, train new hires, and lower average project turnaround time by 50%
                </li>
            </ul>
        </>
    );
};

const About = () => {
    const [ displayAllTestimonials, setDisplayAllTestimonials ] = useState(false);
    return (
        <>
            <Helmet>‍
                <title>Nathan Wick - About</title>
                <meta name='description' content='My name is Nathan Wick and I am a Software Developer specializing in Web, iOS, and Android application development. This website displays my story and how I can help your business.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                icon={HeaderIcon}
                title='Nathan Wick'
                subtitle='Software Developer' />
            <Content
                alignment='left'
                background={WelcomeBackground}
                title='Welcome'
                content={<WelcomeContent />} />
            <Header
                icon={EducationIcon}
                title='Education' />
            <Content
                alignment='right'
                background={UniversityOfCincinnatiBackground}
                title='University of Cincinnati'
                subtitle='Class of 2024'
                content={<UniversityOfCincinnatiContent />} />
            <Header
                icon={ExperienceIcon}
                title='Experience' />
            <Content
                alignment='left'
                background={UCITSCBackground}
                title='University of Cincinnati Information Technology Solutions Center'
                subtitle='Software Developer, August 2022 - Present'
                content={<UCITSCContent />} />
            <Header />
            <Content
                alignment='right'
                background={MarketingSavageBackground}
                title='Marketing Savage'
                subtitle='Project Manager, March 2020 - January 2022'
                content={<MarketingSavageContent />} />
            <Header
                icon={TestimonialsIcon}
                title='Testimonials' />
            <div
                className='parallax'
                style={{
                    backgroundImage: `url(${TestimonialsBackground})`,
                    backgroundSize: 'cover'}}>
                <Row>
                    <Testimonial
                        image={AbbyStroupImage}
                        name='Abby Stroup'
                        relation='Colleague'
                        text='"Nathan and I worked in a group together for a Fundamentals of IT class at the University of Cincinnati. Nathan was an extremely valuable teammate during this project as he absolutely went above and beyond with the requirements for the assignment. He has great technical expertise in software development and works very well with others. Any team/company would be lucky to have him!"' />
                    <Testimonial
                        image={BlakeSchriewerImage}
                        name='Blake Schriewer'
                        relation='Colleague'
                        text='"Nathan and I worked on a web application together and he went above and beyond to make it stand out. You can tell Nathan has a genuine passion for Software Development just by hearing the way he talks about his projects. Nathan is exactly the type of teammate you would want to work along side of. Nathan makes great suggestions, listens, and includes everyone. Working with Nathan was a pleasure."' />
                    <Testimonial
                        image={DerrickAdkinsImage}
                        name='Derrick Adkins'
                        relation='Colleague'
                        text='"I worked with Nathan on a final project in a Web Development course at UC, in which he was an essential part of the group. He facilitated the development of the plan to execute and the delegation of tasks to team members as well as contributing a generous amount to the repository. Nathan is a strong programmer with good communication skills and I would be happy to collaborate with him again."' />
                </Row>
                {
                    displayAllTestimonials ?
                    <>
                        <Row>
                            <Testimonial
                                image={JeffSommerImage}
                                name='Jeff Sommer'
                                relation='Professor'
                                text='"I was the professor for five classes with Nathan: Introduction to Problem Solving Computer Programming, Information System Analysis and Design, C++ Software Development, Database Management, and Network Security. I have known him since January, 2019. Nathans work was consistently of high quality. He attended every class session, completed assignments on time, actively participated in course discussions, and demonstrated professionalism in our correspondence. A great strength that Nathan has developed is problem-solving. When faced with problems completing assignments, he took the the time to generate possible solutions and tests before asking for help. Doing so well in the variety of classes that Nathan had with me tells me that he would be valuable in many information technology roles. He is not just a programmer, he is well rounded in many aspects of computing systems. Nathan has a positive attitude, demonstrates technological proficiency, and is a pleasure to work with."' />
                            <Testimonial
                                image={JacobMacleodImage}
                                name='Jacob Macleod'
                                relation='Colleague'
                                text='"I got to know Nathan through developing the website project called "Games Galore" during the Spring Semester of 2022 at the University of Cincinnati. The website was built with the ASP.NET framework and connects to a database of video games for the data that is used on the website. He excelled at working on the frontend of the website, as well as the backend, to help create a website that looks great and functions well. He always attended meetings and responded quickly to messages concerning the project. He also has a great attitude for collaborating with others and discussing the development of the project in meetings. Some of the specific skills he used on the project includes the use of the programming languages C#, HTML, and CSS. From my experience with him, I can say that he would be a great person to collaborate with and someone who can contribute very much to a project."' />
                        </Row>
                        <Row>
                            <Testimonial
                                image={AnthonyFoliviImage}
                                name='Anthony Folivi'
                                relation='Colleague'
                                text='"Nathan is a detailed software developer with vast knowledge of Software Development. He gives a lot of thought for user experience. He delivers on time with the utmost of professional outlook."' />
                            <Testimonial
                                image={AlexisConnerImage}
                                name='Alexis Conner'
                                relation='Colleague'
                                text='"Nathan goes above and beyond to help his teammates no matter the situation. He always makes sure everyone feels included and is a great peer, as well as a leader!"' />
                            <Testimonial
                                image={AlexanderSpurlockImage}
                                name='Alexander Spurlock'
                                relation='Colleague'
                                text='"It was very enjoyable to work with Nathan on our Android app project. He organized, and attended of course, all of the meetings. Additionally, he reached out to others if he saw them struggle by giving unique perspectives and just a helping hand. Nathan is a good teammate to have and I look forward to working with him some, if such a time arises."' />
                        </Row>
                        <Col
                            className='p-3 text-center'>
                            <Button
                                variant="dark"
                                onClick={() => setDisplayAllTestimonials(false)}>
                                View Less Testimonials
                            </Button>
                        </Col>
                    </> :
                    <Row>
                            <Col
                                className='p-3 text-center'>
                                <Button
                                    variant="dark"
                                    onClick={() => setDisplayAllTestimonials(true)}>
                                    View More Testimonials
                                </Button>
                            </Col>
                    </Row>
                }
                
            </div>
            <Header
                icon={LearnMoreIcon}
                title='Learn More' />
        </>
    );
};

export default About;