import { Flex, Text } from "@chakra-ui/react";
import IdSelector from "../widgets/IdSelector/ui/IdSelector";
import OptionSelector from "../widgets/OptionSelector/ui/OptionSelector";
import ListingInfoDisplay from "../widgets/ListingInfoDisplay/ui/ListingInfoDisplay";

function Home() {

    return (
      <Flex bg='gray.100' h='100vh' align="center" justify="center" direction="column">
        <Flex align="center">
          <Flex w='25%' direction='row'>
            <Text fontSize="xl" fontWeight="medium" m="20px" mx='15%'>Dataset Airbnb de la Ciudad de Buenos Aires</Text>
          </Flex>
          <Flex w='60%'>
            <OptionSelector />
          </Flex>
          <Flex w='10%' align='center' justify='center'>
            <IdSelector />
          </Flex>
        </Flex>
        <Flex w='full' h='75vh' align='center' justify='center' bg='gray.100' p='10'>
          <ListingInfoDisplay/>
        </Flex>
        <Flex>
          <Text fontSize={'sm'} fontFamily={'fantasy'} textColor={'gray.500'} fontWeight={'light'}>React - GraphQL - Apollo - MongoDB - Node.js</Text>
        </Flex>
      </Flex>
    );
  }

export default Home;