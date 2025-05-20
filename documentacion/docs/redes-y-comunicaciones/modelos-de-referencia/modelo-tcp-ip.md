---
id: modelo-tcp-ip
title: 📡 Modelo TCP/IP
sidebar_label: Modelo TCP/IP
---

El **modelo TCP/IP** (Transmission Control Protocol / Internet Protocol) es el **modelo de referencia práctico** que define cómo se comunican los dispositivos en una red. A diferencia del modelo OSI, que tiene 7 capas, **TCP/IP tiene solo 4 capas**, y es el que se usa realmente en Internet y redes corporativas.

Este modelo permite entender la arquitectura funcional de los sistemas de red y cómo se organizan los protocolos en capas para garantizar el envío y recepción de datos entre dispositivos.

---

## 📑 Índice

* [📌 Vocabulario clave](#-vocabulario-clave)
* [📘 Introducción al modelo TCP/IP](#-introducción-al-modelo-tcpip)
* [🔢 Las 4 capas del modelo TCP/IP](#-las-4-capas-del-modelo-tcpip)
* [📊 Comparativa TCP/IP vs OSI](#-comparativa-tcpip-vs-osi)
* [🏛️ Ejemplos en la Junta de Andalucía](#-ejemplos-en-la-junta-de-andalucía)
* [🎯 Tips para el examen A2](#-tips-para-el-examen-a2)

---

## 📌 Vocabulario clave

- **TCP/IP**: Conjunto de protocolos de red usados para Internet.
- **Encapsulación**: Proceso de envolver datos con cabeceras de cada capa.
- **Dirección IP**: Identificador lógico de un dispositivo en red.
- **Puerto**: Punto lógico usado por protocolos de capa de aplicación.

---

## 📘 Introducción al modelo TCP/IP

El modelo TCP/IP fue desarrollado por el Departamento de Defensa de EE.UU. y se convirtió en el estándar de facto para las comunicaciones en red. Define **cómo los datos viajan entre dispositivos** dividiendo el proceso en **4 capas funcionales**:

1. Aplicación  
2. Transporte  
3. Internet  
4. Acceso a la red

Cada capa tiene protocolos específicos que se encargan de funciones concretas.

---

## 🔢 Las 4 capas del modelo TCP/IP

| Capa TCP/IP        | Función                                   | Protocolos comunes           | Capas OSI equivalentes        |
|--------------------|--------------------------------------------|------------------------------|-------------------------------|
| **1. Aplicación**   | Interacción directa con el usuario         | HTTP, FTP, SMTP, DNS         | Capas 5, 6 y 7 (Aplicación, Presentación, Sesión) |
| **2. Transporte**   | Entrega de datos extremo a extremo         | TCP, UDP                     | Capa 4 (Transporte)           |
| **3. Internet**     | Direccionamiento y enrutamiento            | IP, ICMP, ARP                | Capa 3 (Red)                  |
| **4. Acceso a red** | Transmisión física y control de enlace     | Ethernet, Wi-Fi, PPP         | Capas 1 y 2 (Física y Enlace) |

---

## 📊 Comparativa TCP/IP vs OSI

| Función                    | Modelo OSI             | Modelo TCP/IP         |
|----------------------------|------------------------|------------------------|
| Aplicación                 | Capas 5, 6 y 7         | Capa Aplicación        |
| Transporte de datos        | Capa 4                 | Capa Transporte        |
| Enrutamiento               | Capa 3                 | Capa Internet          |
| Comunicación física        | Capas 1 y 2            | Capa de acceso a red   |
| Número de capas            | 7                      | 4                      |
| Uso real                   | Referencial            | ✅ Implementado        |

---

## 🏛️ Ejemplos en la Junta de Andalucía

| Capa TCP/IP        | Ejemplo en la Junta de Andalucía                                                 |
|--------------------|-----------------------------------------------------------------------------------|
| Aplicación         | Aplicaciones como **Portafirmas**, **GIRO**, **ARIES** usando protocolos como HTTP o SMTP |
| Transporte         | Uso de **TCP** para asegurar transmisión fiable entre aplicaciones administrativas |
| Internet           | **IP e ICMP** en servicios de red de la **Red Corporativa de la Junta (RCJA)** |
| Acceso a red       | Conexiones Ethernet y WiFi en edificios administrativos; gestionadas por **Sandetel** |

---

## 🎯 Tips para el examen A2

- **TCP/IP tiene 4 capas**, no 7.
- **IP e ICMP** van en la **capa Internet**, no en la de transporte.
- **HTTP, FTP, SMTP** están en la capa Aplicación.
- Si ves **puertos** → estás en la **capa de transporte** (TCP o UDP).
- **TCP** = fiable, lento | **UDP** = rápido, no fiable.
- **Red real** = usa **TCP/IP**; OSI es conceptual.

> 🔍 Si te preguntan cuál se usa de verdad: **TCP/IP**  
> Si te preguntan por capas puras y funciones académicas: **OSI**

---

¿Quieres ahora que lo enlace desde tu documento de modelo OSI como comparación, o te lo preparo con un esquema visual que relacione ambos? 😏📘💡
