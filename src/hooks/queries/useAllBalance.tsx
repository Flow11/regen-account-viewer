import { RegenApi } from '@regen-network/api/lib'
import {
  QueryAllBalancesResponse,
  QueryClientImpl as BankQueryClientImpl
} from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query'
import { useEffect, useState } from 'react'

type UseAllBalanceProps = { address?: string; api?: RegenApi }

const useAllBalance = ({ address, api }: UseAllBalanceProps) => {
  const [balance, setBalance] = useState<QueryAllBalancesResponse | undefined>(
    undefined
  )

  useEffect(() => {
    const getBalance = async () => {
      if (api && address) {
        const bankQueryClient = new BankQueryClientImpl(api.queryClient)
        bankQueryClient
          .AllBalances({ address })
          .then(setBalance)
          .catch(console.error)
      }
    }

    getBalance()
  }, [address, api])

  return balance
}

export default useAllBalance
