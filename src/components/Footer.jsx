import { Box, Container, Typography, Stack, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../assets/northbit_icon_transparent.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                background: '#0A0A0F',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
    );
};

export default Footer;
