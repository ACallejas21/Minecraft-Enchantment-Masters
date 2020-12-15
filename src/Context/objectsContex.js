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
  const [objectType,setObjectType] = useState("");
  const [objectId, setObjectID] = useState("");
  

  // Cargar u obtener los objetos
  useEffect(() => {
    refreshObjects();
  }, []);

  const refreshObjects = () => {
    return database.getObjects(setObjects);
  };

  const addNewObject = async (nombre,objeto,material,tipo,encatamientos ) => {
    await database.addObjects(nombre, objeto, material,tipo, encatamientos, refreshObjects);
    return refreshObjects();
  };

  const getObjectype = async (tipo) =>{
    await database.getObjecBytype(tipo,setObjectType);
  };

  const dropObjectById = async (id) =>{
    await database.dropById(id, refreshObjects);
    return refreshObjects();
  }

  const getObjectById = async (id) => {
    await database.getById(id, setObjectID)
    return refreshObjects();
  }

  // Crear el objeto de contexto
  const objectsContext = {
    objects,
    objectType,
    setObjectType,
    addNewObject,
    refreshObjects,
    getObjectype,
    dropObjectById,
    setObjectID,
    objectId,
    getObjectById
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ObjectsContext.Provider value={objectsContext}>
      {children}
    </ObjectsContext.Provider>
  );
};