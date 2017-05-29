import React from 'react'; // eslint-disable-line
import Head from 'next/head'; // eslint-disable-line

import Header from '../components/Header';

export default () => (
    <div>
        <Head>
            <title>About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="container">
            <Header />
            <h1 className="center-text">About page!</h1>
        </div>
    </div>
);
