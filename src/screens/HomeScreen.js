import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ser, ImageBackground, Image} from 'react-native';
import {Button, Icon, Picker, Header, Item, Input, Right, List, ListItem, Card, Content} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";


const { width, height } = Dimensions.get("window");

const HomeScreen = ({navigation }) => {
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

          <View style={styles.welcomeContainer}>
            <Image source={require('../imagenes/creeper.png')} style={styles.creeperImage}></Image>
            <Text style={styles.welcomeText}>Bienvenido</Text>
          </View>

          <Content style={styles.principalList}>
            <Card style={styles.card}>
                <ImageBackground source={require('../imagenes/banner_piedra.png')} style={styles.optionImage}>
                  <ImageBackground source={require('../imagenes/marco_objetos.png')} style={styles.marco}>
                    <Image source={require('../imagenes/espada_diamante.png')} style={styles.objeto}></Image>
                  </ImageBackground>
                  <TouchableOpacity onPress={() => {navigation.navigate("Weapons", {objectType: "Arma"})}} style={{flex: 2, width: width/2}}>
                    <ImageBackground source={require('../imagenes/banner_roble_oscuro.png')} style={styles.madera}>
                      <Text style={styles.tittle}>Armas</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </ImageBackground>
            </Card>
            <Card style={styles.card}>
                <ImageBackground source={require('../imagenes/banner_piedra.png')} style={styles.optionImage}>
                  <ImageBackground source={require('../imagenes/marco_objetos.png')} style={styles.marco}>
                    <Image source={require('../imagenes/pechera_diamante.png')} style={styles.objeto}></Image>
                  </ImageBackground>
                  <TouchableOpacity onPress={() => {navigation.navigate("Weapons", {objectType: "Armadura"})}} style={{flex: 2, width: width/2}}>
                    <ImageBackground source={require('../imagenes/banner_roble_oscuro.png')} style={styles.madera}>
                      <Text style={styles.tittle}>Armaduras</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </ImageBackground>
            </Card>
            <Card style={styles.card}>
                <ImageBackground source={require('../imagenes/banner_piedra.png')} style={styles.optionImage}>
                  <ImageBackground source={require('../imagenes/marco_objetos.png')} style={styles.marco}>
                    <Image source={require('../imagenes/pico_diamante.png')} style={styles.objeto}></Image>
                  </ImageBackground>
                  <TouchableOpacity onPress={() => {navigation.navigate("Weapons", {objectType: "Herramienta"})}} style={{flex: 2, width: width/2}}>
                    <ImageBackground source={require('../imagenes/banner_roble_oscuro.png')} style={styles.madera}>
                      <Text style={styles.tittle}>Herramientas</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </ImageBackground>
            </Card>
          </Content>

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

  creeperImage:{
    height: height/6,
    width: width/2,
    resizeMode: "contain",
    borderWidth: 3,
    borderColor: "black",
    marginTop: (height/6) * -1,
  },

  welcomeText:{
    fontSize: 32,
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

export default HomeScreen;
