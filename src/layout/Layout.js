import React from 'react'

import Header from './Header';
import Footer from './Footer';

export default function Layout ({children, ...props}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}