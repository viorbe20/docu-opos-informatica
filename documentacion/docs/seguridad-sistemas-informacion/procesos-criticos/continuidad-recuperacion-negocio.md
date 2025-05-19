---

id: continuidad-recuperacion-negocio
title: 🛠️ Continuidad y recuperación del negocio
sidebar\_label: Continuidad y recuperación del negocio
---

El documento recoge los conceptos clave relacionados con los Planes de Continuidad del Negocio (BCP) y los Planes de Recuperación ante Desastres (DRP), 
esenciales en entornos críticos donde la disponibilidad y la recuperación son vitales.

---

## 📚 Índice

* [📌 Vocabulario Clave](#-vocabulario-clave)
* [🧠 Qué son BCP y DRP](#-qué-son-bcp-y-drp)
* [🧩 RPO y RTO](#-rpo-y-rto)
* [⚙️ Diferencias entre continuidad y recuperación](#-diferencias-entre-continuidad-y-recuperación)
* [📏 Requisitos en el ENS](#-requisitos-en-el-ens)
* [🎯 Consejos para el examen](#-consejos-para-el-examen)

---

## 📌 Vocabulario Clave

* **BCP (Business Continuity Plan)**: Plan para asegurar que la organización **siga funcionando** durante una interrupción grave. Idea: sobrevivir y seguir trabajando.
* **DRP (Disaster Recovery Plan)**: Plan para **recuperar los sistemas** después de una interrupción o desastre. Idea: restaurar lo que se ha roto.
* **RPO (Recovery Point Objective)**: Tiempo máximo de **datos que se pueden perder** sin afectar críticamente al negocio.
* **RTO (Recovery Time Objective)**: Tiempo máximo permitido para que los servicios o sistemas **se restauren**.
* **Alta disponibilidad**: Capacidad de un sistema para seguir operativo incluso si se produce un fallo.
* **Resiliencia**: Capacidad del sistema para adaptarse y recuperarse rápidamente ante incidentes.
* **MTTR (Mean Time To Repair)**: Tiempo medio necesario para reparar un sistema y devolverlo a funcionamiento tras un fallo.
* **MTBF (Mean Time Between Failures)**: Tiempo medio entre fallos consecutivos de un sistema. Cuanto mayor, más fiable es.

---

## 🧠 Qué son BCP y DRP

* **BCP (Plan de Continuidad del Negocio)**: Estrategia para **mantener el funcionamiento** de los procesos críticos.
* **DRP (Plan de Recuperación ante Desastres)**: Estrategia para **recuperar sistemas y datos** tras un fallo, ciberataque o desastre físico.

---

## 🧩 RPO y RTO

| Concepto | Qué mide                         | Pregunta clave                                   | Ejemplo práctico       |
| -------- | -------------------------------- | ------------------------------------------------ | ---------------------- |
| **RPO**  | Máxima cantidad de datos que pueden perderse sin impacto crítico | ¿Qué antigüedad pueden tener mis backups?        | "Última copia hace 4h" |
| **RTO**  | Tiempo máximo que puede estar el servicio inactivo               | ¿Cuánto tiempo tengo para volver a estar online? | "Máximo 2h de caída"   |

---

## ⚙️ Diferencias entre continuidad y recuperación

| BCP (Continuidad)                   | DRP (Recuperación)              |
| ----------------------------------- | ------------------------------- |
| Actúa **durante** el incidente      | Actúa **después** del incidente |
| Mantiene los **servicios mínimos**  | Restaura **la infraestructura** |
| Puede incluir soluciones temporales | Incluye restauración total      |

---

## 📜 Artículos y anexos clave del ENS 

El ENS (Real Decreto 311/2022) establece medidas para garantizar la disponibilidad, integridad, autenticidad, confidencialidad y trazabilidad de los sistemas. 

En cuanto a continuidad y recuperación, se centra en que las AAPP deben estar preparadas para afrontar incidentes sin interrumpir los servicios esenciales.

🔹 Artículo 12. Política de seguridad y requisitos mínimos
    
Menciona que las organizaciones deben incluir extremos como objetivos de la organización, marco regulatorio, roles o funciones de seguridad,
estructura y composición del comité  para la gestión y coordinación de la seguridad, detallando su ámbito de responsabilidad, directrices para la estructuración de la documentación de seguridad, 
del sistema y los riesgos que se derivan del tratamiento de los datos personales.

Según el nivel organizativo establece lo siguiente:

| **Organización / Nivel**                                     | **¿Debe tener política propia?** | **¿Quién la aprueba?**                            | **Observaciones**                                                   |
| ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| **Cada Administración Pública**                              | ✅ Sí                             | Órgano competente de esa administración           | Obligatoria para cada administración                                |
| **Órganos / Entidades con personalidad jurídica**            | ✅ Sí                             | Órgano competente de la entidad                   | Puede integrarse en otra si así se decide                           |
| **Ministerios (AGE)**                                        | ✅ Sí                             | Persona titular del Ministerio                    | Cada uno tiene la suya                                              |
| **Secretaría Gral. de Administración Digital (MEyTD)**       | ✅ Sí                             | Titular de la Secretaría General                  | Siempre política propia                                             |
| **Organismos públicos o sector institucional estatal**       | 🔶 Opcional                       | Órgano competente de ese organismo                | Puede tener la suya o quedar bajo la del ministerio correspondiente |
| **Centros directivos de la AGE** (con servicios compartidos) | 🔶 Opcional                       | Órgano competente                                 | Política coherente con el Departamento                              |
| **Municipios**                                               | 🟡 Recomendado                   | Entidad local comarcal/provincial correspondiente | Puede ser una política común                                        |


💡 Esto implica tener planes de continuidad documentados, y no solo un backup olvidao en un cajón.

🔹 Categoría del sistema (Baja, Media, Alta)

El nivel de exigencia de estas medidas varía según la categoría del sistema.

| **Categoría** | **¿Requiere BCP/DRP formal?**            | **Frecuencia de prueba**                |
| ------------- | ---------------------------------------- | --------------------------------------- |
| 🟥 **Alta**   | ✅ Sí, con pruebas periódicas y auditoría | 🔁 Al menos una vez al año              |
| 🟧 **Media**  | ✅ Sí, pero con menor nivel de exigencia  | 📆 Frecuencia recomendada               |
| 🟩 **Baja**   | 🟡 Se recomienda, pero no es obligatorio | 🕒 A criterio del organismo responsable |

## 🧩 Principios de la política de seguridad del ENS

| **Letra** | **Principio**                                                         | **Definición breve**                                                           |
| --------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| a)        | **Organización e implantación del proceso de seguridad**              | Establecer quién hace qué, cómo y cuándo para proteger los sistemas.           |
| b)        | **Análisis y gestión de los riesgos**                                 | Identificar amenazas y vulnerabilidades para tomar decisiones informadas.      |
| c)        | **Gestión de personal**                                               | Definir perfiles, autorizaciones y responsabilidades del personal.             |
| d)        | **Profesionalidad**                                                   | Personal formado, cualificado y actualizado en materia de seguridad.           |
| e)        | **Autorización y control de accesos**                                 | Permitir solo los accesos necesarios, bajo control y registro.                 |
| f)        | **Protección de las instalaciones**                                   | Seguridad física de los equipos y zonas donde se procesan datos.               |
| g)        | **Adquisición de productos y contratación de servicios de seguridad** | Asegurar que productos y servicios cumplen requisitos de seguridad.            |
| h)        | **Mínimo privilegio**                                                 | Cada usuario solo debe tener los permisos estrictamente necesarios.            |
| i)        | **Integridad y actualización del sistema**                            | Mantener los sistemas libres de alteraciones indebidas y siempre actualizados. |
| j)        | **Protección de la información almacenada y en tránsito**             | Garantizar la confidencialidad e integridad de los datos, estén donde estén.   |
| k)        | **Prevención ante otros sistemas de información interconectados**     | Controlar los riesgos que vienen de otras redes o sistemas conectados.         |
| l)        | **Registro de la actividad y detección de código dañino**             | Monitorizar el sistema y detectar acciones sospechosas o malware.              |
| m)        | **Incidentes de seguridad**                                           | Tener capacidad para detectar, responder y aprender de los incidentes.         |
| n)        | **Continuidad de la actividad**                                       | Asegurar que los servicios críticos sigan funcionando ante fallos.             |
| ñ)        | **Mejora continua del proceso de seguridad**                          | Revisar y mejorar constantemente las medidas de seguridad implantadas.         |



📊 ¿Y qué pasa con MTTR y MTBF?

Aunque el ENS no menciona literalmente “MTTR” ni “MTBF”, están implícitos en su enfoque de continuidad operativa y disponibilidad:

- MTTR se relaciona con el tiempo de reparación tras incidente → RTO realista.

- MTBF afecta al nivel de fiabilidad esperado del sistema → influye en la planificación de redundancias.

---

## 🎯 Tips

* Si preguntan por pérdida de datos → **RPO**.
* Si preguntan por tiempo de inactividad → **RTO**.
* Si hablan de "seguir prestando servicios aunque todo falle" → **BCP**.
* Si hablan de "volver a un estado operativo" → **DRP**.
* Ojo si dicen: “requisitos mínimos del ENS” → piensa en continuidad y recuperación.

