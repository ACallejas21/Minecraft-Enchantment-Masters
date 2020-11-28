import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window");

const ToolsScreen = ({ route, navigation }) => {
    return(
    <View style={styles.container}>
      <Text>Tools Screen!</Text>
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

export default ToolsScreen;
