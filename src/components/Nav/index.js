import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        projectsSelected,
        setProjectsSelected,
        aboutSelected,
        setAboutSelected,
    } = props;


    return (
        <ul className="flex-row">
            <nav className="flex-row">
                <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(true);
                        setProjectsSelected(false);
                        setContactSelected(false);
                    }}>About Me</span>
                </li>
                <li className={`mx-2 ${projectsSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setProjectsSelected(true);
                        setContactSelected(false);
                        setAboutSelected(false);
                    }}>Projects</span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setContactSelected(true);
                        setAboutSelected(false);
                        setProjectsSelected(false);
                    }}>Contact</span>
                </li>
            </nav>
        </ul>

    );
};

export default Nav;