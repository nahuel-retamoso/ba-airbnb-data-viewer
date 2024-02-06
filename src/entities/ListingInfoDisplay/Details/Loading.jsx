import { Flex, Spinner } from "@chakra-ui/react";

function Loading () {
    return (
        <Flex justify='center' align='center'>
            <Spinner/>
        </Flex>
    )
}

export default Loading;