import styled from 'styled-components'
import device from '../../config/mediaQueries'

export const SelectorWrapper = styled.div`
	background-color: var(--control-bg);
	cursor: pointer;
	height: fit-content;
	margin: 5px;
	padding: 5px;
	position: relative;
	width: fit-content;

	* {
		color: white;
	}
`

export const Selected = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	gap: 10px;

	> span {
		text-transform: capitalize;
	}

	> img {
		height: 1rem;
		@media ${device.mobileL} {
			transform: rotate(270deg);
		}
	}
`

export const DropDown = styled.div`
	background-color: var(--option-bg);
	display: flex;
	flex-direction: ${(props) => (props.direction ? 'column' : 'column-reverse')};
	font-size: var(--text-font-size);
	gap: 10px;
	height: fit-content;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;

	@media ${device.mobileL} {
		flex-direction: ${(props) => (props.direction ? 'row' : 'row-reverse')};
		width: 200%;
	}
`

export const Option = styled.button`
	background-color: transparent;
	border: 0;
	border-bottom: ${(props) =>
		props.selected
			? '3px solid var(--btn-highlight)'
			: '3px solid transparent'};

	cursor: pointer;
	font-family: unset;
	font-size: inherit;
	font-size: var(--text-font-size);
	outline: 0;
	padding: 5px;
	text-align: left;
	text-transform: capitalize;
	width: 100%;
`
