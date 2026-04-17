# Weeks-10

## Tabla de contenido

- [Weeks-10](#weeks-10)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Consolidacion Backend y Frontend](#consolidacion-backend-y-frontend)
    - [Descripcion](#descripcion)
  - [Historias de Usuario (HU)](#historias-de-usuario-hu)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Objetivo](#objetivo)
  - [Que se hizo?](#que-se-hizo)
  - [Que no se logro?](#que-no-se-logro)
  - [Que se va a hacer?](#que-se-va-a-hacer)
  - [HU-017 - Diseño y versionado de la base de datos](#hu-017---diseño-y-versionado-de-la-base-de-datos)

## Consolidacion Backend y Frontend

### Descripcion

Durante la Week 10 se enfoco el trabajo en la ejecucion y trazabilidad de historias de usuario en las ramas de desarrollo de backend y frontend. Se tomo como base la carpeta `docs/` del backend y la carpeta `doc/` del frontend para organizar evidencia, avances y resultados tecnicos.

El foco principal fue cerrar las historias planificadas de backend desde **HU-011** hasta **HU-016**, incluyendo **HU-AC02** y los cambios registrados en ramas de apoyo **Cambios_Rama_HU-ACFE-01-dev**, **Cambios_Rama_HU-ACFE-02-dev** y **Cambios_Rama_HU-ACFE-03-dev**.

En paralelo, desde frontend se consolidaron las historias QA de esta semana, especificamente desde **HU-QA-FE-08** hasta **HU-QA-FE-12**, con su documentacion correspondiente en la rama `Develop`.

---

## Historias de Usuario (HU)

### Backend
- **HU-011** - Implementada y registrada en `docs/` sobre rama `develop`.
- **HU-012** - Implementada y registrada en `docs/` sobre rama `develop`.
- **HU-013** - Implementada y registrada en `docs/` sobre rama `develop`.
- **HU-014** - Implementada y registrada en `docs/` sobre rama `develop`.
- **HU-015** - Implementada y registrada in `docs/` sobre rama `develop`.
- **HU-016** - Implementada y registrada en `docs/` sobre rama `develop`.
- **HU-AC02** - Ajustes y validaciones incorporadas en backend.
- **Cambios_Rama_HU-ACFE-01-dev** - Integracion de cambios en flujo backend.
- **Cambios_Rama_HU-ACFE-02-dev** - Integracion de cambios en flujo backend.
- **Cambios_Rama_HU-ACFE-03-dev** - Integracion de cambios en flujo backend.

Link: [Ver issues backend](https://github.com/jose6668/FarmaExpres_Backend/issues)

Link: [Ver documentacion backend (`develop/docs`)](https://github.com/jose6668/FarmaExpres_Backend/tree/develop/docs)

### Frontend
- **HU-QA-FE-08** - Implementada y documentada en `doc/`.
- **HU-QA-FE-09** - Implementada y documentada en `doc/`.
- **HU-QA-FE-10** - Implementada y documentada en `doc/`.
- **HU-QA-FE-11** - Implementada y documentada en `doc/`.
- **HU-QA-FE-12** - Implementada y documentada en `doc/`.

Link: [Ver issues frontend](https://github.com/Temenico/FarmaExpres-Frontend/issues)

Link: [Ver documentacion frontend (`Develop/doc`)](https://github.com/Temenico/FarmaExpres-Frontend/tree/Develop/doc)

---

## Objetivo

Consolidar la entrega de Week 10 cerrando las historias de usuario priorizadas en backend y frontend, manteniendo trazabilidad en documentacion tecnica y QA dentro de las ramas activas de desarrollo.

Tambien se busca dejar alineados los cambios funcionales con sus evidencias para facilitar revision de equipo, continuidad de implementacion y control de calidad en las siguientes iteraciones.

---

## Que se hizo?

- Se completo la implementacion del bloque backend comprendido entre **HU-011** y **HU-016**.
- Se incorporaron y registraron los ajustes de **HU-AC02** dentro del flujo de trabajo de backend.
- Se integraron los cambios provenientes de las ramas **Cambios_Rama_HU-ACFE-01-dev**, **Cambios_Rama_HU-ACFE-02-dev** y **Cambios_Rama_HU-ACFE-03-dev**.
- Se actualizo la documentacion de soporte en la carpeta `docs/` de la rama `develop` en el repositorio backend.
- Se organizo la trazabilidad de entregables tecnicos para revision por historias de usuario y cambios de rama.
- En frontend se ejecutaron las historias **HU-QA-FE-08** a **HU-QA-FE-12** durante la Week 10.
- Se dejo evidencia documental por cada historia en la carpeta `doc` de la rama `Develop`.
- Se fortalecio la validacion QA de los flujos intervenidos para asegurar consistencia visual y funcional.
- Se mantuvo coherencia entre implementacion, validacion y documentacion de resultados para el frente de interfaz.

---

## Que no se logro?

- No se cerro al 100% la validacion integral de extremo a extremo entre todos los cambios de backend y los escenarios QA de frontend.
- Quedaron ajustes menores pendientes de depuracion cruzada entre algunas ramas de soporte y la rama `develop`.
- En ciertos entregables todavia falta robustecer evidencias complementarias de pruebas no funcionales (rendimiento y comportamiento en escenarios limite).
- Se requiere ampliar la cobertura de pruebas de regresion para garantizar que los cambios recientes no impacten funcionalidades historicas.

## Que se va a hacer?

- Ejecutar una ronda final de validaciones integradas backend-frontend para confirmar estabilidad del cierre de Week 10.
- Completar la homologacion de documentacion pendiente en `docs/` y `doc/` con enfoque en trazabilidad por HU.
- Fortalecer pruebas de regresion sobre las historias implementadas en backend (**HU-011** a **HU-016** y **HU-AC02**) y frontend (**HU-QA-FE-08** a **HU-QA-FE-12**).
- Consolidar en `develop` los ajustes restantes de ramas de apoyo para minimizar deuda tecnica de integracion.
- Preparar la base tecnica para la siguiente iteracion, asegurando continuidad entre implementacion, QA y documentacion.

---

## HU-017 - Diseño y versionado de la base de datos

**¿Qué resuelve?**
La HU-017 implementa una base de datos versionada, eliminando la dependencia de scripts manuales y permitiendo que cada cambio quede registrado, sea replicable y reversible. Esto reduce errores, facilita la reconstrucción de ambientes y asegura que todos los integrantes trabajen sobre la misma base.

**¿Por qué es clave para el producto?**
- Permite crecer de forma ordenada y auditable.
- Mejora la seguridad separando roles técnicos y de negocio.
- Facilita el despliegue automatizado y la colaboración entre equipos.
- Reduce el riesgo de inconsistencias y caídas por configuraciones erróneas.

**Evidencia y documentación:**
- [Documento HU-017 (objetivo, problema, alcance e implementación)](https://github.com/jose6668/FarmaExpres_Backend/blob/HU-017-dev/docs/Changes/HU-017-diseno-y-versionado-base-de-datos-farmaexpres.md)
- [Evidencia bootstrap.sql](https://github.com/jose6668/FarmaExpres_Backend/blob/HU-017-dev/database/bootstrap.sql)
- [Changelogs y roles técnicos](https://github.com/jose6668/FarmaExpres_Backend/tree/HU-017-dev/database/)
