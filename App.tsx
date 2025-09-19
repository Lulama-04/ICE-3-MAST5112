import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
 
export default function App() {
  const [animal, setColor] = useState('dog'); // default value
 
  return (
<View style={styles.container}>
<Text style={styles.title}>Select Your Favorite Animal:</Text>
 
      <Picker              //use this to make a drop box 
        selectedValue={animal}
        onValueChange={(itemValue) => setColor(itemValue)}
        style={styles.picker}
        >
          <Picker.Item label="dog" value="dog" />
          <Picker.Item label="Dolphin" value="Dolphin" />
          <Picker.Item label="Cheetah" value="Cheetah" />
          <Picker.Item label="Eagle" value="Eagle" />
          <Picker.Item label="Elephant" value="Elephant" />
          </Picker>
          
          <Text style={styles.result}>Your Favourite animal is a: {animal}</Text>
        </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  picker: { height: 50, width: 200 },
  result: { marginTop: 20, fontSize: 18, color: 'green' },
});

