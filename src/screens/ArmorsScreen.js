import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const ArmorsScreen = ({ route, navigation }) => {
    return(
    <View style={styles.container}>
      <Text>Armors Screen!</Text>
      <StatusBar style="auto" />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ArmorsScreen;
