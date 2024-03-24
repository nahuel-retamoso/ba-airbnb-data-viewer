import { DrawerBody, Flex, Spinner, Text } from '@chakra-ui/react'
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
                    <Flex _hover={{bg: "orange.50"}} key={id} align='center' justify='center' w='full' p='10px' borderBottom='1px' borderColor='orange.500' onClick={() => onClickId(id)}>
                        <Text>ID: {id}</Text>
                    </Flex>
                )
            }
            ) : <Flex direction='column' justify='center' align='center' h='full'><Spinner color='red.500' /> <Text mt='10'>Espera a que el servidor envie los datos. Esto puede tardar unos segundos.</Text></Flex> }
        </DrawerBody>
    )
}

export default IdList