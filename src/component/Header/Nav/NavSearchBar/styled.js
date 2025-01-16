import styled from "styled-components";
import color from '@style/color/color.js';
import { transitionDefault } from "@style/mixin/_hoverEffect";
import { flexCenter, flexAlignCenter } from '@style/mixin/_flexbox';
import { hoverRoundBg, hoverRoundBgWithMargin } from '@style/mixin/_hoverEffect';

export const NavSearchBarWrap = styled.div`
    width: 100%;
    height: 100%;

    > div {
        ${flexAlignCenter}
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        width: 100%;
        padding-bottom: 2.4rem;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
    }
`;

export const NavTabList = styled.div`
    ${flexCenter}
    height: 8rem;

    button {
        ${hoverRoundBgWithMargin}
        height: 4rem;
        margin: auto 0;
        border-radius: 2rem;
        
        span {
            opacity: .6;
        }
        &:hover,
        &:focus {
            span {
                opacity: 1;
            }
        }
    }
`;

export const NavSearchBarContent = styled.form`
    ${flexAlignCenter}
    position: relative;
    width: 100%;
    max-width: 85rem;
    border: 1px solid #DDD;
    border-radius: 10rem;
    box-shadow: 0 .3rem 1rem ${color.ND15};

    section {
        display: flex;
        width: 100%;
        overflow: hidden;

        > * {
            position: relative;
            flex: 1 1 33.3%;
        }
        > label:first-child {
            &::after {
                opacity: 0;
            }
        }
        > label:last-child {
            padding-right: 6.4rem;
        }
        
        div {
            display: flex;
        }
        label {
            ${hoverRoundBg}
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            padding: 1.4rem 3.2rem 1.2rem;
            
            &::after {
                z-index: -3;
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: .1rem;
                height: 50%;
                background-color: ${color.NL300};
            }
            &:hover::after {
                z-index: -2;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: calc(100% + .4rem);
                height: 100%;
                background-color: ${color.NL100};
                opacity: 1;
            }

            span {
                font-size: 1.2rem;
            }
            p,
            input {
                height: 1.6rem;
                margin-top: .4rem;
                color: ${color.NL700};
                font-size: 1.4rem;
                font-weight: 300;
                line-height: 1.6rem;
                
                &::placeholder {
                    font-weight: 300;
                }
            }
        }
    }

    .search-btn {
        ${transitionDefault}
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        margin-right: .6rem;
        padding: 1.6rem;
        border-radius: 6rem;
        background-color: ${color.P100};
        
        &:hover,
        &:focus {
            background-color: ${color.P200};
        }
        p {
            width: 1.6rem;
            height: 1.6rem;

            img {
                filter: invert(1);
            }
        }
    }
`;