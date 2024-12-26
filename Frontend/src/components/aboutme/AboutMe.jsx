import Card from 'react-bootstrap/Card';
import React from 'react';
import Image from 'react-bootstrap/Image';
import './aboutme.css'


const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='personal-image rounded'>
                <Card.Img
                    variant="top"
                    src="/assets/aboutMeImage.JPG"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <Card body className='about-info'>
                <p style={{color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
                    Hello! I'm Sagar Dhunna, a Junior studying Computer Science at the University of California, Irvine.
                    <br /><br />
                    As the field of Computer Science offers so many exciting opportunities, I'm currently exploring various areas through both my coursework and personal projects. Recently, I've developed a strong interest in Cybersecurity and Embedded Systems.
                    <br /><br />
                    Outside of my studies, I’m passionate about sports, fitness, and spending time with my friends and family. I’ve also recently taken up running and am excited to work towards completing my first half-marathon within the next 5-6 months!

                    Feel free to explore my projects, and let's connect!
                </p>
            </Card>
        </div>
    )
}

export default AboutMe