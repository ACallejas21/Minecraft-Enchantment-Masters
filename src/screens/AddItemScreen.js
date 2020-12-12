import { Body, Button, Content, Icon, Item, List, ListItem, Picker, Textarea} from 'native-base';
import React , {useState, useContext, useEffect,}from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ObjectsContext } from "../Context/objectsContex";


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
        id: "3",
        material: "Oro"
    },
    {
        id: "4",
        material: "Diamente"
    },
    {
        id: "5",
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
    const [listado, setListado] = useState("I");
    const [tipo, setTipo] = useState();
    const [nombreObjeto,setNombreObjeto] = useState();
    const [pickerEnable,setPickerenable] = useState(true);

    const [mostrarLista,setMostrarLista] = useState()

    const objectsContext = useContext(ObjectsContext);
    const {addNewObject, refreshObjects} = objectsContext;

    const handlerAddNewObject = () => {
        console.log(nombreObjeto)
        console.log(selectedValueObject);
        console.log(selectedValueMaterial);
        switch (selectedValueObject) {
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
        console.log(tipo);
        console.log(selectedValueEncatamiento);

        addNewObject(nombreObjeto, selectedValueObject, selectedValueMaterial, "unTipo" , selectedValueEncatamiento, refreshObjects );
        // Regresar a la pantalla anterior
        navigation.goBack();
      };

    const verificar = () => {
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
                break;
            default:
                setPickerenable(true)
                break;
        }
    };

    const añadirObjetoListado = () =>{
        listado == "I" ?
        setListado(selectedValueEncatamiento)
        : setListado(listado + "/" + selectedValueEncatamiento)
        console.log("Encantamiento")
        console.log(selectedValueEncatamiento)
        console.log("Lista")
        console.log(listado)
    }

    useEffect(() =>{
        verificar();
    },[selectedValueObject])

    return(
        <View style={styles.container}>
        <Content>
            <View style={{flexDirection: "row", flex: 1}}>
                <View>
                    <Text>Imagen</Text>
                </View>
                <View>
                    <View>
                        <Text>Objeto</Text>
                        <Picker
                            mode="dialog"
                            style={{ width: 120 }}
                            placeholder="Seleccione"
                            selectedValue={selectedValueObject}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueObject(itemValue)}
                            >
                                {Objetos.map((objeto) => (
                                    <Picker.Item  key={objeto.id} label={objeto.nombre} value={objeto.nombre}></Picker.Item>
                                ))}
                            </Picker>
                    </View>
                    <View>
                        <Text>Material</Text>
                        <Picker
                            mode="dialog"
                            style={{ width: 120 }}
                            selectedValue={selectedValueMaterial}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueMaterial(itemValue)}
                            enabled={pickerEnable}
                            >
                                {Material.map((item) => (
                                    <Picker.Item key={item.id} label={item.material} value={item.material} ></Picker.Item>
                                ))}
                        </Picker>   
                    </View>
                </View>
            </View>
            <Textarea placeholder="Nombre" value={nombreObjeto} onChangeText={setNombreObjeto}></Textarea>
            <Text>Encantamientos</Text>
            <View>
                <Text>Encantamientos</Text>
                <Picker
                    mode="dialog"
                    style={{ width: 120 }}
                    
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
                <Button onPress={añadirObjetoListado}>
                    <AntDesign name="plus" size={59} color="black" />
                </Button>
            </View>
            <List>
                {

                    mostrarLista ?
                    <Text>Hola</Text>
                    // mostrarLista.map((item) =>{
                    //     <ListItem>
                    //         <Body>
                    //             <Text>item:{item}</Text>
                    //         </Body>
                    //     </ListItem>  
                    // })
                    :
                    <Text>Agrega encantamientos!</Text>
                }
            </List>
        </Content>
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

export default AddItemScreen;
