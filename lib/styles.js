/**
 * Definición de estilos de graffiti
 * Cada estilo incluye configuración de colores, fuentes y efectos
 */

const styles = {
    // Estilo clásico - Rojo y naranja con sombra negra
    classic: {
        description: 'Estilo clásico de graffiti con colores rojos y naranjas',
        fontFamily: 'Impact, Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 60,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF6B35' },
                { offset: 0.5, color: '#F7931E' },
                { offset: 1, color: '#FFD700' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#8B0000',
            width: 4
        },
        shadow: {
            color: '#000000',
            offsetX: 3,
            offsetY: 3,
            blur: 5
        }
    },

    // Estilo neón - Colores brillantes con efecto de brillo
    neon: {
        description: 'Estilo neón brillante con efectos de luz',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 65,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#00FFFF' },
                { offset: 0.5, color: '#FF00FF' },
                { offset: 1, color: '#FFFF00' }
            ],
            direction: 'horizontal'
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        glow: {
            color: '#00FFFF',
            intensity: 20
        },
        shadow: {
            color: '#000080',
            offsetX: 2,
            offsetY: 2,
            blur: 8
        }
    },

    // Estilo urbano - Azules y verdes con textura rugosa
    urban: {
        description: 'Estilo urbano con colores azules y verdes',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 58,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#1E90FF' },
                { offset: 0.6, color: '#32CD32' },
                { offset: 1, color: '#006400' }
            ]
        },
        outline: {
            color: '#000080',
            width: 3
        },
        shadow: {
            color: '#2F4F4F',
            offsetX: 4,
            offsetY: 2,
            blur: 6
        },
        skew: {
            x: 0.1,
            y: 0
        }
    },

    // Estilo fuego - Rojos, naranjas y amarillos intensos
    fire: {
        description: 'Estilo fuego con colores intensos rojos y naranjas',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 62,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF4500' },
                { offset: 0.3, color: '#FF6347' },
                { offset: 0.7, color: '#FFD700' },
                { offset: 1, color: '#FFFF00' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#8B0000',
            width: 5
        },
        shadow: {
            color: '#654321',
            offsetX: 2,
            offsetY: 4,
            blur: 8
        },
        glow: {
            color: '#FF4500',
            intensity: 15
        }
    },

    // Estilo ice - Azules y blancos fríos
    ice: {
        description: 'Estilo helado con tonos azules y blancos',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 60,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#E0FFFF' },
                { offset: 0.4, color: '#87CEEB' },
                { offset: 0.8, color: '#4169E1' },
                { offset: 1, color: '#191970' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#FFFFFF',
            width: 3
        },
        shadow: {
            color: '#483D8B',
            offsetX: 1,
            offsetY: 3,
            blur: 7
        },
        glow: {
            color: '#E0FFFF',
            intensity: 12
        }
    },

    // Estilo sunset - Colores de atardecer
    sunset: {
        description: 'Estilo atardecer con degradados cálidos',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 64,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF1493' },
                { offset: 0.3, color: '#FF4500' },
                { offset: 0.6, color: '#FFA500' },
                { offset: 0.9, color: '#FFD700' },
                { offset: 1, color: '#F0E68C' }
            ],
            direction: 'diagonal'
        },
        outline: {
            color: '#8B008B',
            width: 4
        },
        shadow: {
            color: '#696969',
            offsetX: 3,
            offsetY: 3,
            blur: 6
        }
    },

    // Estilo matrix - Verde digital
    matrix: {
        description: 'Estilo Matrix con efectos verdes digitales',
        fontFamily: 'Courier New, monospace',
        fontWeight: 'bold',
        fontSize: 56,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#00FF00' },
                { offset: 0.5, color: '#32CD32' },
                { offset: 1, color: '#006400' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#008000',
            width: 2
        },
        shadow: {
            color: '#000000',
            offsetX: 2,
            offsetY: 2,
            blur: 10
        },
        glow: {
            color: '#00FF00',
            intensity: 18
        }
    },

    // Estilo galaxy - Colores espaciales
    galaxy: {
        description: 'Estilo galaxia con colores espaciales',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 58,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#9400D3' },
                { offset: 0.3, color: '#4B0082' },
                { offset: 0.6, color: '#0000FF' },
                { offset: 0.8, color: '#00BFFF' },
                { offset: 1, color: '#E6E6FA' }
            ]
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        shadow: {
            color: '#191970',
            offsetX: 4,
            offsetY: 2,
            blur: 8
        },
        glow: {
            color: '#9400D3',
            intensity: 16
        }
    },

    // ESTILOS ADICIONALES - TOTAL 15 ESTILOS NORMALES

    // Estilo grunge - Textura áspera
    grunge: {
        description: 'Estilo grunge con textura áspera y colores oscuros',
        fontFamily: 'Georgia, serif',
        fontWeight: 'bold',
        fontSize: 62,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#8B4513' },
                { offset: 0.4, color: '#A0522D' },
                { offset: 0.7, color: '#CD853F' },
                { offset: 1, color: '#F4A460' }
            ],
            direction: 'diagonal'
        },
        outline: {
            color: '#2F1B14',
            width: 5
        },
        shadow: {
            color: '#000000',
            offsetX: 5,
            offsetY: 3,
            blur: 7
        },
        distortion: true
    },

    // Estilo chrome - Efecto metálico
    chrome: {
        description: 'Estilo cromo con efecto metálico brillante',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 68,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#E8E8E8' },
                { offset: 0.2, color: '#C0C0C0' },
                { offset: 0.5, color: '#808080' },
                { offset: 0.8, color: '#A0A0A4' },
                { offset: 1, color: '#FFFFFF' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#404040',
            width: 3
        },
        shadow: {
            color: '#333333',
            offsetX: 2,
            offsetY: 4,
            blur: 6
        },
        glow: {
            color: '#FFFFFF',
            intensity: 8
        }
    },

    // Estilo rainbow - Arcoíris vibrante
    rainbow: {
        description: 'Estilo arcoíris con todos los colores vibrantes',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 60,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF0000' },
                { offset: 0.16, color: '#FF8000' },
                { offset: 0.33, color: '#FFFF00' },
                { offset: 0.5, color: '#00FF00' },
                { offset: 0.66, color: '#0080FF' },
                { offset: 0.83, color: '#8000FF' },
                { offset: 1, color: '#FF0080' }
            ],
            direction: 'horizontal'
        },
        outline: {
            color: '#FFFFFF',
            width: 3
        },
        shadow: {
            color: '#000000',
            offsetX: 3,
            offsetY: 3,
            blur: 5
        }
    },

    // Estilo gold - Dorado lujoso
    gold: {
        description: 'Estilo dorado lujoso con brillos metálicos',
        fontFamily: 'Times New Roman, serif',
        fontWeight: 'bold',
        fontSize: 65,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#FFD700' },
                { offset: 0.3, color: '#FFA500' },
                { offset: 0.6, color: '#FF8C00' },
                { offset: 0.9, color: '#B8860B' },
                { offset: 1, color: '#DAA520' }
            ]
        },
        outline: {
            color: '#8B7355',
            width: 4
        },
        shadow: {
            color: '#654321',
            offsetX: 4,
            offsetY: 4,
            blur: 8
        },
        glow: {
            color: '#FFD700',
            intensity: 12
        }
    },

    // Estilo poison - Verde tóxico
    poison: {
        description: 'Estilo venenoso con verdes tóxicos',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 64,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#ADFF2F' },
                { offset: 0.3, color: '#32CD32' },
                { offset: 0.6, color: '#228B22' },
                { offset: 1, color: '#006400' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#0F4F0F',
            width: 4
        },
        shadow: {
            color: '#001100',
            offsetX: 3,
            offsetY: 5,
            blur: 9
        },
        glow: {
            color: '#32CD32',
            intensity: 18
        }
    },

    // Estilo blood - Rojo sangre
    blood: {
        description: 'Estilo sangre con rojos intensos y goteos',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 61,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#8B0000' },
                { offset: 0.4, color: '#DC143C' },
                { offset: 0.7, color: '#FF0000' },
                { offset: 1, color: '#FF6347' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#4A0E0E',
            width: 5
        },
        shadow: {
            color: '#2F0000',
            offsetX: 4,
            offsetY: 6,
            blur: 10
        },
        drip: true
    },

    // Estilo electric - Eléctrico azul
    electric: {
        description: 'Estilo eléctrico con rayos y azules brillantes',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 63,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#00FFFF' },
                { offset: 0.3, color: '#0080FF' },
                { offset: 0.6, color: '#0000FF' },
                { offset: 1, color: '#000080' }
            ]
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        shadow: {
            color: '#000040',
            offsetX: 2,
            offsetY: 3,
            blur: 12
        },
        glow: {
            color: '#00FFFF',
            intensity: 25
        },
        lightning: true
    },

    // COMPLETANDO LOS 15 ESTILOS NORMALES

    // Estilo volcanic - Lava ardiente
    volcanic: {
        description: 'Estilo volcánico con colores de lava ardiente',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 66,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#FF4500' },
                { offset: 0.2, color: '#FF6347' },
                { offset: 0.5, color: '#DC143C' },
                { offset: 0.8, color: '#8B0000' },
                { offset: 1, color: '#2F0000' }
            ]
        },
        outline: {
            color: '#000000',
            width: 4
        },
        shadow: {
            color: '#4A0000',
            offsetX: 3,
            offsetY: 5,
            blur: 12
        },
        glow: {
            color: '#FF4500',
            intensity: 20
        }
    },

    // Estilo cyberpunk - Futuro digital
    cyberpunk: {
        description: 'Estilo cyberpunk con colores neón del futuro',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 59,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF0080' },
                { offset: 0.3, color: '#8000FF' },
                { offset: 0.6, color: '#0080FF' },
                { offset: 1, color: '#00FFFF' }
            ],
            direction: 'diagonal'
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        shadow: {
            color: '#000040',
            offsetX: 2,
            offsetY: 2,
            blur: 15
        },
        glow: {
            color: '#FF0080',
            intensity: 22
        },
        digitalGlitch: true
    },

    // Estilo crystal - Cristales brillantes
    crystal: {
        description: 'Estilo cristalino con efectos transparentes y brillos',
        fontFamily: 'Times New Roman, serif',
        fontWeight: 'bold',
        fontSize: 64,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#E0FFFF' },
                { offset: 0.25, color: '#B0E0E6' },
                { offset: 0.5, color: '#87CEEB' },
                { offset: 0.75, color: '#4682B4' },
                { offset: 1, color: '#2F4F4F' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#FFFFFF',
            width: 3
        },
        shadow: {
            color: '#708090',
            offsetX: 2,
            offsetY: 4,
            blur: 8
        },
        glow: {
            color: '#E0FFFF',
            intensity: 15
        },
        transparency: 0.9
    },

    // ESTILOS CON ANIMACIONES - 10 ESTILOS ANIMADOS

    // Estilo pulse_neon - Neón pulsante
    pulse_neon: {
        description: 'Estilo neón con efecto de pulso animado',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 65,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#00FFFF' },
                { offset: 0.5, color: '#FF00FF' },
                { offset: 1, color: '#FFFF00' }
            ]
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        shadow: {
            color: '#000080',
            offsetX: 2,
            offsetY: 2,
            blur: 10
        },
        animation: {
            type: 'pulse',
            duration: 1500,
            intensity: 0.3
        },
        glow: {
            color: '#00FFFF',
            intensity: 25,
            animated: true
        }
    },

    // Estilo wave_fire - Fuego ondulante
    wave_fire: {
        description: 'Estilo fuego con ondas animadas',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 62,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF4500' },
                { offset: 0.3, color: '#FF6347' },
                { offset: 0.6, color: '#FFD700' },
                { offset: 1, color: '#FFFF00' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#8B0000',
            width: 4
        },
        shadow: {
            color: '#654321',
            offsetX: 3,
            offsetY: 4,
            blur: 8
        },
        animation: {
            type: 'wave',
            duration: 2000,
            amplitude: 5
        },
        glow: {
            color: '#FF4500',
            intensity: 18,
            animated: true
        }
    },

    // Estilo rotate_rainbow - Arcoíris rotativo
    rotate_rainbow: {
        description: 'Estilo arcoíris con rotación de colores',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 60,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF0000' },
                { offset: 0.16, color: '#FF8000' },
                { offset: 0.33, color: '#FFFF00' },
                { offset: 0.5, color: '#00FF00' },
                { offset: 0.66, color: '#0080FF' },
                { offset: 0.83, color: '#8000FF' },
                { offset: 1, color: '#FF0080' }
            ],
            direction: 'horizontal'
        },
        outline: {
            color: '#FFFFFF',
            width: 3
        },
        shadow: {
            color: '#000000',
            offsetX: 3,
            offsetY: 3,
            blur: 6
        },
        animation: {
            type: 'colorRotation',
            duration: 3000,
            continuous: true
        }
    },

    // Estilo shake_electric - Eléctrico tembloroso
    shake_electric: {
        description: 'Estilo eléctrico con temblor animado',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 63,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#00FFFF' },
                { offset: 0.4, color: '#0080FF' },
                { offset: 0.8, color: '#0000FF' },
                { offset: 1, color: '#000080' }
            ]
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        shadow: {
            color: '#000040',
            offsetX: 2,
            offsetY: 3,
            blur: 12
        },
        animation: {
            type: 'shake',
            duration: 100,
            intensity: 2
        },
        glow: {
            color: '#00FFFF',
            intensity: 30,
            animated: true
        },
        lightning: true
    },

    // Estilo zoom_chrome - Cromo con zoom
    zoom_chrome: {
        description: 'Estilo cromo con efecto de zoom pulsante',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 68,
        gradient: {
            type: 'radial',
            colors: [
                { offset: 0, color: '#FFFFFF' },
                { offset: 0.3, color: '#E8E8E8' },
                { offset: 0.6, color: '#C0C0C0' },
                { offset: 0.9, color: '#808080' },
                { offset: 1, color: '#404040' }
            ]
        },
        outline: {
            color: '#000000',
            width: 3
        },
        shadow: {
            color: '#333333',
            offsetX: 2,
            offsetY: 4,
            blur: 6
        },
        animation: {
            type: 'zoom',
            duration: 1800,
            scale: 0.1
        },
        glow: {
            color: '#FFFFFF',
            intensity: 10
        }
    },

    // Estilo flow_galaxy - Galaxia fluida
    flow_galaxy: {
        description: 'Estilo galaxia con flujo de colores animado',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 58,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#9400D3' },
                { offset: 0.25, color: '#4B0082' },
                { offset: 0.5, color: '#0000FF' },
                { offset: 0.75, color: '#00BFFF' },
                { offset: 1, color: '#E6E6FA' }
            ],
            direction: 'diagonal'
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        shadow: {
            color: '#191970',
            offsetX: 4,
            offsetY: 2,
            blur: 8
        },
        animation: {
            type: 'flow',
            duration: 4000,
            direction: 'horizontal'
        },
        glow: {
            color: '#9400D3',
            intensity: 16,
            animated: true
        }
    },

    // Estilo bounce_gold - Oro rebotante
    bounce_gold: {
        description: 'Estilo dorado con efecto de rebote',
        fontFamily: 'Times New Roman, serif',
        fontWeight: 'bold',
        fontSize: 65,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FFD700' },
                { offset: 0.3, color: '#FFA500' },
                { offset: 0.6, color: '#FF8C00' },
                { offset: 1, color: '#DAA520' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#8B7355',
            width: 4
        },
        shadow: {
            color: '#654321',
            offsetX: 4,
            offsetY: 4,
            blur: 8
        },
        animation: {
            type: 'bounce',
            duration: 1200,
            height: 10
        },
        glow: {
            color: '#FFD700',
            intensity: 12
        }
    },

    // Estilo spin_matrix - Matrix giratorio
    spin_matrix: {
        description: 'Estilo Matrix con rotación continua',
        fontFamily: 'Courier New, monospace',
        fontWeight: 'bold',
        fontSize: 56,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#00FF00' },
                { offset: 0.5, color: '#32CD32' },
                { offset: 1, color: '#006400' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#008000',
            width: 2
        },
        shadow: {
            color: '#000000',
            offsetX: 2,
            offsetY: 2,
            blur: 10
        },
        animation: {
            type: 'spin',
            duration: 3000,
            continuous: true
        },
        glow: {
            color: '#00FF00',
            intensity: 18,
            animated: true
        }
    },

    // Estilo flicker_blood - Sangre parpadeante
    flicker_blood: {
        description: 'Estilo sangre con parpadeo terrorífico',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: 61,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#8B0000' },
                { offset: 0.4, color: '#DC143C' },
                { offset: 0.7, color: '#FF0000' },
                { offset: 1, color: '#FF6347' }
            ],
            direction: 'vertical'
        },
        outline: {
            color: '#4A0E0E',
            width: 5
        },
        shadow: {
            color: '#2F0000',
            offsetX: 4,
            offsetY: 6,
            blur: 10
        },
        animation: {
            type: 'flicker',
            duration: 300,
            intensity: 0.4
        },
        drip: true,
        glow: {
            color: '#DC143C',
            intensity: 15
        }
    },

    // Estilo glitch_cyber - Cyberpunk con glitch
    glitch_cyber: {
        description: 'Estilo cyberpunk con efectos de glitch digital',
        fontFamily: 'Arial Black, sans-serif',
        fontWeight: 'bold',
        fontSize: 59,
        gradient: {
            type: 'linear',
            colors: [
                { offset: 0, color: '#FF0080' },
                { offset: 0.25, color: '#8000FF' },
                { offset: 0.5, color: '#0080FF' },
                { offset: 0.75, color: '#00FFFF' },
                { offset: 1, color: '#00FF80' }
            ],
            direction: 'horizontal'
        },
        outline: {
            color: '#FFFFFF',
            width: 2
        },
        shadow: {
            color: '#000040',
            offsetX: 2,
            offsetY: 2,
            blur: 15
        },
        animation: {
            type: 'glitch',
            duration: 200,
            intensity: 3
        },
        glow: {
            color: '#FF0080',
            intensity: 22,
            animated: true
        },
        digitalGlitch: true
    }
};

module.exports = styles;
