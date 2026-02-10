import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

const categories = [
    {
        icon: <WebIcon sx={{ fontSize: 32 }} />,
        title: 'Frontend',
        description: 'Modern, responsive user interfaces',
        technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Material UI'],
        color: '#00D4FF',
    },
    {
        icon: <PhoneIphoneIcon sx={{ fontSize: 32 }} />,
        title: 'Mobile',
        description: 'Cross-platform mobile applications',
        technologies: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'],
        color: '#7B2DFF',
    },
    {
        icon: <StorageIcon sx={{ fontSize: 32 }} />,
        title: 'Backend',
        description: 'Scalable server-side solutions',
        technologies: ['Node.js', 'Python', 'C#/.NET', 'PostgreSQL', 'MongoDB', 'SQL Server'],
        color: '#00D4FF',
    },
    {
        icon: <CloudIcon sx={{ fontSize: 32 }} />,
        title: 'Cloud & DevOps',
        description: 'Reliable infrastructure and deployment',
        technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
        color: '#7B2DFF',
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

const TechStack = () => {
    return (
        <Box
            id="tech"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
                    radial-gradient(ellipse at 80% 30%, rgba(123, 45, 255, 0.12) 0%, transparent 50%),
                    radial-gradient(ellipse at 20% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                    linear-gradient(180deg, #0F1419 0%, #1A2332 50%, #0F1419 100%)
                `,
            }}
        >
            {/* Decorative top accent line */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), rgba(123, 45, 255, 0.3), transparent)',
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
                                Technology
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                Our{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Tech Stack
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto' }}
                            >
                                We use industry-leading technologies to build fast, secure, and scalable solutions.
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={4}>
                        {categories.map((category, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <motion.div variants={itemVariants} whileHover={{ y: -6 }}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            height: '100%',
                                            background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.1)',
                                            borderRadius: 3,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: `${category.color}66`,
                                                boxShadow: `0 12px 40px ${category.color}15`,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}10 100%)`,
                                                color: category.color,
                                                mb: 2,
                                            }}
                                        >
                                            {category.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                            {category.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 2 }}
                                        >
                                            {category.description}
                                        </Typography>
                                        <Stack direction="row" flexWrap="wrap" gap={1}>
                                            {category.technologies.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        background: 'rgba(0, 212, 255, 0.1)',
                                                        border: '1px solid rgba(0, 212, 255, 0.2)',
                                                        color: 'text.secondary',
                                                        fontSize: '0.75rem',
                                                    }}
                                                />
                                            ))}
                                        </Stack>
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

export default TechStack;
