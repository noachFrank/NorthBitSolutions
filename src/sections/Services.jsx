import { useState, useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import WebIcon from '@mui/icons-material/Web';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BuildIcon from '@mui/icons-material/Build';
import UpdateIcon from '@mui/icons-material/Update';
import BrushIcon from '@mui/icons-material/Brush';

const services = [
    {
        icon: <CodeIcon sx={{ fontSize: 56 }} />,
        title: 'Custom Software Development',
        description: 'Tailored solutions built from the ground up to meet your specific business requirements and workflows.',
    },
    {
        icon: <WebIcon sx={{ fontSize: 56 }} />,
        title: 'Website Development',
        description: 'Stunning, responsive websites that captivate your audience and drive conversions with modern design.',
    },
    {
        icon: <DashboardIcon sx={{ fontSize: 56 }} />,
        title: 'Dashboard & Admin Panels',
        description: 'Powerful, intuitive dashboards that give you real-time insights and complete control over your business.',
    },
    {
        icon: <AppleIcon sx={{ fontSize: 56 }} />,
        title: 'iOS Development',
        description: 'Native iPhone and iPad applications built with Swift for optimal performance and Apple ecosystem integration.',
    },
    {
        icon: <AndroidIcon sx={{ fontSize: 56 }} />,
        title: 'Android Development',
        description: 'High-quality Android apps using Kotlin that reach billions of users on smartphones and tablets.',
    },
    {
        icon: <PhoneIphoneIcon sx={{ fontSize: 56 }} />,
        title: 'Cross-Platform Apps',
        description: 'Build once, deploy everywhere with React Native and Flutter for maximum reach and efficiency.',
    },
    {
        icon: <ShoppingCartIcon sx={{ fontSize: 56 }} />,
        title: 'E-Commerce Solutions',
        description: 'Complete online stores with secure payments, inventory management, and seamless checkout experiences.',
    },
    {
        icon: <CloudIcon sx={{ fontSize: 56 }} />,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
    },
    {
        icon: <SmartToyIcon sx={{ fontSize: 56 }} />,
        title: 'AI & Machine Learning',
        description: 'Intelligent automation and predictive analytics to transform your business with cutting-edge AI.',
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 56 }} />,
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your data and infrastructure from evolving threats.',
    },
    {
        icon: <IntegrationInstructionsIcon sx={{ fontSize: 56 }} />,
        title: 'API Development',
        description: 'Custom API solutions that seamlessly connect your systems and enable powerful integrations.',
    },
    {
        icon: <StorageIcon sx={{ fontSize: 56 }} />,
        title: 'Database Management',
        description: 'Robust database design, optimization, and maintenance to ensure your data is secure and accessible.',
    },
    {
        icon: <AnalyticsIcon sx={{ fontSize: 56 }} />,
        title: 'Data Analytics',
        description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
    },
    {
        icon: <BrushIcon sx={{ fontSize: 56 }} />,
        title: 'UI/UX Design',
        description: 'Beautiful, user-centered designs that create memorable experiences and boost engagement.',
    },
    {
        icon: <BuildIcon sx={{ fontSize: 56 }} />,
        title: 'DevOps & CI/CD',
        description: 'Streamlined development pipelines with automated testing, deployment, and monitoring.',
    },
    {
        icon: <UpdateIcon sx={{ fontSize: 56 }} />,
        title: 'Legacy System Modernization',
        description: 'Breathe new life into outdated systems with modern technology stacks and improved architecture.',
    },
    {
        icon: <SpeedIcon sx={{ fontSize: 56 }} />,
        title: 'Performance Optimization',
        description: 'Speed up your existing applications and systems for better efficiency and user satisfaction.',
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 56 }} />,
        title: 'IT Consulting',
        description: 'Expert guidance to help you make informed technology decisions and strategic planning.',
    },
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    // Get visible cards (prev, current, next)
    const getVisibleIndices = () => {
        const prev = (currentIndex - 1 + services.length) % services.length;
        const next = (currentIndex + 1) % services.length;
        return [prev, currentIndex, next];
    };

    const visibleIndices = getVisibleIndices();

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

                {/* Carousel Container */}
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: { xs: '60vh', md: '70vh' },
                        perspective: '1000px',
                    }}
                >
                    {/* Navigation Arrows */}
                    <IconButton
                        onClick={prevSlide}
                        sx={{
                            position: 'absolute',
                            left: { xs: 0, md: '5%' },
                            zIndex: 10,
                            color: 'primary.main',
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            '&:hover': {
                                background: 'rgba(0, 212, 255, 0.2)',
                                boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
                            },
                        }}
                    >
                        <ChevronLeftIcon sx={{ fontSize: 32 }} />
                    </IconButton>

                    <IconButton
                        onClick={nextSlide}
                        sx={{
                            position: 'absolute',
                            right: { xs: 0, md: '5%' },
                            zIndex: 10,
                            color: 'primary.main',
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            '&:hover': {
                                background: 'rgba(0, 212, 255, 0.2)',
                                boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
                            },
                        }}
                    >
                        <ChevronRightIcon sx={{ fontSize: 32 }} />
                    </IconButton>

                    {/* Cards Display */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            maxWidth: '100%',
                            position: 'relative',
                            height: { xs: '50vh', md: '60vh' },
                            px: { xs: 2, md: 4 },
                        }}
                    >
                        <AnimatePresence mode="sync">
                            {visibleIndices.map((serviceIndex, position) => {
                                const service = services[serviceIndex];
                                const isCenter = position === 1;
                                const isLeft = position === 0;

                                return (
                                    <motion.div
                                        key={serviceIndex}
                                        initial={{
                                            x: direction > 0 ? '50vw' : '-50vw',
                                            opacity: 0,
                                            scale: 0.7,
                                        }}
                                        animate={{
                                            x: isCenter ? 0 : isLeft ? '-28vw' : '28vw',
                                            opacity: isCenter ? 1 : 0.4,
                                            scale: isCenter ? 1 : 0.65,
                                            zIndex: isCenter ? 3 : 1,
                                        }}
                                        exit={{
                                            x: direction > 0 ? '-50vw' : '50vw',
                                            opacity: 0,
                                            scale: 0.7,
                                        }}
                                        transition={{
                                            type: 'tween',
                                            duration: 0.6,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        style={{
                                            position: 'absolute',
                                            width: isCenter ? 'min(500px, 40vw)' : 'min(380px, 30vw)',
                                            cursor: isCenter ? 'default' : 'pointer',
                                        }}
                                        onClick={() => !isCenter && goToSlide(serviceIndex)}
                                    >
                                        <Card
                                            sx={{
                                                p: isCenter ? { xs: 3, md: 5 } : { xs: 2, md: 3 },
                                                background: isCenter
                                                    ? 'linear-gradient(145deg, rgba(18, 18, 26, 0.95) 0%, rgba(26, 26, 37, 0.95) 100%)'
                                                    : 'linear-gradient(145deg, rgba(18, 18, 26, 0.7) 0%, rgba(26, 26, 37, 0.7) 100%)',
                                                border: isCenter
                                                    ? '1px solid rgba(0, 212, 255, 0.4)'
                                                    : '1px solid rgba(0, 212, 255, 0.1)',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transition: 'all 0.4s ease',
                                                boxShadow: isCenter
                                                    ? '0 25px 50px rgba(0, 212, 255, 0.2), 0 0 40px rgba(123, 45, 255, 0.15)'
                                                    : 'none',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '2px',
                                                    background: 'linear-gradient(90deg, transparent, #00D4FF, #7B2DFF, transparent)',
                                                    opacity: isCenter ? 1 : 0,
                                                },
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
                                                    opacity: isCenter ? 1 : 0,
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                                <Box
                                                    sx={{
                                                        color: isCenter ? 'primary.main' : 'text.secondary',
                                                        mb: 2,
                                                        transition: 'all 0.5s ease',
                                                        filter: isCenter ? 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))' : 'none',
                                                    }}
                                                >
                                                    {service.icon}
                                                </Box>
                                                <Typography
                                                    variant={isCenter ? 'h5' : 'h6'}
                                                    component="h3"
                                                    sx={{ mb: 1.5, fontWeight: 600 }}
                                                >
                                                    {service.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{
                                                        opacity: isCenter ? 1 : 0.7,
                                                        display: isCenter ? 'block' : { xs: 'none', md: 'block' },
                                                    }}
                                                >
                                                    {service.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </Box>
                </Box>

                {/* Dot indicators */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 4,
                    }}
                >
                    {services.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => goToSlide(index)}
                            sx={{
                                width: index === currentIndex ? 24 : 8,
                                height: 8,
                                borderRadius: 4,
                                background: index === currentIndex
                                    ? 'linear-gradient(90deg, #00D4FF, #7B2DFF)'
                                    : 'rgba(255, 255, 255, 0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: index === currentIndex ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none',
                                '&:hover': {
                                    background: index === currentIndex
                                        ? 'linear-gradient(90deg, #00D4FF, #7B2DFF)'
                                        : 'rgba(255, 255, 255, 0.4)',
                                },
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
