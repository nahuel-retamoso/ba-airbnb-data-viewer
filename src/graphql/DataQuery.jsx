import { gql } from '@apollo/client';

export const GET_DATA_BY_ID = gql`
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