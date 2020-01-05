import * as React from 'react';
import { Button, TextInput,Text,View, StyleSheet } from 'react-native';

// You can import from local files

import Menu from './Components/View/Menu';


class Mounting extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>I develop in : {this.props.name}</Text>
      </View>
    );
  }
}

  export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Menu/>
          <Mounting name="React Native"/>
          <TextInput placeholder="Langage de dev"/>
          <Button style={styles.button} title="Changer" onPress={()=>{}}></Button>

      </View>
      //onPress={function(){}}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width:20,
  }
});
