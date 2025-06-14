const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');
const styles = require('./styles');
const { applyGradient, addShadow, addOutline } = require('./utils');

class GraffitiGenerator {
    constructor() {
        this.styles = styles;
        this.defaultOptions = {
            width: 800,
            height: 200,
            backgroundColor: 'transparent',
            fontSize: 60,
            quality: 1.0
        };
    }

    /**
     * Genera una imagen PNG de graffiti a partir del texto
     * @param {string} text - Texto a convertir
     * @param {string} styleName - Nombre del estilo a usar
     * @param {object} options - Opciones adicionales
     * @returns {Buffer} Buffer de la imagen PNG o GIF animado
     */
    async generate(text, styleName = 'classic', options = {}) {
        try {
            const config = { ...this.defaultOptions, ...options };
            const style = this.styles[styleName];
            
            if (!style) {
                throw new Error(`Estilo '${styleName}' no encontrado. Estilos disponibles: ${Object.keys(this.styles).join(', ')}`);
            }

            if (!text || text.trim() === '') {
                throw new Error('El texto no puede estar vacío');
            }

            // Si el estilo tiene animación, generar GIF animado
            if (style.animation && config.animated !== false) {
                return await this.generateAnimatedGIF(text, style, config);
            }

            // Generar imagen estática PNG
            const canvas = createCanvas(config.width, config.height);
            const ctx = canvas.getContext('2d');
            
            // Configurar el canvas
            this.setupCanvas(ctx, config, style);
            
            // Renderizar el texto con el estilo seleccionado
            await this.renderText(ctx, text, style, config);
            
            // Retornar el buffer PNG
            return canvas.toBuffer('image/png', { quality: config.quality });
            
        } catch (error) {
            throw new Error(`Error generando graffiti: ${error.message}`);
        }
    }

