import { Facebook, Instagram, Linkedin, Twitter, Yelp, Youtube } from './Icons';
// import '../../styles/styles.css';
import styles from '../styles/homeStyles/home.module.css';

const links = {
  instagram: 'https://www.instagram.com/180smoke/',
  facebook: 'https://www.facebook.com/180Smoke',
  youtube: 'https://www.youtube.com/channel/UCi8p8cIFzikgMA7BD1Q2TIA/',
  yelp: 'https://www.yelp.ca/biz/180-smoke-vape-store-toronto-2',
  twitter: 'https://twitter.com/180Smoke',
  linkedin: 'https://www.linkedin.com/company/180-smoke'
};



const Footer = ({ disclaimer, footerLinks }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 >
        Join the Conversation
        <span className={'hide-mobile'}> on Social</span>
      </h2>
      <ul className="d-flex flex-wrap justify-content-center social-section__list ">
        {links.instagram && (
          <li>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram width={70} />
            </a>
          </li>
        )}
        {links.facebook && (
          <li>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook width={70} />
            </a>
          </li>
        )}
        {links.youtube && (
          <li>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube width={70} />
            </a>
          </li>
        )}
        {links.yelp && (
          <li>
            <a href={links.yelp} target="_blank" rel="noopener noreferrer">
              <Yelp width={70} />
            </a>
          </li>
        )}
        {links.twitter && (
          <li>
            <a href={links.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter width={70} />
            </a>
          </li>
        )}
        {links.linkedin && (
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin width={70} />
            </a>
          </li>
        )}
      </ul>
      <div className='footer-links'>

        <div dangerouslySetInnerHTML={{ __html: footerLinks }} />
      
      </div>
      <div className='footer-disclaimer'>
        <div className='footer-disclaimer-child'>
          <div dangerouslySetInnerHTML={{ __html: disclaimer }} />
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='footer-copyright-child'>
          <p>© 2019 180 Smoke Vape Store. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;