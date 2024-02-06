import { Card } from "@chakra-ui/react";
import ConditionalDisplay from "../../../feature/ListingInfoDisplay/ConditionalDisplay";

const ListingInfoDisplay = () => {


  return (
    <Card h="90%" w="80%" direction="row" m="40px" p="30px" bg="whiteAlpha.900" align="center" justify="center">
      <ConditionalDisplay />
    </Card>
  );
};

export default ListingInfoDisplay;
