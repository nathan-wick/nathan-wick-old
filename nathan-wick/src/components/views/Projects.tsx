import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import Content from '../Content';
import Header from '../Header';
import MedPromptBackground from '../../assets/images/medprompt.webp';
import FoundNotLostBackground from '../../assets/images/found-not-lost.webp';

const AndroidContent = () => {
    return (
        <>
            <p>
                MedPrompt is a native Android application that helps it's users keep track of medications and doctors appointments.
            </p>
            <p>
                I was the Scrum Master for this project and worked with a team of 6 Software Developers.
            </p>
            <p>
                During this project, we learned how to use the SCRUM project management framework, Android Studio IDE, Kotlin programming language, and much more.
            </p>
            <hr />
            <Button
                variant='info'
                href={`https://github.com/nathan-wick/medprompt`}
                className='mb-3'>
                View Code
            </Button>
        </>
    );
};

const AppleContent = () => {
    return (
        <>
            <p>
                Found not Lost is a full-stack iOS application that helps it's users return and retrieve lost items.
            </p>
            <p>
                I developed this application with the Xcode IDE, Swift programming language, and Firebase hosting services. 
            </p>
            <p>
                I also styled the user interface to maximize the look and feel on all iOS devices, 
                <br />implemented sign-in with Google and Apple to authenticate users,
                <br />designed a Firestore database to store items, messages, and user information,
                <br />and created Google Cloud Functions to run database operations.
            </p>
            <hr />
            <Button
                variant='info'
                href={`https://github.com/nathan-wick/found-not-lost`}
                className='mb-3'>
                View Code
            </Button>
        </>
    );
};

const Projects = (props: any) => {
    return (
        <>
            <Helmet>‍
                <title>Nathan Wick's Projects</title>
                <meta name='description' content='Projects By Nathan Wick.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                title='Projects'
                subtitle='By Nathan Wick' />
            <Content
                isMobile={props.isMobile}
                alignment='left'
                background={MedPromptBackground}
                title='MedPrompt'
                subtitle='June 2022 - August 2022'
                content={<AndroidContent />} />
            <Content
                isMobile={props.isMobile}
                alignment='right'
                background={FoundNotLostBackground}
                title='Found not Lost'
                subtitle='February 2022 - May 2022'
                content={<AppleContent />} />
        </>
    );
};

export default Projects;