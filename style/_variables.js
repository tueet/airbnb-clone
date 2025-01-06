import { css } from 'styled-components';

export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flexAlignCenter = css`
    display: flex;
    align-items: center;
`;

export const hasRoundBg = css`
    position: relative;

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: calc(100% + .5rem);
        height: calc(100% + .5rem);
        border-radius: 10rem;
        background-color: #F2F2F2;
        opacity: 0;
    }
    &:hover::before,
    &:focus::before {
        opacity: 1;
    }
`;