import React from 'react'
import BackgroundImage from './backgroundImage';
import { Button } from 'react-bootstrap';


const InteractionSection = () => {
    return (
        <BackgroundImage>
            <h1 style={{ color: 'white', marginTop: '2%' }}>Find a 180 Smoke Vape Store Near You</h1>
            <img style={{ width: 80, height: 80, marginTop: 30, marginBottom: 30 }} src="https://www.180smoke.ca/static/images/icons/pointer.svg" alt="Logo" />
            <Button className="widget-button">FIND MY STORE</Button>
        </BackgroundImage>
    )
}

export default InteractionSection
