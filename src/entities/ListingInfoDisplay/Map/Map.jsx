import { Flex, Icon, Spinner, Text } from "@chakra-ui/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { PiMapPinLineDuotone } from 'react-icons/pi';

function Map({latitude, longitude}) {
    return (
        <Flex w='full' h='full' align='center' justify='center'>
           
            {latitude && longitude ? (
                    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ height: 400, width: "100%", zIndex: 94 }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[latitude, longitude]}>
                            <Popup>
                                Ubicacion
                            </Popup>
                        </Marker>
                    </MapContainer>
                ) : (
                    <Flex h='400px' w='full' border='1px' borderColor='blackAlpha.400' justify='center' align='center' bg='orange.100' direction='column'>
                        <Icon h='60px' w='60px' as={PiMapPinLineDuotone} color='orange.500'/>
                        <Text mt='30px' fontSize='xs' fontFamily={'fantasy'} color='orange.400'>Marca "Location" para el mapa.</Text>
                    </Flex>
                )}
        </Flex>
    );
}

export default Map;
