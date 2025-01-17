/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { IconProps } from './types'

export const Z3usIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ color = 'currentColor', width = '24', height = '24', ...props }, forwardedRef) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 28 28"
			xmlns="http://www.w3.org/2000/svg"
			fill={color}
			{...props}
			ref={forwardedRef}
		>
			<path d="M14,0C6.28,0,0,6.28,0,14s6.28,14,14,14,14-6.28,14-14S21.72,0,14,0Zm0,26c-6.62,0-12-5.38-12-12S7.38,2,14,2s12,5.38,12,12-5.38,12-12,12Z" />
			<path d="M16.33,19.36c0-.8-.79-1.36-1.54-1.09l-7.79,2.73,10.23-6.4c.42-.26,.96,.04,.96,.53s.57,.81,.99,.52l5.64-3.88c-1.03-5.06-5.5-8.87-10.86-8.87-4.63,0-8.6,2.84-10.25,6.88l6.41-2.25c.75-.26,1.54,.3,1.54,1.09s.79,1.36,1.54,1.09l7.79-2.73-10.23,6.4c-.42,.26-.96-.04-.96-.53s-.57-.81-.99-.52l-5.7,3.92c1.05,5.03,5.51,8.81,10.85,8.81,4.61,0,8.56-2.82,10.23-6.83l-6.32,2.21c-.75,.26-1.54-.3-1.54-1.09Z" />
		</svg>
	),
)

export default Z3usIcon
