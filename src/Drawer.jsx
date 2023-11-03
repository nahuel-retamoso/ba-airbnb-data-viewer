import { Button, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Drawer, useDisclosure, Flex, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useQuery, gql, useLazyQuery, ApolloError } from '@apollo/client';

function DrawerExample({setID}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    
    const [ pagination, setPagination ] = useState(1)

    const QUERY = gql`
      query GetIds($page: Int!) {
        getIds(page: $page)
      }
    `;


    const { loading, error, data } = useQuery(QUERY, {
      variables: { page: parseInt(pagination) }
    });




    const paginationUp = () => {
      setPagination(pagination + 1)
    }

    const paginationDown = () => {
      if(pagination > 1){
        setPagination(pagination - 1)
      }
    }

    function onClickId (id) {
      setID(id)
      onClose()
    }
  
    useEffect(() => {
      console.log(data)
    }
    , [data]);

    return (
      <>
        <Button ref={btnRef} colorScheme='orange' onClick={onOpen}>
          Selecciona un ID
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottom='2px' borderColor='orange.500' mb='10px'>Selecciona un ID</DrawerHeader>
  
            <DrawerBody >
              {data && data.getIds.map((id) => {
                return (
                  <Flex key={id} align='center' justify='center' w='full' p='10px' borderBottom='1px' borderColor='orange.500' onClick={() => onClickId(id)}>
                    <Text>ID: {id}</Text>
                  </Flex>
                )
              }
              )}
            </DrawerBody>
            <DrawerFooter>
              <Flex align='center' justify='center' w='full'>
                <Button onClick={() => paginationDown()}>-</Button>
                <Text p='20px'>Page: {pagination}</Text>
                <Button onClick={() => paginationUp()}>+</Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default DrawerExample