import React from 'react';
import './projectInfo.css';
import Card from 'react-bootstrap/Card';


const ProjectInfo = () => {
    return (
        <div className='info-container'>
            <Card body className='info-text-box'>
                <h1 style={{ fontSize: '5rem' }}>Things I Learned</h1>
                <p style={{ color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
                    <p>One of the most important things that I learned when working on this project is that ChatGPT won't be able to do it for me.</p>
                    <p>When I first started this project, instead of asking ChatGPT to teach me more about different concepts/procedures, I was quite literally 
                        copy pasting code into ChatGPT and saying "make this work". Clearly, that did not work out, if anything it complicated what I was doing even more.
                    </p>
                    <p>Overtime I learned how to use documentation and other resources like Youtube and Stackoverflow to 
                        debug my code, and that exponentially increased the progress that I was making when developing this app.
                    </p>
                </p>
            </Card>

            <Card body className='info-text-box'>
                <h1 style={{ fontSize: '5rem' }}>Future Plans</h1>
                <p style={{ color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
                    <p style={{ fontSize: '1.5rem' }}>Here are some of the features that I hope to implement as time goes on: </p>
                    <p>Scheduled Messages/Emails: Users will be able to schedule a message or email to be sent to anther person.</p>
                    <p>Notification via phone call: Users will be able to schedule a reminder to be sent at a set time and date where there will
                        be an automated phone call to the user at that time using text-to-speech to announce the reminder.</p>
                </p>
            </Card>
        </div>
    )

}

export default ProjectInfo