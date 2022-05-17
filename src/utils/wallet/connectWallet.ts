import { keplrConfig } from './keplr.config'
import { Window as KeplrWindow } from '@keplr-wallet/types'
import { useStateSetter } from '../../types/react'
import { Wallet } from './wallet.types'

declare global {
  interface Window extends KeplrWindow {}
}

type ConnectWalletParams = { setWallet: useStateSetter<Wallet | undefined> }

export const connectWallet = async ({
  setWallet
}: ConnectWalletParams): Promise<void> => {
  if (window.keplr) {
    const { chainId } = keplrConfig
    await window.keplr.experimentalSuggestChain(keplrConfig)
    await window.keplr.enable(chainId)

    const offlineSigner = window.getOfflineSignerAuto
      ? await window.getOfflineSignerAuto(chainId)
      : undefined
    const key = await window.keplr.getKey(chainId)
    if (key && key.bech32Address && offlineSigner) {
      const wallet = {
        offlineSigner,
        address: key.bech32Address
      }
      setWallet(wallet)
    }
  } else if (!window.keplr) {
    throw new Error(
      'Please install Keplr extension to view your account balance'
    )
  }
}
