import { Card, Flex, Heading, Progress, Stack, Text } from "@chakra-ui/react";
import Map from "./Map";

const Display = (props) => {
  console.log(props);
  return (
    <Card h="90%" w="80%" direction="row" m="40px" p="30px" bg="whiteAlpha.900" align="center" justify="center">
      <Flex w="55%" direction="column" mr="50px">
        <Heading mb="10px" fontSize="2xl">
          {props?.name}
        </Heading>
        <Stack color="blackAlpha.500" mb="10px" direction="row" align="center" spacing="20px">
          <Text fontSize="lg">
            Host Name: <Text as="span" color="blackAlpha.700">
              {props?.hostName}
            </Text>
          </Text>
          <Text fontSize="lg">
            Host ID: <Text as="span" color="blackAlpha.700">
              {props?.hostID}
            </Text>
          </Text>
        </Stack>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Neighbourhood: <Text as="span" color="blackAlpha.700">{props?.neighbourhood}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Room Type: <Text as="span" color="blackAlpha.700">{props?.roomType}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Price: <Text as="span" color="blackAlpha.700">${props?.price}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Minimum Nights: <Text as="span" color="blackAlpha.700">{props?.minimumNights}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Number of Reviews: <Text as="span" color="blackAlpha.700">{props?.numberOfReviews}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Last Review: <Text as="span" color="blackAlpha.700">{props?.lastReview}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Reviews per Month: <Text as="span" color="blackAlpha.700">{props?.reviewsPerMonth}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Calculated Host Listing Count: <Text as="span" color="blackAlpha.700">{props?.calculatedHostListingCount}</Text>
        </Text>
        <Text color="blackAlpha.500" mb="10px" fontSize="lg">
          Availability 365: <Text as="span" color="blackAlpha.700">{props?.availability365} days</Text>
        </Text>
        <Progress mb="10px" value={80} />
      </Flex>
      <Map mapSelected={props.location} loading={props.loading} latitude={props.latitude} longitude={props.longitude} />
    </Card>
  );
};

export default Display;
