import styled from "styled-components";
import { flexCenter } from '@style/mixin/_flexbox';

export const HeaderWrap = styled.header`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 0 4rem;
    background-color: #FFF;
    
    a {
        ${flexCenter}
    }
`;