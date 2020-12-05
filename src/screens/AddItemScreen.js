import { StatusBar } from 'expo-status-bar';
import { Content, Item, List, Picker, Textarea} from 'native-base';
import React , {useState}from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

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
const { width, height } = Dimensions.get("window");

const AddItemScreen = ({ route, navigation }) => {
    const [selectedValueObject, setSelectedValueObject] = useState("");
    const [selectedValueMaterial, setSelectedValueMaterial] = useState("");
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
                        selectedValue={selectedValueObject}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueObject(itemValue)}
                        >
                            {Objetos.map((objeto) => (
                                <Picker.Item key={objeto.id} label={objeto.nombre} value={objeto.nombre}></Picker.Item>
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
                        >
                            {Material.map((material) => (
                                <Picker.Item key={material.id} label={material.nombre} value={material.nombre}></Picker.Item>
                            ))}
                    </Picker>
                  </View>
              </View>
          </View>
        <Textarea placeholder="Nombre"></Textarea>

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
