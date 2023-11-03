import React, { useEffect, useState } from 'react';
import { Checkbox, Flex, Stack, Text } from "@chakra-ui/react";
import DrawerExample from "./Drawer";
import Data from "./Data";

function App() {
  const [name, setName] = useState(false);
  const [hostID, setHostID] = useState(false);
  const [hostName, setHostName] = useState(false);
  const [neighbourhood, setNeighbourhood] = useState(false);
  const [location, setLocation] = useState(false);
  const [roomType, setRoomType] = useState(false);
  const [price, setPrice] = useState(false);
  const [minumumNights, setMinumumNights] = useState(false);
  const [numberOfReviews, setNumberOfReviews] = useState(false);
  const [lastReview, setLastReview] = useState(false);
  const [reviewsPerMonth, setReviewsPerMonth] = useState(false);
  const [calculatedHostListingCount, setCalculatedHostListingCount] = useState(false);
  const [availability365, setAvailability365] = useState(false);
  const [IDselected, setIDselected] = useState('');

  useEffect(() => {
    console.log(IDselected)
  }
  , [IDselected]);

  return (
    <Flex bg='blackAlpha.100' w='full' h='100vh' align="center" justify="center" direction="column">
      <Flex direction='column' align='center' h='25vh'>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" m="20px">Dataset Airbnb de la Ciudad de Buenos Aires</Text>
        <DrawerExample setID={setIDselected} />
      </Flex>
      <Stack direction="row" p="5px" spacing='30px'>
        <Checkbox colorScheme='orange' isChecked={name} onChange={() => setName(!name)}>Name</Checkbox>
        <Checkbox colorScheme='orange' isChecked={hostID} onChange={() => setHostID(!hostID)}>Host ID</Checkbox>
        <Checkbox colorScheme='orange' isChecked={hostName} onChange={() => setHostName(!hostName)}>Host Name</Checkbox>
        <Checkbox colorScheme='orange' isChecked={neighbourhood} onChange={() => setNeighbourhood(!neighbourhood)}>Neighbourdhood</Checkbox>
        <Checkbox colorScheme='orange' isChecked={location} onChange={() => setLocation(!location)}>Location</Checkbox>
        <Checkbox colorScheme='orange' isChecked={roomType} onChange={() => setRoomType(!roomType)}>Room Type</Checkbox>
        <Checkbox colorScheme='orange' isChecked={price} onChange={() => setPrice(!price)}>Price</Checkbox>
        <Checkbox colorScheme='orange' isChecked={minumumNights} onChange={() => setMinumumNights(!minumumNights)}>Minumum Nights</Checkbox>
        <Checkbox colorScheme='orange' isChecked={numberOfReviews} onChange={() => setNumberOfReviews(!numberOfReviews)}>Number of Reviews</Checkbox>
      </Stack>
      <Stack direction="row" p="5px" spacing='30px'>
        <Checkbox colorScheme='orange' isChecked={lastReview} onChange={() => setLastReview(!lastReview)}>Last Review</Checkbox>
        <Checkbox colorScheme='orange' isChecked={reviewsPerMonth} onChange={() => setReviewsPerMonth(!reviewsPerMonth)}>Reviews per Month</Checkbox>
        <Checkbox colorScheme='orange' isChecked={calculatedHostListingCount} onChange={() => setCalculatedHostListingCount(!calculatedHostListingCount)}>Calculated host listing count</Checkbox>
        <Checkbox colorScheme='orange' isChecked={availability365} onChange={() => setAvailability365(!availability365)}>Availability 365</Checkbox>
      </Stack>
      </Flex>
      <Flex w='full' h='75vh' border='1px' align='center' justify='center' bg='orange.50'>
        <Data
          ID={IDselected}
          name={name}
          hostID={hostID}
          hostName={hostName}
          neighbourhood={neighbourhood}
          location={location}
          roomType={roomType}
          price={price}
          minimumNights={minumumNights}
          numberOfReviews={numberOfReviews}
          lastReview={lastReview}
          reviewsPerMonth={reviewsPerMonth}
          calculatedHostListingCount={calculatedHostListingCount}
          availability365={availability365}
        />
      </Flex>
      <Flex>
        <Text p='30px'>Hecho con React, GraphQL, Apollo, MongoDB y Node</Text>
      </Flex>
    </Flex>
  );
}

export default App;
