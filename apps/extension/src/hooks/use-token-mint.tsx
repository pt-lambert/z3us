import { useNoneSharedStore } from '@src/hooks/use-store'
import { useTransaction } from '@src/hooks/use-transaction'
import { buildAmount } from '@src/utils/radix'
import { ExtendedActionType } from '@src/types'
import { parseAccountAddress, parseResourceIdentifier } from '@src/services/radix/serializer'

export const useTokenMint = () => {
	const { buildTransactionFromActions } = useTransaction()
	const { address } = useNoneSharedStore(state => ({
		address: state.getCurrentAddressAction(),
	}))

	const mint = async (rri: string, amount: string) =>
		buildTransactionFromActions([
			{
				type: ExtendedActionType.MINT_TOKENS,
				to_account: parseAccountAddress(address),
				amount: buildAmount(amount),
				rri: parseResourceIdentifier(rri),
			},
		])

	return mint
}
