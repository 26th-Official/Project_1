import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Enter Goals</Text>
      <TextInput placeholder='Type Here....'></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textstyle:{
    paddingRight:10,
    borderBottomWidth:2,
    borderColor:"grey"
  }
});
