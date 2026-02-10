import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Chip, Stack, TextField, Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// Set this to an empty array [] to show "no positions" state
const openPositions = [
    // {
    //     title: 'Senior Full-Stack Developer',
    //     slug: 'senior-full-stack-developer',
    //     type: 'Full-time',
    //     location: 'Remote',
    //     skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    //     description: 'Join our team to build cutting-edge web applications for our diverse client base.',
    // },
    // {
    //     title: 'Mobile Developer',
    //     slug: 'mobile-developer',
    //     type: 'Full-time',
    //     location: 'Remote',
    //     skills: ['React Native', 'iOS', 'Android'],
    //     description: 'Create beautiful, performant mobile experiences for iOS and Android platforms.',
    // },
    // {
    //     title: 'UI/UX Designer',
    //     slug: 'ui-ux-designer',
    //     type: 'Full-time / Contract',
    //     location: 'Remote',
    //     skills: ['Figma', 'User Research', 'Prototyping'],
    //     description: 'Design intuitive interfaces and delightful user experiences for our projects.',
    // },
];

// Your Buttondown username - get this from your Buttondown settings
const BUTTONDOWN_USERNAME = import.meta.env.VITE_BUTTONDOWN_USERNAME || 'your-buttondown-username';

const benefits = [
    'Competitive salary & equity',
    'Flexible remote work',
    'Health & dental coverage',
    'Unlimited PTO',
    'Learning budget',
    'Latest equipment',
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

const Careers = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleNotifySubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`https://api.buttondown.email/v1/subscribers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${import.meta.env.VITE_BUTTONDOWN_API_KEY}`,
                },
                body: JSON.stringify({
                    email_address: email,
                    type: 'regular',  // Skip confirmation email - add directly as confirmed
                    tags: ['job-notifications'],
                }),
            });

            const data = await response.json();
            console.log('Buttondown response:', response.status, data);

            if (response.ok) {
                setSnackbar({
                    open: true,
                    message: "You're on the list! We'll notify you when new positions open.",
                    severity: 'success',
                });
                setEmail('');
            } else {
                // Buttondown returns errors in various formats
                const errorMsg = data.email?.[0] || data.detail || data.message || JSON.stringify(data);
                throw new Error(errorMsg);
            }
        } catch (error) {
            console.error('Buttondown Error:', error);
            const msg = error.message?.toLowerCase() || '';
            const isAlreadySubscribed = msg.includes('already') || msg.includes('exists');
            setSnackbar({
                open: true,
                message: isAlreadySubscribed
                    ? "You're already subscribed! We'll notify you when new positions open."
                    : 'Something went wrong. Please try again.',
                severity: isAlreadySubscribed ? 'info' : 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            id="careers"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
                    radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 100%, rgba(123, 45, 255, 0.08) 0%, transparent 50%),
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
                                Careers
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                Join Our{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Team
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto' }}
                            >
                                We're always looking for talented individuals who are passionate about building great software.
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div variants={itemVariants}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                mb: 6,
                                background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.6) 0%, rgba(36, 48, 68, 0.4) 100%)',
                                border: '1px solid rgba(0, 212, 255, 0.1)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                                Why Work With Us?
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={2}>
                                {benefits.map((benefit, index) => (
                                    <Chip
                                        key={index}
                                        label={benefit}
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(123, 45, 255, 0.1) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.2)',
                                            color: 'white',
                                            py: 2.5,
                                            px: 1,
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Paper>
                    </motion.div>

                    {/* Open Positions */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                            Open Positions
                        </Typography>
                    </motion.div>

                    {openPositions.length === 0 ? (
                        /* No Positions Available */
                        <motion.div variants={itemVariants}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 4, md: 6 },
                                    textAlign: 'center',
                                    background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                    border: '1px solid rgba(0, 212, 255, 0.1)',
                                    borderRadius: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(123, 45, 255, 0.1) 100%)',
                                        mx: 'auto',
                                        mb: 3,
                                    }}
                                >
                                    <WorkIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                                </Box>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                    No Open Positions Right Now
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}
                                >
                                    We don't have any openings at the moment, but we're always growing.
                                    Sign up to be notified when new positions become available.
                                </Typography>

                                <Box
                                    component="form"
                                    onSubmit={handleNotifySubmit}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        gap: 2,
                                        maxWidth: 500,
                                        mx: 'auto',
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        size="medium"
                                        sx={{ flexGrow: 1 }}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={isSubmitting}
                                        startIcon={<NotificationsActiveIcon />}
                                        sx={{
                                            px: 4,
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {isSubmitting ? 'Subscribing...' : 'Notify Me'}
                                    </Button>
                                </Box>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ display: 'block', mt: 2 }}
                                >
                                    We'll only email you about job openings. Unsubscribe anytime.
                                </Typography>
                            </Paper>
                        </motion.div>
                    ) : (
                        /* Positions Grid */
                        <Grid container spacing={3}>
                            {openPositions.map((position, index) => (
                                <Grid size={{ xs: 12, md: 4 }} key={index}>
                                    <motion.div variants={itemVariants} whileHover={{ y: -6 }}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                height: '100%',
                                                background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                                border: '1px solid rgba(0, 212, 255, 0.1)',
                                                borderRadius: 3,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    borderColor: 'rgba(0, 212, 255, 0.4)',
                                                    boxShadow: '0 12px 40px rgba(0, 212, 255, 0.1)',
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(123, 45, 255, 0.1) 100%)',
                                                    color: 'primary.main',
                                                    mb: 2,
                                                }}
                                            >
                                                <WorkIcon />
                                            </Box>
                                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                                {position.title}
                                            </Typography>
                                            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                                                <Stack direction="row" alignItems="center" spacing={0.5}>
                                                    <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                                    <Typography variant="body2" color="text.secondary">
                                                        {position.type}
                                                    </Typography>
                                                </Stack>
                                                <Stack direction="row" alignItems="center" spacing={0.5}>
                                                    <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                                    <Typography variant="body2" color="text.secondary">
                                                        {position.location}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 2, flexGrow: 1 }}
                                            >
                                                {position.description}
                                            </Typography>
                                            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                                                {position.skills.map((skill, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={skill}
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
                                            <Button
                                                component={RouterLink}
                                                to={`/careers/${position.slug}`}
                                                variant="outlined"
                                                sx={{
                                                    mt: 'auto',
                                                    borderColor: 'rgba(0, 212, 255, 0.5)',
                                                    '&:hover': {
                                                        borderColor: 'primary.main',
                                                        background: 'rgba(0, 212, 255, 0.1)',
                                                    },
                                                }}
                                            >
                                                View Position
                                            </Button>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {openPositions.length > 0 && (
                        <motion.div variants={itemVariants}>
                            <Box textAlign="center" sx={{ mt: 6 }}>
                                <Typography variant="body1" color="text.secondary">
                                    Don't see a role that fits?{' '}
                                    <Box
                                        component="a"
                                        href="#contact"
                                        sx={{
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            '&:hover': { textDecoration: 'underline' },
                                        }}
                                    >
                                        Send us your resume anyway
                                    </Box>
                                    — we're always looking for great talent.
                                </Typography>
                            </Box>
                        </motion.div>
                    )}
                </motion.div>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert
                    severity={snackbar.severity}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Careers;
