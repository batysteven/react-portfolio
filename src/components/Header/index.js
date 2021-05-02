import React, { useState } from 'react';
import Nav from '../Nav';
import ContactForm from '../Contact';
import About from '../About';
import Projects from '../Projects';

function Header() {
    const [aboutSelected, setAboutSelected] = useState(true);
    const [contactSelected, setContactSelected] = useState(false);
    const [projectsSelected, setProjectsSelected] = useState(false);

    let page;

    if (aboutSelected === true) {
        page = <About />
    } else if (contactSelected === true) {
        page = <ContactForm />
    } else if (projectsSelected === true) {
        page = <Projects />
    }


    return (
        <div>
            <header className="flex-row px-1">
                <h2>
                    <a data-testid="link" href="/" className="my-header">
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
            </header>

            <main>
                {page}
            </main>
        </div>
    );
};

export default Header;