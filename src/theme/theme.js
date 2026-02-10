import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00D4FF',
            light: '#5EEFFF',
            dark: '#00A3CC',
        },
        secondary: {
            main: '#7B2DFF',
            light: '#A66FFF',
            dark: '#5500CC',
        },
        background: {
            default: '#0F1419',
            paper: '#1A2332',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#94A3B8',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '4rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1.1rem',
            lineHeight: 1.7,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '12px 28px',
                    fontSize: '1rem',
                },
                contained: {
                    background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                    boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #00A3CC 0%, #5500CC 100%)',
                        boxShadow: '0 6px 25px rgba(0, 212, 255, 0.4)',
                    },
                },
                outlined: {
                    borderColor: '#00D4FF',
                    color: '#00D4FF',
                    '&:hover': {
                        borderColor: '#5EEFFF',
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(145deg, #1A2332 0%, #243044 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                            borderColor: '#00D4FF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#00D4FF',
                        },
                    },
                },
            },
        },
    },
});

export default theme;
