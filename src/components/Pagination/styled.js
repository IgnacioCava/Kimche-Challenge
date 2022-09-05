import styled from 'styled-components'
import device from '../../config/mediaQueries'

export const PaginationWrapper = styled.div`
	background-color: var(--transparent);
	border-radius: 30px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	height: 40px;
	justify-content: ${(props) =>
		props.start ? 'flex-end' : props.end ? 'flex-start' : 'space-between'};
	margin-top: 5px;
	min-width: 400px;
	padding: 5px;
	position: relative;
	width: 100%;

	@media ${device.mobileL} {
		min-width: unset;
	}
`

export const Input = styled.input`
	background-color: var(--arrow-bg);
	border-radius: 50%;
	padding: 5px 3px 1px;
	transform: ${(props) =>
		props.dir === 'left' ? 'rotate(90deg)' : 'rotate(270deg)'};
	z-index: 11;
	@media ${device.mobileS} {
		display: none;
	}
`

export const Buttons = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	gap: 20px;
	height: 40px;
	justify-content: center;
	left: 0;
	padding: 5px;
	position: absolute;
	top: 0;
	user-select: none;
	width: 100%;
`

export const PageButton = styled.button`
	background-color: ${(props) =>
		props.current ? 'var(--btn-highlight)' : 'var(--transparent)'};
	border: 0;
	border-radius: 10px;
	color: white;
	cursor: pointer;
	width: 2rem;
`
