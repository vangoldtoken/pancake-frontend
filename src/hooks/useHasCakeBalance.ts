import BigNumber from 'bignumber.js'
import { getVgdAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's VGD balance is at least the amount passed in
 */
const useHasCakeBalance = (minimumBalance: BigNumber) => {
  const cakeBalance = useTokenBalance(getVgdAddress())
  return cakeBalance.gte(minimumBalance)
}

export default useHasCakeBalance
