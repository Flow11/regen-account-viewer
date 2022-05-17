import { RegenApi } from '@regen-network/api/lib'
import useSendTx from 'hooks/queries/useSendTx'
import { useState } from 'react'
import AddressInput from './AddressInput'
import AmountInput from './AmountInput'

type SendFormType = {
  defaultSender?: string
  regenApi?: RegenApi
}

const SendForm = ({ defaultSender = '', regenApi }: SendFormType) => {
  const [amount, setAmount] = useState(0)
  const [sender, setSender] = useState(defaultSender)
  const [receiver, setReceiver] = useState<string>('')

  const sendFormCallback = useSendTx({
    amount,
    receiver,
    sender,
    api: regenApi
  })

  return (
    <div className="mb-2">
      <AmountInput setAmount={setAmount} name="amount" amount={amount} />
      <AddressInput setAddress={setSender} address={sender} name="sender" />
      <AddressInput
        setAddress={setReceiver}
        address={receiver}
        name="receiver"
      />
      <button type="submit" onClick={sendFormCallback}>
        Send
      </button>
    </div>
  )
}

export default SendForm
