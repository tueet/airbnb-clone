import styled from "styled-components";
import { flexCenter, flexAlignCenter, hasRoundBg } from '../../../../style/_variables.js';

export const NavTop = styled.div`
    ${flexAlignCenter}
    justify-content: space-between;
    height: 8rem;
    
    li {
        flex: 1;
    }
`;

export const NavTopLogo = styled.li`
    ${flexAlignCenter}
    justify-content: flex-start;

    p {
        width: 12rem;
    }
`;

export const NavTopTabList = styled.li`
    ${flexCenter}
    gap: 1rem;
    height: 4rem;

    a {
        ${hasRoundBg}
        width: 6rem;
        border-radius: 2rem;
        
        span {
            font-weight: 300;
        }
        &:hover,
        &:focus {
            span {
                font-weight: 400;
            }
        }
    }
`;

export const NavTopMenu = styled.li`
    ${flexAlignCenter}
    justify-content: flex-end;
    gap: 1rem;
    
    div {
        ${flexAlignCenter}

        &:nth-child(1) {
            justify-content: flex-end;
            flex-grow: 1;
            height: 4rem;

            a {
                ${hasRoundBg}
                padding: 1rem;

                img {
                    width: 2rem;
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
                justify-content: space-between;
                width: 9rem;
                padding: .8rem .8rem .8rem 1.4rem;
                border: 1px solid #DDD;
                border-radius: 10rem;
                transition: all ease .125s;

                &:hover,
                &:focus {
                    box-shadow: 0 .25rem .4rem rgba(0,0,0,.15);
                }

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