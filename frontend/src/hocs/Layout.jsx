import React from 'react';
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar';
import Footer from '../components/Footer'
const layout = (props) => (
    <>
        <TopBar />
        <Navbar />
        
        {props.children}
        <Footer />
        

    </>
);

export default layout;