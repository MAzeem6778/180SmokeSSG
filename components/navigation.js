import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import styles from '../styles/navigation.module.css'

export default function Navigation({ navigationItems }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>180 Smoke</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar>
                <img
                    src="https://www.180smoke.ca/static/logo.svg"
                    width="15%"
                    height="auto"
                    style={{ marginLeft: '20%' }}
                />

                <Nav className={styles.navItem} >
                    {navigationItems.map(navItem =>
                        <div
                            key={navItem.id}
                            className={styles.linkStyle}
                            style={{ paddingRight: "5px" }}>
                            <Link id={navItem.id} href={`/c/${navItem.url_key}`} >
                                {navItem.name}
                            </Link>
                        </div>)}
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="border-0" />
                    <Button className="border-0 green" ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path></svg></Button>
                </Form>

            </Navbar>
        </div>
    )
}

