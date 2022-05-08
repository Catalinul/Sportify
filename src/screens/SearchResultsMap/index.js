import React, {useState, useEffect, useRef} from 'react';
import { View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView from 'react-native-maps'; 
import CustomMarker from '../../components/CustomMarker';

import PostCarouselItem from '../../components/PostCarouselItem';

import places from '../../../assets/data/feed';


const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState( );

    const flatlist = useRef();
    const map = useRef();

    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    //sincronizam selectarea locatiilor pe harta cu carouselul de locatii (reverse)
    const onViewChanged = useRef( ({viewableItems }) => {
        if (viewableItems.length > 0 ) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
            
        }
     })


    const width = useWindowDimensions().width;


    //sincronizam selectarea locatiilor pe harta cu carouselul de locatii
    useEffect( () => {

        if ( !selectedPlaceId || !flatlist) {
            return;
        }

        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        //partea de mai jos e mai zoom in automat pe harta
        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);

    },  [selectedPlaceId])

    return (
        <View>
                <MapView
                ref = {map}
                style = {{ width: '100%', height: '100%'}}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                    }}
                >
                    {/* o sa iterez prin toate locatiile hardcodate in feed si o sa le afisez folosind functia map */}
                    {places.map(place => ( 
                        <CustomMarker 
                        coordinate = {place.coordinate} 
                        price  = {place.newPrice}
                        isSelected = {place.id === selectedPlaceId}
                        onPress = { () => setSelectedPlaceId(place.id) }
                        />)
                    )}

                </MapView>

                {/* carousel cu postarile */}
                <View style = {{position: 'absolute', bottom: 40}}>

                        <FlatList
                        ref = {flatlist }
                        data = {places}
                        renderItem = { ({item}) => <PostCarouselItem post = {item}/>}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        snapToInterval = {width - 60}
                        snapToAlignment = {"center"}
                        decelerationRate = {"fast"}
                        viewabilityConfig = { viewConfig.current }
                        onViewableItemsChanged = { onViewChanged.current }
                        />

                </View>
        </View>
    );
};
 
export default SearchResultsMap;