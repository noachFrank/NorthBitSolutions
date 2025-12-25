import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

// Electric surge lines
export const ElectricSurge = ({ color = '#00D4FF', direction = 'horizontal', delay = 0 }) => {
    return (
        <motion.div
            style={{
                position: 'absolute',
                [direction === 'horizontal' ? 'left' : 'top']: 0,
                [direction === 'horizontal' ? 'right' : 'bottom']: 0,
                [direction === 'horizontal' ? 'height' : 'width']: '2px',
                background: `linear-gradient(${direction === 'horizontal' ? '90deg' : '180deg'}, transparent 0%, ${color} 50%, transparent 100%)`,
                boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
                opacity: 0.6,
            }}
            animate={{
                [direction === 'horizontal' ? 'top' : 'left']: ['0%', '100%'],
                opacity: [0, 0.8, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                delay: delay,
                ease: 'linear',
            }}
        />
    );
};

// Animated circuit paths
export const CircuitLines = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.15,
                overflow: 'hidden',
                pointerEvents: 'none',
            }}
        >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00D4FF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#7B2DFF" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Circuit path 1 */}
                <motion.path
                    d="M0,100 H200 V200 H400 V100 H600"
                    stroke="url(#circuitGradient)"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                />

                {/* Circuit path 2 */}
                <motion.path
                    d="M100,0 V150 H300 V50 H500 V200"
                    stroke="url(#circuitGradient)"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5, delay: 1 }}
                />
            </svg>
        </Box>
    );
};

// Electric bolt effect
export const ElectricBolt = ({ startX, startY, endX, endY, delay = 0 }) => {
    const generateBoltPath = () => {
        let path = `M${startX},${startY}`;
        const segments = 8;
        const dx = (endX - startX) / segments;
        const dy = (endY - startY) / segments;

        for (let i = 1; i < segments; i++) {
            const x = startX + dx * i + (Math.random() - 0.5) * 30;
            const y = startY + dy * i + (Math.random() - 0.5) * 30;
            path += ` L${x},${y}`;
        }
        path += ` L${endX},${endY}`;
        return path;
    };

    return (
        <motion.svg
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3 + delay,
            }}
        >
            <defs>
                <filter id="boltGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <motion.path
                d={generateBoltPath()}
                stroke="#00D4FF"
                strokeWidth="2"
                fill="none"
                filter="url(#boltGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{ duration: 0.15 }}
            />
        </motion.svg>
    );
};

// Energy wave effect
export const EnergyWave = ({ color = '#00D4FF' }) => {
    return (
        <>
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        border: `1px solid ${color}`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        scale: [1, 4],
                        opacity: [0.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.3,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </>
    );
};

// Data stream effect
export const DataStream = ({ position = 'left' }) => {
    const characters = '01';

    return (
        <Box
            sx={{
                position: 'absolute',
                [position]: position === 'left' ? '5%' : '5%',
                top: 0,
                bottom: 0,
                width: '30px',
                overflow: 'hidden',
                opacity: 0.1,
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#00D4FF',
                display: 'flex',
                flexDirection: 'column',
                pointerEvents: 'none',
            }}
        >
            {Array.from({ length: 50 }).map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: [0, 1, 0], y: [0, 500] }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                    }}
                >
                    {characters[Math.floor(Math.random() * characters.length)]}
                </motion.span>
            ))}
        </Box>
    );
};

// Neon grid with pulse effect
export const NeonGrid = ({ color = '#00D4FF', size = 60 }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
          linear-gradient(${color}15 1px, transparent 1px),
          linear-gradient(90deg, ${color}15 1px, transparent 1px)
        `,
                backgroundSize: `${size}px ${size}px`,
                animation: 'gridPulse 4s ease-in-out infinite',
                '@keyframes gridPulse': {
                    '0%, 100%': { opacity: 0.3 },
                    '50%': { opacity: 0.6 },
                },
            }}
        />
    );
};

// Hexagonal tech pattern
export const HexPattern = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                pointerEvents: 'none',
            }}
        />
    );
};

export default {
    ElectricSurge,
    CircuitLines,
    ElectricBolt,
    EnergyWave,
    DataStream,
    NeonGrid,
    HexPattern,
};
