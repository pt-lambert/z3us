import React from 'react'
import { CSS } from '../../theme'
import { Box } from '../atoms/box'

interface IProps {
	color?: string
	css?: CSS
}

const defaultProps = {
	color: 'currentColor',
	css: undefined,
}

export const Z3usText: React.FC<IProps> = ({ color, css }) => (
	<Box
		as="svg"
		width="110"
		height="18"
		viewBox="0 0 110 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		css={{ ...(css as any) }}
	>
		<g>
			<path
				fill={color}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.43,0H.36C.04,0-.12,.38,.11,.61L2.96,3.47c.07,.07,.16,.1,.25,.1h7.69c.32,0,.48,.39,.25,.61L.43,14.58c-.28,.27-.43,.64-.43,1.03v.82c0,.79,.64,1.43,1.43,1.43H17.49c.32,0,.48-.38,.25-.61l-2.86-2.86c-.07-.07-.16-.1-.25-.1H6.95c-.32,0-.48-.39-.25-.61L17.42,3.28c.28-.27,.43-.64,.43-1.03v-.82c0-.79-.64-1.43-1.43-1.43Z"
			/>
			<path
				fill={color}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M44.99,0h-13.92c-.32,0-.48,.38-.25,.61l2.84,2.85c.07,.07,.16,.11,.25,.11h9.65c.79,0,1.43,.64,1.43,1.43v1.82c0,.2-.16,.36-.36,.36h-8.27c-.19,0-.37,.07-.5,.21l-1.32,1.3c-.14,.14-.14,.37,0,.51l1.32,1.32c.13,.13,.32,.21,.51,.21h8.26c.2,0,.36,.16,.36,.36v1.79c0,.79-.64,1.43-1.43,1.43h-9.63c-.09,0-.19,.04-.25,.1l-2.86,2.86c-.23,.23-.07,.61,.25,.61h13.92c1.98,0,3.58-1.6,3.58-3.57V3.57c0-1.97-1.6-3.57-3.58-3.57Z"
			/>
			<path
				fill={color}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M78.68,.11l-2.86,2.86c-.07,.07-.1,.16-.1,.25V12.86c0,.79-.64,1.43-1.43,1.43h-7.86c-.79,0-1.43-.64-1.43-1.43V3.22c0-.09-.04-.19-.1-.25L62.04,.11c-.23-.22-.61-.07-.61,.25V14.29c0,1.97,1.6,3.57,3.57,3.57h10.71c1.97,0,3.57-1.6,3.57-3.57V.36c0-.32-.38-.48-.61-.25Z"
			/>
			<path
				fill={color}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M106.43,7.14h-9.29c-.79,0-1.43-.64-1.43-1.43v-.71c0-.79,.64-1.43,1.43-1.43h9.63c.1,0,.19-.04,.25-.1l2.86-2.86c.22-.23,.07-.61-.25-.61h-13.92c-1.97,0-3.57,1.6-3.57,3.57v3.57c0,1.97,1.6,3.57,3.57,3.57h9.29c.79,0,1.43,.64,1.43,1.43v.71c0,.79-.64,1.43-1.43,1.43h-9.64c-.09,0-.19,.04-.25,.1l-2.86,2.86c-.22,.22-.07,.61,.25,.61h13.92c1.97,0,3.57-1.6,3.57-3.57v-3.57c0-1.97-1.6-3.57-3.57-3.57Z"
			/>
		</g>
	</Box>
)

Z3usText.defaultProps = defaultProps
