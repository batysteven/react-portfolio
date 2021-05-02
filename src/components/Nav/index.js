import React from 'react';
import Projects from '../Projects';
import ContactForm from '../Contact';

function Nav() {

    return (
        <ul>
            <li>
                <a data-testid="about" href="#about" >
                    About me
                </a>
            </li>
            <li>
                <a data-testid="projects" href="#projects" >
                    Projects<Projects />
                </a>
            </li>
            <li>
                <a data-testid="contact" href="#contact" >
                    Contact<ContactForm />
                </a>
            </li>
        </ul>

    );
};

export default Nav;