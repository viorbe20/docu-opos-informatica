---
id: db-tipos-de-raids
title: 💽 Tipos de RAID y características
sidebar_label: RAID - Tipos y características
---

RAID (Redundant Array of Independent Disks) es una tecnología que **combina varios discos duros en una sola unidad lógica** para mejorar el rendimiento, la redundancia o ambas cosas.

---

![Texto alternativo](/img/raids.png)

### 🧩 Tipos de RAID más comunes

#### 🔹 RAID 0 – Striping

- **Objetivo**: Rendimiento.
- **Cómo funciona**: Los datos se dividen entre los discos.
- **Ventaja**: Muy rápido.
- **Desventaja**: Si un disco falla, se pierde todo.
- **Capacidad útil**: Suma de todos los discos.
- **Requiere**: Mínimo 2 discos.

> 🚨 *No hay redundancia.* Ideal para tareas temporales de alto rendimiento (como edición de vídeo).

---

#### 🔸 RAID 1 – Mirroring

- **Objetivo**: Seguridad.
- **Cómo funciona**: Copia exacta de un disco en otro.
- **Ventaja**: Tolerancia a fallos total.
- **Desventaja**: Solo se aprovecha el 50% del espacio.
- **Capacidad útil**: Igual a un solo disco.
- **Requiere**: 2 discos (o múltiplos pares).

> 🛡️ *Espejito, espejito… dime quién sobrevivirá a un fallo de disco.* Ideal para servidores críticos.

---

#### 🔺 RAID 5 – Striping con paridad distribuida

- **Objetivo**: Equilibrio entre rendimiento y seguridad.
- **Cómo funciona**: Los datos y la paridad se distribuyen entre todos los discos.
- **Ventaja**: Soporta la caída de un disco.
- **Desventaja**: Requiere tiempo para reconstrucción si se cae un disco.
- **Capacidad útil**: (n-1) discos.
- **Requiere**: Mínimo 3 discos.

> 🎯 Es el “RAID democrático”: todos comparten datos y responsabilidad.

---

#### 🔰 RAID 6 – Striping con doble paridad

- **Objetivo**: Seguridad extra.
- **Cómo funciona**: Como RAID 5, pero con 2 bloques de paridad.
- **Ventaja**: Sobrevive a la caída de 2 discos.
- **Desventaja**: Más carga de escritura y menos espacio útil.
- **Capacidad útil**: (n-2) discos.
- **Requiere**: Mínimo 4 discos.

> 🔐 *Dos copias de seguridad, por si acaso…* como si llevas dos paraguas por si llueve mucho.

---

#### 🧪 RAID 10 – Combinación de RAID 1 + RAID 0

- **Objetivo**: Alto rendimiento y redundancia.
- **Cómo funciona**: Datos espejados y luego divididos (mirroring + striping).
- **Ventaja**: Muy rápido y seguro.
- **Desventaja**: Se necesita el doble de discos.
- **Capacidad útil**: 50% del total.
- **Requiere**: Mínimo 4 discos.

> ⚡ *Es la Formula 1 del RAID*: veloz y resistente, pero cara.

---

### 💣 ¿Y RAID 3 o RAID 2?

- Son **obsoletos o raramente usados**. RAID 3 usa un disco dedicado solo a la paridad (punto débil). RAID 2 trabaja a nivel de bit y requiere sincronización exacta entre discos.

> 🚫 En el examen 2022-PI te preguntaron cuál NO se puede usar si la paridad está distribuida: la respuesta correcta fue **RAID 3**:contentReference[oaicite:0]{index=0}.

---

### 📋 Comparativa rápida

| Tipo    | Redundancia | Rendimiento | Capacidad útil         | Nº mínimo discos | Comentario                          |
|---------|-------------|-------------|-------------------------|------------------|-------------------------------------|
| RAID 0  | ❌           | ⭐⭐⭐⭐        | 100%                    | 2                | Rápido pero arriesgado              |
| RAID 1  | ✅           | ⭐⭐          | 50%                     | 2                | Seguridad a costa de espacio        |
| RAID 5  | ✅           | ⭐⭐⭐         | (n-1) discos            | 3                | Equilibrio clásico                  |
| RAID 6  | ✅✅         | ⭐⭐          | (n-2) discos            | 4                | Alta disponibilidad                 |
| RAID 10 | ✅           | ⭐⭐⭐⭐        | 50%                     | 4                | Potente, caro y exigente            |

---

### 🎯 Consejos de diosa del byte para el examen

- Si te dicen “rendimiento sin tolerancia”, piensa en **RAID 0**.
- Si te hablan de **resistencia a 2 fallos**, es **RAID 6**.
- Si mencionan que se **distribuye la paridad**, **RAID 3 no**.
- Si hay que guardar datos importantes de forma segura, **RAID 1 o superior**.
- Si ves “RAID 10” y hay presupuesto, es la joya de la corona 👑.

---

¿Quieres que te lo convierta también en una ficha imprimible o en modo flashcard para repaso express? 😏✨
