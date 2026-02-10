import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const PrivacyPolicy = () => {
    return (
        <Box
            id="privacy"
            sx={{
                py: { xs: 10, md: 15 },
                minHeight: '100vh',
                background: `
                    radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
                    linear-gradient(180deg, #0F1419 0%, #1A2332 50%, #0F1419 100%)
                `,
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 5 },
                            background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: 3,
                        }}
                    >
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            Privacy Policy
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                            Last updated: February 2026
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            1. Information We Collect
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            We collect information you provide directly to us, such as when you fill out a contact form,
                            request a quote, or communicate with us. This may include your name, email address, phone number,
                            and any other information you choose to provide.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            2. How We Use Your Information
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            We use the information we collect to respond to your inquiries, provide our services,
                            send you updates about our services (with your consent), and improve our website and services.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            3. Information Sharing
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            We do not sell, trade, or otherwise transfer your personal information to third parties
                            without your consent, except as necessary to provide our services or as required by law.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            4. Data Security
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            We implement appropriate security measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            5. Cookies
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            Our website may use cookies to enhance your browsing experience. You can choose to disable
                            cookies through your browser settings, though this may affect some functionality.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            6. Contact Us
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            If you have any questions about this Privacy Policy, please contact us at
                            contact@northbitsolutions.com.
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
