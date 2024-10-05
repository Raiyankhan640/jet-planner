import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <>
            <div>
                <Header />
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Root;