import { StatusBar } from 'expo-status-bar';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import React, { useState,useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, Image} from 'react-native';
import {Button, Icon, Picker, Header, Item, Input, Right, List, ListItem, Card, Content, Container} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import {ObjectsContext} from "../Context/objectsContex";



const { width, height } = Dimensions.get("window");

const WeaponsScreen = ({route, navigation }) => {
  const {objectsType} = route.params;
  const objectsContext = useContext(ObjectsContext);
  const {setObjectID,
        objectId,
        getObjectById, 
        refreshObjects,
        dropObjectById } = objectsContext;

  const [Theobject,setTheObject] = useState("");
  const [TheId,setTheId] = useState(false);

  /* Parametros para las consultas*/
  const {id} = route.params;

  useEffect(() => {
      const getObject = () => {
        getObjectById(id)
      };

      getObject();

      if (objectId.length) {
          setTheObject(objectId[0].NombreObjeto)
          setTheId(objectId[0].id)

          console.log(Theobject,TheId, objectId)
      }
      
  },[Theobject, TheId]);

  const handlerDeleteObject = () => {
    dropObjectById(objectId[0].id, refreshObjects)
    navigation.navigate("Weapons")
  }


  let [fontsLoaded] = useFonts({
    Minecraft: require("../fonts/F77MinecraftRegular-0VYv.ttf")
  });

  if (!fontsLoaded) {
    return(
      <View style={{flex: 1, justifyContent: "center", backgroundColor:"#DBDBDB", alignItems: "center"}}>
        <Image source={require("../imagenes/Dancing_Red_Parrot.gif")} ></Image>
      </View>
    );
  };

  return(
    <Container style={styles.container}>
        <Card style={styles.message}>
            <View>
                <Text style={styles.text}>Esta Seguro de Eliminar la Objeto</Text>
            </View>
            <View style={{flexDirection:"row", alignSelf: "center" }}>
                <Button style={styles.button} transparent onPress={handlerDeleteObject}>
                    <AntDesign name="check" size={24} color="black" />
                </Button>
                <Button style={styles.button} transparent onPress={() => navigation.goBack()}>
                    <Feather name="x" size={24} color="black" />
                </Button>
            </View>
        </Card>
    </Container>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        backgroundColor:"#025159",
    },
    message: {
        alignItems: "center",
        backgroundColor: "#A65644",
    },
    text: {
        fontFamily: "Minecraft",
        fontSize: 40,
        color: "#FFF",
        textAlign: "center",
        paddingBottom: "4%",
    },
    button:{
        textAlign: "center",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingBottom: "3%",
    },
});

export default WeaponsScreen;