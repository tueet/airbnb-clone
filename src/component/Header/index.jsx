import React from 'react';
import Nav from "./Nav";
import { HeaderWrap } from './styled.js';

function Header() {
    return (
        <HeaderWrap>
            <Nav />
        </HeaderWrap>
    );
}

export default Header;