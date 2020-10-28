import React from 'react'
import Navigation from './navigation';
import Footer from './footer';



const Layout = ({ navigationItems, children, footerTextContents }) => {
    
    let footerLinks = footerTextContents ? footerTextContents.data.cmsBlocks.items[0].content :null;
    let disclaimer = footerTextContents ? footerTextContents.data.cmsBlocks.items[1].content :null;

    return (
        <>{
            navigationItems ?
            <>
                <Navigation navigationItems={navigationItems} />
                    {children}
                <Footer footerLinks={footerLinks} disclaimer={disclaimer} />
            </>
            : null
        }
            
        </>
    )
}

export default Layout