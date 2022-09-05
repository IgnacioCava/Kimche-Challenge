import styled from 'styled-components'
import device from '../../config/mediaQueries'

export const TypeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow: auto;
`

export const LoadWrapper = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	overflow: hidden;
	position: fixed;
	right: 0;
	top: 0;
`

export const Loading = styled.img`
	height: 20%;
	min-width: 100px;
	object-fit: contain;
	width: 20%;
`

export const ErrorWrapper = styled.div`
	align-items: center;
	bottom: 0;
	box-sizing: border-box;
	color: white;
	display: flex;
	font-size: 26px;
	height: 80vh;
	justify-content: center;
	padding: 10px;
	position: absolute;
	text-align: center;
	width: 100%;

	@media ${device.mobileL} {
		top: 0;
	}
`

export const Position = styled.div`
	height: fit-content;
	position: fixed;
	top: 100px;
	width: 100%;
	z-index: 9;

	> * {
		backdrop-filter: blur(4px);
		background-color: var(--transparent);
		border: 2px solid var(--btn-highlight);
		height: 44px;
	}

	@media ${device.mobileL} {
		top: 5px;
	}
`
