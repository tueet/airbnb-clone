import styled from "styled-components";
import { flexCenter, flexAlignCenter } from '@style/mixin/_flexbox';
import { hoverRoundBgWithMargin, hoverDropShadow } from '@style/mixin/_hoverEffect';

export const NavWrap = styled.div`
    ${flexAlignCenter}
    justify-content: space-between;
    height: 8rem;
    
    li {
        flex: 1;
    }
`;

export const NavLogo = styled.div`
    ${flexAlignCenter}
    justify-content: flex-start;

    p {
        width: 12rem;
    }
`;

export const NavMenu = styled.nav`
    ${flexAlignCenter}
    justify-content: flex-end;
    gap: 1rem;
    min-width: 36rem;
    
    div {
        ${flexAlignCenter}

        &:nth-child(1) {
            justify-content: flex-end;
            flex-grow: 1;
            height: 4rem;

            a {
                ${hoverRoundBgWithMargin}

                img {
                    width: 2rem;
                    height: 2rem;
                }
                span {
                    font-size: 1.4rem;
                }
            }
        }
        &:nth-child(2) {
            flex-shrink: 1;

            a {
                ${flexCenter}
                ${hoverDropShadow}
                position: relative;
                justify-content: space-between;
                width: 8.5rem;
                padding: .8rem .8rem .8rem 1.4rem;
                border: 1px solid #DDD;
                border-radius: 10rem;

                p:nth-child(1) {
                    width: 2rem;
                    height: 2rem;
                }
                p:nth-child(2) {
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
    }
`;