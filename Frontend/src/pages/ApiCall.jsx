import './apicall.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'


function ApiCall() {

    const [image1, setImage1] = useState("Loading");
    const [image2, setImage2] = useState("Loading");
    const [buttonPressed, setButtonPressed] = useState(false);



    const fetchImages = () => {
        console.log("Button was pressed")
        setButtonPressed(true);
        fetch("https://sagardhunna.onrender.com/api/home") // connects to backend to see what is it outputting
            .then(response => response.json() // converts response to json
            ).then(data => { // gets the data
                setImage1(data.image1); /* Sets the value of image1 to data.message because data that we are retrieving is the message key */
                setImage2(data.image2);

            }).catch(error => {
                console.error("Error fetching data: ", error);
            });
    };


    return (
        <div>
            <h1 style={{ fontSize: '5rem', margin: '1%' }}>Test API Call</h1>
            <div className='api-call-container'>
            {!buttonPressed && <h1 style={{fontSize: '2rem', marginTop: '-3%'}}>Press Find New Images!</h1>} {/* will disappear after first button press */}
                <div className="img-button-container rounded">
                    <div className='images'>
                        <Card.Img
                            className='api-image rounded image1'
                            variant="top"
                            src={image1}
                        />
                        <Card.Img
                            className='api-image rounded image2'
                            variant="top"
                            src={image2}
                        />
                    </div>

                    <Button onClick={fetchImages} className='goSomewhereButton border border-dark border-2' variant='light' style={{ fontSize: '1.5rem' }}>Find new images!</Button>
                </div>
            </div>
        </div>
    )
}

export default ApiCall;
