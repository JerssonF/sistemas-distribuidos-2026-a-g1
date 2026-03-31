# ADR-001: Implementación del Patrón Abstract Factory con Genéricos T, D, S

**Fecha:** 2026-03-10  
**Estado:** Propuesto  
**Autor:** Equipo de Desarrollo PulpApp  
**Proyecto:** PulpApp - Sistema Distribuido de Venta Online de Pulpas Naturales

---

## 📋 Tabla de Contenidos

1. [Identificación de Patrones](#1-identificación-de-patrones)
2. [Análisis del Proyecto y ADRs Potenciales](#2-análisis-del-proyecto-y-adrs-potenciales)
3. [Identificación de Antipatrones](#3-identificación-de-antipatrones)
4. [Segmentos de Código con Malas Prácticas](#4-segmentos-de-código-con-malas-prácticas)
5. [Diseño e Implementación del ADR](#5-diseño-e-implementación-del-adr)
6. [Impacto sobre el Sistema](#6-impacto-sobre-el-sistema)

---

## 1. Identificación de Patrones

### 1.1 Patrones Actualmente Implementados

| Patrón | Ubicación | Descripción |
|--------|-----------|-------------|
| **Repository Pattern** | `UserRepository`, `PedidoRepository` | Abstracción de acceso a datos con JpaRepository |
| **DTO Pattern** | `UserRequestDTO`, `UserResponseDTO`, `PedidoDTO` | Transferencia de datos entre capas |
| **Service Layer** | `IUserService`, `IPedidoService` | Capa de lógica de negocio separada |
| **Dependency Injection** | `@RequiredArgsConstructor` | Inyección de dependencias vía constructor |

### 1.2 Patrones Ausentes Críticos

| Patrón Faltante | Justificación |
|-----------------|---------------|
| **Abstract Factory** | No existe una fábrica que unifique la creación de servicios, DTOs y entidades |
| **Generic Base Service** | Código CRUD repetido en cada servicio |
| **Mapper Pattern** | Mapeo manual Entity↔DTO disperso en servicios |
| **Builder Pattern** | Construcción de objetos complejos sin estructura |

---

## 2. Análisis del Proyecto y ADRs Potenciales

### 2.1 Estado Actual de la Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                     ARQUITECTURA ACTUAL                         │
├─────────────────────────────────────────────────────────────────┤
│  Controller Layer                                                │
│  ┌──────────────────┐    ┌────────────────────┐                 │
│  │  UserController  │    │  PedidoController  │                 │
│  └────────┬─────────┘    └─────────┬──────────┘                 │
│           │                        │                             │
│  Service Layer (CÓDIGO DUPLICADO)                                │
│  ┌──────────────────┐    ┌────────────────────┐                 │
│  │ UserServiceImpl  │    │ PedidoServiceImpl  │                 │
│  │  - findAll()     │    │  - findAll()       │  ← REPETICIÓN   │
│  │  - findById()    │    │  - findById()      │  ← REPETICIÓN   │
│  │  - save()        │    │  - save()          │  ← REPETICIÓN   │
│  │  - delete()      │    │  - delete()        │  ← REPETICIÓN   │
│  │  - mapToDTO()    │    │  - mapToDTO()      │  ← REPETICIÓN   │
│  └────────┬─────────┘    └─────────┬──────────┘                 │
│           │                        │                             │
│  Repository Layer                                                │
│  ┌──────────────────┐    ┌────────────────────┐                 │
│  │  UserRepository  │    │  PedidoRepository  │                 │
│  └──────────────────┘    └────────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 ADRs Recomendados para el Proyecto

| ADR ID | Título | Prioridad | Razón |
|--------|--------|-----------|-------|
| **ADR-001** | Abstract Factory con Genéricos T, D, S | 🔴 Alta | Eliminar duplicación de código CRUD |
| ADR-002 | Implementar MapStruct para Mapeo | 🟡 Media | Automatizar conversión Entity↔DTO |
| ADR-003 | Excepciones Personalizadas por Dominio | 🟡 Media | Reemplazar RuntimeException genérico |
| ADR-004 | Auditoría con @CreatedDate/@LastModifiedDate | 🟢 Baja | Trazabilidad de cambios |
| ADR-005 | Validación a Nivel de Servicio | 🟡 Media | Validación de reglas de negocio |

---

## 3. Identificación de Antipatrones

### 3.1 Antipatrón: **Copy-Paste Programming**

**Ubicación:** `UserServiceImpl.java` y `PedidoServiceImpl.java`

```java
// UserServiceImpl.java - Líneas 19-21
@Override
public List<UserResponseDTO> findAll() {
    return userRepository.findAll().stream().map(this::mapToResponse).toList();
}

// PedidoServiceImpl.java - Líneas 35-40
@Override
public List<PedidoDTO> findAll() {
    return pedidoRepository.findAll()
            .stream()
            .map(this::mapToDTO)
            .toList();
}
```

**Problema:** Lógica CRUD idéntica replicada en cada servicio.

---

### 3.2 Antipatrón: **God Object Tendencia**

**Ubicación:** Servicios acoplados a múltiples responsabilidades

```java
// PedidoServiceImpl.java - El servicio maneja:
// 1. Lógica de negocio
// 2. Mapeo de DTOs
// 3. Validación de existencia de User
// 4. Persistencia

@Override
public PedidoDTO save(PedidoDTO dto) {
    User user = userRepository.findById(dto.getUserId())        // Responsabilidad 1
            .orElseThrow(() -> new RuntimeException("User not found"));  // Responsabilidad 2
    
    Pedido pedido = new Pedido();                               // Responsabilidad 3
    pedido.setDescripcion(dto.getDescripcion());
    pedido.setTotal(dto.getTotal());
    pedido.setUser(user);
    
    Pedido saved = pedidoRepository.save(pedido);               // Responsabilidad 4
    return mapToDTO(saved);                                      // Responsabilidad 5
}
```

---

### 3.3 Antipatrón: **Magic Strings**

**Ubicación:** Excepciones con mensajes hardcodeados

```java
// UserServiceImpl.java
.orElseThrow(() -> new RuntimeException("User not found"));

// PedidoServiceImpl.java  
.orElseThrow(() -> new RuntimeException("Pedido not found"));
```

---

### 3.4 Antipatrón: **Interface Bloat**

**Ubicación:** `IUserService.java` e `IPedidoService.java`

Interfaces separadas con firmas casi idénticas que deberían heredar de una interfaz genérica base.

---

## 4. Segmentos de Código con Malas Prácticas

### 4.1 ❌ Mapeo Manual Repetitivo

**Archivo:** `UserServiceImpl.java` (Líneas 66-78)

```java
// MALA PRÁCTICA: Mapeo manual propenso a errores
private UserResponseDTO mapToResponse(User user) {
    UserResponseDTO dto = new UserResponseDTO();
    dto.setId(user.getId());
    dto.setCedula(user.getCedula());
    dto.setName(user.getName());
    dto.setEmail(user.getEmail());
    dto.setDireccion(user.getDireccion());
    return dto;
}
```

**Problema:** 
- Si se agrega un campo a User, el desarrollador puede olvidar agregarlo al mapper
- Código repetitivo y propenso a errores
- Sin validación de completitud

---

### 4.2 ❌ RuntimeException Genérico

**Archivo:** `UserServiceImpl.java` (Línea 27)

```java
// MALA PRÁCTICA: Excepción genérica sin contexto
User user = userRepository.findById(id)
    .orElseThrow(() -> new RuntimeException("User not found"));
```

**Problema:**
- No permite diferenciar tipos de error en el cliente
- Dificulta el logging y monitoreo
- No aprovecha `ResourceNotFoundException` existente

---

### 4.3 ❌ Creación de Objetos Acoplada

**Archivo:** `UserServiceImpl.java` (Líneas 34-41)

```java
// MALA PRÁCTICA: Creación directa de objetos sin abstracción
@Override
public UserResponseDTO save(UserRequestDTO dto) {
    User user = new User();  // ← Acoplamiento directo
    user.setCedula(dto.getCedula());
    user.setName(dto.getName());
    user.setEmail(dto.getEmail());
    user.setPassword(dto.getPassword());
    user.setDireccion(dto.getDireccion());
    // ...
}
```

**Problema:**
- Viola el Principio de Inversión de Dependencias (DIP)
- Imposible realizar testing unitario sin base de datos
- Difícil cambiar la estrategia de creación de objetos

---

### 4.4 ❌ Sin Validación en Controlador de Pedidos

**Archivo:** `PedidoController.java` (Línea 17)

```java
// MALA PRÁCTICA: Falta @Valid en el endpoint
@PostMapping
public PedidoDTO create(@RequestBody PedidoDTO dto) {  // ← Falta @Valid
    return pedidoService.save(dto);
}
```

**Problema:** Las validaciones `@NotBlank` y `@NotNull` en `PedidoDTO` no se ejecutan.

---

## 5. Diseño e Implementación del ADR

### 5.1 Contexto

El microservicio `ms-users` presenta código CRUD duplicado entre `UserServiceImpl` y `PedidoServiceImpl`. A medida que se agreguen más entidades (Producto, Categoría, Inventario), esta duplicación crecerá exponencialmente.

### 5.2 Decisión

Implementar el patrón **Abstract Factory** utilizando genéricos con la convención:

| Genérico | Significado | Ejemplo |
|----------|-------------|---------|
| **T** | Entity Type | `User`, `Pedido`, `Producto` |
| **D** | DTO Type | `UserResponseDTO`, `PedidoDTO` |
| **S** | Request/Save DTO | `UserRequestDTO`, `PedidoDTO` |

### 5.3 Diseño de la Solución

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ARQUITECTURA PROPUESTA                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │              AbstractServiceFactory<T, D, S>                 │    │
│  │  ┌─────────────────────────────────────────────────────────┐│    │
│  │  │  + createService(): IBaseService<T, D, S>               ││    │
│  │  │  + createMapper(): EntityMapper<T, D, S>                ││    │
│  │  │  + createValidator(): EntityValidator<T>                 ││    │
│  │  └─────────────────────────────────────────────────────────┘│    │
│  └──────────────────────────┬──────────────────────────────────┘    │
│                             │                                        │
│         ┌───────────────────┼───────────────────┐                   │
│         │                   │                   │                   │
│         ▼                   ▼                   ▼                   │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐         │
│  │UserFactory  │    │PedidoFactory│    │ProductoFactory  │         │
│  │<User,       │    │<Pedido,     │    │<Producto,       │         │
│  │UserResp,    │    │PedidoDTO,   │    │ProductoDTO,     │         │
│  │UserReq>     │    │PedidoDTO>   │    │ProductoReq>     │         │
│  └─────────────┘    └─────────────┘    └─────────────────┘         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.4 Implementación Propuesta

#### 5.4.1 Interfaz Base Genérica

```java
package com.pulpapp.ms_users.core;

import java.util.List;

/**
 * Interfaz base para todos los servicios CRUD
 * @param <T> Tipo de Entidad (Entity)
 * @param <D> Tipo de DTO de Respuesta (Response DTO)
 * @param <S> Tipo de DTO de Solicitud (Request/Save DTO)
 */
public interface IBaseService<T, D, S> {
    
    List<D> findAll();
    
    D findById(Long id);
    
    D save(S requestDto);
    
    D update(Long id, S requestDto);
    
    void delete(Long id);
}
```

#### 5.4.2 Abstract Factory

```java
package com.pulpapp.ms_users.factory;

import com.pulpapp.ms_users.core.IBaseService;
import com.pulpapp.ms_users.mapper.EntityMapper;
import com.pulpapp.ms_users.validator.EntityValidator;

/**
 * Fábrica abstracta para crear familias de objetos relacionados
 * @param <T> Entity Type
 * @param <D> Response DTO Type
 * @param <S> Request DTO Type
 */
public interface AbstractServiceFactory<T, D, S> {
    
    /**
     * Crea el servicio correspondiente a la entidad
     */
    IBaseService<T, D, S> createService();
    
    /**
     * Crea el mapper Entity <-> DTO
     */
    EntityMapper<T, D, S> createMapper();
    
    /**
     * Crea el validador de reglas de negocio
     */
    EntityValidator<T> createValidator();
    
    /**
     * Retorna el tipo de entidad que maneja esta factory
     */
    Class<T> getEntityType();
}
```

#### 5.4.3 Mapper Genérico

```java
package com.pulpapp.ms_users.mapper;

/**
 * Contrato para mapeo entre Entity y DTOs
 * @param <T> Entity Type
 * @param <D> Response DTO Type
 * @param <S> Request/Save DTO Type
 */
public interface EntityMapper<T, D, S> {
    
    /**
     * Convierte Entity a Response DTO
     */
    D toResponseDto(T entity);
    
    /**
     * Convierte Request DTO a Entity (para crear)
     */
    T toEntity(S requestDto);
    
    /**
     * Actualiza Entity existente con datos del Request DTO
     */
    void updateEntityFromDto(S requestDto, T entity);
}
```

#### 5.4.4 Servicio Base Abstracto

```java
package com.pulpapp.ms_users.core;

import com.pulpapp.ms_users.mapper.EntityMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Implementación base que elimina código duplicado
 */
@RequiredArgsConstructor
public abstract class BaseServiceImpl<T, D, S, R extends JpaRepository<T, Long>> 
        implements IBaseService<T, D, S> {

    protected final R repository;
    protected final EntityMapper<T, D, S> mapper;
    
    protected abstract String getEntityName();

    @Override
    public List<D> findAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toResponseDto)
                .toList();
    }

    @Override
    public D findById(Long id) {
        T entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                    getEntityName() + " not found with id: " + id));
        return mapper.toResponseDto(entity);
    }

    @Override
    public D save(S requestDto) {
        T entity = mapper.toEntity(requestDto);
        T saved = repository.save(entity);
        return mapper.toResponseDto(saved);
    }

    @Override
    public D update(Long id, S requestDto) {
        T entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                    getEntityName() + " not found with id: " + id));
        mapper.updateEntityFromDto(requestDto, entity);
        T updated = repository.save(entity);
        return mapper.toResponseDto(updated);
    }

    @Override
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException(
                getEntityName() + " not found with id: " + id);
        }
        repository.deleteById(id);
    }
}
```

#### 5.4.5 Factory Concreta para User

```java
package com.pulpapp.ms_users.factory;

import com.pulpapp.ms_users.core.IBaseService;
import com.pulpapp.ms_users.dto.UserRequestDTO;
import com.pulpapp.ms_users.dto.UserResponseDTO;
import com.pulpapp.ms_users.entity.User;
import com.pulpapp.ms_users.mapper.EntityMapper;
import com.pulpapp.ms_users.mapper.UserMapper;
import com.pulpapp.ms_users.service.UserServiceImpl;
import com.pulpapp.ms_users.validator.EntityValidator;
import com.pulpapp.ms_users.validator.UserValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserServiceFactory 
        implements AbstractServiceFactory<User, UserResponseDTO, UserRequestDTO> {

    private final UserServiceImpl userService;
    private final UserMapper userMapper;
    private final UserValidator userValidator;

    @Override
    public IBaseService<User, UserResponseDTO, UserRequestDTO> createService() {
        return userService;
    }

    @Override
    public EntityMapper<User, UserResponseDTO, UserRequestDTO> createMapper() {
        return userMapper;
    }

    @Override
    public EntityValidator<User> createValidator() {
        return userValidator;
    }

    @Override
    public Class<User> getEntityType() {
        return User.class;
    }
}
```

### 5.5 Estructura de Paquetes Propuesta

```
ms-users/src/main/java/com/pulpapp/ms_users/
├── MsUsersApplication.java
├── core/                          ← NUEVO
│   ├── IBaseService.java
│   └── BaseServiceImpl.java
├── factory/                       ← NUEVO
│   ├── AbstractServiceFactory.java
│   ├── UserServiceFactory.java
│   └── PedidoServiceFactory.java
├── mapper/                        ← NUEVO
│   ├── EntityMapper.java
│   ├── UserMapper.java
│   └── PedidoMapper.java
├── validator/                     ← NUEVO
│   ├── EntityValidator.java
│   ├── UserValidator.java
│   └── PedidoValidator.java
├── config/
├── controller/
├── dto/
├── entity/
├── exception/
├── repository/
└── service/
```

---

## 6. Impacto sobre el Sistema

### 6.1 Beneficios

| Beneficio | Descripción | Impacto |
|-----------|-------------|---------|
| **Reducción de Código** | Eliminación de ~60% de código duplicado en servicios | 🟢 Alto |
| **Mantenibilidad** | Cambios en lógica CRUD se realizan en un solo lugar | 🟢 Alto |
| **Extensibilidad** | Nuevas entidades solo requieren implementar el factory | 🟢 Alto |
| **Testabilidad** | Factories permiten inyectar mocks fácilmente | 🟢 Alto |
| **Consistencia** | Todas las entidades siguen el mismo patrón | 🟡 Medio |

### 6.2 Métricas Esperadas

```
┌────────────────────────────────────────────────────────────┐
│                    COMPARATIVA DE CÓDIGO                    │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  LÍNEAS DE CÓDIGO POR ENTIDAD:                              │
│                                                             │
│  ANTES (Sin Abstract Factory):                              │
│  ├── UserServiceImpl:     ~80 líneas                        │
│  ├── PedidoServiceImpl:   ~60 líneas                        │
│  └── [Nueva Entidad]:     ~70 líneas (promedio)             │
│                                                             │
│  DESPUÉS (Con Abstract Factory):                            │
│  ├── BaseServiceImpl:     ~50 líneas (compartido)           │
│  ├── UserServiceImpl:     ~15 líneas (específico)           │
│  ├── UserMapper:          ~20 líneas                        │
│  ├── UserFactory:         ~25 líneas                        │
│  └── [Nueva Entidad]:     ~60 líneas (total)                │
│                                                             │
│  REDUCCIÓN: ~40% menos código por nueva entidad             │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### 6.3 Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Curva de aprendizaje | Media | Bajo | Documentación y ejemplos claros |
| Over-engineering para proyectos pequeños | Baja | Medio | Evaluación de ROI antes de implementar |
| Complejidad inicial | Media | Bajo | Implementación incremental |

### 6.4 Plan de Implementación

```
Fase 1 (Sprint 1):
├── Crear paquete core/ con interfaces base
├── Implementar EntityMapper genérico
└── Crear BaseServiceImpl

Fase 2 (Sprint 2):
├── Refactorizar UserServiceImpl para heredar de BaseServiceImpl
├── Crear UserMapper y UserFactory
└── Actualizar tests unitarios

Fase 3 (Sprint 3):
├── Refactorizar PedidoServiceImpl
├── Crear PedidoMapper y PedidoFactory
└── Documentar patrones para nuevas entidades
```

### 6.5 Consecuencias

**Positivas:**
- ✅ Código más DRY (Don't Repeat Yourself)
- ✅ Facilita agregar nuevas entidades al sistema
- ✅ Mejora la cohesión del código
- ✅ Simplifica el testing con mocks

**Negativas:**
- ⚠️ Mayor complejidad inicial de abstracción
- ⚠️ Requiere entendimiento de genéricos en Java
- ⚠️ Puede ser excesivo para microservicios muy simples

---

## 📚 Referencias

- Gamma, E., et al. (1994). *Design Patterns: Elements of Reusable Object-Oriented Software*
- Martin, R. C. (2017). *Clean Architecture: A Craftsman's Guide to Software Structure and Design*
- Spring Framework Documentation - [Generic Repositories](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)

---

## ✅ Decisión Final

**Se aprueba** la implementación del patrón Abstract Factory con genéricos T, D, S para el microservicio `ms-users`, comenzando con la refactorización de `UserServiceImpl` como prueba de concepto.

---

*Documento generado para PulpApp - Sistema Distribuido de Venta Online de Pulpas Naturales*
