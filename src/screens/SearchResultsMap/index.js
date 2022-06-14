import React, {useState, useEffect, useRef} from 'react';
import { View, Text, FlatList, useWindowDimensions} from 'react-native';

import MapView from 'react-native-maps'; 
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';


const SearchResultsMap = (props) => {

    const { posts } = props;

    //console.log("posts din screens/searchresultsmap", posts);

    const [selectedPlaceId, setSelectedPlaceId] = useState( );

    const flatlist = useRef();
    const map = useRef();

    const viewConfig = useRef({
        itemVisiblePercentThreshold: 70,
        minimumViewTime: 250
    })

    //sincronizam selectarea locatiilor pe harta cu carouselul de locatii (reverse)
    const onViewChanged = useRef( ({viewableItems }) => {
        if (viewableItems.length > 0 ) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
     })


    const width = useWindowDimensions().width;

    // l-am comentat pt ca am mutat asta in searchtabresultstabnavigator
    // useEffect( () => {
    //     const fetchPosts = async () => {
    //         //folosim try catch aici pentru ca o sa am niste network calls si se pot intampla multe lucruri proaste cu netul user ului
    //         try {
    //             const postsResult = await API.graphql(
    //                 graphqlOperation(listPosts , {
    //                     filter: {
    //                         maxGuests: {
    //                             ge: guests
    //                         }
    //                     }
    //                     })
    //             )
                
    //             setPosts(postsResult.data.listPosts.items);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }

    //     fetchPosts();
    // }, )



    //sincronizam selectarea locatiilor pe harta cu carouselul de locatii
    useEffect( () => {

        if ( !selectedPlaceId || !flatlist) {
            return;
        }

        const index = posts.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        //partea de mai jos e mai zoom in automat pe harta
        const selectedPlace = posts[index];
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
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
                    {posts.map(place => ( 
                        <CustomMarker 
                        coordinate = {{latitude: place.latitude, longitude: place.longitude}} 
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
                        data = {posts}
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