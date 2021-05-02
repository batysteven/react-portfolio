import React from 'react';

function Nav() {

    return (
        <ul>
            <li>
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                    About me
                </a>
            </li>
            <li>
                <a data-testid="projects" href="#projects" onClick={() => setContactSelected(false)}>
                    <Projects />
                </a>
            </li>
            <li>
                <a data-testid="contact" href="#contact" onClick={() => setContactSelected(false)}>
                    Contact
                </a>
            </li>
        </ul>

    );
};

export default Nav;