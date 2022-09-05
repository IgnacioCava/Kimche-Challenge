import styled from 'styled-components'
import { Scrollable } from '../../config/baseStyles'

export const Country = styled.div`
	background-color: var(--card-bg);
	border-radius: 5px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	width: 120px;
`

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
	text-align: center;
`

export const Name = styled.h6`
	margin: 0;
`

export const NativeName = styled.span`
	color: var(--subtext-font-color);
	font-size: var(--absolute-font-small);
`

export const SubHeader = styled.div`
	align-items: baseline;
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: center;
	margin-bottom: 5px;
`

export const Flag = styled.img`
	border-radius: 5px;
	box-sizing: border-box;
	height: 70px;
	object-fit: cover;
	width: 100%;
`

export const Languages = styled.div`
	background-color: var(--transparent);
	display: flex;
	flex-direction: column;
	font-size: var(--absolute-font-small);
	gap: 5px;
	overflow: auto;
	padding: 5px;
`

export const Capital = styled.p`
	> span {
		font-size: var(--absolute-font-small);
	}

	font-size: var(--absolute-font-medium);
	margin: 0;
	text-align: center;
`

export const LangTags = styled(Scrollable)`
	display: flex;
	flex-direction: row;
	gap: 5px;
	padding-bottom: 5px;
	white-space: nowrap;
`

export const Tag = styled.span`
	border: 1px solid var(--tag-border-color);
	border-radius: 3px;
	font-size: var(--absolute-font-small);
	padding: 2px;
`
