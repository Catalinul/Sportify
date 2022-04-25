import React, {useState} from 'react';
import { View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView from 'react-native-maps'; 
import CustomMarker from '../../components/CustomMarker';

import PostCarouselItem from '../../components/PostCarouselItem';

import places from '../../../assets/data/feed';


const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState( );

    const width = useWindowDimensions().width;

    return (
        <View>
                <MapView
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
                        data = {places}
                        renderItem = { ({item}) => <PostCarouselItem post = {item}/>}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        snapToInterval = {width - 60}
                        snapToAlignment = {"center"}
                        decelerationRate = {"fast"}
                        />

                </View>
        </View>
    );
};
 
export default SearchResultsMap;