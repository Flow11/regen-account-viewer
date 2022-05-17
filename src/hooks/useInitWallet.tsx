import { useEffect } from 'react'
import { useStateSetter } from 'types/react'
import { connectWallet } from 'utils/wallet/connectWallet'
import { Wallet } from 'utils/wallet/wallet.types'

type Props = {
  setWallet: useStateSetter<Wallet | undefined>
  setError?: useStateSetter<Error | undefined>
}

const useInitWallet = ({ setWallet, setError }: Props) => {
  useEffect(() => {
    const initWallet = async () => {
      try {
        await connectWallet({ setWallet })
      } catch (e: unknown) {
        console.error(e)
      }
    }

    initWallet()
  }, [setWallet, setError])
}

export default useInitWallet
