import { Flex } from '@chakra-ui/react';

function Error (props) {
    return (
        <Flex>
            <h1>{props.error}</h1>
        </Flex>
    )
}

export default Error;