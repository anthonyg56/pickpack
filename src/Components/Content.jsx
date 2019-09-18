import React from 'react';
import Header from './Misc/Header';
import Body from './Misc/Body';
import Footer from './Misc/Footer';
import NavMenu from './Misc/NavMenu';

const ContentBody = () => 
    <div className="Content-Body">
        <Header />
        <Body />
        <Footer />
    </div>

const Content = () =>
    <div className="Content">
        <NavMenu />
        <ContentBody />
    </div>

export default Content;
