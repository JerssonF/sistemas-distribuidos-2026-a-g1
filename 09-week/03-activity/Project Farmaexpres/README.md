# Weeks-9

## Tabla de contenido

- [Weeks-9](#weeks-9)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Consolidación de HU Backend y QA Frontend](#consolidación-de-hu-backend-y-qa-frontend)
    - [Descripción](#descripción)
  - [Historias de Usuario (HU)](#historias-de-usuario-hu)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Objetivo](#objetivo)
  - [¿Qué se hizo?](#qué-se-hizo)
  - [¿Qué no se logró?](#qué-no-se-logró)
  - [¿Qué se va a hacer?](#qué-se-va-a-hacer)
  - [Referencias de la semana](#referencias-de-la-semana)

## Consolidación de HU Backend y QA Frontend

### Descripción

Durante la Week 9 se priorizó la consolidación documental de historias de usuario en backend y la validación QA de flujos críticos en frontend.

En backend, el foco se ubicó en la trazabilidad de las HU `HU-007` a `HU-011` en la rama `Develop`, dentro de `docs/Changes`, dejando definidos alcance, endpoints y criterios de aceptación por cada historia.

En frontend, el alcance real de la semana se concentró en dos entregas QA documentadas en `doc/`: `HU-QA-FE-02` (inicio de sesión) y `HU-QA-FE-07` (historial de movimientos), con evidencias funcionales y validaciones por caso de prueba.

---

## Historias de Usuario (HU)

### Backend
- **HU-007** - Consulta de movimientos por categoría (`inventory-service`)
- **HU-008** - Alertas por rango de vencimiento (`alert-service`)
- **HU-009** - Resumen de stock y valor total de productos activos (`inventory-service`)
- **HU-010** - DTO para tabla de inventario activo (`inventory-service`)
- **HU-011** - Filtro de movimientos por usuario (`inventory-service`)

🔗 [Ver Issues Backend](https://github.com/jose6668/FarmaExpres_Backend/issues)

### Frontend
- **HU-QA-FE-02** - Autenticación, inicio de sesión y control de rutas privadas.
- **HU-QA-FE-07** - Historial de movimientos con filtros, trazabilidad y control de acceso por rol.

🔗 [Ver Issues Frontend](https://github.com/Temenico/FarmaExpres-Frontend/issues)

Estas HU sostienen el avance funcional de seguridad de acceso y trazabilidad de inventario, manteniendo coherencia entre contratos backend y comportamiento de interfaz.

---

## Objetivo

Ordenar la documentación de Week 9 con una vista clara de avance por capas (backend/frontend), asegurando:

- Trazabilidad técnica por historia de usuario.
- Claridad sobre lo implementado versus lo que sigue en desarrollo.
- Referencia directa a issues, documentos fuente y evidencias QA.
- Base consistente para planificación de la siguiente iteración.

---

## ¿Qué se hizo?

- Se consolidó en backend la documentación de `HU-007` a `HU-011` en `Develop/docs/Changes`.
- Se dejó definido para cada HU su objetivo funcional, criterios de aceptación y propuestas de endpoint.
- Se documentaron ajustes y notas técnicas relacionadas con reportes de inventario y soporte FEFO para consumo frontend.
- Se mantuvo la trazabilidad de componentes a intervenir por historia (`Controller`, `Service`, `Repository`, DTO y pruebas).

- Se implementó y documentó QA de **HU-QA-FE-02** en frontend:
  - Validación de formulario de login.
  - Integración con autenticación y persistencia de token.
  - Redirección post-login y protección de rutas privadas.
- Se implementó y documentó QA de **HU-QA-FE-07** en frontend:
  - Visualización de historial de movimientos.
  - Filtros por tipo, fechas y usuario.
  - Restricción por rol y validación de estados en tabla.
- Se consolidaron evidencias visuales por casos de prueba en `doc/images/`.

---

## ¿Qué no se logró?

- En backend, varias HU del bloque `HU-007` a `HU-011` aún aparecen en estado de planificación o avance parcial dentro de la documentación, por lo que falta cierre técnico completo en código y pruebas.
- Quedan pendientes validaciones integrales de integración entre microservicios y exposición definitiva de algunos endpoints a través del gateway.

- En frontend, el alcance de esta semana se limitó a `HU-QA-FE-02` y `HU-QA-FE-07`.
- No se abordaron en esta iteración otras HU de frontend fuera del alcance definido para Week 9.

---

## ¿Qué se va a hacer?

- Completar la implementación técnica en backend de las HU `HU-007` a `HU-011` que aún estén en estado de planificación o ejecución parcial.
- Cerrar pruebas unitarias/integración por endpoint y validar consumo end-to-end vía `api-gateway`.
- Continuar el endurecimiento de contratos API para reportes y filtros de movimientos.

- Extender en frontend la cobertura funcional más allá de `HU-QA-FE-02` y `HU-QA-FE-07` según la priorización de la siguiente semana.
- Mantener el esquema de trabajo por HU con evidencia QA y trazabilidad documental por entrega.

## Referencias de la semana

- [Resumen backend Week 9](docs/backend/week9-backend-hu-007-011.md)
- [Resumen frontend Week 9](docs/frontend/week9-frontend-hu-qa-fe-02-07.md)
- [Backend - carpeta docs/Changes (Develop)](https://github.com/jose6668/FarmaExpres_Backend/tree/Develop/docs/Changes)
- [Frontend - carpeta doc (Develop)](https://github.com/Temenico/FarmaExpres-Frontend/tree/Develop/doc)
