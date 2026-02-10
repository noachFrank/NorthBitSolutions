import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ChatIcon from '@mui/icons-material/Chat';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const steps = [
    {
        number: '01',
        icon: <ChatIcon sx={{ fontSize: 32 }} />,
        title: 'Discovery',
        description: 'We start by understanding your business, goals, and requirements through detailed discussions.',
    },
    {
        number: '02',
        icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
        title: 'Planning & Design',
        description: 'We create a project roadmap and design mockups so you can visualize the final product before development begins.',
    },
    {
        number: '03',
        icon: <CodeIcon sx={{ fontSize: 32 }} />,
        title: 'Development',
        description: 'Our team builds your solution with regular updates and opportunities for feedback throughout the process.',
    },
    {
        number: '04',
        icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
        title: 'Launch & Support',
        description: 'We deploy your project and provide ongoing support to ensure everything runs smoothly.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

const Process = () => {
    return (
        <Box
            id="process"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
                    radial-gradient(ellipse at 100% 50%, rgba(123, 45, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(ellipse at 0% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 40%),
                    linear-gradient(180deg, #1A2332 0%, #0F1419 50%, #1A2332 100%)
                `,
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={itemVariants}>
                        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                                Our Process
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                How We{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Work
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto' }}
                            >
                                A straightforward approach that keeps you informed and
                                involved at every stage of your project.
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={4}>
                        {steps.map((step, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <motion.div variants={itemVariants} whileHover={{ y: -6, scale: 1.02 }}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            minHeight: { xs: 'auto', md: 280 },
                                            textAlign: 'center',
                                            background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.1)',
                                            borderRadius: 3,
                                            position: 'relative',
                                            transition: 'all 0.4s ease',
                                            overflow: 'hidden',
                                            '&:hover': {
                                                borderColor: 'rgba(0, 212, 255, 0.4)',
                                                boxShadow: '0 12px 40px rgba(0, 212, 255, 0.12)',
                                            },
                                            '&:hover .process-description': {
                                                opacity: 1,
                                                transform: 'translateY(0)',
                                                maxHeight: '200px',
                                            },
                                            '&:hover .process-icon': {
                                                transform: 'scale(0.9)',
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '3rem',
                                                fontWeight: 700,
                                                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3) 0%, rgba(123, 45, 255, 0.3) 100%)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                mb: 2,
                                            }}
                                        >
                                            {step.number}
                                        </Typography>
                                        <Box
                                            className="process-icon"
                                            sx={{
                                                color: 'primary.main',
                                                mb: 2,
                                                transition: 'transform 0.3s ease',
                                            }}
                                        >
                                            {step.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
                                            {step.title}
                                        </Typography>
                                        <Typography
                                            className="process-description"
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
                                            {step.description}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Process;
