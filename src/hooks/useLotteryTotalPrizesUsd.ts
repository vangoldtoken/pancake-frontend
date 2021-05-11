import { usePriceVgdBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalVgd = getBalanceNumber(totalRewards)
  const vgdPriceBusd = usePriceVgdBusd()

  return totalVgd * vgdPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
