import React from 'react';
import "./projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Projects = () => {
    return (
        <div className='projectCards'>
            <div className='card-styling rounded projectCard'>
                <h2 style={{ marginBottom: '8%' }}>Remind Me</h2>
                <div className='container'>
                    <div className='project1Image'>
                        <Card.Img
                            variant="top"
                            src="/assets/AlarmImage@3x.png"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
                <Button className='goSomewhereButton border border-dark border-2' variant='light'>Go somewhere</Button>
            </div>

            <div className='card-styling rounded projectCard'>
                <h2 style={{ marginBottom: '8%' }}>PROJECTNAME</h2>
                <div className='container'>
                    <div className='project1Image'>
                        <Card.Img
                            variant="top"

                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
                <Button className='goSomewhereButton border border-dark border-2' variant='light'>Go somewhere</Button>
            </div>
        </div>
    )

}

export default Projects