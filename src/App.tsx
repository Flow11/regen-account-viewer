import { RegenApi } from '@regen-network/api/lib'
import WalletContext from 'context/wallet/Wallet.context'
import useInitRegenApi from 'hooks/useInitRegenApi'
import BalancePage from 'pages/BalancePage'
import React, { useContext, useState } from 'react'

function App() {
  const [regenApi, setRegenApi] = useState<RegenApi>()
  const [error, setError] = useState<Error>()
  const walletContext = useContext(WalletContext)
  const wallet = walletContext?.wallet

  useInitRegenApi({ setRegenApi, wallet })

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen px-4 overflow-hidden">
      <h1 className="text-center text-xl sm:text-4xl font-extrabold text-gray-900 mb-2">
        REGEN Account Viewer APP 🌱
      </h1>
      <h2 className="text-md sm:text-xl text-gray-500 mb-4">REDWOOD Tesnet</h2>
      {error ? (
        <p className="text-red-500">{String(error)}</p>
      ) : (
        <BalancePage address={wallet?.address} regenApi={regenApi} />
      )}
    </div>
  )
}

export default App
