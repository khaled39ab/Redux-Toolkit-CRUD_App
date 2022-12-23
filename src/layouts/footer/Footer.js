import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

    return (
        <footer>
            <p><small>Copyright By Khaled @{year}</small></p>
        </footer>
    );
};

export default Footer;