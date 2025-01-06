import React from 'react';
import "./videoAndDescription.css";
import Card from 'react-bootstrap/Card';


const VideoAndDescription = () => {
    return (
        <div className='video-text-container'>
            <div className='video rounded'>
                <video style={{width: '100%', height: '100%'}} controls>
                    <source src="/assets/RemindMeSimulation.mp4" type='video/mp4'/>
                </video>
            </div>

            <Card body className='text-box'>
                <h1 style={{fontSize: '5rem'}}>Project Description</h1>
                <p style={{color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
                    <p>RemindMe is a project I thought of wondering if there was a better way to keep tracking of my "things 
                    to do" list. I am someone who loves staying organized, setting tons of reminders on my alarm clock app 
                    along with a calendar I use.</p>
                    <p>The issue I was having was that the app that I was using for my daily reminders only sent push 
                    notifications to my phone when the time of the reminder came. More often than not, it was seen 
                    as another notification on my phone that was ignored and not dealt with.</p>
                    <p>I created this app to implement more methods of notifying the user including via messages, email, 
                    and even call. I also eventually will allow users to schedule messages/emails to be sent to others 
                    at a given time/day.</p>
                    <p>This app is still in the development process, as all feature have not been implemented yet.</p>
                </p>
            </Card>
        </div>
    )

}

export default VideoAndDescription