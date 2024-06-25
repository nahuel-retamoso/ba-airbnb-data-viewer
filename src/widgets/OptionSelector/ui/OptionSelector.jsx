import { Checkbox, Flex } from "@chakra-ui/react";
import ChooseReducer from "../../../feature/OptionSelector/ChooseReducer";
import { useDispatch } from 'react-redux';

function OptionSelector() {

    const dispatch = useDispatch();

    const names = {
        name: 'Name',
        hostID: 'Host ID',
        hostName: 'Host Name',
        neighbourhood: 'Neighbourdhood',
        location: 'Location',
        roomType: 'Room Type',
        price: 'Price',
        minimumNights: 'Minimum Nights',
        numberOfReviews: 'Number of Reviews',
        lastReview: 'Last Review',
        reviewsPerMonth: 'Reviews per Month',
        calculatedHostListingCount: 'Calculated host listing count',
        availability365: 'Availability 365'
    }

    return (
        <Flex flexWrap='wrap'>
                {Object.keys(names).map((key) => (
                    <Checkbox key={key} colorScheme="orange" m="10px" size="sm" onChange={() => ChooseReducer(dispatch, key)}>
                            {names[key]}
                    </Checkbox>
                ))}
        </Flex>
    )
}

export default OptionSelector;