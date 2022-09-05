import styled from 'styled-components'

export const SearchWrapper = styled.div`
	align-items: center;
	background-color: var(--control-bg);
	border-radius: 5px;
	color: white;
	display: flex;
	flex-direction: row;
	gap: 5px;
	justify-content: flex-start;
	padding: 5px;
`

export const MagIcon = styled.img`
	height: 1.1rem;
`

export const Input = styled.input`
	background-color: transparent;
	border: 0;
	color: white;
	outline: 0;
	padding: 0;
	width: 100%;

	&::placeholder {
		color: var(--input-placeholder);
	}
`
