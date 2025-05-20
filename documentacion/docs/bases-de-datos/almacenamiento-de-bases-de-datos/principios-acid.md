---
id: principios-acid
title: 🧪 Principios ACID en Bases de Datos
sidebar_label: Principios ACID
---

Los **principios ACID** definen las propiedades fundamentales que debe cumplir cualquier **transacción en una base de datos** para garantizar la **fiabilidad, coherencia y seguridad** de la información. Este concepto es esencial tanto en sistemas financieros como en la **Administración Pública**, donde se requiere que los datos sean **seguros, consistentes y rastreables**.

---

## 📑 Índice

* [📌 Vocabulario clave](#-vocabulario-clave)
* [🧱 ¿Qué es una transacción?](#-qué-es-una-transacción)
* [🔬 Explicación de los principios ACID](#-explicación-de-los-principios-acid)
* [🧠 Ejemplo práctico](#-ejemplo-práctico)
* [⚔️ Problemas por concurrencia](#-problemas-por-concurrencia)
* [🔒 Tipos de bloqueo](#-tipos-de-bloqueo)
* [🛡️ Relación con el Esquema Nacional de Seguridad (ENS)](#-relación-con-el-esquema-nacional-de-seguridad-ens)
* [🎯 Tips](#-tips)

---

## 📌 Vocabulario clave

- **Transacción**: Conjunto de operaciones que se ejecutan como una sola unidad lógica.
- **Rollback**: Anulación de una transacción (deshacer).
- **Commit**: Confirmación de una transacción (guardar cambios).
- **Concurrencia**: Acceso simultáneo a los datos por varios usuarios.
- **Bloqueo (lock)**: Mecanismo para evitar conflictos entre transacciones concurrentes.

---

## 🧱 ¿Qué es una transacción?

Una **transacción** puede incluir múltiples instrucciones SQL (`INSERT`, `UPDATE`, `DELETE`…).  
Por ejemplo, al transferir fondos o actualizar registros de personal, es vital que se haga **todo o nada** para mantener la integridad.

---

## 🔬 Explicación de los principios ACID

| Letra | Nombre         | ¿Qué significa?                                                                  |
|-------|----------------|----------------------------------------------------------------------------------|
| A     | **Atomicidad**  | Todas las operaciones se ejecutan completamente o no se hace ninguna.                      |
| C     | **Consistencia**| La base de datos pasa de un estado válido a otro estado válido. Los datos siempre deben ser consistentes.                |
| I     | **Aislamiento** | Cada transacción se ejecuta como si fuera la única en el sistema.               |
| D     | **Durabilidad** | Una vez confirmada, los cambios persisten aunque falle el sistema.              |

---

## 🧠 Ejemplo práctico

```sql
BEGIN;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
```

---

Si falla alguna parte, el `ROLLBACK` cancela todo → **Atomicidad**

Si se apaga el sistema después del `COMMIT`, los cambios persisten → **Durabilidad**

---

## ⚔️ Problemas por concurrencia

Cuando varias transacciones acceden a la misma base de datos al mismo tiempo, pueden surgir errores si no se aplica un buen nivel de aislamiento:

| Problema              | ¿Qué pasa?                                                                 | Principio afectado |
|-----------------------|----------------------------------------------------------------------------|---------------------|
| **Lectura sucia**      | Una transacción B lee datos que otra transacción A ha cambiado... pero aún no ha confirmado con COMMIT. Si finalmente A hace ROLLBACK, lo que leyó B nunca existió oficialmente.       | ❌ Aislamiento       |
| **Lectura no repetible**| Una transacción lee el mismo dato dos veces y obtiene valores distintos. A hace una consulta, B cambia el dato y hace COMMIT, A vuelve a hacer la misma consulta → el resultado ha cambiado | ❌ Aislamiento       |
| **Lectura fantasma**   | Aparecen nuevas filas en una segunda lectura dentro de la misma transacción. | ❌ Aislamiento       |

🧠 Estos problemas se controlan con **niveles de aislamiento**:  
`READ UNCOMMITTED`, `READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`

---

## 🔒 Tipos de bloqueo
El bloqueo controla quién puede leer o escribir en un dato en cada momento.

| Tipo de bloqueo                           | ¿Cuándo se aplica?                    | ¿Qué evita?                          | 
| ----------------------------------------- | ------------------------------------- | ------------------------------------ |
| **Bloqueo de lectura (shared lock)**      | Cuando alguien lee un dato            | Que otro lo modifique mientras tanto |
| **Bloqueo de escritura (exclusive lock)** | Cuando alguien va a modificar un dato | Que otros lo lean o cambien a la vez |
| **Bloqueo de tabla**                      | Sobre toda una tabla                  | Que se realicen cambios en filas     |

Problema que soluciona cada bloqueo

| Problema por concurrencia | Solución con bloqueo                                                       |
| ------------------------- | -------------------------------------------------------------------------- |
| **Lectura sucia**         | No permitir que otro lea hasta que haya `COMMIT` (bloqueo de escritura)    |
| **Lectura no repetible**  | Mantener el dato bloqueado hasta que finalice la transacción               |
| **Lectura fantasma**      | Bloquear las filas y posibles nuevas filas (requiere nivel `SERIALIZABLE`) |

---

## 🛡️ Relación con el Esquema Nacional de Seguridad (ENS)

El ENS obliga a aplicar medidas que se relacionan directamente con los principios ACID:

- 🧬 **Consistencia** ↔ Requiere mantener la integridad de los datos (**Art. 12 y 25**).
- 🧱 **Durabilidad** ↔ Respaldada por copias de seguridad, logs y tolerancia a fallos (**Art. 26-27**).
- 🔐 **Aislamiento y control de accesos** ↔ Se protege mediante autenticación, perfiles de usuario y control de sesiones (**Art. 23-24**).
- 🕵️ **Auditoría y trazabilidad** ↔ Refuerzan la **durabilidad e integridad** con supervisión activa (**Art. 24**).

## 🎯 Tips

- Una transacción **no cumple ACID** si deja la base de datos en un estado inconsistente.
- **`ROLLBACK`** deshace los cambios si algo falla → **Atomicidad**
- **`COMMIT`** guarda los cambios permanentemente → **Durabilidad**
- Las **lecturas sucias, no repetibles o fantasmas** violan el principio de **Aislamiento**
- Las **restricciones**, claves foráneas o reglas de negocio refuerzan la **Consistencia**

---