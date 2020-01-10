import * as React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

// import RunInfo from './components/run-info-numeric';
// import RunInfoNumeric from './compo'



 class MapSB extends React.Component{
   componentDidMount(){
     console.log("Map has been called");
     //normal call and it works !
     //
   }
 render() {
   return(
     <View style={{flex:1}}>
      <MapView
      style={{flex:1}}
        initialRegion={{
          latitude:-21.331638,
          longitude:55.470513,
          latitudeDelta:0.02,
          longitudeDelta:0.02,
        }}
      />

      </View>


   )
 }
}

export default MapSB
