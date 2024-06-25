import { Button, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Drawer, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import Pagination from "../../../feature/IdSelector/Pagination"
import IdList from "../../../feature/IdSelector/IdList"
import { useSelector } from "react-redux"


function IdSelector() {

  const id = useSelector(state => state.id.IDselected);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  useEffect(() => {
    if (id !== '') {
      onClose()
    }
  }, [id])

  return (
    <>
      <Button ref={btnRef} fontFamily={'fantasy'} fontWeight={'light'} colorScheme='orange' onClick={onOpen}>
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
          <DrawerHeader borderBottom='2px' fontFamily={'fantasy'} fontWeight={'light'} borderColor='orange.200' mb='10px'>Selecciona un ID</DrawerHeader>
          <IdList />
          <DrawerFooter>
            <Pagination />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default IdSelector