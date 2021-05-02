import React from 'react';
import github from '../../assets/img/github.svg';
import linkedin from '../../assets/img/linkedin.svg';

function Footer() {

    return (
        <div>
            <footer className="flex-row">
            <img src={github} alt="github" />
            <img src={linkedin} alt="linkedin" />
            </footer>
            
        </div>
    );
};

export default Footer;