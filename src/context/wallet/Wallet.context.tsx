import { createContext } from 'react'
import { Wallet } from 'utils/wallet/wallet.types'

export interface WalletContextType {
  wallet: Wallet | undefined
}

const WalletContext = createContext<WalletContextType | null>(null)

export default WalletContext
