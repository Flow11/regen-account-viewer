import { RegenApi } from '@regen-network/api/lib'
import {
  QueryBalanceResponse,
  QueryClientImpl as BankQueryClientImpl
} from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query'
import { useEffect, useState } from 'react'
import { keplrConfig } from 'utils/wallet/keplr.config'

type UseAllBalanceProps = { address?: string; api?: RegenApi }

const useBalance = ({ address, api }: UseAllBalanceProps) => {
  const [balance, setBalance] = useState<QueryBalanceResponse | undefined>(
    undefined
  )

  useEffect(() => {
    const getBalance = async () => {
      if (api && address) {
        const bankQueryClient = new BankQueryClientImpl(api.queryClient)
        bankQueryClient
          .Balance({
            address,
            denom: keplrConfig.currencies[0].coinMinimalDenom
          })
          .then(setBalance)
          .catch(console.error)
      }
    }

    getBalance()
  }, [address, api])

  return balance
}

export default useBalance
