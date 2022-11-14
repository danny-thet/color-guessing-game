import { Box, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { RGBsContext } from '../context/RGBsContext'
import { ColorBox } from './ColorBox'

export const ColorGuessingBody = () => {
  const rgb = useContext(RGBsContext)
  return (
    <Box mt="50px" h="100%" maxW="100%" textAlign="center">
      <Flex
        mx="auto"
        maxW="500px"
        gap="20px"
        flexWrap="wrap"
        justifyContent="center"
      >
        {rgb.rgbsList?.map(rgbValue => {
          return (
            <ColorBox
              key={rgbValue.id}
              rgbValues={rgbValue}
              onSelectColor={rgb.handleSelectColor}
            />
          )
        })}
        <div>
          <div>Testing</div>
        </div>
      </Flex>
    </Box>
  )
}
