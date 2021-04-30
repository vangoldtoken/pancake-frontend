import React from 'react'
import { Text, Flex, Box, ErrorIcon, Button } from '@pancakeswap-libs/uikit'
import Banner from './Banner'

const MigrationV2 = () => {
  return (
    <Banner
      id="v2-migration"
      title={
        <Flex alignItems="center">
          <ErrorIcon color="white" width="32px" mr="16px" />
          <Text color="white" fontSize="24px" bold>
            VANGOLD swap is now open
          </Text>
        </Flex>
      }
    >
      <Box ml="48px">
        <Text color="warning" bold>
         
        </Text>
        <Text color="white" mb="16px">
          Vangold swap is almost open for Farming and Staking
        </Text>
        <Button as="a" href="/farm">
          Farm Now
        </Button>
      </Box>
    </Banner>
  )
}

export default MigrationV2
