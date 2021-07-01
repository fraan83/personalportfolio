import React, { useState, useEffect } from 'react';
import Head from 'next/head';
 
import Footer from './Footer';
import { useRouter } from 'next/router'



const Layout = ({ children, title = 'Francesco Greco Web Developer'}) => {
    return (
        <div>
            <Head>
                <title> {title} </title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
          
            
            {children}

            <Footer />

        </div>
    )
}

export default Layout
