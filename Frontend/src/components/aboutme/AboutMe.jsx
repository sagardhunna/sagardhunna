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
                    style={{ width: '100%', height: '100%'}}
                />
            </div>
            <Card body className='about-info'>Hello! My name is Sagar Dhunna and I am a Junior studying Computer Science at University of California, Irvine.</Card>
        </div>
    )
}

export default AboutMe