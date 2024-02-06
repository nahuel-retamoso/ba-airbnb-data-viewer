import { Flex, Text } from "@chakra-ui/react";
import IdSelector from "../widgets/IdSelector/ui/IdSelector";
import OptionSelector from "../widgets/OptionSelector/ui/OptionSelector";
import ListingInfoDisplay from "../widgets/ListingInfoDisplay/ui/ListingInfoDisplay";

function Home() {

    return (
      <Flex bg='blackAlpha.100' w='full' h='100vh' align="center" justify="center" direction="column">
        <Flex align="center">
          <Flex w='25%' direction='row'>
            <Text fontSize="xl" fontWeight="bold" m="20px" mx='15%'>Dataset Airbnb de la Ciudad de Buenos Aires</Text>
          </Flex>
          <Flex w='60%'>
            <OptionSelector />
          </Flex>
          <Flex w='10%' align='center' justify='center'>
            <IdSelector />
          </Flex>
        </Flex>
        <Flex w='full' h='75vh' border='1px' align='center' justify='center' bg='orange.50'>
          <ListingInfoDisplay/>
        </Flex>
        <Flex>
          <Text p='30px'>Hecho con React, GraphQL, Apollo, MongoDB y Node</Text>
        </Flex>
      </Flex>
    );
  }

export default Home;