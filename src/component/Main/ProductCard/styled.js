import styled from "styled-components";
import color from "@style/color/color.js"
import { flexAlignCenter } from "@style/mixin/_flexbox.js"
import { transitionDefault } from "@style/mixin/_hoverEffect.js"

export const ProdCardWrap = styled.div`
	display: grid;
	grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);
	grid-gap: 4rem 2.4rem;
	margin-top: 2.4rem;
	padding: 0 4rem 4rem;
`;

export const ProdCardContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	width: 100%;
	height: auto;
	font-size: 1.5rem;
	line-height: 1.4;
	
	.card-badge {
		position: absolute;
		top: 1.2rem;
		left: 1.2rem;
		padding: .4rem 1.1rem .2rem;
		font-size: 1.4rem;
		border-radius: 10rem;
		background-color: ${color.NL100};
		box-shadow: 0 .25rem .4rem ${color.ND10};
	}
	.card-wish-btn {
		position: absolute;
		top: 1.4rem;
		right: 1.4rem;
		width: 2.4rem;
		filter: invert(1);

		&.act {
			filter: brightness(0) saturate(100%) invert(41%) sepia(76%) saturate(4304%) hue-rotate(328deg) brightness(100%) contrast(102%);
		}
	}

	.card-img {
		aspect-ratio: 20 / 19;
		border-radius: 1.2rem;
		overflow: hidden;
	}
	.card-info {
		display: flex;
		flex-direction: column;

		* {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		&-address {
			display: flex;
			justify-content: space-between;
			gap: .8rem;

			p {
				display: flex;
				gap: .4rem;

				&:last-child {
					flex-shrink: 0;
					letter-spacing: 0;
	
					&::before {
						content: "\\2605";
					}
				}
				span:first-child {
					flex-shrink: 0;
				}
			}
		}
		&-location,
		&-date {
			color: ${color.NL600};
		}
		&-comment {
			span {
				margin-right: .4rem;
				color: ${color.NL600};
				
				& + span {
					color: ${color.NL900};

					&::before {
						content: "\\201C";
						padding: 0 .2rem;
					}
					&::after {
						content: "\\201D";
						padding: 0 .2rem;
					}
				}
			}
		}
		&-price {
			${flexAlignCenter}
			gap: .4rem;
			margin-top: 1rem;

			span:first-child {
				font-weight: 600;
			}
			span:last-child {
				color: ${color.NL700};
			}
		}
	}
`;