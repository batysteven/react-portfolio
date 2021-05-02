import React, { useState } from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        contactSelected,
        setContactSelected,
        projectsSelected,
        setProjectsSelected,
        aboutSelected,
        setAboutSelected,
    } = props;
    

    return (
        <div>
            <h2>
                <a data-testid="link" href="/">
                    Steven Baty
                </a>
            </h2>
            <Nav
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            projectsSelected={projectsSelected}
            setProjectsSelected={setProjectsSelected}
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            ></Nav>
        </div>
    );
};

export default Header;