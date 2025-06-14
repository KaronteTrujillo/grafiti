/**
 * Utilidades para efectos visuales
 */

/**
 * Aplica un gradiente al contexto
 */
function applyGradient(ctx, x, y, gradientConfig, text) {
    let gradient;
    
    // Calcular las dimensiones aproximadas del texto
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = parseInt(ctx.font.match(/\d+/)) || 60;
    
    switch (gradientConfig.type) {
        case 'linear':
            gradient = createLinearGradient(ctx, x, y, textWidth, textHeight, gradientConfig);
            break;
        case 'radial':
            gradient = createRadialGradient(ctx, x, y, textWidth, textHeight, gradientConfig);
            break;
        default:
            gradient = createLinearGradient(ctx, x, y, textWidth, textHeight, gradientConfig);
    }
    
    // Aplicar colores al gradiente
    gradientConfig.colors.forEach(colorStop => {
        gradient.addColorStop(colorStop.offset, colorStop.color);
    });
    
    return gradient;
}

/**
 * Crea un gradiente lineal
 */
function createLinearGradient(ctx, x, y, width, height, config) {
    let x0, y0, x1, y1;
    
    switch (config.direction) {
        case 'horizontal':
            x0 = x - width / 2;
            y0 = y;
            x1 = x + width / 2;
            y1 = y;
            break;
        case 'vertical':
            x0 = x;
            y0 = y - height / 2;
            x1 = x;
            y1 = y + height / 2;
            break;
        case 'diagonal':
            x0 = x - width / 2;
            y0 = y - height / 2;
            x1 = x + width / 2;
            y1 = y + height / 2;
            break;
        default:
            x0 = x;
            y0 = y - height / 2;
            x1 = x;
            y1 = y + height / 2;
    }
    
    return ctx.createLinearGradient(x0, y0, x1, y1);
}

/**
 * Crea un gradiente radial
 */
function createRadialGradient(ctx, x, y, width, height, config) {
    const radius = Math.max(width, height) / 2;
    return ctx.createRadialGradient(x, y, 0, x, y, radius);
}

/**
 * Añade sombra al texto
 */
function addShadow(ctx, text, x, y, shadowConfig) {
    ctx.save();
    
    // Configurar sombra
    ctx.fillStyle = shadowConfig.color || '#000000';
    ctx.shadowColor = 'transparent'; // Evitar sombra recursiva
    
    // Dibujar sombra desplazada
    ctx.fillText(
        text, 
        x + (shadowConfig.offsetX || 2), 
        y + (shadowConfig.offsetY || 2)
    );
    
    // Aplicar desenfoque si se especifica
    if (shadowConfig.blur > 0) {
        ctx.shadowBlur = shadowConfig.blur;
        ctx.shadowColor = shadowConfig.color;
        ctx.fillText(
            text, 
            x + (shadowConfig.offsetX || 2), 
            y + (shadowConfig.offsetY || 2)
        );
    }
    
    ctx.restore();
}

/**
 * Añade contorno al texto
 */
function addOutline(ctx, text, x, y, outlineConfig) {
    ctx.save();
    
    // Configurar contorno
    ctx.strokeStyle = outlineConfig.color || '#000000';
    ctx.lineWidth = outlineConfig.width || 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    // Dibujar contorno
    ctx.strokeText(text, x, y);
    
    ctx.restore();
}

/**
 * Calcula el brillo promedio de un color hexadecimal
 */
function getColorBrightness(hexColor) {
    const rgb = hexToRgb(hexColor);
    if (!rgb) return 128;
    
    // Fórmula de luminancia
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

/**
 * Convierte color hexadecimal a RGB
 */
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Valida la configuración de un estilo
 */
function validateStyleConfig(style) {
    const errors = [];
    
    if (!style.fontFamily) {
        errors.push('fontFamily es requerido');
    }
    
    if (!style.gradient && !style.color) {
        errors.push('gradient o color es requerido');
    }
    
    if (style.gradient && !style.gradient.colors) {
        errors.push('gradient.colors es requerido cuando se usa gradient');
    }
    
    return errors;
}

module.exports = {
    applyGradient,
    addShadow,
    addOutline,
    getColorBrightness,
    hexToRgb,
    validateStyleConfig
};
