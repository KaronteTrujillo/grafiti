# Graffiti Text Generator

## Overview

The Graffiti Text Generator is a professional Node.js library designed to convert text into high-quality PNG images and animated GIF files with authentic graffiti-style visual effects. The library provides 28 unique styles (18 static + 10 animated) with vibrant colors, professional gradients, advanced shadows, and special effects. It's built specifically for integration with WhatsApp bots and other applications requiring dynamic text-to-image conversion with maximum visual impact.

## System Architecture

The system follows a modular architecture with clear separation of concerns:

**Core Components:**
- **Main Entry Point (`index.js`)**: Provides convenience functions and public API
- **Generator Engine (`lib/GraffitiGenerator.js`)**: Core image generation logic
- **Style System (`lib/styles.js`)**: Predefined visual styles configuration
- **Utilities (`lib/utils.js`)**: Visual effects and rendering utilities
- **Examples (`examples/`)**: Usage demonstrations and testing

**Technology Stack:**
- **Runtime**: Node.js 20
- **Graphics Library**: Canvas API (node-canvas 3.1.0)
- **Image Format**: PNG output
- **Package Management**: npm

## Key Components

### GraffitiGenerator Class
- **Purpose**: Main engine for text-to-image conversion
- **Responsibilities**: Canvas management, text rendering, style application
- **Key Methods**: `generate()`, `getAvailableStyles()`, canvas setup, text rendering

### Style System
- **Architecture**: Configuration-based style definitions with advanced effects
- **Static Styles Available**: 18 styles including classic, neon, urban, fire, ice, sunset, matrix, galaxy, grunge, chrome, rainbow, gold, poison, blood, electric, volcanic, cyberpunk, crystal
- **Animated Styles Available**: 10 styles including pulse_neon, wave_fire, rotate_rainbow, shake_electric, zoom_chrome, flow_galaxy, bounce_gold, spin_matrix, flicker_blood, glitch_cyber
- **Style Properties**: Advanced gradients, outlines, shadows, fonts, colors, animations, special effects
- **Special Effects**: Lightning bolts, blood drips, digital glitch, distortion, transparency
- **Extensibility**: Easy addition of new styles and effects through configuration

### Visual Effects Engine
- **Gradient System**: Linear and radial gradients with multiple color stops and animation support
- **Shadow Effects**: Configurable offset, blur, and color with dynamic positioning
- **Outline System**: Stroke width and color customization with multi-layer support
- **Font Management**: Dynamic font sizing and diverse family selection for authentic graffiti look
- **Animation Engine**: 10 different animation types including pulse, wave, rotation, shake, zoom, flow, bounce, spin, flicker, and glitch
- **Special Effects**: Lightning bolts, blood drips, digital glitch distortion, grunge texture, transparency effects
- **GIF Generation**: High-quality animated GIF creation with optimized frame rates and compression

## Data Flow

1. **Input Processing**: Text and style parameters received
2. **Style Resolution**: Style configuration loaded from styles registry
3. **Canvas Initialization**: Canvas created with calculated dimensions
4. **Text Measurement**: Dynamic sizing based on text content
5. **Effect Application**: Gradients, shadows, and outlines applied
6. **Image Generation**: Canvas rendered to PNG buffer
7. **Output Delivery**: PNG buffer returned to caller

## External Dependencies

### Primary Dependencies
- **canvas (^3.1.0)**: Core graphics rendering engine
  - **Purpose**: Canvas API implementation for Node.js
  - **Key Features**: Text rendering, gradients, image export, advanced effects
  - **Platform Support**: Cross-platform with native bindings
- **gifencoder**: Animated GIF generation engine
  - **Purpose**: Creating high-quality animated GIF files
  - **Key Features**: Frame-by-frame animation, compression optimization
  - **Integration**: Seamless with canvas for smooth animations

### Runtime Dependencies
- **Node.js 20**: JavaScript runtime environment
- **File System**: Built-in fs module for file operations
- **Path Utilities**: Built-in path module for file path management

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 module
- **Package Installation**: Automated via npm install canvas
- **Testing**: Examples automatically executed on run

### Production Considerations
- **Performance**: Optimized for high-throughput image generation
- **Memory Management**: Canvas objects properly disposed after use
- **Error Handling**: Comprehensive error messages and validation
- **Scalability**: Stateless design allows horizontal scaling

### Build Process
1. Install canvas dependency (includes native compilation)
2. Execute example scripts for validation
3. Library ready for import and usage

## Changelog

```
Changelog:
- June 14, 2025: Project completed
  * 28 estilos únicos implementados (18 estáticos + 10 animados)
  * Sistema de generación PNG y GIF completado
  * Efectos especiales avanzados: rayos, goteos, glitch, distorsión
  * Optimizado para bots de WhatsApp
  * Documentación completa y ejemplos funcionales
  * Listo para publicación en GitHub
- June 14, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Technical Notes

### Canvas API Integration
The library leverages the node-canvas implementation which provides:
- High-quality text rendering with anti-aliasing
- Advanced gradient and shadow effects
- PNG export with configurable quality settings
- Cross-platform compatibility through native bindings

### Style Configuration Architecture
Styles are defined as JSON objects containing:
- Font specifications (family, weight, size)
- Gradient definitions (type, colors, direction)
- Outline properties (color, width)
- Shadow effects (color, offset, blur)

This configuration-driven approach allows easy extension and customization without code changes.

### Performance Optimizations
- Dynamic canvas sizing based on text content
- Efficient gradient calculation and caching
- Minimal memory footprint with proper resource cleanup
- Optimized rendering pipeline for production use