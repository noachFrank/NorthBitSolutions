import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/northbit_horizontal_transparent.png';

const navItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (href) => {
        const hash = href.split('#')[1];

        // If we're not on home page, navigate there first
        if (location.pathname !== '/') {
            navigate(href);
        } else {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: trigger
                        ? 'rgba(15, 20, 25, 0.9)'
                        : 'transparent',
                    backdropFilter: trigger ? 'blur(20px)' : 'none',
                    borderBottom: trigger
                        ? '1px solid rgba(0, 212, 255, 0.15)'
                        : 'none',
                    transition: 'all 0.3s ease',
                    '&::after': trigger ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent)',
                    } : {},
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ py: 1 }}>
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={() => scrollToSection('/#hero')}
                            >
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="North Bit Solutions"
                                    sx={{
                                        height: { xs: 40, sm: 50 },
                                        width: 'auto',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))',
                                    }}
                                />
                            </Box>
                        </motion.div>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Button
                                        onClick={() => scrollToSection(item.href)}
                                        sx={{
                                            color: 'text.primary',
                                            px: 2,
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: '50%',
                                                width: 0,
                                                height: '2px',
                                                background: 'linear-gradient(90deg, #00D4FF, #7B2DFF)',
                                                transition: 'all 0.3s ease',
                                                transform: 'translateX(-50%)',
                                            },
                                            '&:hover': {
                                                color: 'primary.main',
                                                backgroundColor: 'rgba(0, 212, 255, 0.05)',
                                                '&::after': {
                                                    width: '80%',
                                                },
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() => scrollToSection('#contact')}
                                    sx={{ ml: 2 }}
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { md: 'none' },
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                        background: 'rgba(10, 10, 15, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderLeft: '1px solid rgba(0, 212, 255, 0.1)',
                    },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                color: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                },
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    onClick={() => scrollToSection(item.href)}
                                    sx={{
                                        py: 2,
                                        borderRadius: 2,
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: '1.1rem',
                                            fontWeight: 500,
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ p: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => scrollToSection('#contact')}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
