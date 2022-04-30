import React from 'react'
import { useStore } from '@src/store'
import { useImmer } from 'use-immer'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipArrow } from 'ui/src/components/tool-tip'
import Button from 'ui/src/components/button'
import { Text, Flex } from 'ui/src/components/atoms'
import InputFeedback from 'ui/src/components/input/input-feedback'

export const HardwareWalletReconnect: React.FC = () => {
	const { addToast, account, connectHW } = useStore(state => ({
		account: state.account,
		addToast: state.addToastAction,
		connectHW: state.connectHW,
	}))

	const [state, setState] = useImmer({
		isLoading: false,
	})

	const handleReconnectHW = async () => {
		if (account) return
		setState(draft => {
			draft.isLoading = true
		})
		try {
			await connectHW()
		} catch (error) {
			addToast({
				type: 'error',
				title: 'Failed to reconnect hardware wallet',
				subTitle: (error?.message || error).toString().trim(),
				duration: 8000,
			})
		}
		setState(draft => {
			draft.isLoading = false
		})
	}

	if (account) {
		return null
	}

	return (
		<Flex align="center" css={{ mt: '14px', position: 'relative' }}>
			<InputFeedback showFeedback animateHeight={80}>
				<Text color="red" medium css={{ mb: '$4', display: 'block' }}>
					Unable to derive account, if you are using hard wallet ensure ledger is connected and Radix App is opened
				</Text>
			</InputFeedback>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						size="1"
						color="tertiary"
						css={{
							position: 'absolute',
							bottom: '-4px',
							right: '0',
							textTransform: 'uppercase',
						}}
						onClick={handleReconnectHW}
						disabled={state.isLoading}
					>
						Reconnect
					</Button>
				</TooltipTrigger>
				<TooltipContent sideOffset={3}>
					<TooltipArrow offset={15} />
					Reconnect hardware wallet
				</TooltipContent>
			</Tooltip>
		</Flex>
	)
}