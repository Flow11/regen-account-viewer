import { StdFee } from '@cosmjs/amino'
import { RegenApi } from '@regen-network/api/lib'
import { MsgSend } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/tx'
import { useCallback } from 'react'
import { keplrConfig } from 'utils/wallet/keplr.config'

type UseAllBalanceProps = {
  api?: RegenApi
  amount: number
  sender: string
  receiver: string
}

const useSendTx = ({ api, amount, receiver, sender }: UseAllBalanceProps) => {
  const sendTxCallback = useCallback(async () => {
    const msg = MsgSend.fromPartial({
      amount: [
        {
          amount: String(amount),
          denom: keplrConfig.currencies[0].coinMinimalDenom
        }
      ],
      fromAddress: sender,
      toAddress: receiver
    })

    const fee: StdFee = {
      amount: [
        { amount: '0', denom: keplrConfig.currencies[0].coinMinimalDenom }
      ],
      gas: '0'
    }

    const signedClientMsg = await api?.msgClient?.sign(sender, [msg], fee, '')

    if (signedClientMsg) {
      await api?.msgClient?.broadcast(signedClientMsg)
    }
  }, [api, amount, receiver, sender])

  return sendTxCallback
}

export default useSendTx
