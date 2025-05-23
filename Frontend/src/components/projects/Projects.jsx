import React from 'react';
import "./projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';  // to link to the other pages


const Projects = () => {
    return (
        <div className='projectCards'>
            <div className='card-styling rounded projectCard'>
                <h2 style={{ marginBottom: '8%', color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Remind Me</h2>
                <div className='container'>
                    <div className='project1Image'>
                        <Card.Img
                            variant="top"
                            src="/assets/AlarmImage@3x.png"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
                <Button className='goSomewhereButton border border-dark border-2' variant='light' as={Link} to="/Remind-Me">
                    <p>Learn More!</p>
                    </Button>
            </div>

            <div className='card-styling rounded projectCard'>
                <h2 style={{ marginBottom: '8%', color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>In Progress...</h2>
                <div className='container'>
                    <div className='project1Image'>
                        <Card.Img
                            variant="top"
                            src="/assets/wardrobeWizard.jpg"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
                <Button className='goSomewhereButton border border-dark border-2' variant='light'>
                    <p>Wardrobe Wizard</p>
                    </Button>
            </div>
        </div>
    )

}

export default Projects