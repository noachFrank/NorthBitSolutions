import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BoltIcon from '@mui/icons-material/Bolt';
import logo from '../assets/northbit_stacked_transparent.png';

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
                    radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 80%, rgba(123, 45, 255, 0.12) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 70%),
                    linear-gradient(180deg, #0F1419 0%, #1A2332 50%, #0F1419 100%)
                `,
            }}
        >
            {/* Animated grid background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(rgba(0, 212, 255, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Floating animated orbs - hidden on small screens */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)',
                        top: '5%',
                        left: '5%',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    style={{
                        position: 'absolute',
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(123, 45, 255, 0.15) 0%, transparent 70%)',
                        bottom: '10%',
                        right: '10%',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -25, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </Box>

            {/* Decorative floating circles - hidden on mobile */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        width: 200,
                        height: 200,
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        borderRadius: '50%',
                        top: '15%',
                        right: '15%',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    style={{
                        position: 'absolute',
                        width: 300,
                        height: 300,
                        border: '1px solid rgba(123, 45, 255, 0.15)',
                        borderRadius: '50%',
                        bottom: '20%',
                        left: '10%',
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Stack spacing={4} alignItems="center" textAlign="center">
                        {/* Company Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="North Bit Solutions Logo"
                                sx={{
                                    width: 'auto',
                                    height: { xs: 120, sm: 140, md: 160 },
                                    maxWidth: '90vw',
                                    objectFit: 'contain',
                                    mb: 2,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    background: 'linear-gradient(135deg, #FFFFFF 0%, #00D4FF 40%, #7B2DFF 60%, #FFFFFF 100%)',
                                    backgroundSize: '200% auto',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    maxWidth: 900,
                                    animation: 'shimmer 4s ease-in-out infinite',
                                    '@keyframes shimmer': {
                                        '0%, 100%': { backgroundPosition: '0% center' },
                                        '50%': { backgroundPosition: '100% center' },
                                    },
                                }}
                            >
                                North Bit Solutions
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Stack 
                                direction="row" 
                                alignItems="center" 
                                spacing={{ xs: 1, sm: 2 }} 
                                justifyContent="center"
                                sx={{ flexWrap: 'wrap', px: { xs: 2, sm: 0 } }}
                            >
                                <BoltIcon sx={{ color: '#00D4FF', fontSize: { xs: 22, sm: 28 }, filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.6))', display: { xs: 'none', sm: 'block' } }} />
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'primary.main',
                                        fontStyle: 'italic',
                                        fontSize: { xs: '1rem', sm: '1.15rem' },
                                        opacity: 0.9,
                                        textAlign: 'center',
                                    }}
                                >
                                    Tomorrow's solutions for today's problems
                                </Typography>
                                <BoltIcon sx={{ color: '#7B2DFF', fontSize: { xs: 22, sm: 28 }, filter: 'drop-shadow(0 0 8px rgba(123, 45, 255, 0.6))', display: { xs: 'none', sm: 'block' } }} />
                            </Stack>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
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
                                We partner with businesses to build high-quality websites and mobile applications
                                that help you grow. From concept to launch, we deliver solutions that work.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Get in Touch
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        View Services
                                    </Button>
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </Stack>
                </motion.div>
            </Container>

            {/* Scroll indicator - hidden on mobile */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        cursor: 'pointer',
                    }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    onClick={scrollToAbout}
                >
                    <KeyboardArrowDownIcon sx={{ fontSize: 36, color: 'primary.main', opacity: 0.6 }} />
                </motion.div>
            </Box>
        </Box>
    );
};

export default Hero;
