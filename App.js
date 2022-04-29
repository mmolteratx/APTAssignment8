import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const Pizza = (count) => {
    let ret = "";
    for(let i = 0; i < count; i++) {
      ret += "🍕";
    }
    return ret;
  }

  return (
    <View style={styles.container}>
      <Text>Do you like pizza?</Text>
      <Text style={{padding: 10, fontSize: 42}}>{Pizza(count)}</Text>
      <View style={{flexDirection: "row"}}>
        <Button onPress={() => setCount(count + 1)} title="Moar!"></Button>
        <View style={{width: 20}}/>
        <Button onPress={() => setCount(0)} title="I'm full..."></Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;