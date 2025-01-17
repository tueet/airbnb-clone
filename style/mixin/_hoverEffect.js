import { css } from 'styled-components';
import color from "@style/color/color.js";

export const transitionDefault = css`
    transition: all ease 125ms;
`;
export const transition150 = css`
    transition: all ease 150ms;
`;
export const transition200 = css`
    transition: all ease 200ms;
`;

export const hoverRoundBg = css`
    position: relative;

    &::before {
        content: '';
        z-index: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        border-radius: 10rem;
        background-color: ${color.NL200};
        opacity: 0;
    }
    &:hover::before,
    &:focus::before {
        opacity: 1;
    }

    > * {
        position: relative;
        z-index: 1;
    }
`;

export const hoverRoundBgWithMargin = css`
    ${hoverRoundBg}
    
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
    }
    span {
        margin: 1.2rem 1.6rem;
    }
`;

export const hoverDropShadow = css`
    ${transitionDefault}

    &:hover,
    &:focus {
        box-shadow: 0 .25rem .4rem ${color.ND15};
    }
`;

export const hoverEnlargement = css`
    ${transition200}
    transform: scale(1);

    &:hover,
    &:focus-visible {
        transform: scale(1.1);
    }
`;