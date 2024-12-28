import './apicall.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'


function ApiCall() {

    const [image1, setImage1] = useState("Loading")
    const [image2, setImage2] = useState("Loading")

    useEffect(() => {
        fetch("https://sagardhunna.onrender.com/api/home").then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
                setImage1(data.image1) /* Sets the value of image1 to data.message because data that we are retrieving is the message key */
                setImage2(data.image2)
            }
        )
    }, [])


    return (
        <div>
            <h1 style={{ fontSize: '5rem', margin: '1%' }}>Test API Call</h1>
            <div className='api-call-container'>
                <div className="img-button-container rounded">
                    <div className='images'>
                        <Card.Img
                            className='api-image rounded'
                            variant="top"
                            src={image1}
                        />
                        <Card.Img
                            className='api-image rounded'
                            variant="top"
                            src={image2}
                        />
                    </div>

                    <Button className='goSomewhereButton border border-dark border-2' variant='light' style={{ fontSize: '1.5rem' }}>Find new images!</Button>
                </div>
            </div>
        </div>
    )
}

export default ApiCall;
