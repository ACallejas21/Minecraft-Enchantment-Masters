import { Body, Button, Content, Icon, Input, Item, List, ListItem, Picker, Textarea, Header,Right} from 'native-base';
import React , {useState, useContext, useEffect,}from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, BackHandler} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ObjectsContext } from "../Context/objectsContex";
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Objetos = [
    {
        id: "1",
        nombre: "Hacha",
        tipo: "Herramienta"
    },
    {
        id: "2",
        nombre: "Azada",
        tipo: "Herramienta"
    },
    {
        id: "3",
        nombre: "Pala",
        tipo: "Herramienta"
    },
    {
        id: "4",
        nombre: "Caña",
        tipo: "Herramienta"
    },
    {
        id: "5",
        nombre: "Mechero",
        tipo: "Herramienta"
    },
    {
        id: "6",
        nombre: "Tijeras",
        tipo: "Herramienta"
    },
    {
        id: "7",
        nombre: "Espada",
        tipo: "Arma"
    },
    {
        id: "8",
        nombre: "Arco",
        tipo: "Arma"
    },
    {
        id: "9",
        nombre: "Tridente",
        tipo: "Arma"
    },
    {
        id: "10",
        nombre: "Ballesta",
        tipo: "Arma"
    },
    {
        id: "11",
        nombre: "Casco",
        tipo: "Armadura"
    },
    {
        id: "12",
        nombre: "Pechera",
        tipo: "Armadura"
    },
    {
        id: "13",
        nombre: "Pantalones",
        tipo: "Armadura"
    },
    {
        id: "14",
        nombre: "Botas",
        tipo: "Armadura"
    },
    {
        id: "15",
        nombre: "Escudo",
        tipo: "Armadura"
    },
    {
        id: "16",
        nombre: "Elitros",
        tipo: "Armadura"
    },
];
const Material = [
     {
         id: "1",
         material: "Madera"
     },
     {
        id: "2",
        material: "Hierro"
    },
    {
        id:"3",
        material: "Malla"
    },
    {
        id: "4",
        material: "Oro"
    },
    {
        id: "5",
        material: "Diamente"
    },
    {
        id: "6",
        material: "Netherita"
    }
];
const Encatamientos = {
    "Espada": [
        //Filo
        {
            id: "1",
            encantamiento: "Filo I"
        },
        {
            id: "2",
            encantamiento: "Filo II"
        },
        {
            id: "3",
            encantamiento: "Filo III"
        },
        {
            id: "4",
            encantamiento: "Filo IV"
        },
        {
            id: "5",
            encantamiento: "Filo V"
        },
        //Castigo
        {
            id: "6",
            encantamiento: "Castigo I"
        },
        {
            id: "7",
            encantamiento: "Castigo II"
        },
        {
            id: "8",
            encantamiento: "Castigo III"
        },
        {
            id: "9",
            encantamiento: "Castigo IV"
        },
        {
            id: "10",
            encantamiento: "Castigo V"
        },
        //Perdición de los artrópodos
        {
            id: "11",
            encantamiento: "Perdición de los artrópodos I"
        },
        {
            id: "12",
            encantamiento: "Perdición de los artrópodos II"
        },
        {
            id: "13",
            encantamiento: "Perdición de los artrópodos III"
        },
        {
            id: "14",
            encantamiento: "Perdición de los artrópodos IV"
        },
        {
            id: "15",
            encantamiento: "Perdición de los artrópodos V"
        },
        //Empuje
        {
            id: "16",
            encantamiento: "Empuje I"
        },
        {
            id: "17",
            encantamiento: "Empuje II"
        },
        //Aspecto ígneo
        {
            id: "18",
            encantamiento: "Aspecto ígneo I"
        },
        {
            id: "19",
            encantamiento: "Aspecto ígneo II"
        },
        //Saqueo
        {
            id: "20",
            encantamiento: "Saqueo I"
        },
        {
            id: "21",
            encantamiento: "Saqueo II"
        },
        {
            id: "22",
            encantamiento: "Saqueo III"
        },
        //Filo arrasador 
        {
            id: "23",
            encantamiento: "Filo arrasador  I"
        },
        {
            id: "24",
            encantamiento: "Filo arrasador  II"
        },
        {
            id: "25",
            encantamiento: "Filo arrasador  III"
        },
        //Irrompibilidad
        {
            id: "26",
            encantamiento: "Irrompibilidad  I"
        },
        {
            id: "27",
            encantamiento: "Irrompibilidad  II"
        },
        {
            id: "28",
            encantamiento: "Irrompibilidad  III"
        },
        //Reparación
        {
            id: "29",
            encantamiento: "Reparación"
        },
        //Maldición de desaparición 
        {
            id: "30",
            encantamiento: "Maldición de desaparición"
        },

    ],
    "Hacha":[
        //Filo
        {
            id: "1",
            encantamiento: "Filo I",
        },
        {
            id: "5",
            encantamiento: "Filo II",
        },
        {
            id: "3",
            encantamiento: "Filo III",
        },
        {
            id: "4",
            encantamiento: "Filo IV",
        },
        {
            id: "5",
            encantamiento: "Filo V",
        },
        //Castigo
        {
            id: "6",
            encantamiento: "Castigo I",
        },
        {
            id: "7",
            encantamiento: "Castigo II",
        },
        {
            id: "8",
            encantamiento: "Castigo III",
        },
        {
            id: "9",
            encantamiento: "Castigo IV",
        },
        {
            id: "10",
            encantamiento: "Castigo V",
        },
        //Perdición de los artrópodos
        {
            id: "11",
            encantamiento: "Perdición de los artrópodos I",
        },
        {
            id: "12",
            encantamiento: "Perdición de los artrópodos II",
        },
        {
            id: "13",
            encantamiento: "Perdición de los artrópodos III",
        },
        {
            id: "14",
            encantamiento: "Perdición de los artrópodos IV",
        },
        {
            id: "15",
            encantamiento: "Perdición de los artrópodos V",
        },
        //Eficiencia
        {
            id: "16",
            encantamiento: "Eficiencia I",
        },
        {
            id: "17",
            encantamiento: "Eficiencia II",
        },
        {
            id: "18",
            encantamiento: "Eficiencia III",
        },
        {
            id: "19",
            encantamiento: "Eficiencia IV",
        },
        {
            id: "20",
            encantamiento: "Eficiencia V",
        },
        //Toque de seda
        {
            id: "21",
            encantamiento: "Toque de seda",
        },
        //Fortuna
        {
            id: "22",
            encantamiento: "Fortuna I",
        },
        {
            id: "23",
            encantamiento: "Fortuna II",
        },
        {
            id: "24",
            encantamiento: "Fortuna III",
        },
        //Irrompibilidad
        {
            id: "25",
            encantamiento: "Irrompibilidad  I",
        },
        {
            id: "26",
            encantamiento: "Irrompibilidad  II",
        },
        {
            id: "27",
            encantamiento: "Irrompibilidad  III",
        },
        //Reparación
        {
            id: "28",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición 
        {
            id: "29",
            encantamiento: "Maldición de desaparición",
        },
    ],
    "Arco":[
        //Poder
        {
            id: "1",
            encantamiento: "Poder I",
        },
        {
            id: "2",
            encantamiento: "Poder II",
        },
        {
            id: "3",
            encantamiento: "Poder III",
        },
        {
            id: "4",
            encantamiento: "Poder IV",
        },
        {
            id: "5",
            encantamiento: "Poder V",
        },
        
    ]
};

const { width, height } = Dimensions.get("window");


const AddItemScreen = ({ route, navigation }) => {
    const [selectedValueObject, setSelectedValueObject] = useState("Hacha");
    const [selectedValueMaterial, setSelectedValueMaterial] = useState("Madera");
    const [selectedValueEncatamiento, setSelectedValueEncantamiento] = useState("Filo I");
    const [tipo, setTipo] = useState("Herramienta");
    const [nombreObjeto,setNombreObjeto] = useState();
    const [pickerEnable,setPickerenable] = useState(true);

    const objectsContext = useContext(ObjectsContext);
    const {addNewObject, refreshObjects} = objectsContext;

    const handlerAddNewObject = () => {
        console.log("Nombre objeto: %o ",nombreObjeto)
        console.log("Objeto: %o ",selectedValueObject);
        console.log("Material: %o ",selectedValueMaterial);
        console.log("Tipo: %o ",tipo);
        console.log("Encantamiento: %o ",selectedValueEncatamiento);

        addNewObject(nombreObjeto, selectedValueObject, selectedValueMaterial, tipo , selectedValueEncatamiento, refreshObjects );
        // Regresar a la pantalla anterior
        navigation.goBack();
      };

    const habilatarPicker = () => {
        switch (selectedValueObject) {
            case "Arco":
            case "Tridente":
            case "Caña":
            case "Elitros":
            case "Mechero":
            case "Escudo":
            case "Tijeras":
            case "Ballesta":
                setPickerenable(false)
                setSelectedValueMaterial(null)
                setSelectedValueEncantamiento()
                break;
            default:
                setPickerenable(true)
                break;
        }
    };

    const establecerTipo = () =>{
        switch (selectedValueObject.toString()) {
            case "Hacha":
            case "Azada":
            case "Pala":
            case "Caña":
            case "Mechero":
            case "Tijeras":
                setTipo("Herramienta");
            break;

            case "Espada":
            case "Arco":
            case "Tridente":
            case "Ballesta":
                setTipo("Arma");
            break;
            
            case "Casco":
            case "Pechera":
            case "Pantalones":
            case "Botas":
            case "Escudo":
            case "Elitros":
                setTipo("Armadura");
            break;

            default:
                setTipo("Indefinido")
                break;
        }
    }

    useEffect(() =>{
        establecerTipo();
        habilatarPicker();
    },[selectedValueObject])

    return(
        <View style={styles.mainContainer}>
            <Header searchBar transparent androidStatusBarColor='#F92626' style={styles.headerStyle}>
                <ImageBackground source={require('../imagenes/banner_madera.png')} style={styles.image}>
                    <Item style={styles.itemlogo}>
                        <Input placeholder="Buscar"/>
                    </Item>
                    <Right style={styles.searchButton}>
                        <Button transparent onPress={() => {navigation.navigate("AddItem")}}>
                            <Image source={require('../imagenes/boton_piedra.png')} style={styles.btn}></Image>
                        </Button>
                    </Right>
                </ImageBackground>
            </Header>
            <View style={styles.bodyContainer}>
                <View style={styles.floatContainer}>
                    <View style={{height: height/6, alignItems:"center"}}>
                        <ImageBackground source={require('../imagenes/marco_objetos.png')} style={styles.marco}>
                            <Image source={require('../imagenes/espada_diamante.png')} style={styles.objeto}></Image>
                        </ImageBackground>
                    </View>
                        <Text>Objeto</Text>
                        <View style={styles.pickerStyle} >
                            <Picker 
                                mode="dialog"
                                style={{ width: width/1.1 }}
                                selectedValue={selectedValueObject}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueObject(itemValue)}
                                >
                                    {Objetos.map((objeto) => (
                                        <Picker.Item  key={objeto.id} label={objeto.nombre} value={objeto.nombre}></Picker.Item>
                                    ))}
                            </Picker>
                        </View>  
                    
                    <Text>Material</Text>
                    <View style={styles.pickerStyle}>
                        <Picker
                            mode="dialog"
                            style={{ width: width/1.1 }}
                            selectedValue={selectedValueMaterial}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueMaterial(itemValue)}
                            enabled={pickerEnable}
                            >
                                {Material.map((item) => (
                                    <Picker.Item key={item.id} label={item.material} value={item.material} ></Picker.Item>
                                ))}
                        </Picker>   
                    </View>
            
                    <Text >Nombre</Text>
                    <View style={styles.inputStyle}>
                        <Input placeholder="Nombre" value={nombreObjeto} onChangeText={setNombreObjeto}></Input>
                    </View>
                    <Text>Encantamientos</Text>
                    <View style={styles.pickerStyle}>
                        <Picker
                            mode="dialog"
                            style={{ width: width/1.1 }}
                            placeholder="seleccione"
                            selectedValue={selectedValueEncatamiento}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueEncantamiento(itemValue)}
                            >
                                {
                                    selectedValueObject ?
                                    Encatamientos[selectedValueObject.toString()].map((item) => (
                                        <Picker.Item key={item.id} label={item.encantamiento} value={item.encantamiento}></Picker.Item>
                                    )) :
                                    Encatamientos['Hacha'].map((item) => (
                                        <Picker.Item key={item.id} label={item.encantamiento} value={item.encantamiento}></Picker.Item>
                                    ))}
                                {/* {Encatamientos['Espada'].map((item) => (
                                    <Picker.Item key={item.id} label={item.encantamiento} value={item.encantamiento}></Picker.Item>
                                ))} */}
                        </Picker>
                    </View>
                    <View style={{paddingLeft:75, paddingTop: 10}}>
                        
                        <ImageBackground source={require('../imagenes/boton_piedra.png')} style={styles.buttonImage}>
                            <TouchableOpacity>
                                <Button transparent onPress={handlerAddNewObject} style={styles.buttonStyle}>
                                    <Text>Guardar</Text>
                                    <AntDesign  name="save" size={24} color="black" />
                                </Button>
                            </TouchableOpacity>
                        </ImageBackground>
                        
                    </View>
                </View>
            </View>
    </View>
    );
};

const styles = StyleSheet.create({  
  container: {

    backgroundColor: '#fff',
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
    width: width,
    height: height,
  },
  bodyContainer:{
    backgroundColor: "#707070",
    padding:10,
    alignContent: "center"
  },
  floatContainer:{
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius:15,
    padding:10,
    height: height/1.35
  },
  tittle:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  pickerStyle:{
      borderRadius:15,
      borderWidth:2,
      borderColor: "#FFFFFF",
      backgroundColor: 'rgba(255, 255, 255, 0.4)'

  },
  inputStyle:{
    borderRadius:15,
    borderWidth:2,
    borderColor: "#FFFFFF",
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: height/13
  },
  marco:{
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    width: width/2
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
    width: width/5,
    height: height/5,
    resizeMode: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  buttonStyle:{
      width: width/2,
      alignItems: 'center'
  },
  buttonImage:{
    width: width/1.9,
    height: height/14,
    paddingLeft:5,
    paddingRight:5
  },
});

export default AddItemScreen;
