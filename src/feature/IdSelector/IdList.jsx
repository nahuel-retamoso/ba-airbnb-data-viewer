import { Button, DrawerBody, Flex, Spinner, Text } from '@chakra-ui/react'
import { useQuery, gql } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { setID } from '../../slices/idSlice';

const QUERY = gql`
query GetIds($page: Int!) {
  getIds(page: $page)
}
`;


function IdList() {

    const pagination = useSelector(state => state.pagination.pagination);

    const { loading, error, data } = useQuery(QUERY, {
    variables: { page: parseInt(pagination) }
    });

    const dispatch = useDispatch();

    const onClickId = (id) => {
        console.log(id)
        dispatch(setID(id))
    }

    return (
        <DrawerBody>
            {data? data.getIds.map((id) => {
                return (
                    <Button _hover={{bg: "orange.50", shadow: 'base'}} key={id} align='center' justify='center' w='full' h='12' rounded={'none'} bgColor={'whiteAlpha.900'} onClick={() => onClickId(id)}>
                        <Text fontFamily={'fantasy'} fontSize={'md'} fontWeight={'light'}>ID: {id}</Text>
                    </Button>
                )
            }
            ) : <Flex direction='column' justify='center' align='center' h='full'><Spinner color='red.500' /> <Text fontFamily={'fantasy'} fontWeight={'light'} mt='10'>Puede tardar unos segundos.</Text></Flex> }
        </DrawerBody>
    )
}

export default IdList