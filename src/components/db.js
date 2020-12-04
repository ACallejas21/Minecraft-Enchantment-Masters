import react from "react";
import * as SQLite from "expo-sqlite";

// Crea y abre la base de datos
const db = SQLite.openDatabase("MEM.db");

// Creación de la tabla de Objetos guardados
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists objetosGuardados (id integer primary key not null AUTOINCREMENT, NombreObjeto text, Objeto text, Material text, Encantamiento text, Tipo text)"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la table");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

// Borrar la base de datos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table objetosGuardados");
      },
      (_, result) => {
        resolve(result);
      },
      (_, error) => {
        console.log("Error al eliminar la tabla de objetos guardados");
        reject(error);
      }
    );
  });
};

// Obtener los objetos Guardados
const getObjects = (setObjectsFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from objetosGuardados",
      [],
      (_, { rows: { _array } }) => {
        setObjectsFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los objetos guardados");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Objetos obtenidas");
      }
    );
  });
};

// Insertar Obejtos
const insertObjects = (objeto) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into notes (nombreObjeto, objeto, material, tipo) values (?)(?)(?)(?)", [objeto]);
    },
    (_t, error) => {
      console.log("Error al insertar el objeto");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};


export const database = {
  getObjects,
  insertObjects,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
};