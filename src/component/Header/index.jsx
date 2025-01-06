import React from 'react';
import NavTopProvider from "./NavTopProvider";
import { NavWrapper } from './styled.js';

function Header() {
    return (
        <NavWrapper>
            <NavTopProvider/>
            {/* <NavSearchBar/> */}
            <section className="nav-sub"></section>
        </NavWrapper>
    );
}

export default Header;