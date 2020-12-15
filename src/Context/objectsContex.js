import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de los objetos
export const ObjectsContext = createContext({});

export const ObjectsContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { objects: initialObjects, children } = props;

  // Almacenar los valores en el estado
  const [objects, setObjects] = useState(initialObjects);
  const [objectType,setObjectType] = useState();
  

  // Cargar u obtener los objetos
  useEffect(() => {
    refreshObjects();
  }, []);

  const refreshObjects = () => {
    return database.getObjects(setObjects);
  };

  const addNewObject = (nombre,objeto,material,tipo,encatamientos ) => {
    return database.addObjects(nombre, objeto, material,tipo, encatamientos, refreshObjects);
  };

  const getObjectype = (tipo) =>{
    return database.getObjecBytype(tipo,setObjectType);
  };

  // Crear el objeto de contexto
  const objectsContext = {
    objects,
    objectType,
    setObjectType,
    addNewObject,
    refreshObjects,
    getObjectype,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ObjectsContext.Provider value={objectsContext}>
      {children}
    </ObjectsContext.Provider>
  );
};