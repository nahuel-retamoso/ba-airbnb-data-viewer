import { Flex, Progress, Text } from "@chakra-ui/react";
import Map from "../Map/Map"
import { useSelector } from "react-redux";

function Details ({data, loading, error}) {

    const id = useSelector(state => state.id.IDselected);

    return(
        <Flex w='full' h='full'>
            <Flex py='30px' direction='column' pl='40px' justify='center' w='50%' h='full' color='blackAlpha.800'>
                <Flex fontSize='md' direction='column' w='full' h='90%'>
                    <Text color='orange.400'>ID seleccionado: {id}</Text>
                    <Text mb='3px' textDecoration='underline' color='blackAlpha.700'>Name: {data?.publication.name}</Text>
                    <Text mb='3px'>Host ID: {data?.publication.host_id}</Text>
                    <Text mb='3px'>Host Name: {data?.publication.host_name}</Text>
                    <Text mb='3px'>Neighbourhood: {data?.publication.neighbourhood}</Text>
                    <Text mb='3px'>Room Type: {data?.publication.room_type}</Text>
                    <Text mb='3px'>Price: ${data?.publication.price}</Text>
                    <Text mb='3px'>Minimum Nights: {data?.publication.minimum_nights}</Text>
                    <Text mb='3px'>Number of Reviews: {data?.publication.number_of_reviews}</Text>
                    <Text mb='3px'>Last Review: {data?.publication.last_review}</Text>
                    <Text mb='3px'>Reviews per Month: {data?.publication.reviews_per_month}</Text>
                    <Text mb='3px'>Calculated Host Listing Count: {data?.publication.calculated_host_listings_count}</Text>
                    <Text mb='3px'>Availability 365: {data?.publication.availability_365}</Text>
                </Flex>
                <Flex direction='column' h='10%' w='100%'>
                    {loading ? <Progress size='xs' isIndeterminate /> : (data == undefined || Object.keys(data?.publication).length == 1 ? <Text color='red.200' mt='20px'>Selecciona algun dato que quieras del ID seleccionado</Text> : null )}
                    {error ? <Text color='red.200'>{error}</Text> : null}
                </Flex>
            </Flex>
            <Flex w='50%' justify="center" align="center">
                <Map latitude={data?.publication.latitude} longitude={data?.publication.longitude}/>
            </Flex>
        </Flex>
    )
}

export default Details;