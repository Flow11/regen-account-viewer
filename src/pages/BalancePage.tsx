import { RegenApi } from '@regen-network/api/lib'
import AddressLink from 'components/AddressLink'
import Amount from 'components/Amount'
import DataRow from 'components/DataRow'
import Loader from 'components/Loader'
import SendForm from 'components/SendForm'
import useBalance from 'hooks/queries/useBalance'
import { formatAmount } from 'utils/format/formatAmout'

type BalancePageProps = {
  regenApi?: RegenApi
  address?: string
}

const BalancePage = ({ regenApi, address }: BalancePageProps) => {
  const balance = useBalance({ address, api: regenApi })

  return (
    <div className="text-center">
      <SendForm defaultSender={address} regenApi={regenApi} />
      <DataRow
        name="Account address:"
        value={<AddressLink address={address} />}
      />
      {balance ? (
        <DataRow
          name="Amount:"
          value={
            <Amount
              amount={formatAmount({
                amount: balance.balance?.amount ?? '0'
              })}
            />
          }
        />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default BalancePage
