import styled from 'styled-components'

export const PaginationWrapper = styled.div`
	background-color: var(--transparent);
	border-radius: 30px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => (props.limit ? 'flex-end' : 'space-between')};
	margin-top: 5px;
	padding: 5px;
	position: relative;
	width: 100%;
`

export const Input = styled.input`
	background-color: var(--arrow-bg);
	border-radius: 50%;
	padding: 5px 3px 1px;
	transform: ${(props) =>
		props.dir === 'left' ? 'rotate(90deg)' : 'rotate(270deg)'};
	z-index: 11;
`

export const Buttons = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	gap: 20px;
	height: 100%;
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
