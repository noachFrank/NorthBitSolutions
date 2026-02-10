import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const values = [
    {
        icon: <CodeIcon sx={{ fontSize: 36 }} />,
        title: 'Quality First',
        description: 'We write clean, maintainable code that stands the test of time.'
    },
    {
        icon: <GroupsIcon sx={{ fontSize: 36 }} />,
        title: 'Collaborative',
        description: 'We work closely with you throughout the entire development process.'
    },
    {
        icon: <HandshakeIcon sx={{ fontSize: 36 }} />,
        title: 'Reliable',
        description: 'We deliver on our promises and meet deadlines consistently.'
    },
    {
        icon: <AutoAwesomeIcon sx={{ fontSize: 35 }} />,
        title: 'Easy to Work With',
        description: 'We prioritize clear communication and a smooth experience from start to finish.'
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

const About = () => {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
                    radial-gradient(ellipse at 0% 50%, rgba(0, 212, 255, 0.12) 0%, transparent 50%),
                    radial-gradient(ellipse at 100% 50%, rgba(123, 45, 255, 0.1) 0%, transparent 50%),
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

            {/* Grid pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.04,
                    backgroundImage: `
                        linear-gradient(90deg, #00D4FF 1px, transparent 1px),
                        linear-gradient(180deg, #00D4FF 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div variants={itemVariants}>
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
                                    About Us
                                </Typography>
                                <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                    Your Partner in{' '}
                                    <Box
                                        component="span"
                                        sx={{
                                            background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        Digital Growth
                                    </Box>
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                    North Bit Solutions is a web and mobile app development company
                                    dedicated to helping businesses establish and grow their digital presence.
                                    We believe great software should be accessible to companies of all sizes.
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                    Whether you need a professional website, a custom web application,
                                    or a mobile app for iOS and Android, we work closely with you to
                                    understand your goals and deliver solutions that truly fit your needs.
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    We take pride in clear communication, transparent pricing, and
                                    building long-term relationships with our clients. Your success
                                    is our success.
                                </Typography>
                            </motion.div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={3}>
                                {values.map((value, index) => (
                                    <Grid size={{ xs: 12 }} key={index}>
                                        <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -4 }}>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    p: 3,
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 2,
                                                    background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                                    border: '1px solid rgba(0, 212, 255, 0.1)',
                                                    borderRadius: 2,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        borderColor: 'rgba(0, 212, 255, 0.4)',
                                                        boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        color: 'primary.main',
                                                        mt: 0.5,
                                                    }}
                                                >
                                                    {value.icon}
                                                </Box>
                                                <Box>
                                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                                        {value.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {value.description}
                                                    </Typography>
                                                </Box>
                                            </Paper>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;
