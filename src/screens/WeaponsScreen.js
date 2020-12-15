import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, Image} from 'react-native';
import {Button, Icon, Picker, Header, Item, Input, Right, List, ListItem, Card, Content} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ObjectsContext } from "../Context/objectsContex";


const { width, height } = Dimensions.get("window");

const WeaponsScreen = ({route, navigation }) => {
  const {objectsType} = route.params;
  const objectsContext = useContext(ObjectsContext);
  const {objectType, getObjectype, setObjectType} = objectsContext;

  const getObjects = () => {
    getObjectype(objectsType, setObjectType);
    console.log(objectType);
  }
  useEffect(() => {
    getObjects();
    });

    
  


  /* Parametros para las consultas*/
  

  const DATA =[
    // {
    //   id: 1,
    //   Nombreobjeto: "Shadow",
    //   Objeto: "Espada",
    //   Material: "Diamante",
    //   Tipo: "Arma",
    //   Encantamiento: "Filo IV | Empuje | Fuego",

    // },

    // {
    //   id: 2,
    //   Nombreobjeto: "Luis",
    //   Objeto: "Pico",
    //   Material: "Hierro",
    //   Tipo: "Herramienta",
    //   Encantamiento: "Fortuna III | Toque de seda",

    // },

    // {
    //   id: 2,
    //   Nombreobjeto: "Critian",
    //   Objeto: "Pechera",
    //   Material: "Hierro",
    //   Tipo: "Armadura",
    //   Encantamiento: "Proteccion C | Irrompibilidad VIII | Espinas VII",

    // },
  ]

  const [search, setSearch] = useState("");
    return( 
      <View style={{backgroundColor: '#DBDBDB'}}>
        <Header searchBar transparent androidStatusBarColor='#F92626' style={styles.headerStyle}>
          <ImageBackground source={require('../imagenes/banner_madera.png')} style={styles.image}>
          <Item style={styles.itemlogo}>
            <Input placeholder="Buscar" value={search} onChangeText={setSearch}/>
          </Item>
          <Right style={styles.searchButton}>
              <Button transparent>
                <Image source={require('../imagenes/boton_piedra.png')} style={styles.btn}></Image>
              </Button>
            </Right>
          </ImageBackground>
      </Header>
      <View style={styles.mainContainer}>
        <View style={styles.floatContainer}>

          <FlatList 
            style={styles.principalList}
            data={DATA}
            keyExtractor = {item => item.id.toString()}
            ListEmptyComponent={
              <View style={styles.errorContainer}>
                <Image source={require('../imagenes/Gast.png')} style={styles.GastImage}></Image>
                <Text style={styles.welcomeText}>No tienes ninguna {objectType} agregada aun!</Text>
              </View>
            }
            renderItem={({item})  => {
              // return(
              //   //<Text>{item.nombre}</Text>
              // )
            }}
            />
            

        </View>
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

  itemlogo:{
    flex: 1,
    paddingLeft: 10,
    borderRadius: 14,
    marginLeft: 5,
  },
  
  searchButton:{
    flex: 0.19,
    color: 'red',
    justifyContent: "center",
    padding: 5,
  },

  headerStyle:{
    height: height / 10,
    borderColor: "black",
  },

  image:{
    width:width,
    flexDirection: "row",
    resizeMode: "contain",
    marginTop: (height/27) * -1,
  },

  btn:{
    width: 50, 
    resizeMode: "contain",
    borderColor: "black",
    borderWidth: 2,
    height: 30,
  },

  mainContainer:{
    backgroundColor: "#707070",
    height: height/1.26,
    width: width,
    paddingTop: height/10,
    padding: 10,
    alignItems: "center",
  },

  floatContainer:{
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: height/1.5,
    width: width/1.15,
    borderRadius:15,
    alignItems: "center"
  },

  welcomeContainer:{
    height: height/10,
    width: width/1.8,
    backgroundColor: "#388233",
    marginTop: height /25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  errorContainer:{
    height: height/10,
    width: width/1.8,
    backgroundColor: "#B71D1D",
    marginTop: height/3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  GastImage:{
    height: height/6,
    width: width/2,
    resizeMode: "contain",
    borderWidth: 3,
    borderColor: "black",
    marginTop: (height/6) * -1,
  },

  creeperImage:{
    height: height/6,
    width: width/2,
    resizeMode: "contain",
    borderWidth: 3,
    borderColor: "black",
    marginTop: (height/6) * -1,
  },

  welcomeText:{
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "black",
    marginTop: 5,
  },

  optionImage:{
    width: width/1.3,
    height: height/7,
    resizeMode: "contain",
    borderWidth: 2,
    flexDirection: "row",
  },

  card:{
    borderColor: "black",
    borderWidth: 3,

  },

  item:{
    backgroundColor: "blue",
    borderColor: "black",
  },

  principalList:{
    borderEndColor: "black",
    borderEndWidth: 2,
    padding: 15,
  },

  marco:{
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },

  madera:{
    borderColor: "black",
    borderWidth: 2,
    flex: 2,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  objeto:{
    width: width/7,
    height: height/13,
    resizeMode: "center",
    borderWidth: 2,
    borderColor: "black",
  },

  tittle:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },

});

export default WeaponsScreen;
