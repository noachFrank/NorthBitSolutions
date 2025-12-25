import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
    {
        icon: <CodeIcon sx={{ fontSize: 48 }} />,
        title: 'Custom Software Development',
        description: 'Tailored solutions built from the ground up to meet your specific business requirements and workflows.',
    },
    {
        icon: <CloudIcon sx={{ fontSize: 48 }} />,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
    },
    {
        icon: <PhoneIphoneIcon sx={{ fontSize: 48 }} />,
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 48 }} />,
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your data and infrastructure from evolving threats.',
    },
    {
        icon: <SpeedIcon sx={{ fontSize: 48 }} />,
        title: 'Performance Optimization',
        description: 'Speed up your existing applications and systems for better efficiency and user satisfaction.',
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
        title: 'IT Consulting',
        description: 'Expert guidance to help you make informed technology decisions and strategic planning.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const Services = () => {
    return (
        <Box
            id="services"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
          radial-gradient(ellipse at 50% 0%, rgba(123, 45, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(0, 212, 255, 0.1) 0%, transparent 40%),
          radial-gradient(ellipse at 100% 100%, rgba(123, 45, 255, 0.1) 0%, transparent 40%),
          linear-gradient(180deg, #0A0A0F 0%, #0D0D15 50%, #0A0A0F 100%)
        `,
            }}
        >
            {/* Neural network pattern */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.05,
                    pointerEvents: 'none',
                }}
            >
                <defs>
                    <pattern id="neuralGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="2" fill="#00D4FF" />
                        <line x1="50" y1="50" x2="100" y2="0" stroke="#00D4FF" strokeWidth="0.5" />
                        <line x1="50" y1="50" x2="0" y2="100" stroke="#7B2DFF" strokeWidth="0.5" />
                        <line x1="50" y1="50" x2="100" y2="100" stroke="#00D4FF" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#neuralGrid)" />
            </svg>

            {/* Electric bolt effects */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        repeatDelay: 5 + i * 2,
                        delay: i * 1.5,
                    }}
                >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute' }}>
                        <defs>
                            <filter id={`glow-${i}`}>
                                <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <motion.path
                            d={`M${10 + i * 30} 0 L${15 + i * 30} 30 L${8 + i * 30} 35 L${20 + i * 30} 60`}
                            stroke="#00D4FF"
                            strokeWidth="0.3"
                            fill="none"
                            filter={`url(#glow-${i})`}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1] }}
                            transition={{ duration: 0.15 }}
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Animated pulse rings */}
            <Box sx={{ position: 'absolute', top: '20%', left: '10%' }}>
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            border: '1px solid #00D4FF',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            scale: [1, 3],
                            opacity: [0.4, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                        }}
                    />
                ))}
            </Box>
            <Box sx={{ position: 'absolute', bottom: '30%', right: '15%' }}>
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            border: '1px solid #7B2DFF',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            scale: [1, 2.5],
                            opacity: [0.3, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.8,
                        }}
                    />
                ))}
            </Box>

            {/* Vertical energy beams */}
            {[15, 45, 75].map((left, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${left}%`,
                        top: 0,
                        width: '1px',
                        height: '100%',
                        background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? '#00D4FF' : '#7B2DFF'}, transparent)`,
                    }}
                    animate={{
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.7,
                    }}
                />
            ))}

            {/* Floating orbs */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(123, 45, 255, 0.2) 0%, transparent 70%)',
                    top: '10%',
                    left: '-5%',
                    filter: 'blur(60px)',
                }}
                animate={{
                    y: [0, 50, 0],
                    opacity: [0.3, 0.6, 0.3],
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
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
                    bottom: '10%',
                    right: '-10%',
                    filter: 'blur(80px)',
                }}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                letterSpacing: 3,
                                mb: 2,
                                display: 'block',
                                textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                            }}
                        >
                            What We Do
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                            Our{' '}
                            <Box
                                component="span"
                                sx={{
                                    background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
                                }}
                            >
                                Services
                            </Box>
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 600, mx: 'auto' }}
                        >
                            We offer a comprehensive range of technology services to help your business
                            grow and succeed in the digital world.
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <motion.div variants={cardVariants}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            p: 2,
                                            cursor: 'pointer',
                                            background: 'linear-gradient(145deg, rgba(18, 18, 26, 0.9) 0%, rgba(26, 26, 37, 0.9) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.1)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s ease',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                background: 'linear-gradient(90deg, transparent, #00D4FF, #7B2DFF, transparent)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            },
                                            '&:hover': {
                                                transform: 'translateY(-12px) scale(1.02)',
                                                borderColor: 'rgba(0, 212, 255, 0.5)',
                                                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.2), 0 0 40px rgba(123, 45, 255, 0.15)',
                                                '&::before': {
                                                    opacity: 1,
                                                },
                                                '&::after': {
                                                    opacity: 1,
                                                },
                                                '& .service-icon': {
                                                    color: 'primary.main',
                                                    transform: 'scale(1.15) rotateY(180deg)',
                                                    filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))',
                                                },
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                                            <Box
                                                className="service-icon"
                                                sx={{
                                                    color: 'text.secondary',
                                                    mb: 2,
                                                    transition: 'all 0.5s ease',
                                                    transformStyle: 'preserve-3d',
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                            <Typography variant="h5" component="h3" sx={{ mb: 1.5, fontWeight: 600 }}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {service.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Services;
