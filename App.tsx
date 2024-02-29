import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

function App(): JSX.Element {

  const [randomBackground, setRandomBackground] = useState("#ffffff")
  const generateColor = () =>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"


    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setRandomBackground(color)
  }
  return (
    <>
      <StatusBar backgroundColor={'pink'} barStyle={'light-content'} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={(generateColor)}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButton:{
    borderRadius: 12,
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionButtonText:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
    textTransform: 'uppercase'
  }
});
