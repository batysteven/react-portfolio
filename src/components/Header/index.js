import React from 'react';
import Nav from '../Nav';

function Header() {

    return (
        <div>
            <h2>
                <a data-testid="link" href="/">
                    Steven Baty
                </a>
            </h2>
            <Nav />
        </div>
    );
};

export default Header;