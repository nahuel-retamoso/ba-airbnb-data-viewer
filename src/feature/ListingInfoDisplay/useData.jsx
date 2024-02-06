import { useSelector } from 'react-redux';
import {GET_DATA_BY_ID} from '../../graphql/DataQuery';
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

function useData () {

    const options = useSelector(state => state.options);
    const id = useSelector(state => state.id.IDselected);

    const [getData, { loading, error, data }] = useLazyQuery(GET_DATA_BY_ID);

    useEffect(() => {
        if (id) {
            getData({
                variables: { id: id, name: options.name, hostID: options.hostID, hostName: options.hostName, neighbourhood: options.neighbourhood, latitude: options.location, longitude: options.location, roomType: options.roomType, price: options.price, minimumNights: options.minimumNights, numberOfReviews: options.numberOfReviews, lastReview: options.lastReview, reviewsPerMonth: options.reviewsPerMonth, calculatedHostListingCount: options.calculatedHostListingCount, availability365: options.availability365 }
            })
        }

        if(id) {
            console.log(id)
            if(data) {
            console.log(data)
            }
            if(error) {
                console.log(error)
            }
        }
    }, [options, id]);
 
    return ({loading, error, data})
}

export default useData;