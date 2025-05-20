---
id: modelo-osi
title: 🧱 Modelo de Capas OSI
sidebar_label: Modelo OSI
---

El **modelo OSI (Open Systems Interconnection)** es un estándar de referencia creado por ISO que define **cómo se comunican los sistemas en red en 7 capas funcionales**. Cada capa desempeña un papel específico en la transmisión de datos desde un dispositivo hasta otro, facilitando la **interoperabilidad entre diferentes sistemas y fabricantes**.

---

## 📑 Índice

* [📌 Vocabulario clave](#-vocabulario-clave)
* [📘 Introducción al modelo OSI](#-introducción-al-modelo-osi)
* [🔢 Las siete capas del modelo](#-las-siete-capas-del-modelo)
* [🛠️ Elementos de las diferentes capas](#-elementos-de-las-diferentes-capas)
* [📊 Comparativa con el modelo TCP/IP](#-comparativa-con-el-modelo-tcpip)
* [🎯 Tips](#-tips)

---

## 📌 Vocabulario clave

- **OSI**: Open Systems Interconnection, modelo teórico de red de 7 capas.
- **Encapsulación**: proceso por el cual cada capa añade su propia cabecera al mensaje.
- **Interoperabilidad**: capacidad de distintos sistemas y fabricantes para trabajar juntos.
- **Protocolo**: conjunto de reglas para comunicarse entre capas o dispositivos.

---

## 📘 Introducción al modelo OSI

El modelo OSI fue propuesto por ISO en 1984 para estandarizar la comunicación entre dispositivos. Divide este proceso en **7 capas jerárquicas**, de tal forma que **cada capa se comunica solo con la superior y la inferior**, favoreciendo la modularidad.

---

## 🔢 Las siete capas del modelo

| Nº | Capa              | Función clave                              | Elementos           | Ejemplo en la Junta de Andalucía |
|----|-------------------|--------------------------------------------|---------------------|----------------------------------|
| 7  | Aplicación        | Interacción con software del usuario. Ofrece a los programas de usuario el acceso a las capas inferiores.       | HTTP, FTP, SMTP     | Aplicaciones web como **Portafirmas**, **GIRO** o **ARIES** accesibles por navegador |
| 6  | Presentación      | Formato, cifrado, compresión. Posibilita que cada ordenador pueda utilizar su propia representación de la información.               | SSL/TLS, JPEG, XML  | Cifrado HTTPS en **Consigna** para el envío seguro de ficheros |
| 5  | Sesión            | Control de gestión de las sesiones activas                | NetBIOS, RPC        | Mantenimiento de sesión en **Plataformas de firma electrónica** |
| 4  | Transporte        | Entrega fiable de extremo a extremo. Ofrece a las capas superiores una conexión libre de errores entre un origen y un destino       | TCP, UDP            | Comunicación fiable entre sistemas en **SARA** (Sistema de Aplicaciones de Registro de Andalucía) |
| 3  | Red               | Direccionamiento lógico y enrutamiento estático o dinámico. Envía datos entre un origen y un destino aunque la información tenga que pasar por otros elementos de red    | IP, ICMP, IPSec     | Enrutamiento y VPN en la **Red Corporativa de la Junta de Andalucía (RCJA)** |
| 2  | Enlace de datos   | Control de errores. Ofrece el envío de datos libre de errores entre dos elementos de red conectados punto a punto.      | Ethernet, MAC       | Redes LAN internas en edificios administrativos (uso de **switches y segmentación**) |
| 1  | Física            | Recoge las especificaciones del envío de datos a través del medio de transmisión así como las características de la interfaz entre el elemento de red y el medio de transmisión.    | Cables, señales     | Fibra óptica y cableado estructurado en **sedes de la Junta**, gestionado por **Sandetel** |


---

## 🛠️ Elementos de las diferentes capas


**🧑‍💼 Capa 7 – Aplicación**

| Protocolo | Significa | ¿Para qué sirve? | Información clave |
|-----------|-----------|------------------|-------------------|
| **HTTP**  | HyperText Transfer Protocol | Carga de páginas web y apps como Portafirmas, GIRO | ✅ Rápido ⚠️ No cifrado (salvo HTTPS) |
| **FTP**   | File Transfer Protocol | Transferencia de archivos entre sistemas | ❌ Más lento, ✅ Fiable, ⚠️ No seguro por defecto |
| **SMTP**  | Simple Mail Transfer Protocol | Envío de correos electrónicos (notificaciones electrónicas) | ✅ Fiable, ⚠️ Solo para enviar |

---

**🎨 Capa 6 – Presentación**

| Protocolo | Significa | ¿Para qué sirve? | Información clave |
|-----------|-----------|------------------|-------------------|
| **SSL**   | Secure Sockets Layer | Capa de cifrado (obsoleta) | ❌ Menos segura que TLS |
| **TLS**   | Transport Layer Security | Cifra HTTPS, FTPS, SMTP seguro | ✅ Estándar actual |

---

**🧩 Capa 5 – Sesión**

| Protocolo | Significa | ¿Para qué sirve? | Información clave |
|-----------|-----------|------------------|-------------------|
| **NetBIOS** | Network Basic Input/Output System | Controla sesiones de red (Windows) | ⚠️ Antiguo pero funcional |
| **RPC**     | Remote Procedure Call | Ejecuta funciones a través de la red | ✅ Usado en apps distribuidas |

---

**📦 Capa 4 – Transporte**

| Protocolo | Significa | ¿Para qué sirve? | Información clave |
|-----------|-----------|------------------|-------------------|
| **TCP**   | Transmission Control Protocol | Entrega fiable de datos | ✅ Fiable, ❌ Más lento |
| **UDP**   | User Datagram Protocol | Entrega rápida sin garantía | ✅ Rápido, ❌ No fiable |

---

**🌍 Capa 3 – Red**

| Protocolo | Significa | ¿Para qué sirve? | Información clave |
|-----------|-----------|------------------|-------------------|
| **IP**    | Internet Protocol | Direccionamiento y enrutamiento | ✅ Base de toda red |
| **ICMP**  | Internet Control Message Protocol | Diagnóstico y control de red (ping, traceroute) | ✅ Ligero, ❌ No lleva datos |
| **IPSec** | IP Security | Cifrado de tráfico IP (VPNs) | ✅ Seguridad de red |

---

**🔗 Capa 2 – Enlace de datos**

| Protocolo | Significa | ¿Para qué sirve? | Información clave |
|-----------|-----------|------------------|-------------------|
| **Ethernet** | – | Transmisión dentro de LANs | ✅ Estándar común |
| **MAC**      | Media Access Control | Dirección física de cada dispositivo | ✅ Identificador único |

---

**🧯 Capa 1 – Física

| Elemento | Significa | ¿Para qué sirve? | Información clave |
|----------|-----------|------------------|---------|
| **Cables** | – | Transmiten señales físicas | Fibra óptica en sedes JA |
| **Señales**| – | Voltajes, pulsos, ondas | Lo que viaja por los cables |

---

## 🧠 Comparaciones clave

- **TCP vs UDP**: TCP es más fiable pero más lento. UDP es más rápido, sin garantía.
- **HTTP vs FTP**: HTTP carga páginas, FTP transfiere archivos (más pesado).
- **TLS vs SSL**: TLS es la versión segura y moderna. SSL está obsoleto.
- **IP vs ICMP**: IP lleva datos, ICMP solo mensajes de control.
- **Ethernet vs MAC**: Ethernet es el protocolo; MAC es la dirección de hardware.
- **ICMP ≠ datos**: solo sirve para diagnósticos como `ping`.

---

---

## 📊 Comparativa con el modelo TCP/IP

| OSI                 | TCP/IP                  |
|---------------------|--------------------------|
| 7. Aplicación       | Aplicación               |
| 6. Presentación     |     ↘︎                   |
| 5. Sesión           |       ↘︎                 |
| 4. Transporte       | Transporte               |
| 3. Red              | Internet                 |
| 2. Enlace de datos  | Acceso a la red (Link)   |
| 1. Física           | Acceso a la red (Link)   |

> 🔍 TCP/IP tiene 4 capas. Combina varias capas OSI en una sola.

---

## 🎯 Tips

- Si te preguntan **qué capa enruta** → Red  
- Si te preguntan **qué capa cifra** → Presentación  
- Si ves **MAC, Ethernet** → Enlace de datos  
- Si es **TCP, UDP** → Transporte
- Si te hablan de VPN, IPsec o enrutamiento → Capa 3
- Si te mencionan HTTPS, certificados o cifrado → Capa 6
- Si te preguntan por servicios internos como Portafirmas o GIRO → Capa 7
- Si hay problemas de red física o hardware → Capa 1 o 2
Elementos de las diferentes capas

---