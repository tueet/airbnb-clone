import { createGlobalStyle } from "styled-components";
import color from "./color/color.js";

const GlobalStyle = createGlobalStyle`
	html,
	body {
		font-size: 62.5%; /* 1rem = 10px */
		line-height: 1;
	}
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		color: ${color.NL800};
		font-family: 'Pretendard', sans-serif;
		font-size: 1.6rem;
		font-synthesis: none;
		line-height: 1;
		box-sizing: border-box;
		vertical-align: baseline;
	}
	*:hover,
	*:focus {
		color: inherit;
	}
	a {
		display: inline-block;
		text-decoration: none;
		color: inherit;
	}
	ul,
	ol {
		list-style: none;
	}
	img {
		width: 100%;
		height: auto;
		object-fit: contain;
		object-position: center;
	}
	button {
		cursor: pointer;
		background: transparent;
	}
	input,
	textarea {
		display: inline-block;
		font-family: inherit;
		font-size: inherit;
		background-color: transparent;
	}
`;

export default GlobalStyle;