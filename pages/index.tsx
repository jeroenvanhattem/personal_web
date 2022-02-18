import {
  Flex,
  Heading,
  Wrap,
  Text
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import TextLoop from "react-text-loop"
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <Flex
      flexDir='column'
      h='100vh'
      w='100vw'
      minH='100vh'
      maxW='100vw'
      justify='center'
      align='center'
      bgColor='brand.background'
      color='brand.black'
    >
      <Flex
        flexDir='column'
        w='90%'
        minH='100%'
        h='100vw'
        maxW={{ base: '100vw', xl: '2000px' }}
      >
        <Header />
        <Flex
          h='100%'
          w='100%'
          py={24}
          flexDir='column'
          pos='relative'
        >
          {/* TEXTLOOP */}
          <Flex
            flexDir='column'
            w='100%'
            align={{ base: 'center', lg: 'unset' }}
            mt={24}
          >

            <Heading
              fontSize={18}
            >
              NOT JUST
            </Heading>
            <TextLoop>
              <Heading
                fontSize={{ base: 36, xl: 128 }}
                textAlign={{ base: 'center', lg: 'unset' }}
              >
                A WEB <br />
                DEVELOPER
              </Heading>
              <Heading
                fontSize={{ base: 36, xl: 128 }}
                textAlign={{ base: 'center', lg: 'unset' }}
              >
                PASSIONATE
              </Heading>
              <Heading
                fontSize={{ base: 36, xl: 128 }}
                textAlign={{ base: 'center', lg: 'unset' }}
              >
                A MUSICIAN
              </Heading>
              <Heading
                fontSize={{ base: 36, xl: 128 }}
                textAlign={{ base: 'center', lg: 'unset' }}
              >
                ICONIC
              </Heading>
              <Heading
                fontSize={{ base: 36, xl: 128 }}
                textAlign={{ base: 'center', lg: 'unset' }}
              >
                PERFECTIONISTIC
              </Heading>
            </TextLoop>
          </Flex>

          <Flex
            flexDir='column'
            pos='absolute'
            w='100%'
            bottom={24}
            align='flex-end'
            textAlign='right'
          >
            <Heading
              fontSize={{ base: 36, xl: 128 }}
              textAlign={{ base: 'center', lg: 'unset' }}
            >
              JEROEN  <br />
              VAN HATTEM
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex >
  )
}

export default Home
