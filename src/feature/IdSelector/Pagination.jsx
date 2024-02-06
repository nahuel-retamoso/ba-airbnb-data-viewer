import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { paginationDown, paginationUp } from "../../slices/PaginationSlice";

function Pagination() {

    const dispatch = useDispatch();
    const page = useSelector(state => state.pagination.pagination);

  return (
    <Flex align='center' justify='center' w='full'>
      <Flex align='center' justify='center' bg='orange.100' borderRadius='5' overflow='hidden' >
          <Button borderRadius='0' bg='orange.100' _hover={{bg: "orange.200"}} onClick={() => dispatch(paginationDown())}>-</Button>
          <Text fontWeight='extrabold' px='10'>{page}</Text>
          <Button _hover={{bg: "orange.200"}} borderRadius='0' bg='orange.100' onClick={() => dispatch(paginationUp())}>+</Button>
      </Flex>
    </Flex>
  );
}

export default Pagination;