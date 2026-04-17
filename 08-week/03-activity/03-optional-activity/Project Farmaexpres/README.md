# Weeks-8

## Tabla de contenido

- [Weeks-8](#weeks-8)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Estabilización Técnica y Alineación Backend/Frontend](#estabilización-técnica-y-alineación-backendfrontend)
    - [Descripción](#descripción)
  - [Historias de Usuario (HU)](#historias-de-usuario-hu)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Objetivo](#objetivo)
  - [¿Qué se hizo?](#qué-se-hizo)
  - [¿Qué no se logró?](#qué-no-se-logró)
  - [¿Qué se va a hacer?](#qué-se-va-a-hacer)
  - [Referencias de la semana](#referencias-de-la-semana)

## Estabilización Técnica y Alineación Backend/Frontend

### Descripción

Durante la Week 8 se trabajó en la consolidación del avance entregado en Week 7, enfocando el esfuerzo en estabilizar la base técnica del sistema y mantener trazabilidad por historias de usuario en backend y frontend.

En backend, se priorizó la continuidad de la estandarización en inglés, la documentación por microservicio y el soporte a historias técnicas que preparan la evolución funcional siguiente.

En frontend, se fortaleció la estructura modular por dominios, con trazabilidad de HU implementadas en gestión de usuarios y medicamentos, dejando lista la base para cerrar autenticación y movimientos en la siguiente iteración.

---

## Historias de Usuario (HU)

### Backend
- **HU-MCI** - Migración de componentes backend de español a inglés.
- **HU-doc** - Documentación técnica de microservicios (`auth-service`, `inventory-service`, `api-gateway`).
- **HU-BE-11** - Ajustes de dominio y consistencia funcional en servicios backend.
- **HU-BE-12** - Incorporación/normalización de campo de stock mínimo en productos.

🔗 [Ver Issues Backend](https://github.com/jose6668/FarmaExpres_Backend/issues)

### Frontend
- **HU-FE-01** - Gestión de usuarios (crear, editar, activar/desactivar).
- **HU-FE-03** - Cambio de contraseña desde administración.
- **HU-FE-04** - Registro de medicamentos.
- **HU-FE-05** - Actualización de medicamentos.
- **HU-FE-06** - Eliminación lógica de medicamentos.

🔗 [Ver Issues Frontend](https://github.com/Temenico/FarmaExpres-Frontend/issues)

Estas HU consolidan la base operativa del sistema para continuar con autenticación integral y trazabilidad de movimientos en semanas siguientes.

---

## Objetivo

Consolidar técnicamente lo implementado en Week 7, asegurando consistencia entre backend y frontend, trazabilidad por HU y una base estable para continuar con historias críticas de acceso, movimientos y reportes.

---

## ¿Qué se hizo?

- Se estabilizó la estructura de microservicios backend separada por repositorios.
- Se reforzó la documentación técnica en README y rutas de cada microservicio.
- Se mantuvo la estandarización de nombres en inglés para entidades, servicios y controladores.
- Se dejó trazabilidad funcional de HU técnicas orientadas a calidad del dominio y soporte de inventario.
- Se alinearon ajustes de roles/permisos para mantener coherencia entre `auth-service` e `inventory-service`.

- Se consolidó en frontend la arquitectura modular por dominios (`users`, `medicines`, `layout`, `shared`).
- Se validaron flujos funcionales de HU-FE-01, HU-FE-03, HU-FE-04, HU-FE-05 y HU-FE-06.
- Se mantuvo el esquema documental QA por HU en `doc/` con evidencias en `doc/images/`.
- Se dejó lista la base funcional para abordar HU-FE-02 y HU-FE-07 en la siguiente iteración.

---

## ¿Qué no se logró?

- No se cerró en esta semana la implementación integral de autenticación frontend (**HU-FE-02**) con cobertura completa de validaciones de sesión en todos los módulos.
- Quedó pendiente el cierre funcional completo de movimientos/historial (**HU-FE-07**) con filtros avanzados y validación por rol en todos los escenarios.
- Persisten tareas de integración end-to-end para validar completamente contratos backend a través de gateway en escenarios de carga real.

---

## ¿Qué se va a hacer?

- Completar autenticación de frontend con flujo de sesión robusto y protección total de rutas.
- Cerrar implementación y validación QA de historial de movimientos con trazabilidad por usuario.
- Fortalecer pruebas de integración entre microservicios y exposición controlada vía `api-gateway`.
- Continuar consolidando documentación técnica por HU para facilitar auditoría y seguimiento de avance semanal.

## Referencias de la semana

- [Resumen backend Week 8](docs/backend/week8-backend-hu-mci-doc-11-12.md)
- [Resumen frontend Week 8](docs/frontend/week8-frontend-hu-fe-01-06.md)
- [Backend - repositorio principal](https://github.com/jose6668/FarmaExpres_Backend)
- [Frontend - repositorio principal](https://github.com/Temenico/FarmaExpres-Frontend)
