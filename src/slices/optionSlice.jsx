import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
    name: "options",
    initialState: {
        name: false,
        hostID: false,
        hostName: false,
        neighbourhood: false,
        location: false,
        roomType: false,
        price: false,
        minimumNights: false,
        numberOfReviews: false,
        lastReview: false,
        reviewsPerMonth: false,
        calculatedHostListingCount: false,
        availability365: false,
    },
    reducers: {
        toggleName: (state) => {
            state.name = !state.name;
        },
        toggleHostID: (state) => {
            state.hostID = !state.hostID;
        },
        toggleHostName: (state) => {
            state.hostName = !state.hostName;
        },
        toggleNeighbourhood: (state) => {
            state.neighbourhood = !state.neighbourhood;
        },
        toggleLocation: (state) => {
            state.location = !state.location;
        },
        toggleRoomType: (state) => {
            state.roomType = !state.roomType;
        },
        togglePrice: (state) => {
            state.price = !state.price;
        },
        toggleMinimumNights: (state) => {
            state.minimumNights = !state.minimumNights;
        },
        toggleNumberOfReviews: (state) => {
            state.numberOfReviews = !state.numberOfReviews;
        },
        toggleLastReview: (state) => {
            state.lastReview = !state.lastReview;
        },
        toggleReviewsPerMonth: (state) => {
            state.reviewsPerMonth = !state.reviewsPerMonth;
        },
        toggleCalculatedHostListingCount: (state) => {
            state.calculatedHostListingCount = !state.calculatedHostListingCount;
        },
        toggleAvailability365: (state) => {
            state.availability365 = !state.availability365;
        },
    },
});

export const {
    toggleName,
    toggleHostID,
    toggleHostName,
    toggleNeighbourhood,
    toggleLocation,
    toggleRoomType,
    togglePrice,
    toggleMinimumNights,
    toggleNumberOfReviews,
    toggleLastReview,
    toggleReviewsPerMonth,
    toggleCalculatedHostListingCount,
    toggleAvailability365,
} = optionSlice.actions;

export default optionSlice.reducer;