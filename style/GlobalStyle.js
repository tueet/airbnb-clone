import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html,
	body {
		font-size: 62.5%; /* 1rem = 10px */
		line-height: 1;
	}
	* {
		margin: 0;
		padding: 0;
		font-size: 1.6rem;
		font-synthesis: none;
		border: 0;
		outline: 0;
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
		font-family: inherit;
		font-size: inherit;
	}
`;

export default GlobalStyle;