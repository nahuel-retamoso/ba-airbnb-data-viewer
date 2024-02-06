import { toggleName, toggleHostID, toggleHostName, toggleNeighbourhood, toggleLocation, toggleRoomType, togglePrice, toggleMinimumNights, toggleNumberOfReviews, toggleLastReview, toggleReviewsPerMonth, toggleCalculatedHostListingCount, toggleAvailability365 } from '../../slices/optionSlice';

function ChooseReducer (dispatch, name) {

        switch (name) {
            case 'name':
                 return dispatch(toggleName());
            case 'hostID':
                 return dispatch(toggleHostID());
            case 'hostName':
                 return dispatch(toggleHostName());
            case 'neighbourhood':
                 return dispatch(toggleNeighbourhood());
            case 'location':
                 return dispatch(toggleLocation());
            case 'roomType':
                 return dispatch(toggleRoomType());
            case 'price':
                 return dispatch(togglePrice());
            case 'minimumNights':
                 return dispatch(toggleMinimumNights());
            case 'numberOfReviews':
                 return dispatch(toggleNumberOfReviews());
            case 'lastReview':
                 return dispatch(toggleLastReview());
            case 'reviewsPerMonth':
                 return dispatch(toggleReviewsPerMonth());
            case 'calculatedHostListingCount':
                 return dispatch(toggleCalculatedHostListingCount());
            case 'availability365':
                 return dispatch(toggleAvailability365());
        }
}

export default ChooseReducer;