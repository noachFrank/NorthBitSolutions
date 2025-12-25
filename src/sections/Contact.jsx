import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    Stack,
    Snackbar,
    Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const contactInfo = [
    {
        icon: <EmailIcon sx={{ fontSize: 28 }} />,
        title: 'Email',
        value: 'contact@northbitsolutions.com',
        href: 'mailto:contact@northbitsolutions.com',
    },
    {
        icon: <LocationOnIcon sx={{ fontSize: 28 }} />,
        title: 'Location',
        value: 'Remote-First Company',
        href: null,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS configuration
        const SERVICE_ID = 'service_em91glr';
        const TEMPLATE_ID = 'template_ian0jog';
        const PUBLIC_KEY = 'Qtvv1vpf80CTwLjOk';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_email: 'noachfrank1@gmail.com',
            subject: formData.subject,
            message: formData.message,
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setSnackbar({
                open: true,
                message: 'Thank you for your message! We\'ll get back to you soon.',
                severity: 'success',
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSnackbar({
                open: true,
                message: 'Failed to send message. Please try again or email us directly.',
                severity: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box
            id="contact"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
          radial-gradient(ellipse at 80% 20%, rgba(0, 212, 255, 0.12) 0%, transparent 40%),
          radial-gradient(ellipse at 20% 80%, rgba(123, 45, 255, 0.15) 0%, transparent 40%),
          linear-gradient(180deg, #0D0D15 0%, #0A0A0F 50%, #08080C 100%)
        `,
            }}
        >
            {/* Holographic grid effect */}
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
                    backgroundSize: '50px 50px',
                    transform: 'perspective(1000px) rotateX(30deg)',
                    transformOrigin: 'center bottom',
                    opacity: 0.5,
                }}
            />

            {/* Matrix rain effect - binary columns */}
            {[5, 15, 25, 35, 45, 55, 65, 75, 85, 95].map((left, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${left}%`,
                        top: '-10%',
                        fontFamily: 'monospace',
                        fontSize: '10px',
                        color: i % 2 === 0 ? '#00D4FF' : '#7B2DFF',
                        opacity: 0.1,
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        pointerEvents: 'none',
                        userSelect: 'none',
                    }}
                    animate={{
                        y: ['0%', '120%'],
                    }}
                    transition={{
                        duration: 10 + i * 0.5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.3,
                    }}
                >
                    {Array.from({ length: 30 }).map(() => Math.round(Math.random())).join('')}
                </motion.div>
            ))}

            {/* Glowing connection lines */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    opacity: 0.15,
                }}
            >
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00D4FF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#7B2DFF" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.line
                    x1="0%"
                    y1="30%"
                    x2="100%"
                    y2="70%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.line
                    x1="100%"
                    y1="20%"
                    x2="0%"
                    y2="80%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
            </svg>

            {/* Energy nodes */}
            {[
                { top: '10%', left: '20%' },
                { top: '30%', right: '15%' },
                { top: '70%', left: '10%' },
                { top: '85%', right: '25%' },
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        ...pos,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: i % 2 === 0 ? '#00D4FF' : '#7B2DFF',
                        boxShadow: `0 0 20px ${i % 2 === 0 ? '#00D4FF' : '#7B2DFF'}`,
                    }}
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                />
            ))}

            {/* Floating orb */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(123, 45, 255, 0.15) 0%, transparent 70%)',
                    top: '20%',
                    right: '-10%',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: [0, -50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Decorative top border with glow */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, #00D4FF 30%, #7B2DFF 70%, transparent 100%)',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(123, 45, 255, 0.3)',
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
                            Get In Touch
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                            Let's{' '}
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
                                Connect
                            </Box>
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 600, mx: 'auto' }}
                        >
                            Have a project in mind? We'd love to hear from you. Send us a message
                            and we'll respond as soon as possible.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={6}>
                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    background: 'linear-gradient(145deg, rgba(18, 18, 26, 0.9) 0%, rgba(26, 26, 37, 0.9) 100%)',
                                    border: '1px solid rgba(0, 212, 255, 0.15)',
                                    borderRadius: 3,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)',
                                    },
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                multiline
                                                rows={5}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    disabled={isSubmitting}
                                                    endIcon={!isSubmitting && <SendIcon />}
                                                    sx={{
                                                        minWidth: 200,
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
                                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                                </Button>
                                            </motion.div>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Stack spacing={3}>
                                {contactInfo.map((info, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        component={info.href ? 'a' : 'div'}
                                        href={info.href}
                                        sx={{
                                            p: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 3,
                                            textDecoration: 'none',
                                            background: 'linear-gradient(145deg, rgba(18, 18, 26, 0.7) 0%, rgba(26, 26, 37, 0.7) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.1)',
                                            borderRadius: 3,
                                            transition: 'all 0.4s ease',
                                            cursor: info.href ? 'pointer' : 'default',
                                            '&:hover': info.href
                                                ? {
                                                    borderColor: 'rgba(0, 212, 255, 0.4)',
                                                    transform: 'translateX(8px)',
                                                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.15)',
                                                }
                                                : {},
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 2,
                                                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(123, 45, 255, 0.2) 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'primary.main',
                                                boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
                                            }}
                                        >
                                            {info.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                                {info.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                                                {info.value}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                ))}

                                {/* CTA Card */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        mt: 2,
                                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(123, 45, 255, 0.15) 100%)',
                                        border: '1px solid rgba(0, 212, 255, 0.25)',
                                        borderRadius: 3,
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
                                        },
                                    }}
                                >
                                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, position: 'relative' }}>
                                        Ready to Start?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ position: 'relative' }}>
                                        Let's build something amazing together. Your next big project starts with a conversation.
                                    </Typography>
                                </Paper>
                            </Stack>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
