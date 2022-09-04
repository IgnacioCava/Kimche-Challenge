import React from 'react'
import { QuerySelectorProps, QuerySelectorComponent } from './interfaces'

export const QuerySelector: QuerySelectorComponent = ({
	set
}: QuerySelectorProps) => {
	return (
		<>
			<button onClick={set} value='continent'>
				Continents
			</button>
			<button onClick={set} value='language'>
				Languages
			</button>
		</>
	)
}
