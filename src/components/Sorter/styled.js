import styled from 'styled-components'

export const SortWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
	padding: 0 10px;
`

export const Direction = styled.img`
	display: flex;
	flex-direction: row;
	height: 1rem;
	transform: ${(props) => props.dir && 'rotate(180deg)'};
`

export const Option = styled.button`
	align-items: center;
	background-color: transparent;
	border: 0;
	border-bottom: ${(props) =>
		props.toggle ? '3px solid var(--btn-highlight)' : '3px solid transparent'};
	color: white;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	gap: 5px;
	outline: 0;
	padding: 0;
`
