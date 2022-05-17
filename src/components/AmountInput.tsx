import { ChangeEvent } from 'react'
import { useStateSetter } from 'types/react'

type AmountInputType = {
  name: string
  amount: number
  setAmount: useStateSetter<number>
}

const AmountInput = ({ setAmount, amount, name }: AmountInputType) => {
  const onUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  return (
    <div>
      <label>{name}</label>
      <input onChange={onUpdate} value={amount} className="p-2 bg-gray-200" />
    </div>
  )
}

export default AmountInput
