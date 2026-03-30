
# Week-6

## Direccionamiento HTML

- Archivo: [WEEK 6.html](./WEEK%206.html)
- Descripcion: muestra un resumen visual del estado de los ADR (logros, pendientes y acciones siguientes).

# ADR – Arquitectura de Software

Cada Rol deberá aplicar **5 ADR (Architecture Decision Records)** dentro del proyecto.

Los ADR pueden estar relacionados con:

- Patrones de diseño
- Patrones estructurales
- Patrones comportamentales

## Proceso para los ADR

1. Identificación de patrones
2. Análisis del proyecto para determinar qué ADR pueden aplicarse
3. Identificación de antipatrones
4. Detección de segmentos de código con malas prácticas
5. Diseño e implementación del ADR
6. Análisis del impacto del ADR sobre el sistema

- Listar todos los ADR posibles del proyecto.
- De esa lista, cada Rol debera implementar **3 ADR**.
- Entregar un **informe de impacto**, explicando cómo cada ADR mejora el sistema.

## Listado de ADR

 - [ADR-001-secretos-configuracion](docs/ADR/ADR-001-secretos-configuracion.md)
 - [ADR-002-rutas-gateway](docs/ADR/ADR-002-rutas-gateway.md)
 - [ADR-003-integracion-gateway-compose](docs/ADR/ADR-003-integracion-gateway-compose.md)
 - [ADR-004-endurecimiento-seguridad](docs/ADR/ADR-004-endurecimiento-seguridad.md)
 - [ADR-005-contratos-api](docs/ADR/ADR-005-contratos-api.md)
 - [ADR-006-comunicacion-errores-microservicios](docs/ADR/ADR-006-comunicacion-errores-microservicios.md)
 - [ADR-007-observabilidad-monitoreo](docs/ADR/ADR-007-observabilidad-monitoreo.md)
 - [ADR-008-documentacion-versionado-api](docs/ADR/ADR-008-documentacion-versionado-api.md)
 - [ADR-009-estrategia-pruebas-microservicios](docs/ADR/ADR-009-estrategia-pruebas-microservicios.md)
 - [ADR-010-uso-obligatorio-gateway](docs/ADR/ADR-010-uso-obligatorio-gateway.md)
 - [ADR-011-logging-basico](docs/ADR/ADR-011-logging-basico.md)
 - [ADR-012-endpoint-status](docs/ADR/ADR-012-endpoint-status.md)
 - [ADR-013-puerto-entorno](docs/ADR/ADR-013-puerto-entorno.md)
 - [ADR-014-validacion-dto](docs/ADR/ADR-014-validacion-dto.md)
 - [ADR-015-excepciones-simples](docs/ADR/ADR-015-excepciones-simples.md)
 - [ADR-016-Unificar Configuracion JWT sin Secretos Hardcodeados](docs/ADR/ADR-016-Unificar%20Configuracion%20JWT%20sin%20Secretos%20Hardcodeados.md)
 - [ADR-017-Estandarizar Codigos HTTP en Controladores REST](docs/ADR/ADR-017-Estandarizar%20Codigos%20HTTP%20en%20Controladores%20REST.md)
 - [ADR-018-Normalizar Ruta de Productos Activos sin Romper Clientes](docs/ADR/ADR-018-Normalizar%20Ruta%20de%20Productos%20Activos%20sin%20Romper%20Clientes.md)
 - [ADR-019-Manejo Seguro de Token JWT Invalido (evitar 500)](docs/ADR/ADR-019-Manejo%20Seguro%20de%20Token%20JWT%20Invalido%20%28evitar%20500%29.md)
 - [ADR-020-Minimo de Pruebas QA Obligatorias antes de Merge](docs/ADR/ADR-020-Minimo%20de%20Pruebas%20QA%20Obligatorias%20antes%20de%20Merge.md)



## Preguntas de seguimiento semanal

### ¿Qué se hizo?
 - Se identificaron y documentaron los ADR relevantes para el proyecto.

### ¿Qué no se logró?
- Ninguno relevante: los informes de impacto, asignaciones y verificaciones en staging han sido completados.
### ¿Qué se va a hacer?
- Monitoreo continuo en staging y producción; atender observaciones y mantener la documentación actualizada.

## ADR aplicados por cada rol

### Rol Backend
1. **ADR-001: Externalización de Secretos y Configuración Sensible**
	- Se implementó la gestión de secretos fuera del código fuente, usando variables de entorno y archivos de configuración seguros, para evitar la exposición de información sensible.
2. **ADR-002: Unificación de Rutas entre API Gateway y Microservicios**
	- Se definió una estructura de rutas centralizada en el API Gateway, asegurando consistencia y control de acceso en todos los servicios.
3. **ADR-003: Integración Completa del API Gateway en el Despliegue**
	- Se integró el API Gateway en el proceso de despliegue con Docker Compose, garantizando que todo el tráfico pase por el gateway y facilitando la orquestación.
4. **ADR-017: Estandarizar Codigos HTTP en Controladores REST**
	- Se estandarizó el uso de códigos HTTP en controladores REST para respuestas consistentes y mejor manejo de errores.
5. **ADR-018: Normalizar Ruta de Productos Activos sin Romper Clientes**
	- Se normalizó la ruta de productos activos manteniendo compatibilidad con clientes existentes.
6. **ADR-019: Manejo Seguro de Token JWT Inválido (evitar 500)**
	- Se implementó manejo seguro de tokens JWT inválidos, devolviendo errores controlados en lugar de excepciones internas.

### Rol Frontend
1. **ADR-006: Comunicación y Manejo de Errores entre Microservicios**
	- Se estandarizó la forma en que los microservicios reportan y gestionan errores, permitiendo una mejor experiencia de usuario y trazabilidad de fallos.
2. **ADR-007: Observabilidad y Monitoreo del Sistema**
	- Se implementaron mecanismos de monitoreo y logging para detectar problemas en tiempo real y facilitar el análisis de eventos.
3. **ADR-008: Estrategia de Documentación y Versionado de API**
	- Se estableció una estrategia para documentar y versionar las APIs, asegurando que los consumidores puedan adaptarse a cambios de manera controlada.

### Rol QA
1. **ADR-011: Configuración de Logging Básico**
	- Se definió una configuración mínima de logging para todos los servicios, permitiendo registrar eventos relevantes para auditoría y depuración.
2. **ADR-012: Endpoint de Estado Simple**
	- Se implementó un endpoint `/status` en los servicios para verificar su disponibilidad y estado de salud.

3. **ADR-015: Excepciones Simples**
	- Se estandarizó el manejo de excepciones simples en los servicios, creando respuestas consistentes y mejorando la trazabilidad de errores.


