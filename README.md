 # PIXEL DASH

Un juego de plataformas retro desarrollado en **MakeCode Arcade** con múltiples personajes y mapas temáticos.

![MakeCode Arcade](https://img.shields.io/badge/MakeCode-Arcade-orange)

## Descripción

**Pixel Dash** es un juego de plataformas 2D con estética retro donde los jugadores pueden elegir entre diferentes personajes icónicos y navegar a través de diversos mapas temáticos. El objetivo es alcanzar la meta mientras superas obstáculos en cada mapa.

## Características

### Personajes Jugables
- **Bart Simpson** - El travieso de Springfield
<img width="80" height="80" alt="bart" src="https://github.com/user-attachments/assets/4cfb937d-719a-4dd2-9c62-0894353d1351" />

- **Santa Claus** - El legendario Papá Noel
<img width="80" height="80" alt="santa" src="https://github.com/user-attachments/assets/da802f2b-75d9-44cf-ade0-932984d2ca1a" />

- **Finn** - El héroe de Hora de Aventuras
<img width="80" height="80" alt="finn" src="https://github.com/user-attachments/assets/03ed9be1-338c-4128-9c0b-f8ede4d21ba5" />

- **Goku** - El guerrero Saiyan
<img width="80" height="80" alt="goku" src="https://github.com/user-attachments/assets/3700264a-9caf-48ff-8c3c-53d75b131a3b" />


Cada personaje cuenta con:
- Animaciones personalizadas
- Sprites únicos
- Controles fluidos de movimiento

### Mapas Disponibles
1. **Mapa 1 - Castillo de Lava** 
   - Ambiente de castillo medieval
   - Obstáculos de lava ardiente
   
2. **Mapa 2 - Reino del Dragón** 
   - Temática dragón
   
3.  **Mapa 3 - Mundo Acuático** 
   - Nivel con temática de agua
   - Fondos oceánicos personalizados
   
4. **Mapa 4 - Campo Silvestre**
   - Temática verde
   - Con setos de pinchos como obstáculo

## Controles

| Acción | Control |
|--------|---------|
| Mover | Flechas direccionales / D-pad |
| Saltar | Botón A |
| Seleccionar | Botón A |
| Volver | Botón B |

## Cómo Jugar

### Opción 1
1. Visita [MakeCode Arcade](https://arcade.makecode.com/)
2. Haz clic en **Import** y luego en **Import URL**
3. Pega la URL del repositorio: `https://github.com/ITEC-BCN/ra1-pr01-retro-game-manu-william`
4. ¡Comienza a jugar!

### Opción 2:
1. Escanea el QR de la presentación
2. ¡Comienza a jugar!

## Tecnologías Utilizadas

- **Lenguaje:** Python / Bloques visuales
- **Plataforma:** MakeCode Arcade
- **Control de versiones:** Git & GitHub
- **Dependencias:**
  - `device` - Funciones del dispositivo
  - `animation` - Sistema de animaciones
  - `arcade-mini-menu` - Sistema de menús personalizados

## Estructura del Proyecto

```
ra1-pr01-retro-game-manu-william/
├── main.ts              # Código principal del juego
├── main.blocks          # Versión en bloques
├── main.py              # Versión Python
├── images.g.ts          # Sprites generados
├── tilemap.g.ts         # Mapas de tiles generados
├── assets/              # Recursos del juego
├── pxt.json             # Configuración del proyecto
└── README.md            # Este archivo
```

## Mecánicas del Juego

### Sistema de Menús
- **Menú Principal:** Navegación intuitiva entre opciones
- **Selector de Personajes:** Vista previa visual de cada personaje
- **Selector de Mapas:** Previsualización de los niveles disponibles

### Física del Juego
- Gravedad aplicada a los personajes (`ay = 400`)
- Velocidad de movimiento horizontal: `100 px/s`
- Velocidad de salto: `-190 px/s`
- Sistema de cámara que sigue al jugador

### Condiciones de Victoria
Alcanza el tile de meta (🏁) para ganar y ver la pantalla de victoria.

## Autores

- **Manuel Felix**
- **William Guzman** 

## Requisitos

- Navegador web
- Conexión a internet (para jugar online)
- Compatible con MakeCode Arcade

## Demo (2 minutos)

https://github.com/user-attachments/assets/86f00fd8-295b-4651-8487-a93bd336966a


