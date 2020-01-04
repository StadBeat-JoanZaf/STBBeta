import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// You can import from local files
import Menu from './components/View/Menu';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Menu/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
