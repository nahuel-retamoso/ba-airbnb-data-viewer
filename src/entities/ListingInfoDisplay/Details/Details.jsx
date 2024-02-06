import { Flex, Text } from "@chakra-ui/react";
import Map from "../Map/Map"

function Details ({data}) {
    return(
        <Flex w='full' h='full'>
            <Flex direction='column' pl='40px' justify='center' w='50%' h='full'>
                <Text fontSize='lg' mb='5px'>{data.publication.name}</Text>
                <Text fontSize='md' mb='5px'>Host ID: {data.publication.host_id}</Text>
                <Text fontSize='md' mb='5px'>Host Name: {data.publication.host_name}</Text>
                <Text fontSize='md' mb='5px'>Neighbourhood: {data.publication.neighbourhood}</Text>
                <Text fontSize='md' mb='5px'>Room Type: {data.publication.room_type}</Text>
                <Text fontSize='md' mb='5px'>Price: {data.publication.price}</Text>
                <Text fontSize='md' mb='5px'>Minimum Nights: {data.publication.minimum_nights}</Text>
                <Text fontSize='md' mb='5px'>Number of Reviews: {data.publication.number_of_reviews}</Text>
                <Text fontSize='md' mb='5px'>Last Review: {data.publication.last_review}</Text>
                <Text fontSize='md' mb='5px'>Reviews per Month: {data.publication.reviews_per_month}</Text>
                <Text fontSize='md' mb='5px'>Calculated Host Listing Count: {data.publication.calculated_host_listings_count}</Text>
                <Text fontSize='md' mb='5px'>Availability 365: {data.publication.availability_365}</Text>
            </Flex>
            <Flex w='50%' justify="center" align="center">
                <Map latitude={data.publication.latitude} longitude={data.publication.longitude}/>
            </Flex>
        </Flex>
    )
}

export default Details;