# Kubernetes para esta demo

## Objetivo

Explicar como pasar de una demo con puertos locales a un despliegue ordenado dentro de un cluster.

## Mapa recomendado

- Un namespace por ambiente:
  - `distribuidos-dev`
  - `distribuidos-qa`
  - `distribuidos-main`
- Un Deployment por servicio:
  - `front`
  - `api-gateway`
  - `micro-1`
  - `micro-2`
  - `micro-3`
- Un Service por Deployment para trafico interno.
- Un Ingress para exponer `front` y `api-gateway`.
- `ConfigMap` y `Secret` para configuracion.

## Lectura conceptual

### Ambiente dev

Se usa para pruebas rapidas, validacion de cambios y experimentacion.

### Ambiente qa

Se usa para pruebas integradas, validacion funcional y verificacion antes de promover a produccion.

### Ambiente main

Se usa como ambiente estable. Solo deben entrar versiones aprobadas.

## Como se conecta con la clase

- `DDD` define los dominios `Seguridad`, `Venta` e `Inventario`.
- `By Module` ayuda a encapsular cada dominio.
- `Microservicios` convierte esos modulos en despliegues independientes.
- `API Gateway` se ubica como punto de entrada al cluster.
- `Kubernetes` agrega aislamiento, escalado y control operacional.

## Recursos recomendados dentro del cluster

### 1. Namespaces

Separan dev, qa y main para evitar mezclar trafico y configuracion.

### 2. Deployments

Mantienen las replicas deseadas de cada servicio.

### 3. Services

Permiten que gateway y microservicios se comuniquen por DNS interno.

### 4. Ingress

Expone las rutas hacia front y gateway desde fuera del cluster.

### 5. ConfigMap y Secret

Guardan configuracion de ambiente y credenciales sin hardcodearlas en las imagenes.

## Flujo recomendado

1. Cada repo construye su imagen.
2. La imagen se versiona y se publica.
3. El manifiesto del ambiente actualiza la referencia de imagen.
4. Kubernetes despliega el cambio en el namespace correcto.
5. El gateway solo conversa con servicios del mismo namespace.

## Buenas practicas para este caso

- No mezclar servicios `dev`, `qa` y `main` en el mismo namespace.
- No exponer directamente todos los microservicios al exterior si el gateway ya controla las rutas.
- Mantener observabilidad centralizada.
- Versionar los manifests igual que las aplicaciones.
- Definir readiness y liveness probes cuando ya no sea una demo estatica.

## Referencia incluida

En este directorio se deja un manifiesto de ejemplo:

- `reference-architecture.yaml`

Ese archivo no pretende ser productivo; sirve para enseñar como se mapean los conceptos de la clase a objetos reales de Kubernetes.
