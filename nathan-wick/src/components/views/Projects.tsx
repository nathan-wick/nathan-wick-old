import { Helmet } from 'react-helmet';
import Content from '../Content';
import Header from '../Header';
import MedPromptBackground from '../../assets/images/backgrounds/medprompt.webp';
import FoundNotLostBackground from '../../assets/images/backgrounds/found-not-lost.webp';

const AndroidContent = () => {
    return (
        <>
            <p>
                MedPrompt is a native Android application that helps it's users keep track of medications and doctors appointments.
            </p>
            <hr />
            <p>
                For this project, I
            </p>
            <ul>
                <li>Lead an agile team of 6 Software Developers</li>
                <li>Utilized the SCRUM project management framework to stay organized and productive</li>
                <li>Programmed with the Android Studio IDE, Kotlin language, and Git version control system</li>
                <li>Styled the user interface to maximize the look and feel on all Android devices</li>
                <li>Implemented sign-in with Google and Email to authenticate users</li>
                <li>Designed a database with Firebase Firestore to store, update, and retrieve user-generated information</li>
            </ul>
        </>
    );
};

const AppleContent = () => {
    return (
        <>
            <p>
                Found not Lost is a full-stack iOS application that helps it's users return and retrieve lost items.
            </p>
            <hr />
            <p>
                For this project, I
            </p>
            <ul>
                <li>Programmed with the Xcode IDE, Swift language, and Git version control system</li>
                <li>Styled the user interface to maximize the look and feel on all iOS devices</li>
                <li>Implemented sign-in with Google and Apple to authenticate users</li>
                <li>Designed a database with Firebase Firestore to store, update, and retrieve user-generated information</li>
                <li>Created Google Cloud Functions to run database operations</li>
            </ul>
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
                subtitle='Software Developed by Nathan Wick' />
            <Content
                alignment='left'
                background={MedPromptBackground}
                title='MedPrompt'
                subtitle='June 2022 - August 2022'
                content={<AndroidContent />} />
            <Content
                alignment='right'
                background={FoundNotLostBackground}
                title='Found not Lost'
                subtitle='February 2022 - May 2022'
                content={<AppleContent />} />
        </>
    );
};

export default Projects;