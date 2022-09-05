import { useState } from 'react'

export const useUpdate = () => {
	const [value, setValue] = useState(0)
	return () => setValue(value + 1)
}
