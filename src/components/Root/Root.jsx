import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <>
            <div className='h-16'>
                <Header />
            </div>
            <div className='min-h-[calc(100vh-117px)]'>
                <Outlet />
            </div>
                <Footer />
        </>
    );
};

export default Root;