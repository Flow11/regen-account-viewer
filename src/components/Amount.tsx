type Props = {
  amount: string
}

const Amount = ({ amount }: Props) => (
  <span className="text-xl sm:text-3xl font-extrabold text-green-600">
    {`${amount} REGEN`}
  </span>
)

export default Amount
