import { Card } from "@chakra-ui/react";
import ConditionalDisplay from "../../../feature/ListingInfoDisplay/ConditionalDisplay";

const ListingInfoDisplay = () => {
  return (
    <Card direction="row" p="40px" w='full' h='full' bg='gray.50' align="center" justify="center">
      <ConditionalDisplay />
    </Card>
  );
};

export default ListingInfoDisplay;
