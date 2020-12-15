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
        //Irrompibilidad
        {
            id: "6",
            encantamiento: "Irrompibilidad I"
        },
        {
            id: "7",
            encantamiento: "Irrompibilidad II"
        },
        {
            id: "8",
            encantamiento: "Irrompibilidad III"
        },
        //Retroceso
        {
            id: "9",
            encantamiento: "Retroceso I"
        },
        {
            id: "10",
            encantamiento: "Retroceso II"
        },
        //Fuego
        {
            id: "11",
            encantamiento: "Fuego"
        },
        //Infinidad
        {
            id: "12",
            encantamiento: "Infinidad"
        },
        //Reparación
        {
            id: "13",
            encantamiento: "Reparación"
        },
        //Maldición de desaparición
        {
            id: "14",
            encantamiento: "Maldición de desaparición"
        },
    ],
    "Azada":[
        //Eficiencia
        {
            id: "15",
            encantamiento: "Eficiencia I",
        },
        {
            id: "16",
            encantamiento: "Eficiencia II",
        },
        {
            id: "17",
            encantamiento: "Eficiencia III",
        },
        {
            id: "18",
            encantamiento: "Eficiencia IV",
        },
        {
            id: "19",
            encantamiento: "Eficiencia V",
        },
        //Irrompibilidad
        {
            id: "20",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "21",
            encantamiento: "Irrompibilidad Ii",
        },
        {
            id: "22",
            encantamiento: "Irrompibilidad III",
        },
    ],
    "Pico":[
        //Eficiencia
        {
            id: "23",
            encantamiento: "Eficiencia I",
        },
        {
            id: "24",
            encantamiento: "Eficiencia II",
        },
        {
            id: "25",
            encantamiento: "Eficiencia III",
        },
        {
            id: "26",
            encantamiento: "Eficiencia IV",
        },
        {
            id: "27",
            encantamiento: "Eficiencia V",
        },
        //Toque de seda
        {
            id: "28",
            encantamiento: "Toque de seda",
        },
        //Fortuna
        {
            id: "29",
            encantamiento: "Fortuna I",
        },
        {
            id: "30",
            encantamiento: "Fortuna II",
        },
        {
            id: "31",
            encantamiento: "Fortuna III",
        },
        //Irrompibilidad 
        {
            id: "32",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "33",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "34",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación
        {
            id: "35",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición
        {
            id: "36",
            encantamiento: "Maldición de desaparición",
        },

    ],
    "Pala":[
        //Eficiencia
        {
            id: "37",
            encantamiento: "Eficiencia I",
        },
        {
            id: "38",
            encantamiento: "Eficiencia II",
        },
        {
            id: "39",
            encantamiento: "Eficiencia III",
        },
        {
            id: "40",
            encantamiento: "Eficiencia IV",
        },
        {
            id: "41",
            encantamiento: "Eficiencia V",
        },
        //Toque de seda
        {
            id: "42",
            encantamiento: "Toque de seda",
        },
        //Fortuna
        {
            id: "43",
            encantamiento: "Fortuna I",
        },
        {
            id: "44",
            encantamiento: "Fortuna II",
        },
        {
            id: "45",
            encantamiento: "Fortuna III",
        },
        //Irrompibilidad 
        {
            id: "46",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "47",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "48",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación
        {
            id: "49",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición
        {
            id: "50",
            encantamiento: "Maldición de desaparición",
        },
    ],
    "Ballesta":[
        //Perforación
        {
            id: "51",
            encantamiento: "Perforación I",
        },
        {
            id: "52",
            encantamiento: "Perforación II",
        },
        {
            id: "53",
            encantamiento: "Perforación III",
        },
        {
            id: "54",
            encantamiento: "Perforación IV",
        },
        //Multidisparo
        {
            id: "55",
            encantamiento: "Multidisparo",
        },
        //Carga rápida
        {
            id: "56",
            encantamiento: "Carga rápida I",
        },
        {
            id: "57",
            encantamiento: "Carga rápida II",
        },
        {
            id: "58",
            encantamiento: "Carga rápida III",
        },

    ],
    "Tijeras":[
        //Irrompibilidad 
        {
            id: "59",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "60",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "61",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación 
        {
            id: "62",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición 
        {
            id: "63",
            encantamiento: "Maldición de desaparición",
        },
        //Eficiencia
        {
            id: "64",
            encantamiento: "Eficiencia I",
        },
        {
            id: "65",
            encantamiento: "Eficiencia II",
        },
        {
            id: "66",
            encantamiento: "Eficiencia III",
        },
        {
            id: "67",
            encantamiento: "Eficiencia IV",
        },
        {
            id: "68",
            encantamiento: "Eficiencia V",
        },
    ],
    "Mechero":[
        //Irrompibilidad 
        {
            id: "69",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "70",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "71",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación
        {
            id: "72",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición
        {
            id: "73",
            encantamiento: "Maldición de desaparición",
        },
    ],
    "Tridente":[
        //Lealtad
        {
            id: "74",
            encantamiento: "Lealtad I",
        },
        {
            id: "75",
            encantamiento: "Lealtad II",
        },
        {
            id: "76",
            encantamiento: "Lealtad III",
        },
        //Empalamiento
        {
            id: "77",
            encantamiento: "Empalamiento I",
        },
        {
            id: "78",
            encantamiento: "Empalamiento II",
        },
        {
            id: "79",
            encantamiento: "Empalamiento III",
        },
        {
            id: "80",
            encantamiento: "Empalamiento IV",
        },
        {
            id: "81",
            encantamiento: "Empalamiento V",
        },
        //Propulsión acuática
        {
            id: "82",
            encantamiento: "Propulsión acuática I",
        },
        {
            id: "83",
            encantamiento: "Propulsión acuática II",
        },
        {
            id: "84",
            encantamiento: "Propulsión acuática III",
        },
        //Conductividad
        {
            id: "85",
            encantamiento: "Conductividad",
        },
    ],
    "Caña de pescar":[
        //Suerte marina
        {
            id: "86",
            encantamiento: "Suerte marina I",
        },
        {
            id: "87",
            encantamiento: "Suerte marina II",
        },
        {
            id: "88",
            encantamiento: "Suerte marina III",
        },
        //Atracción
        {
            id: "89",
            encantamiento: "Atracción I",
        },
        {
            id: "90",
            encantamiento: "Atracción II",
        },
        {
            id: "91",
            encantamiento: "Atracción III",
        },
        //Reparación
        {
            id: "92",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición
        {
            id: "93",
            encantamiento: "Maldición de desaparición",
        },
    ],
    "Escudo":[
        //Irrompibilidad 
        {
            id: "94",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "95",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "96",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación 
        {
            id: "97",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición 
        {
            id: "98",
            encantamiento: "Maldición de desaparición",
        },
    ],
    "Elytra":[
        //Irrompibilidad
        {
            id: "99",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "100",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "101",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación
        {
            id: "102",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición
        {
            id: "103",
            encantamiento: "Maldición de desaparición",
        },
    ],
    "Casco":[
        //Protección
        {
            id: "104",
            encantamiento: "Protección I",
        },
        {
            id: "105",
            encantamiento: "Protección II",
        },
        {
            id: "106",
            encantamiento: "Protección III",
        },
        {
            id: "107",
            encantamiento: "Protección IV",
        },
        //Protección contra el fuego
        {
            id: "108",
            encantamiento: "Protección contra el fuego I",
        },
        {
            id: "109",
            encantamiento: "Protección contra el fuego II",
        },
        {
            id: "110",
            encantamiento: "Protección contra el fuego III",
        },
        {
            id: "111",
            encantamiento: "Protección contra el fuego IV",
        },
        //Protección contra explosiones
        {
            id: "112",
            encantamiento: "Protección contra explosiones I",
        },
        {
            id: "113",
            encantamiento: "Protección contra explosiones II",
        },
        {
            id: "114",
            encantamiento: "Protección contra explosiones III",
        },
        {
            id: "115",
            encantamiento: "Protección contra explosiones IV",
        },
        //Protección contra los proyectiles
        {
            id: "116",
            encantamiento: "Protección contra los proyectiles I",
        },
        {
            id: "117",
            encantamiento: "Protección contra los proyectiles II",
        },
        {
            id: "118",
            encantamiento: "Protección contra los proyectiles III",
        },
        {
            id: "119",
            encantamiento: "Protección contra los proyectiles IV",
        },
        //Espinas
        {
            id: "120",
            encantamiento: "Espinas I",
        },
        {
            id: "121",
            encantamiento: "Espinas II",
        },
        {
            id: "122",
            encantamiento: "Espinas III",
        },
        //Respiración
        {
            id: "123",
            encantamiento: "Respiración I",
        },
        {
            id: "124",
            encantamiento: "Respiración II",
        },
        {
            id: "125",
            encantamiento: "Respiración III",
        },
        //Afinidad acuática
        {
            id: "126",
            encantamiento: "Afinidad acuática",
        },
        //Irrompibilidad 
        {
            id: "127",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "128",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "129",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación 
        {
            id: "130",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición 
        {
            id: "131",
            encantamiento: "Maldición de desaparición",
        },
        //Maldición de ligamiento 
        {
            id: "132",
            encantamiento: "Maldición de ligamiento",
        },
    ],
    "Pechera":[
        //Protección
        {
            id: "133",
            encantamiento: "Protección I",
        },
        {
            id: "134",
            encantamiento: "Protección II",
        },
        {
            id: "135",
            encantamiento: "Protección III",
        },
        {
            id: "136",
            encantamiento: "Protección IV",
        },
        //Protección contra el fuego
        {
            id: "137",
            encantamiento: "Protección contra el fuego I",
        },
        {
            id: "138",
            encantamiento: "Protección contra el fuego II",
        },
        {
            id: "139",
            encantamiento: "Protección contra el fuego III",
        },
        {
            id: "140",
            encantamiento: "Protección contra el fuego IV",
        },
        //Protección contra explosiones
        {
            id: "141",
            encantamiento: "Protección contra explosiones I",
        },
        {
            id: "142",
            encantamiento: "Protección contra explosiones II",
        },
        {
            id: "143",
            encantamiento: "Protección contra explosiones III",
        },
        {
            id: "144",
            encantamiento: "Protección contra explosiones IV",
        },
        //Protección contra los proyectiles
        {
            id: "145",
            encantamiento: "Protección contra los proyectiles I",
        },
        {
            id: "146",
            encantamiento: "Protección contra los proyectiles II",
        },
        {
            id: "147",
            encantamiento: "Protección contra los proyectiles III",
        },
        {
            id: "148",
            encantamiento: "Protección contra los proyectiles IV",
        },
        //Espinas
        {
            id: "149",
            encantamiento: "Espinas I",
        },
        {
            id: "150",
            encantamiento: "Espinas II",
        },
        {
            id: "151",
            encantamiento: "Espinas III",
        },
        //Irrompibilidad
        {
            id: "152",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "153",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "154",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación
        {
            id: "155",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición
        {
            id: "156",
            encantamiento: "Maldición de desaparición",
        },
        //Maldición de ligamiento
        {
            id: "157",
            encantamiento: "Maldición de ligamiento",
        },
    ],
    "Pantalones":[
        //Protección
        {
            id: "158",
            encantamiento: "Protección I",
        },
        {
            id: "159",
            encantamiento: "Protección II",
        },
        {
            id: "160",
            encantamiento: "Protección III",
        },
        {
            id: "161",
            encantamiento: "Protección IV",
        },
        //Protección contra el fuego
        {
            id: "162",
            encantamiento: "Protección contra el fuego I",
        },
        {
            id: "163",
            encantamiento: "Protección contra el fuego II",
        },
        {
            id: "164",
            encantamiento: "Protección contra el fuego III",
        },
        {
            id: "165",
            encantamiento: "Protección contra el fuego IV",
        },
        //Protección contra explosiones
        {
            id: "166",
            encantamiento: "Protección contra explosiones I",
        },
        {
            id: "167",
            encantamiento: "Protección contra explosiones II",
        },
        {
            id: "168",
            encantamiento: "Protección contra explosiones III",
        },
        {
            id: "169",
            encantamiento: "Protección contra explosiones IV",
        },
        //Protección contra los proyectiles
        {
            id: "170",
            encantamiento: "Protección contra los proyectiles I",
        },
        {
            id: "171",
            encantamiento: "Protección contra los proyectiles II",
        },
        {
            id: "172",
            encantamiento: "Protección contra los proyectiles III",
        },
        {
            id: "173",
            encantamiento: "Protección contra los proyectiles IV",
        },
        //Espinas
        {
            id: "174",
            encantamiento: "Espinas I",
        },
        {
            id: "175",
            encantamiento: "Espinas II",
        },
        {
            id: "176",
            encantamiento: "Espinas III",
        },
        //Irrompibilidad 
        {
            id: "177",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "178",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "179",
            encantamiento: "Irrompibilidad III",
        },
        //Reparación 
        {
            id: "180",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición 
        {
            id: "181",
            encantamiento: "Maldición de desaparición",
        },
        //Maldición de ligamiento 
        {
            id: "182",
            encantamiento: "Maldición de ligamiento",
        },
    ],
    "Botas":[
        //Protección 
        {
            id: "183",
            encantamiento: "Protección I",
        },
        {
            id: "184",
            encantamiento: "Protección II",
        },
        {
            id: "185",
            encantamiento: "Protección III",
        },
        {
            id: "186",
            encantamiento: "Protección IV",
        },
        //Protección contra el fuego 
        {
            id: "187",
            encantamiento: "Protección contra el fuego I",
        },
        {
            id: "188",
            encantamiento: "Protección contra el fuego II",
        },
        {
            id: "189",
            encantamiento: "Protección contra el fuego III",
        },
        {
            id: "190",
            encantamiento: "Protección contra el fuego IV",
        },
        //Protección contra explosiones 
        {
            id: "191",
            encantamiento: "Protección contra explosiones I",
        },
        {
            id: "192",
            encantamiento: "Protección contra explosiones II",
        },
        {
            id: "193",
            encantamiento: "Protección contra explosiones III",
        },
        {
            id: "194",
            encantamiento: "Protección contra explosiones IV",
        },
        //Protección contra los proyectiles 
        {
            id: "195",
            encantamiento: "Protección contra los proyectiles I",
        },
        {
            id: "196",
            encantamiento: "Protección contra los proyectiles II",
        },
        {
            id: "197",
            encantamiento: "Protección contra los proyectiles III",
        },
        {
            id: "198",
            encantamiento: "Protección contra los proyectiles IV",
        },
        //Espinas 
        {
            id: "199",
            encantamiento: "Espinas I",
        },
        {
            id: "200",
            encantamiento: "Espinas II",
        },
        {
            id: "201",
            encantamiento: "Espinas III",
        },
        //velocidad de alma 
        {
            id: "202",
            encantamiento: "velocidad de alma I",
        },
        {
            id: "203",
            encantamiento: "velocidad de alma II",
        },
        {
            id: "204",
            encantamiento: "velocidad de alma III",
        },
        //Caída de pluma 
        {
            id: "205",
            encantamiento: "Caída de pluma I",
        },
        {
            id: "206",
            encantamiento: "Caída de pluma II",
        },
        {
            id: "207",
            encantamiento: "Caída de pluma III",
        },
        {
            id: "208",
            encantamiento: "Caída de pluma IV",
        },
        //Agilidad acuática 
        {
            id: "209",
            encantamiento: "Agilidad acuática I",
        },
        {
            id: "210",
            encantamiento: "Agilidad acuática II",
        },
        {
            id: "211",
            encantamiento: "Agilidad acuática III",
        },
        //Paso helado 
        {
            id: "212",
            encantamiento: "Paso helado I",
        },
        {
            id: "213",
            encantamiento: "Paso helado II",
        },
        //Irrompibilidad  
        {
            id: "214",
            encantamiento: "Irrompibilidad I",
        },
        {
            id: "215",
            encantamiento: "Irrompibilidad II",
        },
        {
            id: "216",
            encantamiento: "Irrompibilidad III",
        },
        //Irrompibilidad  
        {
            id: "217",
            encantamiento: "Reparación",
        },
        //Maldición de desaparición  
        {
            id: "218",
            encantamiento: "Maldición de desaparición",
        },
        //Maldición de ligamiento  
        {
            id: "219",
            encantamiento: "Maldición de ligamiento",
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
