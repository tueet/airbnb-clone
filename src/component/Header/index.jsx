import React from 'react';
import Nav from "./Nav";
import { HeaderWrap } from './styled.js';

function Header() {
    return (
        <HeaderWrap>
            <Nav />
            <section className="nav-sub"></section>
        </HeaderWrap>
    );
}

export default Header;