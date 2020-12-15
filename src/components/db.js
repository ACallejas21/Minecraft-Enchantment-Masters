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
          "create table if not exists objetosGuardados (id integer primary key autoincrement, NombreObjeto text not null, Objeto text not null, Material text ,Tipo text not null, Encantamiento text not null)"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la table");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Tabla Creada");
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
        console.log("Tabla eliminada")
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
const addObjects = (nombre, objeto, material, tipo, encatamientos, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into objetosGuardados (NombreObjeto, Objeto, Material, Tipo, Encantamiento) values (?,?,?,?,?);", [
        nombre,
        objeto,
        material,
        tipo,
        encatamientos,
      ]);
    },
    (_t, error) => {
      console.log("Error al agregar el Objeto");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

const getObjecBytype = (tipo, setObjectsTipeFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from objetosGuardados where Tipo = ?",
      [tipo],
      (_, { rows: { _array } }) => {
        setObjectsTipeFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el objeto por id");
        console.log(error);
      },
      (_t, _success) => {
        console.log("objeto por tipo obtenido");
      }
    );
  });
};

const dropById = (id, successFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "delete from objetosGuardados where id = ?",
      [id],

      (_t, error) => {
        console.log("Error al momento de eliminar id");
        console.log(error);
      },
      (_t, _success) => {
        console.log("objeto eliminado");
      }
    );
  });
};

const getById = (id, successFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from objetosGuardados where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        successFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener objeto por id");
        console.log(error);
      },
      (_t, _success) => {
        console.log("objeto po id capturado");
      }
    );
  });
};


export const database = {
  getObjects,
  addObjects,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  dropById,
  getById,

  getObjecBytype,
};