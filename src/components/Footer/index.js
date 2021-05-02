import React from 'react';
import github from '../../assets/img/github.svg';
import linkedin from '../../assets/img/linkedin.svg';

function Footer() {

    return (
        <div>
            <footer className="flex-row">
                <a href="https://github.com/batysteven">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/steven-baty-098716a3">
                    <img src={linkedin} alt="linkedin" />
                </a>
            </footer>

        </div>
    );
};

export default Footer;