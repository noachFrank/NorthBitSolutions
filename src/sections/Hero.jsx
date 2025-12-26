import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../assets/northbit_stacked_transparent.png';

// Random electric lines component
const ElectricLines = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const spawnLine = () => {
            const isHorizontal = Math.random() > 0.5;
            const id = Date.now() + Math.random();
            const color = Math.random() > 0.5 ? '#00D4FF' : '#7B2DFF';

            const newLine = {
                id,
                isHorizontal,
                color,
                position: Math.random() * 80 + 10, // 10-90% of the screen
                duration: 1.5 + Math.random() * 1.5, // 1.5-3 seconds
            };

            setLines(prev => [...prev, newLine]);

            // Remove line after animation completes
            setTimeout(() => {
                setLines(prev => prev.filter(line => line.id !== id));
            }, newLine.duration * 1000 + 500);
        };

        // Spawn lines at random intervals
        const scheduleNext = () => {
            const delay = 800 + Math.random() * 2500; // 0.8-3.3 seconds
            return setTimeout(() => {
                spawnLine();
                scheduleNext();
            }, delay);
        };

        // Initial spawn
        spawnLine();
        const timeoutId = scheduleNext();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <AnimatePresence>
            {lines.map(line => (
                <motion.div
                    key={line.id}
                    initial={{
                        opacity: 0,
                        ...(line.isHorizontal
                            ? { left: '-10%', top: `${line.position}%` }
                            : { top: '-10%', left: `${line.position}%` }
                        )
                    }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        ...(line.isHorizontal
                            ? { left: '110%' }
                            : { top: '110%' }
                        )
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: line.duration,
                        ease: 'linear',
                        opacity: { times: [0, 0.1, 0.9, 1] }
                    }}
                    style={{
                        position: 'absolute',
                        ...(line.isHorizontal
                            ? { width: '15%', height: '2px' }
                            : { width: '2px', height: '15%' }
                        ),
                        background: line.isHorizontal
                            ? `linear-gradient(90deg, transparent, ${line.color}, ${line.color}, transparent)`
                            : `linear-gradient(180deg, transparent, ${line.color}, ${line.color}, transparent)`,
                        boxShadow: `0 0 20px ${line.color}, 0 0 40px ${line.color}`,
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </AnimatePresence>
    );
};

// Animated particles component
const ParticleField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.8,
                    speedY: (Math.random() - 0.5) * 0.8,
                    opacity: Math.random() * 0.6 + 0.2,
                    color: Math.random() > 0.5 ? '#00D4FF' : '#7B2DFF',
                    pulse: Math.random() * Math.PI * 2,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.pulse += 0.05;

                // Wrap around screen
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Pulsing size
                const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;

                // Draw particle with glow
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.shadowBlur = 10;
                ctx.shadowColor = particle.color;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Draw connections with electric effect
                particles.forEach((particle2, j) => {
                    if (i === j) return;
                    const dx = particle.x - particle2.x;
                    const dy = particle.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = particle.color;
                        ctx.globalAlpha = (1 - distance / 150) * 0.2;
                        ctx.lineWidth = 1;

                        // Add slight zigzag for electric effect
                        const midX = (particle.x + particle2.x) / 2 + (Math.random() - 0.5) * 5;
                        const midY = (particle.y + particle2.y) / 2 + (Math.random() - 0.5) * 5;

                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(midX, midY);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.stroke();
                    }
                });
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(drawParticles);
        };

        resizeCanvas();
        createParticles();
        drawParticles();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            }}
        />
    );
};

