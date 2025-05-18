---
id: ens-art-33
title: 🛡️ Art.33 - Capacidad de respuesta a incidentes de seguridad
sidebar_label: Art.33 - Capacidad de respuesta
---

Establece la coordinación nacional de la respuesta a incidentes de seguridad, liderada por el CCN-CERT, incluyendo la notificación, evaluación y reconexión tras incidentes en el sector público, defensa y sector privado. 

---
### 🔐 Nomenclatura
  ESPDEF-CERT:Equipo de Respuesta a Incidentes de Seguridad de la Defensa Nacional.
  👉 Es el CERT del ámbito militar, dependiente del Mando Conjunto del Ciberespacio (MCCE).

  CCN (Centro Criptológico Nacional):Organismo del CNI, responsable de la seguridad de la información clasificada y de los sistemas de las Administraciones Públicas.
  👉 Creador y coordinador del ENS y del CCN-CERT.

  CCN-CERT (Computer Emergency Response Team del CCN):
  👉 Es el equipo de respuesta nacional para la Administración Pública, coordinado por el CCN.

  CSIRT (Computer Security Incident Response Team):
  👉 Son los equipos técnicos que responden a incidentes de seguridad informática.
  Cada entidad puede tener su propio CSIRT (por ejemplo, un ministerio, una universidad…).

  INCIBE (Instituto Nacional de Ciberseguridad):
  Entidad pública adscrita al Ministerio de Asuntos Económicos y Transformación Digital.
  👉 Gestiona el INCIBE-CERT, que da soporte a ciudadanos y empresas privadas.

  INCIBE-CERT:
  Computer Emergency Response Team del INCIBE.
  👉 Atiende incidentes de empresas privadas y ciudadanía, y coopera con el CCN-CERT cuando afecta a servicios públicos.

  MCCE (Mando Conjunto del Ciberespacio):
  Órgano del Ministerio de Defensa que lidera las operaciones y capacidades de ciberdefensa militar.
  👉 Dentro de él está el ESPDEF-CERT.

### 🧩 33.1. Encargados de respuesta ante incidentes

El **CCN-CERT** (Computer Emergency Response Team), dependiente del CCN, coordina la respuesta técnica ante incidentes de seguridad, sin anular ni quita el trabajo que puedan hacer otras administraciones por su cuenta.

---

### 📨 33.2. Obligación de notificar incidentes

Las entidades del sector público **deben notificar al CCN** los incidentes que tengan un **impacto significativo**, según lo establecido en la **Instrucción Técnica de Seguridad** correspondiente.

> 📌 Lo dice también el artículo 19.4 del Real Decreto-ley 12/2018.

---

### 🏛️ 33.3. Caso de incidentes en operadores críticos

Los **CSIRT** de referencia se coordinan con el **Ministerio del Interior** a través de la **Oficina de Coordinación de Ciberseguridad**.

---

### 🪖 33.4. Incidentes con impacto en Defensa Nacional

Si el incidente puede afectar al Ministerio de Defensa o a la operatividad de las Fuerzas Armadas, se notifica al **CSIRT de referencia**, que contactará con el **ESPDEF-CERT** (Mando Conjunto del Ciberespacio). El **ESPDEF-CERT** será informado de la evolución del incidente y podrá participar en la supervisión.

---

### 🤝 33.5. Coordinación nacional de CSIRT

El **CCN coordina técnicamente** a todos los **CSIRT** del sector público en redes y sistemas de información.

---

### 🔁 33.6. Reconexión tras incidente

Después de un incidente:

- El **CCN-CERT** analiza el riesgo de reconexión y define:
  - Procedimientos
  - Salvaguardas
- La **Secretaría General de Administración Digital** autoriza la reconexión a servicios comunes si el informe del CCN-CERT lo permite.
- Si afecta a medios bajo la Intervención General del Estado, **ella también interviene** en la autorización.

---

### 🏢 33.7. Sector privado y notificación

Empresas privadas que prestan servicios a la Administración deben notificar los incidentes a:

- El **INCIBE-CERT** (centro de referencia para ciudadanos y entidades privadas).
- A través de su propio **CSIRT**.

Luego, el INCIBE-CERT informará al **CCN-CERT**, según lo dispuesto en:

- Artículos 9, 10 y 11 del **RD 43/2021**
- Plataforma de Notificación y Seguimiento de Ciberincidentes

---

### 🧭 Resumen de ideas clave

| Elemento                              | Detalle                                                                 |
|--------------------------------------|-------------------------------------------------------------------------|
| Quién responde en general            | CCN-CERT (respuesta nacional e internacional)                           |
| Notificación obligatoria             | Entidades públicas → CCN si hay impacto significativo                   |
| Casos críticos                       | CSIRT + Ministerio del Interior                                         |
| Casos de Defensa Nacional            | CSIRT de referencia → ESPDEF-CERT (Mando Ciberespacio)                  |
| Reconexión tras incidente            | Autorizada por Secretaría General de Administración Digital             |
| Riesgo de reconexión                 | Evaluado por CCN-CERT con procedimientos y salvaguardas                 |
| Entidades privadas                   | Notifican a INCIBE-CERT → que informa al CCN-CERT                       |
| Base normativa adicional             | RD-ley 12/2018 y RD 43/2021                                             |

---
