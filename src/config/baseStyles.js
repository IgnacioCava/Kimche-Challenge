import styled from 'styled-components'

export const Typography = styled.span`
	color: ${(props) => {
		if (props.color) return props.color
		else
			switch (props.type) {
				case 'subtext':
					return 'var(--subtext-font-color)'
				default:
					return props.color
			}
	}};
	font-size: ${(props) => {
		switch (props.type) {
			case 'title':
				return 'var(--title-font-size)'
			case 'subtitle':
				return 'var(--subtitle-font-size)'
			case 'text':
				return 'var(--text-font-size)'
			case 'subtext':
				return 'var(--subtext-font-size)'
			default:
				return '1rem'
		}
	}};
	font-weight: ${(props) =>
		props.type?.includes('title') || props.bold ? 'bold' : 'normal'};
`

export const Subtext = styled(Typography).attrs(() => ({ type: 'subtext' }))``

export const Title = styled(Typography).attrs(() => ({ type: 'title' }))``

export const Subtitle = styled(Typography).attrs(() => ({ type: 'text' }))``

export const Scrollable = styled.span`
	overflow: auto;
	::-webkit-scrollbar {
		height: 4px;
		width: 4px;
	}
	::-webkit-scrollbar-track {
		background-color: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--scrollbar-thumb-color);
		border-radius: 10px;
	}
`