    /**
     * Genera un GIF animado con el estilo especificado
     * @param {string} text - Texto a convertir
     * @param {object} style - Estilo con animación
     * @param {object} config - Configuración
     * @returns {Buffer} Buffer del GIF animado
     */
    async generateAnimatedGIF(text, style, config) {
        const GIFEncoder = require('gifencoder');
        const frames = 20; // Número de frames para la animación
        const delay = style.animation.duration / frames;
        
        const encoder = new GIFEncoder(config.width, config.height);
        const stream = encoder.createReadStream();
        
        encoder.start();
        encoder.setRepeat(0); // 0 = repetir infinitamente
        encoder.setDelay(delay);
        encoder.setQuality(10);
        
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        
        return new Promise(async (resolve, reject) => {
            stream.on('end', () => {
                resolve(Buffer.concat(chunks));
            });
            
            stream.on('error', reject);
            
            try {
                // Generar cada frame de la animación
                for (let frame = 0; frame < frames; frame++) {
                    const canvas = createCanvas(config.width, config.height);
                    const ctx = canvas.getContext('2d');
                    
                    // Configurar canvas
                    this.setupCanvas(ctx, config, style);
                    
                    // Aplicar transformación de animación
                    this.applyAnimationFrame(ctx, style.animation, frame, frames, config);
                    
                    // Renderizar texto
                    await this.renderText(ctx, text, style, config);
                    
                    // Agregar frame al GIF
                    encoder.addFrame(ctx);
                }
                
                encoder.finish();
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Aplica la transformación de animación para un frame específico
     */
    applyAnimationFrame(ctx, animation, frame, totalFrames, config) {
        const progress = frame / totalFrames;
        const centerX = config.width / 2;
        const centerY = config.height / 2;
        
        ctx.save();
        
        switch (animation.type) {
            case 'pulse':
                const pulseScale = 1 + Math.sin(progress * Math.PI * 2) * animation.intensity;
                ctx.translate(centerX, centerY);
                ctx.scale(pulseScale, pulseScale);
                ctx.translate(-centerX, -centerY);
                break;
                
            case 'wave':
                const waveOffset = Math.sin(progress * Math.PI * 2) * animation.amplitude;
                ctx.translate(0, waveOffset);
                break;
                
            case 'colorRotation':
                // Rotación de colores se maneja en el gradiente
                this.animationColorOffset = progress;
                break;
                
            case 'shake':
                const shakeX = (Math.random() - 0.5) * animation.intensity;
                const shakeY = (Math.random() - 0.5) * animation.intensity;
                ctx.translate(shakeX, shakeY);
                break;
                
            case 'zoom':
                const zoomScale = 1 + Math.sin(progress * Math.PI * 2) * animation.scale;
                ctx.translate(centerX, centerY);
                ctx.scale(zoomScale, zoomScale);
                ctx.translate(-centerX, -centerY);
                break;
                
            case 'flow':
                const flowOffset = progress * 100;
                if (animation.direction === 'horizontal') {
                    ctx.translate(flowOffset - 50, 0);
                } else {
                    ctx.translate(0, flowOffset - 50);
                }
                break;
                
            case 'bounce':
                const bounceY = Math.abs(Math.sin(progress * Math.PI * 2)) * animation.height;
                ctx.translate(0, -bounceY);
                break;
                
            case 'spin':
                const angle = progress * Math.PI * 2;
                ctx.translate(centerX, centerY);
                ctx.rotate(angle);
                ctx.translate(-centerX, -centerY);
                break;
                
            case 'flicker':
                if (Math.random() < animation.intensity) {
                    ctx.globalAlpha = 0.3 + Math.random() * 0.7;
                }
                break;
                
            case 'glitch':
                if (Math.random() < 0.1) {
                    const glitchX = (Math.random() - 0.5) * animation.intensity;
                    const glitchY = (Math.random() - 0.5) * animation.intensity;
                    ctx.translate(glitchX, glitchY);
                }
                break;
        }
    }

    /**
     * Configura el canvas base
     */
    setupCanvas(ctx, config, style) {
        // Limpiar canvas
        ctx.clearRect(0, 0, config.width, config.height);
        
        // Establecer fondo si no es transparente
        if (config.backgroundColor !== 'transparent') {
            ctx.fillStyle = config.backgroundColor;
            ctx.fillRect(0, 0, config.width, config.height);
        }
        
        // Aplicar filtros de calidad
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    }

    /**
     * Renderiza el texto con el estilo especificado
     */
    async renderText(ctx, text, style, config) {
        const fontSize = config.fontSize || style.fontSize || 60;
        const fontFamily = style.fontFamily || 'Arial Black, sans-serif';
        
        // Configurar fuente
        ctx.font = `${style.fontWeight || 'bold'} ${fontSize}px ${fontFamily}`;
        
        // Calcular posición del texto
        const x = config.width / 2;
        const y = config.height / 2;
        
        // Aplicar efectos según el estilo
        await this.applyEffects(ctx, text, x, y, style);
    }

    /**
     * Aplica efectos visuales según el estilo
     */
    async applyEffects(ctx, text, x, y, style) {
        // Guardar contexto
        ctx.save();
        
        try {
            // Aplicar efectos especiales antes del renderizado principal
            this.applySpecialEffects(ctx, text, x, y, style);
            
            // 1. Sombra (si está definida)
            if (style.shadow) {
                addShadow(ctx, text, x, y, style.shadow);
            }
            
            // 2. Contorno/Outline
            if (style.outline) {
                addOutline(ctx, text, x, y, style.outline);
            }
            
            // 3. Texto principal con gradiente o color sólido
            if (style.gradient) {
                const gradient = applyGradient(ctx, x, y, style.gradient, text);
                ctx.fillStyle = gradient;
            } else {
                ctx.fillStyle = style.color || '#FF6B35';
            }
            
            // Aplicar transformaciones adicionales
            if (style.skew) {
                ctx.transform(1, style.skew.y || 0, style.skew.x || 0, 1, 0, 0);
            }
            
            if (style.rotation) {
                ctx.rotate(style.rotation * Math.PI / 180);
            }
            
            // Aplicar transparencia si está definida
            if (style.transparency) {
                ctx.globalAlpha = style.transparency;
            }
            
            // Renderizar texto principal
            ctx.fillText(text, x, y);
            
            // 4. Efectos adicionales (brillo, etc.)
            if (style.glow) {
                this.addGlow(ctx, text, x, y, style.glow);
            }
            
            // 5. Efectos post-renderizado
            this.applyPostEffects(ctx, text, x, y, style);
            
        } finally {
            // Restaurar contexto
            ctx.restore();
        }
    }

    /**
     * Aplica efectos especiales antes del renderizado
     */
    applySpecialEffects(ctx, text, x, y, style) {
        // Efecto de distorsión para grunge
        if (style.distortion) {
            this.applyDistortion(ctx, x, y);
        }
        
        // Efecto de rayos para electric/lightning
        if (style.lightning) {
            this.addLightningEffect(ctx, text, x, y, style);
        }
        
        // Efecto de glitch digital
        if (style.digitalGlitch) {
            this.addDigitalGlitch(ctx, text, x, y);
        }
    }

    /**
     * Aplica efectos posteriores al renderizado
     */
    applyPostEffects(ctx, text, x, y, style) {
        // Efecto de goteo para blood
        if (style.drip) {
            this.addDripEffect(ctx, text, x, y, style);
        }
        
        // Nota: Las animaciones se manejan a nivel de aplicación
        // ya que requieren múltiples frames
        if (style.animation) {
            // Guardar información de animación para uso posterior
            this.animationInfo = style.animation;
        }
    }

    /**
     * Añade efecto de distorsión
     */
    applyDistortion(ctx, x, y) {
        const distortionAmount = 2;
        ctx.transform(
            1 + Math.random() * 0.02 - 0.01,
            Math.random() * 0.01 - 0.005,
            Math.random() * 0.01 - 0.005,
            1 + Math.random() * 0.02 - 0.01,
            Math.random() * distortionAmount - distortionAmount/2,
            Math.random() * distortionAmount - distortionAmount/2
        );
    }

    /**
     * Añade efecto de rayos eléctricos
     */
    addLightningEffect(ctx, text, x, y, style) {
        ctx.save();
        
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
        const textHeight = parseInt(ctx.font.match(/\d+/)) || 60;
        
        // Dibujar rayos alrededor del texto
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.strokeStyle = style.glow?.color || '#00FFFF';
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.6;
            
            const startX = x - textWidth/2 + Math.random() * textWidth;
            const startY = y - textHeight/2 + Math.random() * textHeight;
            const endX = startX + (Math.random() - 0.5) * 50;
            const endY = startY + (Math.random() - 0.5) * 50;
            
            // Crear rayo zigzag
            ctx.moveTo(startX, startY);
            const segments = 5;
            for (let j = 1; j <= segments; j++) {
                const segmentX = startX + (endX - startX) * (j / segments);
                const segmentY = startY + (endY - startY) * (j / segments);
                const offsetX = (Math.random() - 0.5) * 20;
                const offsetY = (Math.random() - 0.5) * 20;
                ctx.lineTo(segmentX + offsetX, segmentY + offsetY);
            }
            
            ctx.stroke();
        }
        
        ctx.restore();
    }

    /**
     * Añade efecto de glitch digital
     */
    addDigitalGlitch(ctx, text, x, y) {
        ctx.save();
        
        // Crear líneas de glitch
        for (let i = 0; i < 5; i++) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = Math.random() > 0.5 ? '#FF0080' : '#00FFFF';
            
            const offsetX = (Math.random() - 0.5) * 6;
            const offsetY = (Math.random() - 0.5) * 3;
            
            ctx.fillText(text, x + offsetX, y + offsetY);
        }
        
        ctx.restore();
    }

    /**
     * Añade efecto de goteo
     */
    addDripEffect(ctx, text, x, y, style) {
        ctx.save();
        
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
        const textHeight = parseInt(ctx.font.match(/\d+/)) || 60;
        
        // Dibujar gotas
        for (let i = 0; i < 8; i++) {
            const dripX = x - textWidth/2 + Math.random() * textWidth;
            const dripY = y + textHeight/2;
            const dripHeight = Math.random() * 20 + 10;
            
            ctx.beginPath();
            ctx.fillStyle = style.gradient?.colors?.[0]?.color || '#8B0000';
            ctx.globalAlpha = 0.7;
            
            // Crear forma de gota
            ctx.ellipse(dripX, dripY + dripHeight/2, 2, dripHeight/2, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Pequeña gota en la punta
            ctx.beginPath();
            ctx.ellipse(dripX, dripY + dripHeight, 1, 2, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }

    /**
     * Añade efecto de brillo
     */
    addGlow(ctx, text, x, y, glowConfig) {
        ctx.save();
        ctx.shadowColor = glowConfig.color || '#FFFFFF';
        ctx.shadowBlur = glowConfig.intensity || 10;
        ctx.globalCompositeOperation = 'screen';
        ctx.fillText(text, x, y);
        ctx.restore();
    }

    /**
     * Obtiene la lista de estilos disponibles
     */
    getAvailableStyles() {
        return Object.keys(this.styles).map(key => ({
            name: key,
            description: this.styles[key].description || `Estilo ${key}`
        }));
    }

    /**
     * Calcula el tamaño óptimo del canvas basado en el texto
     */
    calculateOptimalSize(text, fontSize) {
        // Estimación aproximada del ancho del texto
        const avgCharWidth = fontSize * 0.6;
        const textWidth = text.length * avgCharWidth;
        const padding = fontSize;
        
        return {
            width: Math.max(400, textWidth + padding * 2),
            height: Math.max(100, fontSize * 2)
        };
    }
}

module.exports = GraffitiGenerator;
