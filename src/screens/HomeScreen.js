import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ser} from 'react-native';
import {Button, Icon, Picker, Image, Header, Item, Input, Right} from "native-base";


const { width, height } = Dimensions.get("window");

const HomeScreen = ({navigation }) => {
  const [search, setSearch] = useState("");
    return( 
      <View style={{backgroundColor: '#DBDBDB'}}>
        <Header searchBar transparent androidStatusBarColor='#F92626' style={styles.headerStyle}>
          <Item style={styles.itemlogo}>
            <Input placeholder="Search" value={search} onChangeText={setSearch}/>
          </Item>
          <Right style={styles.searchButton}>
              <Button icon transparent onPress={() => handlerSearch()}>
                <Icon><AntDesign name="search1" size={24} color="red" /></Icon>
              </Button>
            </Right>
      </Header>
      <View>

      </View>
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
  
  itemlogo:{
    flex: 1,
    borderRadius: 35,
    paddingLeft: 10,
  },
  
  searchButton:{
    flex: 0.19,
    borderRadius: 15,
    color: 'red',
  },
  headerStyle:{
    backgroundColor: '#DBDBDB',
    height: height / 15,
    borderWidth: 0.23,
    borderColor: "black"
  },
});

export default HomeScreen;
