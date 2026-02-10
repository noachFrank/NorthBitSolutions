import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BrushIcon from '@mui/icons-material/Brush';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
    {
        icon: <WebIcon sx={{ fontSize: 40 }} />,
        title: 'Website Development',
        description: 'Responsive, modern websites that look great on any device and help your business grow online.',
    },
    {
        icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android that your customers will love.',
    },
    {
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        title: 'Custom Web Applications',
        description: 'Tailored web applications and dashboards built to streamline your business operations.',
    },
    {
        icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
        title: 'E-Commerce Solutions',
        description: 'Online stores with secure payment processing and easy-to-manage inventory systems.',
    },
    {
        icon: <BrushIcon sx={{ fontSize: 40 }} />,
        title: 'UI/UX Design',
        description: 'User-centered designs that create intuitive experiences and keep customers engaged.',
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
        title: 'Maintenance & Support',
        description: 'Ongoing support and maintenance to keep your applications running smoothly.',
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
                    radial-gradient(ellipse at 50% 0%, rgba(123, 45, 255, 0.12) 0%, transparent 50%),
                    radial-gradient(ellipse at 0% 100%, rgba(0, 212, 255, 0.08) 0%, transparent 40%),
                    linear-gradient(180deg, #0F1419 0%, #1A2332 50%, #0F1419 100%)
                `,
            }}
        >
            {/* Subtle background pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.02,
                    backgroundImage: `
                        radial-gradient(circle at 25% 25%, #00D4FF 1px, transparent 1px),
                        radial-gradient(circle at 75% 75%, #7B2DFF 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={itemVariants}>
                        <Box textAlign="center" sx={{ mb: 8 }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 600,
                                    letterSpacing: 2,
                                    mb: 2,
                                    display: 'block',
                                }}
                            >
                                Our Services
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                What We{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Offer
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto' }}
                            >
                                From concept to deployment, we provide end-to-end development
                                services to bring your digital vision to life.
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <motion.div variants={itemVariants} style={{ height: '100%' }} whileHover={{ y: -8 }}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            minHeight: 200,
                                            background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(36, 48, 68, 0.7) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.1)',
                                            borderRadius: 3,
                                            transition: 'all 0.4s ease',
                                            overflow: 'hidden',
                                            '&:hover': {
                                                borderColor: 'rgba(0, 212, 255, 0.4)',
                                                boxShadow: '0 12px 40px rgba(0, 212, 255, 0.15)',
                                            },
                                            '&:hover .service-description': {
                                                opacity: 1,
                                                transform: 'translateY(0)',
                                                maxHeight: '200px',
                                            },
                                            '&:hover .service-icon': {
                                                transform: 'scale(0.85)',
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Box
                                                className="service-icon"
                                                sx={{
                                                    color: 'primary.main',
                                                    mb: 2,
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                className="service-description"
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    lineHeight: 1.7,
                                                    opacity: 0,
                                                    maxHeight: 0,
                                                    transform: 'translateY(10px)',
                                                    transition: 'all 0.4s ease',
                                                    overflow: 'hidden',
                                                }}
                                            >
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
