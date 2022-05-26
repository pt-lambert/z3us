import { Network as NetworkID, MnemomicT, AccountT } from '@radixdlt/application'
import { HDMasterSeedT } from '@radixdlt/crypto'
import { HardwareWalletT } from '@radixdlt/hardware-wallet'
import { MessageService } from '@src/services/messanger'
import { ColorSettings } from '@src/types'

export interface Toast {
	id?: string
	children?: React.ReactNode
	type: string
	title?: string
	subTitle?: string
	duration?: number
}

export type Network = {
	id: NetworkID
	url: URL
}

export type AddressBookEntry = {
	name?: string
	address?: string
	isOwn?: boolean
	isHardWallet?: boolean
	background?: string
	colorSettings?: { [key in ColorSettings]: string }
}

export type PendingAction = { payloadHex: string; createdAt: Date }

export type ToastsStore = {
	toasts: Array<Toast>
	addToastAction: (toast?: Toast) => void
	removeToastAction: (id: string) => void
}

export type ThemeStore = {
	theme: string
	setThemeAction: (theme: string) => void
}

export type OnBoardingStore = {
	onBoardingStep: string
	isRestoreWorkflow: boolean
	mnemonic: MnemomicT | null
	password: string | null

	connectHardwareWalletStep: string

	setOnboardingStepAction: (step: string) => void
	setMnemomicAction: (mnemonic: MnemomicT) => void
	setPasswordAction: (password: string) => void
	setIsRestoreWorkflowAction: (restore: boolean) => void

	setConnectHardwareWalletStepAction: (step: string) => void
}

export type SettingsStore = {
	walletUnlockTimeoutInMinutes: number
	setWalletUnclokTimeoutInMinutesAction: (timeoutInMinutes: number) => void

	addressBook: { [key: string]: AddressBookEntry }
	removeAddressBookEntryAction: (address: string) => void
	setAddressBookEntryAction: (address: string, entry: AddressBookEntry) => void

	activeApp: Array<string | number>
	setActiveAppAction: (activeApp: Array<string | number>) => void

	accountPanelExpanded: boolean
	setAccountPanelExpandedAction: (expanded: boolean) => void
}

export type BackgroundStore = {
	messanger: MessageService | null

	setMessangerAction: (messanger: MessageService) => void
	sendResponseAction: (action: string, data: any) => Promise<void>
	hasKeystoreAction: () => Promise<boolean>
	createWalletAction: (words: string[], password: string) => Promise<HDMasterSeedT>
	unlockWalletAction: (password: string) => Promise<HDMasterSeedT>
	removeWalletAction: () => Promise<void>
	lockAction: () => Promise<void>

	// WebAuthn actions
	hasAuthAction: () => Promise<boolean>
	authenticateAction: () => Promise<string>
	removeCredentialAction: () => Promise<void>
	registerCredentialAction: (
		userID: string,
		userName: string,
		userDisplayName: string,
		password: string,
	) => Promise<string>
}

export type KeystoresStore = {
	hasKeystore: boolean
	setHasKeystoreAction: (hasKeystore: boolean) => void

	selectKeystoreName: string
	selectKeystore: (id: string) => void

	keystores: string[]
	addKeystore: (id: string) => void
	removeKeystore: (id: string) => void
}

export type LocalWalletStore = {
	masterSeed: HDMasterSeedT | null

	setMasterSeedAction: (seed: HDMasterSeedT) => Promise<void>
}

export type HardwareWalletStore = {
	hardwareWallet: HardwareWalletT | null

	connectHW: () => void
	sendAPDUAction: (
		cla: number,
		ins: number,
		p1: number,
		p2: number,
		data?: Buffer,
		statusList?: number[],
	) => Promise<Buffer>
}

export type WalletStore = {
	account: AccountT | null
	resetAction: () => void
	lockAction: () => Promise<void>
	getCurrentAddressAction: () => string

	publicAddresses: { [key: number]: AddressBookEntry }
	setPublicAddressesAction: (addresses: { [key: number]: string }) => void
	setPublicAddressAction: (address: string, entry: AddressBookEntry) => void
	removePublicAddressesAction: (index: number) => void

	networks: Network[]
	selectedNetworkIndex: number
	selectNetworkAction: (newIndex: number) => Promise<void>
	addNetworkAction: (id: NetworkID, url: URL) => void

	selectedAccountIndex: number
	selectAccountAction: (newIndex: number) => Promise<void>
	selectAccountForAddressAction: (address: string) => Promise<void>

	activeSlideIndex: number
	setActiveSlideIndexAction: (newIndex: number) => Promise<void>

	approvedWebsites: {
		[key: string]: any
	}
	approveWebsiteAction: (host: string) => void
	declineWebsiteAction: (host: string) => void

	pendingActions: {
		[key: string]: PendingAction
	}
	addPendingActionAction: (id: string, request: any) => void
	removePendingActionAction: (id: string) => void
}

export type SharedStore = ThemeStore & ToastsStore & OnBoardingStore & SettingsStore & BackgroundStore & KeystoresStore

export type AccountStore = WalletStore & LocalWalletStore & HardwareWalletStore

export type AppStore = SharedStore & AccountStore