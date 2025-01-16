import styled from "styled-components";
import { flexCenter } from '@style/mixin/_flexbox';

export const HeaderWrap = styled.header`
    z-index: 10;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 0 4rem 8.4rem;
    background-color: #FFF;
    
    a {
        ${flexCenter}
    }
`;