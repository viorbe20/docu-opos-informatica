---
id: modelo-ansi-sparc
title: 🧱 Modelo ANSI-SPARC
sidebar_label: Modelo ANSI-SPARC
---

El **modelo ANSI-SPARC** es una arquitectura de tres niveles definida en 1975 por el comité ANSI/X3/SPARC (American National Standards Institute – Standards Planning and Requirements Committee) para estandarizar la manera en que se diseñan y gestionan las **bases de datos**. Su objetivo es **separar los diferentes niveles de abstracción** y permitir una **independencia lógica y física** de los datos.

Este modelo es clave para entender cómo funciona internamente un **Sistema Gestor de Bases de Datos (SGBD)**.

---

## 📑 Índice

* [📌 Vocabulario clave](#-vocabulario-clave)
* [📘 Introducción al modelo](#-introducción-al-modelo)
* [🔢 Las tres capas del modelo ANSI-SPARC](#-las-tres-capas-del-modelo-ansi-sparc)
* [🧠 Ejemplo práctico](#-ejemplo-práctico)
* [🎯 Tips](#-tips)

---

## 📌 Vocabulario clave

- **Esquema interno**: estructura física de almacenamiento.
- **Esquema conceptual**: estructura lógica de la base de datos.
- **Esquema externo**: lo que el usuario ve (consultas, vistas).
- **Independencia lógica**: cambiar lógica sin afectar a vistas.
- **Independencia física**: cambiar almacenamiento sin afectar a lógica.

---

## 📘 Introducción al modelo

El modelo ANSI-SPARC propone una arquitectura **en tres niveles** para gestionar la complejidad de las bases de datos y proporcionar mecanismos de **independencia de los datos**. Cada nivel tiene una función específica y se relaciona con diferentes perfiles de usuarios: físicos, administradores y usuarios finales.

---

## 🔢 Las tres capas del modelo ANSI-SPARC

| Nivel           | ¿Qué representa?                                     | ¿Quién lo usa?           | ¿Qué contiene?                                |
|----------------|-------------------------------------------------------|--------------------------|------------------------------------------------|
| **Externo**     | La vista personalizada del usuario                   | Usuarios finales         | Consultas, vistas, filtros                     |
| **Conceptual**  | La estructura lógica global de la base de datos      | DBA / Administradoras BD | Tablas, relaciones, restricciones              |
| **Interno**     | El almacenamiento físico real en disco               | SGBD / Técnicas de sistemas | Índices, estructuras de archivo, direcciones  |

---

## 🧠 Ejemplo práctico

Supón que tienes una base de datos de personal de la Junta:

### ▪ Interno (físico):
- Los datos están en un fichero binario `.dbf`, con índices B+ tree

### ▪ Conceptual (lógico):
- Hay una tabla `EMPLEADAS(nombre, dni, puesto, sueldo)`

### ▪ Externo (vistas):
- Un usuario solo ve: `VISTA_PUBLICA(nombre, puesto)`  
- No ve el `sueldo`, ni el `dni`

🔒 Si cambias el índice físico, no afecta a la vista → **independencia física**  
🔄 Si quitas la columna `puesto`, pero creas una vista que la calcula → **independencia lógica**

---

## 🎯 Tips 

> ❓¿Qué capa permite ocultar la complejidad al usuario? → **Externa**

> ❓¿Qué nivel se usa para definir relaciones entre entidades? → **Conceptual**

> ❓¿Dónde se decide el índice de un campo? → **Interno**

---