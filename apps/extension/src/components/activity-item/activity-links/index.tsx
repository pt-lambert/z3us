import React from 'react'
import { useStore } from '@src/store'
import { CopyIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { Text, Box, Flex, StyledLink } from 'ui/src/components/atoms'
import { Action, Transaction } from '@src/services/types'
import { getShortAddress } from '@src/utils/string-utils'
import Button from 'ui/src/components/button'
import ButtonTipFeedback from 'ui/src/components/button-tip-feedback'
import { copyTextToClipboard } from '@src/utils/copy-to-clipboard'
import { ActivityType } from '@src/components/activity-type'
import { EXPLORER_URL } from '@src/containers/wallet-panel/config'
import { TransactionMessage } from '../transaction-message'

interface IProps {
	accountAddress: string
	tx?: Transaction
	activity?: Action
}

const defaultProps = {
	tx: undefined,
	activity: undefined,
}

export const ActivityLinks: React.FC<IProps> = ({ accountAddress, tx, activity }) => {
	const { addressBook } = useStore(state => ({
		addressBook: state.addressBook,
	}))

	const toAccount = activity?.to_account || activity?.to_validator
	const toEntry = addressBook[toAccount]
	const toShortAddress = getShortAddress(toAccount)

	const fromAccount = activity?.from_account || activity?.from_validator
	const fromEntry = addressBook[fromAccount]
	const fromShortAddress = getShortAddress(fromAccount)

	const handleCopyAddress = (str: string) => {
		copyTextToClipboard(str)
	}

	const LEFT_COL_WIDTH = '100px'
	const RIGHT_COL_WIDTH = '155px'

	return (
		<Box css={{ p: '$3' }}>
			<Flex css={{ mt: '0' }}>
				<Text bold size="3" truncate css={{ width: LEFT_COL_WIDTH }}>
					Transaction:
				</Text>
			</Flex>
			<Flex align="center" css={{ mt: '$2' }}>
				<Text size="2" truncate css={{ width: LEFT_COL_WIDTH }}>
					Type:
				</Text>
				<Flex align="center" justify="end" css={{ flex: '1' }}>
					<ActivityType activity={activity} accountAddress={accountAddress} />
				</Flex>
			</Flex>
			<Flex align="center" css={{ mt: '5px' }}>
				<Text size="2" truncate css={{ width: LEFT_COL_WIDTH }}>
					Transaction ID:
				</Text>
				<Flex align="center" justify="end" css={{ flex: '1' }}>
					<Text color="muted" size="2" css={{ pr: '$1' }}>
						<StyledLink
							css={{ color: '$txtMuted' }}
							underline
							target="_blank"
							href={`${EXPLORER_URL}/transactions/${tx.id}`}
						>
							<ExternalLinkIcon />
							{getShortAddress(tx.id)}
						</StyledLink>
					</Text>
					<ButtonTipFeedback tooltip="Copy address" bgColor="$bgPanel" sideOffset={10}>
						<Button size="1" iconOnly color="ghost" onClick={() => handleCopyAddress(tx.id)}>
							<CopyIcon />
						</Button>
					</ButtonTipFeedback>
				</Flex>
			</Flex>
			{fromShortAddress && (
				<Flex align="center" css={{ mt: '3px' }}>
					<Text size="2" css={{ width: LEFT_COL_WIDTH }}>
						{activity.from_validator ? 'From validator' : 'From address'}
					</Text>
					<Flex align="center" justify="end" css={{ flex: '1' }}>
						<Text truncate color="muted" size="2" css={{ pr: '$1', maxWidth: RIGHT_COL_WIDTH }}>
							{fromEntry?.name ? `${fromEntry.name} (${fromShortAddress})` : fromShortAddress}
						</Text>
						<ButtonTipFeedback tooltip="Copy address" bgColor="$bgPanel" sideOffset={10}>
							<Button size="1" iconOnly color="ghost" onClick={() => handleCopyAddress(fromAccount)}>
								<CopyIcon />
							</Button>
						</ButtonTipFeedback>
					</Flex>
				</Flex>
			)}
			{toShortAddress && (
				<Flex align="center" css={{ mt: '3px' }}>
					<Text size="2" css={{ width: LEFT_COL_WIDTH }}>
						{activity.to_validator ? 'To validator' : 'To address'}
					</Text>
					<Flex align="center" justify="end" css={{ flex: '1' }}>
						<Text truncate color="muted" size="2" css={{ pr: '$1', maxWidth: RIGHT_COL_WIDTH }}>
							{toEntry?.name ? `${toEntry.name} (${toShortAddress})` : toShortAddress}
						</Text>
						<ButtonTipFeedback tooltip="Copy address" delay={500} bgColor="$bgPanel" sideOffset={10}>
							<Button size="1" iconOnly color="ghost" onClick={() => handleCopyAddress(toAccount)}>
								<CopyIcon />
							</Button>
						</ButtonTipFeedback>
					</Flex>
				</Flex>
			)}
			{tx.message && (
				<Flex align="center" css={{ mt: '7px' }}>
					<Box>
						<Text size="2" truncate css={{ pb: '6px' }}>
							Message:
						</Text>
						<Text color="muted" css={{ maxWdith: '219px' }}>
							<TransactionMessage tx={tx} activity={activity} />
						</Text>
					</Box>
				</Flex>
			)}
		</Box>
	)
}

ActivityLinks.defaultProps = defaultProps
