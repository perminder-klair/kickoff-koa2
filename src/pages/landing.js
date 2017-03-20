import React from 'react';
import Head from 'next/head';

export default () => {
    return (
        <div>
            <Head>
                <title>Koa2 React app</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <h1>Welcome to react app!</h1>
            </div>
        </div>
    );
};
