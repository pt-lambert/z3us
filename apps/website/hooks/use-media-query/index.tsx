import React, { useState } from 'react'

export const useMediaQuery = (width: number) => {
	const [targetReached, setTargetReached] = useState<boolean>(false)

	const updateTarget = React.useCallback(e => {
		if (e.matches) {
			setTargetReached(true)
		} else {
			setTargetReached(false)
		}
	}, [])
	React.useEffect(() => {
		const media = window.matchMedia(`(min-width: ${width}px)`)
		media.addListener(updateTarget)

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true)
		}

		return () => media.removeListener(updateTarget)
	}, [])

	return targetReached
}
