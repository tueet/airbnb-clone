import styled from "styled-components";
import color from "@style/color/color.js"
import { flexAlignCenter } from "@style/mixin/_flexbox.js"
import { transitionDefault } from "@style/mixin/_hoverEffect.js"

export const CategoryWrap = styled.div`
    z-index: 9;
    position: sticky;
    top: 16.5rem;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 100%;
    padding: 0 4rem;
    background-color: ${color.NL100};
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
`;

export const CategoryContent = styled.div`
    ${flexAlignCenter}
    flex-shrink: 1;
    width: calc(100vw - 17.4rem);
    overflow-x: hidden;
    
    ul {
        position: relative;
        display: flex;
        gap: 3.2rem;
        padding: .8rem 0 1rem;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none;
        
        &::-webkit-scrollbar {
            display: none;
        }
        li {
            button {
                ${flexAlignCenter}
                ${transitionDefault}
                position: relative;
                flex-direction: column;
                gap: .8rem;
                width: auto;
                padding: 1.2rem 0 1rem;
                opacity: .4;
                
                &::after {
                    ${transitionDefault}
                    content: "";
                    position: absolute;
                    bottom: -1rem;
                    left: 0;
                    width: 100%;
                    height: .25rem;
                    border-radius: 1rem;
                    background-color: #000;
                    opacity: 0;
                }
                &:hover {
                    opacity: .65;

                    &::after {
                        opacity: .2;
                    }
                }
                &:focus,
                &:active {
                    opacity: 1;

                    &::after {
                        opacity: .6;
                    }
                }
                p {
                    width: 2.4rem;
                    height: 2.4rem;
                }
                span {
                    flex-shrink: 0;
                    width: max-content;
                    font-size: 1.2rem;
                    font-weight: 400;
                }
            }
        }
    }
`;

export const FilterButton = styled.button`
    ${flexAlignCenter}
    flex-shrink: 0;
    gap: .8rem;
    height: 4.8rem;
    padding: 1rem 1.6rem;
    border: 1px solid ${color.NL300};
    border-radius: 1rem;

    p {
        width: 1.6rem;
        height: 1.6rem;
    }
    span {
        font-size: 1.2rem;
    }
`;