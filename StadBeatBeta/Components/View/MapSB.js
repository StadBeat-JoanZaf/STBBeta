import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import {MapView} from 'react-native-maps';

// import RunInfo from './components/run-info-numeric';
// import RunInfoNumeric from './compo'



 class MapSB extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       region : {
        longitude:49.0533436,
        latitude:2.0561904,
        longitudeDelta:0,
        latitudeDelta:5
       },
       markers : {
        title:"Piscine ravinière",
        description:"petit city sympa assez fréquenté pas encore connecté au service StadBeat",
        latlng: {
          longitude:49.058171,
          latitude:2.0615244
        }
       }
     }
   }
//Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI., RootErrorBoundary
   console.log(this.state);
 render() {
   return(
      <MapView
        style={{flex:1}}
        region = {this.state.region}
        onRegionChange = {this._}
      >
      {this.state.markers.map(marker => (
    <Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
       image={require('./MapAssets/basketMark.png')}
    />
  ))}
      </MapView>
   );//appel de al fonction onRegionChange quand la region change
 }
}

export default MapSB
