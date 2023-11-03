import { Flex, Icon, Spinner } from "@chakra-ui/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { PiMapPinLineDuotone } from 'react-icons/pi';

function Map(props) {
    return (
        <Flex w='500px' h='full' align='center' justify='center'>
            {props.loading && props.mapSelected ? (
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            ) : (
                props.latitude && props.longitude ? (
                    <MapContainer center={[props.latitude, props.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: 400, width: "100%", zIndex: 94 }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[props.latitude, props.longitude]}>
                            <Popup>
                                Squad !!!
                            </Popup>
                        </Marker>
                    </MapContainer>
                ) : (
                    <Flex h='full' w='full' border='1px' borderColor='blackAlpha.400' justify='center' align='center' bg='orange.100'>
                        <Icon h='60px' w='60px' as={PiMapPinLineDuotone} />
                    </Flex>
                )
            )}
        </Flex>
    );
}

export default Map;
