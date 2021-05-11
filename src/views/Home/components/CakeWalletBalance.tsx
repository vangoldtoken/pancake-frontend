import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getVgdAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceVgdBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const TranslateString = useI18n()
  const vgdBalance = useTokenBalance(getVgdAddress())
  const vgdPriceBusd = usePriceVgdBusd()
  const busdBalance = new BigNumber(getBalanceNumber(vgdBalance)).multipliedBy(vgdPriceBusd).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(vgdBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      {!vgdPriceBusd.eq(0) ? <CardBusdValue value={busdBalance} /> : <br />}
    </>
  )
}

export default CakeWalletBalance
