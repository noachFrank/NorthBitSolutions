import { useState } from 'react';
import { Box, Container, Typography, Stack, IconButton, Link, Dialog, DialogContent, DialogTitle, IconButton as MuiIconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/northbit_icon_transparent.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

    return (
        <>
            <Box
                component="footer"
                sx={{
                    py: 4,
                    background: 'linear-gradient(180deg, #0F1419 0%, #0A0E14 100%)',
                    borderTop: '1px solid rgba(0, 212, 255, 0.1)',
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Stack direction="row" alignItems="center" spacing={1.5}>
                            <Box
                                component="img"
                                src={logo}
                                alt="North Bit Solutions"
                                sx={{
                                    width: 32,
                                    height: 32,
                                    objectFit: 'contain',
                                }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                © {currentYear} North Bit Solutions. All rights reserved.
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={3} alignItems="center">
                            <Link
                                component="button"
                                onClick={() => setPrivacyOpen(true)}
                                sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    '&:hover': { color: 'primary.main' },
                                }}
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                component="button"
                                onClick={() => setTermsOpen(true)}
                                sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    '&:hover': { color: 'primary.main' },
                                }}
                            >
                                Terms of Service
                            </Link>
                        </Stack>

                        <Stack direction="row" spacing={1}>
                            <IconButton
                                size="small"
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                    },
                                }}
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                    },
                                }}
                                aria-label="GitHub"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                    },
                                }}
                                aria-label="Twitter"
                            >
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            {/* Privacy Policy Dialog */}
            <Dialog
                open={privacyOpen}
                onClose={() => setPrivacyOpen(false)}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        background: 'linear-gradient(135deg, #1A2332 0%, #0F1419 100%)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        borderRadius: 3,
                    }
                }}
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4">Privacy Policy</Typography>
                    <MuiIconButton onClick={() => setPrivacyOpen(false)} sx={{ color: 'text.secondary' }}>
                        <CloseIcon />
                    </MuiIconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Last updated: February 2026
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>1. Information We Collect</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        We collect information you provide directly to us, such as when you fill out a contact form,
                        request a quote, or communicate with us. This may include your name, email address, phone number,
                        and any other information you choose to provide.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>2. How We Use Your Information</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        We use the information we collect to respond to your inquiries, provide our services,
                        send you updates about our services (with your consent), and improve our website and services.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>3. Information Sharing</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        We do not sell, trade, or otherwise transfer your personal information to third parties
                        without your consent, except as necessary to provide our services or as required by law.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>4. Data Security</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        We implement appropriate security measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or destruction.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>5. Contact Us</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        If you have any questions about this Privacy Policy, please contact us at
                        contact@northbitsolutions.com.
                    </Typography>
                </DialogContent>
            </Dialog>

            {/* Terms of Service Dialog */}
            <Dialog
                open={termsOpen}
                onClose={() => setTermsOpen(false)}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        background: 'linear-gradient(135deg, #1A2332 0%, #0F1419 100%)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        borderRadius: 3,
                    }
                }}
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4">Terms of Service</Typography>
                    <MuiIconButton onClick={() => setTermsOpen(false)} sx={{ color: 'text.secondary' }}>
                        <CloseIcon />
                    </MuiIconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Last updated: February 2026
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>1. Acceptance of Terms</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        By accessing and using North Bit Solutions' website and services, you accept and agree
                        to be bound by these Terms of Service.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>2. Services</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        North Bit Solutions provides web and mobile application development services.
                        Specific terms for individual projects will be outlined in separate service agreements.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>3. Intellectual Property</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        Unless otherwise specified in a project agreement, all code and deliverables created
                        for clients become their property upon full payment.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>4. Confidentiality</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        We respect the confidentiality of our clients' information. Any proprietary information
                        shared with us during the course of a project will be kept confidential.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>5. Contact</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                        For questions regarding these Terms of Service, please contact us at
                        contact@northbitsolutions.com.
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Footer;
