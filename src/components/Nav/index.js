import React, { useState } from 'react';
import Projects from '../Projects';
import ContactForm from '../Contact';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        projectsSelected,
        setProjectsSelected,
        aboutSelected,
        setAboutSelected
    } = props;


    return (
        <ul>
            <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                <span onClick={() => setAboutSelected(true)}>About Me</span>
            </li>
            <li className={`mx-2 ${projectsSelected && 'navActive'}`}>
                <span onClick={() => setProjectsSelected(true)}>Projects</span>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
        </ul>

    );
};

export default Nav;