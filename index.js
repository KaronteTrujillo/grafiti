/**
 * Graffiti Text Generator Library
 * Convierte texto a imágenes PNG estilo graffiti
 */

const GraffitiGenerator = require('./lib/GraffitiGenerator');

module.exports = {
    GraffitiGenerator,
    
    // Función de conveniencia para generar graffiti rápidamente
    generateGraffiti: async (text, style = 'classic', options = {}) => {
        const generator = new GraffitiGenerator();
        return await generator.generate(text, style, options);
    },
    
    // Obtener lista de estilos disponibles
    getAvailableStyles: () => {
        const generator = new GraffitiGenerator();
        return generator.getAvailableStyles();
    }
};
