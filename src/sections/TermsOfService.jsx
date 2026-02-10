import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const TermsOfService = () => {
    return (
        <Box
            id="terms"
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
                            Terms of Service
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                            Last updated: February 2026
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            1. Acceptance of Terms
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            By accessing and using North Bit Solutions' website and services, you accept and agree
                            to be bound by these Terms of Service. If you do not agree to these terms, please do not
                            use our services.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            2. Services
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            North Bit Solutions provides web and mobile application development services.
                            Specific terms for individual projects will be outlined in separate service agreements.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            3. Intellectual Property
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            Unless otherwise specified in a project agreement, all code and deliverables created
                            for clients become their property upon full payment. Our pre-existing tools, frameworks,
                            and methodologies remain our intellectual property.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            4. Confidentiality
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            We respect the confidentiality of our clients' information. Any proprietary information
                            shared with us during the course of a project will be kept confidential and not disclosed
                            to third parties without consent.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            5. Limitation of Liability
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            North Bit Solutions shall not be liable for any indirect, incidental, special, or
                            consequential damages arising from the use of our services. Our total liability shall
                            not exceed the amount paid for the specific services in question.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            6. Modifications
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            We reserve the right to modify these terms at any time. Changes will be posted on this
                            page with an updated revision date.
                        </Typography>

                        <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
                            7. Contact
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            For questions regarding these Terms of Service, please contact us at
                            contact@northbitsolutions.com.
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default TermsOfService;
