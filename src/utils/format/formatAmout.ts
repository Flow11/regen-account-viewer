import { keplrConfig } from 'utils/wallet/keplr.config'

type Params = {
  amount: string
}

const FRACTION_DIGITS = 5
const DECIMALS_DIVIDER = Number(
  '1'.padEnd(keplrConfig.stakeCurrency.coinDecimals + 1, '0')
)

export const formatAmount = ({ amount }: Params) =>
  (Number(amount) / DECIMALS_DIVIDER).toFixed(FRACTION_DIGITS)
