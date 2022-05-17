import { ChangeEvent } from 'react'
import { useStateSetter } from 'types/react'

type AddressInputType = {
  name: string
  address?: string
  setAddress: useStateSetter<string>
}

const AddressInput = ({ setAddress, address, name }: AddressInputType) => {
  const onUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  return (
    <div>
      <label>{name}</label>
      <input onChange={onUpdate} value={address} className="p-2 bg-gray-200" />
    </div>
  )
}

export default AddressInput
