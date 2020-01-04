import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Menu extends React.Component{
    render(){
    return (
      <View style={styles.menuView}>
        <View style={styles.menu}>
          <Image style={styles.controls} source={require('../../assets/header/arrow.png')}/>
          <Image style={styles.controls} source={require('../../assets/header/menu_dir.png')}/>
       <Image style={styles.controls} source={require('../../assets/header/profile.png')}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuView : {
    flex:1,
   // backgroundColor:'cyan',
  },
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
