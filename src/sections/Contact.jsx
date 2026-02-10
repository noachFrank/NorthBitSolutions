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
        icon: <EmailIcon sx={{ fontSize: 24 }} />,
        title: 'Email',
        value: 'contact@northbitsolutions.com',
        href: 'mailto:contact@northbitsolutions.com',
    },
    {
        icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
        title: 'Location',
        value: 'Remote-First Company',
        href: null,
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

        // EmailJS configuration (from environment variables)
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            name: formData.name,
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            time: new Date().toLocaleString(),
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
                    radial-gradient(ellipse at 20% 80%, rgba(123, 45, 255, 0.1) 0%, transparent 40%),
                    linear-gradient(180deg, #0F1419 0%, #1A2332 50%, #0F1419 100%)
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
                                Get In Touch
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                Let's{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
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
                                and we'll get back to you as soon as possible.
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={6}>
                        {/* Contact Form */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <motion.div variants={itemVariants}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(36, 48, 68, 0.7) 100%)',
                                        border: '1px solid rgba(0, 212, 255, 0.1)',
                                        borderRadius: 3,
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
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    disabled={isSubmitting}
                                                    endIcon={!isSubmitting && <SendIcon />}
                                                    sx={{ minWidth: 180 }}
                                                >
                                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Contact Info */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <motion.div variants={itemVariants}>
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
                                                gap: 2,
                                                textDecoration: 'none',
                                                background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                                border: '1px solid rgba(0, 212, 255, 0.1)',
                                                borderRadius: 2,
                                                transition: 'all 0.3s ease',
                                                cursor: info.href ? 'pointer' : 'default',
                                                '&:hover': info.href
                                                    ? {
                                                        borderColor: 'rgba(0, 212, 255, 0.4)',
                                                        boxShadow: '0 8px 24px rgba(0, 212, 255, 0.1)',
                                                    }
                                                    : {},
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2,
                                                    background: 'rgba(0, 212, 255, 0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'primary.main',
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
                                            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(123, 45, 255, 0.08) 100%)',
                                            border: '1px solid rgba(0, 212, 255, 0.15)',
                                            borderRadius: 2,
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                            Ready to Get Started?
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Let's discuss your project and see how we can help bring your ideas to life.
                                        </Typography>
                                    </Paper>
                                </Stack>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
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
