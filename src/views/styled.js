import styled from 'styled-components'
import device from '../config/mediaQueries'

export const AppWrapper = styled.div`
	margin-top: 150px;

	@media ${device.mobileL} {
		margin-bottom: 100px;
		margin-top: 50px;
	}
`

export const Controls = styled.div`
	backdrop-filter: blur(3px);
	background-color: var(--transparent);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: space-between;
	left: 0;
	margin: auto;
	padding: 10px 15%;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 10;

	* {
		font-size: var(--absolute-font-medium) !important;
	}

	@media ${device.mobileL} {
		bottom: 0;
		padding: 10px;
		top: unset;
	}
`

export const Filters = styled.div`
	background-color: var(--control-bg);
	border-radius: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`
