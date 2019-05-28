import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const renderMarker = (map, maps) => {
    new maps.Marker({
        map: map,
        position: new maps.LatLng(49.677422, 19.183335),
        title: 'Firma Handlowo-Usługowa Wojciech Jurasz'
    });
};

const Map = () => (
    <Segment style={{padding: '0em 0em'}} vertical>
        <Container style={{width: '100%', height: '500px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBT2rAMRvU2FmPG11FL9PsdpT57KZ6-6bk'}}
                defaultCenter={{lat: 49.677422, lng: 19.183335}}
                defaultZoom={16}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({map, maps}) => renderMarker(map, maps)}
            >
            </GoogleMapReact>
        </Container>
    </Segment>
);

export default Map;
