import { Card, Heading } from "@chakra-ui/react"
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from "react";
import DataDisplay from "./DataDisplay";



function Data(props) {

  const GET_DATA_BY_ID = gql`
  query GetPublications(
    $id: String!
    $name: Boolean!
    $hostID: Boolean!
    $hostName: Boolean!
    $neighbourhood: Boolean!
    $latitude: Boolean!
    $longitude: Boolean!
    $roomType: Boolean!
    $price: Boolean!
    $minimumNights: Boolean!
    $numberOfReviews: Boolean!
    $lastReview: Boolean!
    $reviewsPerMonth: Boolean!
    $calculatedHostListingCount: Boolean!
    $availability365: Boolean!
  ) {
    publication(id: $id) {
      name @include(if: $name)
      host_id @include(if: $hostID)
      host_name  @include(if: $hostName)
      neighbourhood @include(if: $neighbourhood)
      latitude @include(if: $latitude)
      longitude @include(if: $longitude)
      room_type @include(if: $roomType)
      price @include(if: $price)
      minimum_nights @include(if: $minimumNights)
      number_of_reviews @include(if: $numberOfReviews)
      last_review @include(if: $lastReview)
      reviews_per_month @include(if: $reviewsPerMonth)
      calculated_host_listings_count @include(if: $calculatedHostListingCount)
      availability_365 @include(if: $availability365)
    }
  }
  `;

  const [getData, { loading, error, data}] = useLazyQuery(GET_DATA_BY_ID);


  useEffect(() => {
    if (props.ID) {
      getData({
        variables: { id: props.ID, name: props.name, hostID: props.hostID, hostName: props.hostName, neighbourhood: props.neighbourhood, latitude: props.location, longitude: props.location, roomType: props.roomType, price: props.price, minimumNights: props.minimumNights, numberOfReviews: props.numberOfReviews, lastReview: props.lastReview, reviewsPerMonth: props.reviewsPerMonth, calculatedHostListingCount: props.calculatedHostListingCount, availability365: props.availability365 }
      })
    }
    console.log(data)
  }, [props]);

  if (error) return (
    <Card h='80%' w='80%' direction='row' m='40px' p="30px" bg='whiteAlpha.600' align='center' justify='center'>
      <Heading>Error, please try again</Heading>
    </Card>
  )

  if (props.ID) {
    return (
      <DataDisplay name={data.publication.name}
      hostID={data.publication.host_id}
      hostName={data.publication.host_name}
      neighbourhood={data.publication.neighbourhood}
      location={data.publication.location}
      roomType={data.publication.room_type}
      price={data.publication.price}
      minimumNights={data.publication.minimum_nights}
      numberOfReviews={data.publication.number_of_reviews}
      lastReview={data.publication.last_review}
      reviewsPerMonth={data.publication.reviews_per_month}
      calculatedHostListingCount={data.publication.calculated_host_listings_count}
      availability365={data.publication.availability_365}
      latitude={data.publication.latitude}
      longitude={data.publication.longitude}
      loading={loading}
      />
    )
  }
  if(props.ID == '') {
    return (
      <Card h='80%' w='80%' direction='row' m='40px' p="30px" bg='whiteAlpha.600' align='center' justify='center'>
        <Heading fontSize='2xl'>Elegi un ID y selecciona los datos que deseas obtener</Heading>
      </Card>
    )
  }
}

export default Data;