import { AntDesign, Feather } from '@expo/vector-icons'; 
import React, { useState,useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image} from 'react-native';
import {Button, Card} from "native-base";
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
    <ImageBackground source={require("../imagenes/fondo.png")} style={styles.container}>
        <Card transparent style={styles.message}>
            <View>
                <Text style={styles.text}>
                  Esta Seguro de Eliminar la Objeto.
                </Text>
                <Text style={styles.text}>
                  Este cambio será permanente (Mucho tiempo)
                </Text>
            </View>
            <View style={{flexDirection:"row", alignSelf: "center" }}>
                <Button style={styles.button} transparent onPress={handlerDeleteObject}>
                    <AntDesign name="check" size={48} color="#00FF08" />
                </Button>
                <Button style={styles.button} transparent onPress={() => navigation.goBack()}>
                    <Feather name="x" size={48} color="red" />
                </Button>
            </View>
        </Card>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        width: width,
        height: height,
    },
    message: {
        padding: 10,
        height: "28%",
        alignItems: "center",
        backgroundColor: "rgba(25, 6, 44, 0.4)",
    },
    text: {
        fontFamily: "Minecraft",
        fontSize: 28,
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