import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 class Menu extends React.Component{
   componentDidMount(){
     console.log("Menu should be displayed");
   }
    render(){
    return (
      <View style={styles.menu}>
          <Image style={styles.controls} source={require('./header/arrow.png')}/>
          <Image style={styles.controls} source={require('./header/menu_dir.png')}/>
       <Image style={styles.controls} source={require('./header/profile.png')}/>
      </View>
    );
  }
}
// problème chemin relatif
const styles = StyleSheet.create({
  menu : {
    padding:30,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  controls : {
    height:20,
    width:20,
  },
});

export default Menu
//could be the best pratices in RN 0.60
