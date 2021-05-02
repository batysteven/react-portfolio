import React from 'react';
import Nav from '../Nav';

function Header() {

    const [contactSelected, setContactSelected] = useState(false);
    const [projectsSelected, setProjectsSelected] = useState(false);
    const [aboutSelected, setAboutSelected] = useState(true);

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