import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    /**
     * En este archivo manejamos la persistencia de componentes
     */
    <div className="App">        
        {children}
        <Footer />
    </div>
);

export default Layout;