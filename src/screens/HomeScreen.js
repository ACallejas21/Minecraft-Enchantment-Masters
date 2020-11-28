import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Button, Icon} from "native-base";


const { width, height } = Dimensions.get("window");

const HomeScreen = ({navigation }) => {
    return( 
    <View style={styles.container}>
      <Text>Pantalla de Homesss!</Text>
      <StatusBar style="auto" />
      <Button onPress={() =>navigation.navigate("Tools")} style={styles.searchButton}>
          <Icon name="search" />
        </Button>
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
  searchButton: {
    flex: 1,
    backgroundColor: "#7ae582",
    marginLeft: 10,
    height: 40,
  },
});

export default HomeScreen;
