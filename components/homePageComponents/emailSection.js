import React from 'react'
import BackgroundImage from './backgroundImage';
import { Button } from 'react-bootstrap';


const EmailSection = () => {
    return (
        <BackgroundImage>
            <h1 style={{ color: 'white', marginTop: '2%' }}>Be The First To Hear About Our Promotions</h1>
            <img style={{ width: 80, height: 80, marginTop: 30, marginBottom: 30 }} src="https://www.180smoke.ca/static/images/icons/mail.svg" alt="Logo" />
            <Button className="widget-button" >SUBSCRIBE TO OUR NEWSLETTER</Button>
        </BackgroundImage>
    )
}

export default EmailSection
