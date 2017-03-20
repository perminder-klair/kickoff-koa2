import React from 'react';
import Head from 'next/head';

export default () => (
    <div>
        <Head>
            <title>Koa2 React app</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sixing: border-box;
            }
            html, body {
                font-family: 'Helvetica Neue', 'Helevetica', 'Arial', 'sans-serif';
                font-weight: 400;
                font-size: 16px;
                color: #333;
            }
            .container {
                margin-top: 100px;
                padding: 20px;
            }
            .center-text {
                text-align: center;
            }
        `}</style>
        <div className="container">
            <h1 className="center-text">Welcome to Koa.js + React.js app</h1>
        </div>
    </div>
);