const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: `
          radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 40%),
          radial-gradient(ellipse at 80% 80%, rgba(123, 45, 255, 0.15) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 60%),
          linear-gradient(180deg, #0A0A0F 0%, #0D0D15 50%, #0A0A0F 100%)
        `,
            }}
        >
            {/* Particle field */}
            <ParticleField />

            {/* Random electric lines */}
            <ElectricLines />

            {/* Electric corner accents */}
            <Box sx={{ position: 'absolute', top: 40, left: 40, width: 100, height: 100 }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #00D4FF, transparent)',
                        boxShadow: '0 0 10px #00D4FF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(180deg, #00D4FF, transparent)',
                        boxShadow: '0 0 10px #00D4FF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </Box>
            <Box sx={{ position: 'absolute', top: 40, right: 40, width: 100, height: 100 }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(270deg, #7B2DFF, transparent)',
                        boxShadow: '0 0 10px #7B2DFF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(180deg, #7B2DFF, transparent)',
                        boxShadow: '0 0 10px #7B2DFF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
            </Box>
            <Box sx={{ position: 'absolute', bottom: 40, left: 40, width: 100, height: 100 }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #7B2DFF, transparent)',
                        boxShadow: '0 0 10px #7B2DFF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(0deg, #7B2DFF, transparent)',
                        boxShadow: '0 0 10px #7B2DFF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
            </Box>
            <Box sx={{ position: 'absolute', bottom: 40, right: 40, width: 100, height: 100 }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(270deg, #00D4FF, transparent)',
                        boxShadow: '0 0 10px #00D4FF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(0deg, #00D4FF, transparent)',
                        boxShadow: '0 0 10px #00D4FF',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
            </Box>

            {/* Animated cyber grid */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                    transform: 'perspective(500px) rotateX(60deg)',
                    transformOrigin: 'center top',
                    opacity: 0.4,
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
                }}
            />

            {/* Horizontal scan line */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.5) 50%, transparent 100%)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                }}
                animate={{
                    top: ['0%', '100%'],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Floating geometric shapes */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: 400,
                    height: 400,
                    border: '1px solid rgba(0, 212, 255, 0.1)',
                    borderRadius: '50%',
                    top: '10%',
                    left: '5%',
                }}
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    width: 300,
                    height: 300,
                    border: '1px solid rgba(123, 45, 255, 0.15)',
                    top: '20%',
                    right: '10%',
                }}
                animate={{
                    rotate: -360,
                    borderRadius: ['0%', '50%', '0%'],
                }}
                transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                    borderRadius: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                }}
            />

            {/* Glowing orbs with enhanced effects */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, rgba(0, 212, 255, 0.1) 30%, transparent 70%)',
                    top: '5%',
                    left: '10%',
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    width: 600,
                    height: 600,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(123, 45, 255, 0.25) 0%, rgba(123, 45, 255, 0.1) 30%, transparent 70%)',
                    bottom: '0%',
                    right: '5%',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: [0, -80, 0],
                    y: [0, -60, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Hexagon pattern overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.03,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Stack spacing={4} alignItems="center" textAlign="center">
                        {/* Company Logo */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 2.2, delay: 0.5, type: 'spring' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    mb: 2,
                                }}
                            >
                                {/* Glow effect behind logo */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '150%',
                                        height: '150%',
                                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, rgba(123, 45, 255, 0.2) 40%, transparent 70%)',
                                        filter: 'blur(30px)',
                                        zIndex: -1,
                                    }}
                                />
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="North Bit Solutions Logo"
                                    sx={{
                                        width: 'auto',
                                        height: { xs: 150, sm: 180, md: 200 },
                                        maxWidth: '90vw',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.5))',
                                    }}
                                />
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    background: 'linear-gradient(135deg, #FFFFFF 0%, #00D4FF 40%, #7B2DFF 70%, #FFFFFF 100%)',
                                    backgroundSize: '200% auto',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    maxWidth: 900,
                                    textShadow: '0 0 80px rgba(0, 212, 255, 0.5)',
                                    animation: 'shimmer 3s linear infinite',
                                    '@keyframes shimmer': {
                                        '0%': { backgroundPosition: '0% center' },
                                        '100%': { backgroundPosition: '200% center' },
                                    },
                                }}
                            >
                                North Bit Solutions
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 1 }}
                        >
                            <Box sx={{ position: 'relative', display: 'inline-block' }}>
                                <Typography
                                    variant="h4"
                                    component="p"
                                    sx={{
                                        color: 'text.secondary',
                                        maxWidth: 700,
                                        fontWeight: 500,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        position: 'relative',
                                        '&::before, &::after': {
                                            content: '"⚡"',
                                            mx: 2,
                                            color: 'primary.main',
                                            filter: 'drop-shadow(0 0 8px #00D4FF)',
                                        },
                                    }}
                                >
                                    Engineering the Impossible
                                </Typography>
                                {/* Glowing underline effect */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        bottom: -8,
                                        left: '20%',
                                        right: '20%',
                                        height: 2,
                                        background: 'linear-gradient(90deg, transparent, #00D4FF, #7B2DFF, transparent)',
                                        borderRadius: 2,
                                    }}
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                        scaleX: [0.8, 1, 0.8],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </Box>
                        </motion.div>

                        {/* Secondary tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 2 }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: 'text.secondary',
                                    fontStyle: 'italic',
                                    opacity: 0.7,
                                    letterSpacing: '0.05em',
                                    fontSize: '1rem',
                                    '&::before': {
                                        content: '"«"',
                                        mr: 1,
                                        color: 'primary.main',
                                    },
                                    '&::after': {
                                        content: '"»"',
                                        ml: 1,
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                Tomorrow's solutions for today's problems
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.6 }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    maxWidth: 600,
                                    opacity: 0.85,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                We don't just build software — we forge <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>digital weapons</Box> that
                                <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> dominate markets</Box>, crush competition, and
                                launch businesses into the stratosphere.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.9 }}
                        >
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                                <motion.div whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                                animation: 'btnShine 2s infinite',
                                            },
                                            '@keyframes btnShine': {
                                                '0%': { left: '-100%' },
                                                '50%, 100%': { left: '100%' },
                                            },
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Our Services
                                    </Button>
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </Stack>
                </motion.div>
            </Container>

            {/* Scroll indicator with glow */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={scrollToAbout}
            >
                <Box sx={{
                    filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))',
                }}>
                    <KeyboardArrowDownIcon sx={{ fontSize: 40, color: 'primary.main', opacity: 0.7 }} />
                </Box>
            </motion.div>
        </Box>
    );
};

export default Hero;
