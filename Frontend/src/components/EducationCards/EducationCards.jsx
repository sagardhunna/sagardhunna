import React from 'react';
import "./educationCards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EducationCards = () => {
    return (
        <div className='educationCards'>
            <Card>
                <Card.Img variant="top" src="/assets/kennedyGrad.PNG" className='school-img' />
                <Card.Body>
                    <Card.Title className='card-title'>John F. Kennedy High School</Card.Title>
                    <Card.Text className='card-text'>
                        Attended: Aug. 2018 - May 2022
                        Degree: High School Diploma
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card.Img
                className=' d-none d-lg-block' /* makes arrow disappear on mobile */
                variant="top"
                src="/assets/rightArrow.png"
                style={{ width: '10%', height: '10%', marginTop: '25%' }}
            />

            <Card>
                <Card.Img 
                variant="top" 
                src="/assets/cypressCollegeGrad.JPG" 
                className='school-img' 
                />
                <Card.Body>
                    <Card.Title className='card-title'>Cypress College</Card.Title>
                    <Card.Text className='card-text'>
                        <br/>
                        Attended: Aug. 2022 - May 2024
                        Degree: A.S. for Transfer
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card.Img className='flipped-arrow d-none d-lg-block'
                variant="top"
                src="/assets/rightArrow.png"
                style={{ width: '10%', height: '10%' }}

            />

            <Card>
                <Card.Img variant="top" src="/assets/uciIMG.JPG" className='school-img' />
                <Card.Body>
                    <Card.Title className='card-title'>University of California, Irvine</Card.Title>
                    <Card.Text className='card-text'>
                        Attended: Sep. 2024 - Current
                        Degree: B.S. Computer Science
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EducationCards