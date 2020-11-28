import react from "react";
import * as SQLite from "expo-sqlite";

// Crea y abre la base de datos
const db = SQLite.openDatabase("MEM.db");

// Creación de la tabla de Encatamientos
const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists notes (id integer primary key not null, note text)"
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