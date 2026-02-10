import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardIcon from '@mui/icons-material/Dashboard';

const projectTypes = [
    {
        icon: <WebIcon sx={{ fontSize: 48 }} />,
        title: 'Business Websites',
        description: 'Professional websites that showcase your brand and convert visitors into customers. From landing pages to full corporate sites.',
        technologies: ['React', 'Next.js', 'WordPress', 'Responsive Design'],
        color: '#00D4FF',
    },
    {
        icon: <PhoneIphoneIcon sx={{ fontSize: 48 }} />,
        title: 'Mobile Applications',
        description: 'Native and cross-platform apps for iOS and Android that deliver seamless user experiences on any device.',
        technologies: ['React Native', 'iOS', 'Android', 'Flutter'],
        color: '#7B2DFF',
    },
    {
        icon: <StorefrontIcon sx={{ fontSize: 48 }} />,
        title: 'E-Commerce Solutions',
        description: 'Online stores with secure payment processing, inventory management, and everything you need to sell online.',
        technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Custom Solutions'],
        color: '#00D4FF',
    },
    {
        icon: <DashboardIcon sx={{ fontSize: 48 }} />,
        title: 'Web Applications',
        description: 'Custom web apps and dashboards that streamline your business operations and improve productivity.',
        technologies: ['React', 'Node.js', 'Database Design', 'API Integration'],
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

const Portfolio = () => {
    return (
        <Box
            id="portfolio"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
                    radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.12) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 100%, rgba(123, 45, 255, 0.08) 0%, transparent 40%),
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
                                What We Build
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                Solutions We{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Deliver
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto' }}
                            >
                                We specialize in creating digital products that help businesses
                                grow and succeed in today's competitive market.
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={4}>
                        {projectTypes.map((project, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(36, 48, 68, 0.7) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.1)',
                                            borderRadius: 3,
                                            transition: 'all 0.4s ease',
                                            '&:hover': {
                                                borderColor: `${project.color}66`,
                                                boxShadow: `0 12px 40px ${project.color}20`,
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Box
                                                sx={{
                                                    color: project.color,
                                                    mb: 2,
                                                }}
                                            >
                                                {project.icon}
                                            </Box>
                                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 3, lineHeight: 1.7 }}
                                            >
                                                {project.description}
                                            </Typography>
                                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Chip
                                                        key={techIndex}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            background: 'rgba(255, 255, 255, 0.05)',
                                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                                            color: 'text.secondary',
                                                            fontSize: '0.75rem',
                                                            mb: 1,
                                                        }}
                                                    />
                                                ))}
                                            </Stack>
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

export default Portfolio;
