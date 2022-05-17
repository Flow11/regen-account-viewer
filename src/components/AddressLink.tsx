type Props = {
  address?: string
}

const AddressLink = ({ address }: Props) =>
  address ? (
    <a
      href={`https://redwood.regen.aneka.io/accounts/${address}`}
      target="_blank"
      rel="noreferrer"
      className="underline text-blue-500 truncate max-w-[150px] sm:max-w-full"
    >
      {address}
    </a>
  ) : (
    <span className="text-gray-500">Loading address...</span>
  )

export default AddressLink
