import styles from '../../styles/homeStyles/home.module.css'
import BackgroundImage from './backgroundImage';
const CustomerSupport = () => {
    return (
        <BackgroundImage className={styles.customerSupportMain}>
            <h1 style={{ color: 'white', marginTop: '2%', marginBottom: '2%' }}>Customer Service</h1>
            <div style={{ width: '80%', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', color: 'white' }}>
                <div className="vertical-box-align">
                    <img className="icons-width" src="https://www.180smoke.ca/static/images/icons/clock.svg" alt="Logo" />
                    <h3>HOURS OF OPERATION</h3>
                    <h6 ><a href="#" className="link-style">Monday to Friday 10am - 6pm</a> </h6>
                </div>

                <div className="vertical-line" />

                <div className="vertical-box-align">
                    <img className="icons-width" src="https://www.180smoke.ca/static/images/icons/phone.svg" alt="Logo" />
                    <h3>GIVE US A CALL</h3>
                    <h6><a href="#" className="link-style">(855) 994-6180</a></h6>
                </div>

                <div className="vertical-line" />

                <div className="vertical-box-align">
                    <img className="icons-width" src="https://www.180smoke.ca/static/images/icons/mail.svg" alt="Logo" />
                    <h3>SEND US AN EMAIL</h3>
                    <h6><a href="#" className="link-style">support@180smoke.com</a></h6>
                </div>
            </div>
        </BackgroundImage>
    );
}
export default CustomerSupport;

