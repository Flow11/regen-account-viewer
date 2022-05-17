import useInitWallet from 'hooks/useInitWallet'
import { useState } from 'react'
import { Wallet } from 'utils/wallet/wallet.types'
import WalletContext, { WalletContextType } from './Wallet.context'

type WalletProviderType = {
  children: React.ReactNode
}

const WalletProvider = ({ children }: WalletProviderType) => {
  const [wallet, setWallet] = useState<Wallet>()

  useInitWallet({ setWallet })

  const context: WalletContextType = {
    wallet
  }

  return (
    <WalletContext.Provider value={context}>{children}</WalletContext.Provider>
  )
}

export default WalletProvider
