import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
<<<<<<< HEAD
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, Image} from 'react-native';
import {Button, Icon, Picker, Header, Item, Input, Right, List, ListItem, Card, Content} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ObjectsContext } from "../Context/objectsContex";
=======
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, Image} from 'react-native';
import {Button, Icon, Picker, Header, Item, Input, Right, List, ListItem, Card, Content} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

>>>>>>> c0edadc7e300b22d397e6d63df6a41d08390a1f3


const { width, height } = Dimensions.get("window");

const WeaponsScreen = ({route, navigation }) => {
  const {objectsType} = route.params;
  const objectsContext = useContext(ObjectsContext);
  const {objects, refreshObjects} = objectsContext;

  console.log(objects)
  /* Parametros para las consultas*/
<<<<<<< HEAD
  

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
=======
  const {objectType} = route.params;
  const [path, setpath] = useState("src://imagenes/Espada_Diamante.png");

  const DATA =[
    {
      id: 1,
      Nombreobjeto: "Shadow",
      Objeto: "Espada",
      Material: "Diamante",
      Tipo: "Arma",
      Encantamiento: "Filo IV",

    },

    {
      id: 2,
      Nombreobjeto: "Luis",
      Objeto: "Pico",
      Material: "Hierro",
      Tipo: "Herramienta",
      Encantamiento: "Fortuna III",

    },

    {
      id: 3,
      Nombreobjeto: "Critian",
      Objeto: "Pechera",
      Material: "Hierro",
      Tipo: "Armadura",
      Encantamiento: "Proteccion C",

    },
  ];
>>>>>>> c0edadc7e300b22d397e6d63df6a41d08390a1f3

  const [search, setSearch] = useState("");

  let [fontsLoaded] = useFonts({
    Minecraft: require("../fonts/F77MinecraftRegular-0VYv.ttf")
  });

  if (!fontsLoaded) {
    return(
      <View style={{flex: 1, justifyContent: "center", backgroundColor:"#DBDBDB", alignItems: "center"}}>
        <Text style={{ fontWeight: "bold", color: "#FFFFFF", fontSize: 48,}}>
          Espere un momento
        </Text>
      </View>
    );
  };

    return( 
      <View style={{backgroundColor: '#DBDBDB'}}>
        <Header searchBar transparent androidStatusBarColor='#F92626' style={styles.headerStyle}>
          <ImageBackground source={require('../imagenes/banner_madera.png')} style={styles.image}>
          </ImageBackground>
      </Header>
<<<<<<< HEAD
      <View >
        <View >

=======
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.addItem} onPress={() => {navigation.navigate("AddItem")}}>
          <View>
            <Text style={styles.addTittle}>Agregar objeto</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.floatContainer}>
>>>>>>> c0edadc7e300b22d397e6d63df6a41d08390a1f3
          <FlatList 
            style={styles.principalList}
            data={objects}
            keyExtractor = {item => item.id.toString()}
            ListEmptyComponent={
              <View style={styles.errorContainer}>
                <Image source={require('../imagenes/Gast.png')} style={styles.GastImage}></Image>
                <Text style={styles.welcomeText}>No tienes ninguna {objectsType} agregada aun!</Text>
              </View>
            }
<<<<<<< HEAD
            renderItem={({item})  => {
              return(
                <View>
                  <Text>{item.NombreObjeto}</Text>
                  <Text>{item.Objeto}</Text>
                  <Text>{item.Tipo}</Text>
                  <Text>{item.Material}</Text>
                  <Text>{item.Encatamiento}</Text>
=======
            renderItem={({item}) => {
              
              return(
                <View >
                  <Card transparent style={styles.card}>
                    <ImageBackground source={require('../imagenes/banner_piedra.png')} style={styles.optionImage}>
                      <ImageBackground source={require('../imagenes/marco_objetos.png')} style={styles.marco}>
                        <Image source={{uri: path}} style={styles.objeto}></Image>
                      </ImageBackground>
                      <TouchableOpacity style={{flex: 2, width: width/2}} onPress={() => {navigation.navigate("ShowDetails", {nombre: item.id})}}>
                        <ImageBackground source={require('../imagenes/banner_roble_oscuro.png')} style={styles.madera}>
                          <Text style={styles.tittle}>{item.Nombreobjeto}</Text>
                          <View style={styles.enchantList}> 
                            <Text style={styles.enchant}>{item.Encantamiento}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </ImageBackground>
                  </Card>
>>>>>>> c0edadc7e300b22d397e6d63df6a41d08390a1f3
                </View>
              )
            }}
            />
        </View>
      </View>
      </View>
    );
};

const styles = StyleSheet.create({

  itemlogo:{
    flex: 1,
    paddingLeft: 10,
    borderRadius: 14,
    marginLeft: 5,
  },

  headerStyle:{
    height: height / 10,
  },

  image:{
    width:width,
    flexDirection: "row",
    resizeMode: "contain",
    marginTop: (height/27) * -1,
  },

  mainContainer:{
    backgroundColor: "#707070",
    height: height/1.26,
    width: width,
    paddingTop: height/30,
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

  errorContainer:{
    padding: 10,
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
    marginTop: (height/6) * -1,
  },

  welcomeText:{
    fontSize: 20,
    fontFamily: "Minecraft",
    marginTop: 5,
  },

  optionImage:{
    width: width/1.3,
    height: height/7,
    resizeMode: "contain",
    flexDirection: "row",
  },

  item:{
    backgroundColor: "blue",
    borderColor: "black",
  },

  marco:{
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },

  madera:{
    paddingTop: 5,
    flex: 2,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
    resizeMode: "contain",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },

  objeto:{
    width: width/7,
    height: height/13,
    resizeMode: "center",
  },

  tittle:{
    fontSize: 24,
    fontFamily: "Minecraft",
    color: "#1ACDF2",
  },

  enchantList:{
    flex: 1,
  },

  enchant:{
    padding: 15,
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Minecraft",
  },

  addItem:{
    backgroundColor: "#388233",
    width: width/1.8,
    height: height/15,
    marginBottom: height/50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  addTittle:{
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Minecraft",
  }

});

export default WeaponsScreen;
