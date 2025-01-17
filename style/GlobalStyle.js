import { createGlobalStyle } from "styled-components";
import color from "./color/color.js";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

	html,
	body {
		width: 100%;
		height: 100%;
		color: ${color.NL800};
		font-family: 'Roboto Flex', sans-serif;
		font-size: 62.5%; /* 1rem = 10px */
		font-style: normal;
		font-optical-sizing: auto;
		line-height: 1;
	}
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		color: inherit;
		font-size: 1.6rem;
		font-synthesis: none;
		letter-spacing: -.2px;
		line-height: inherit;
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
		height: 100%;
		object-fit: cover;
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
	
	.font-pretendard {
		font-family: 'Pretendard', sans-serif;
	}

	.swiper {
		z-index: 0;
		width: 100%;

		.swiper-pagination {
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			justify-content: center;
			gap: .4rem;
			width: 30%;
			height: .8rem;
			white-space: nowrap;
			overflow: auto;
			filter: grayscale(1) brightness(0) invert(1);

			.swiper-pagination-bullet {
				width: .6rem;
				height: .6rem;
				margin: 0;
				opacity: .5;
			}
		}
	}
`;

export default GlobalStyle;