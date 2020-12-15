import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, Image} from 'react-native';
import {Button, Icon, Picker, Header, Item, Input, Right, List, ListItem, Card, Content} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";


const { width, height } = Dimensions.get("window");

const ShowDetails = ({route, navigation }) => {
  /* Parametros para las consultas*/
  const {id} = route.params;
  const [path, setpath] = useState("src://imagenes/Espada_Diamante.png")
  const DATA =[
    {
      id: 1,
      Nombreobjeto: "Shadow",
      Objeto: "Espada",
      Material: "Diamante",
      Tipo: "Arma",
      Encantamiento: "Filo IV",

    },
  ];

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
      <View style={styles.mainContainer}>
        <ImageBackground source={require("../imagenes/fondo_piedra.png")} style={styles.floatContainer}>
          <View style={styles.itemFrame}>
            <ImageBackground source={require('../imagenes/marco_objetos.png')} style={styles.marco}>
              <Image source={require('../imagenes/Pechera_Diamante.png')} style={styles.objeto}></Image>
            </ImageBackground>
          </View>
          <View style={styles.enchantList}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Text style={styles.objectName}>
                {DATA[0].Nombreobjeto}
              </Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.enchant}>
                {DATA[0].Encantamiento}
              </Text>
            </View>
          </View>
          <View style={styles.buttonPad}>
              <TouchableOpacity style={styles.button}>
                <Text style={{color: "#FFFFFF", fontSize: 28, fontFamily: "Minecraft",}}>
                  Editar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{color: "#FFFFFF", fontSize: 28, fontFamily: "Minecraft",}}>
                  Eliminar
                </Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      </View>
    );

    
};

const styles = StyleSheet.create({
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
    backgroundColor: "#F1D85E",
    height: height,
    width: width,
    paddingTop: height/6,
    padding: 10,
    alignItems: "center"
  },

  floatContainer:{
    height: height/1.7,
    width: width/1.15,
    borderRadius:15,
    alignItems: "center",
    resizeMode: "cover",
  },

  marco:{
    height: height /5,
    width: width/2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginTop: (height/9) * -1,
  },

  objeto:{
    width: width/3.5,
    height: height/7,
    resizeMode: "center",
  },

  enchantList:{
    flex: 3,
    width: width/1.3,
    marginTop: height/40,
    marginBottom: height/40,
    borderRadius: 15,
    backgroundColor: "rgba(25, 6, 44, 0.4)",
  },

  buttonPad:{
    flex: 1,
    width: width/1.15,
    flexDirection: 'row',
    alignItems: "center",
  },

  enchant:{
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Minecraft",
    paddingLeft: 10,
    paddingTop: 10,
  },

  itemFrame:{
    flex: 1,
    width: width/1.15,
    alignItems: "center",
  },

  button:{
    height: height /14,
    width: width/3,
    borderRadius: 14,
    backgroundColor: "#388233",
    marginLeft: width/15,
    justifyContent: "center",
    alignItems: "center",
  },

  objectName:{
    color: "#1ACDF2",
    fontSize: 48,
    fontFamily: "Minecraft",
  },

});

export default ShowDetails;
