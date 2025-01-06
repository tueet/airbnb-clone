import styled from "styled-components";
import { flexCenter } from '../../../style/_variables.js';

export const NavWrapper = styled.header`
    display: flex;
    flex-direction: column;
    padding: 0 4rem;

    a {
        ${flexCenter}
        height: 100%;
    }
`;