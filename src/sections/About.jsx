import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const stats = [
    { icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />, value: 'Innovation', label: 'Driven Approach' },
    { icon: <GroupsIcon sx={{ fontSize: 40 }} />, value: 'Client', label: 'Focused Solutions' },
    { icon: <EmojiObjectsIcon sx={{ fontSize: 40 }} />, value: 'Future', label: 'Ready Technology' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
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
          radial-gradient(ellipse at 100% 50%, rgba(123, 45, 255, 0.12) 0%, transparent 50%),
          linear-gradient(180deg, #0A0A0F 0%, #0D0D15 50%, #0A0A0F 100%)
        `,
            }}
        >
            {/* Circuit board pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.06,
                    backgroundImage: `
            linear-gradient(90deg, #00D4FF 1px, transparent 1px),
            linear-gradient(180deg, #00D4FF 1px, transparent 1px),
            linear-gradient(90deg, transparent 50%, #00D4FF 50%, #00D4FF calc(50% + 1px), transparent calc(50% + 1px))
          `,
                    backgroundSize: '40px 40px, 40px 40px, 80px 80px',
                }}
            />

            {/* Animated data flow lines */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${10 + i * 20}%`,
                        top: 0,
                        width: '1px',
                        height: '100%',
                        background: 'linear-gradient(180deg, transparent, #00D4FF, transparent)',
                        opacity: 0.1,
                    }}
                    animate={{
                        opacity: [0.05, 0.2, 0.05],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                />
            ))}

            {/* Horizontal energy pulses */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #00D4FF, #7B2DFF, transparent)',
                    boxShadow: '0 0 20px #00D4FF',
                }}
                animate={{
                    top: ['20%', '80%', '20%'],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 10,
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
                    background: 'linear-gradient(90deg, transparent 0%, #00D4FF 20%, #7B2DFF 50%, #00D4FF 80%, transparent 100%)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(123, 45, 255, 0.3)',
                }}
            />

            {/* Floating tech nodes */}
            {[
                { top: '15%', left: '8%', size: 8, delay: 0 },
                { top: '25%', right: '12%', size: 6, delay: 0.5 },
                { top: '60%', left: '15%', size: 10, delay: 1 },
                { top: '75%', right: '8%', size: 7, delay: 1.5 },
            ].map((node, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: node.top,
                        left: node.left,
                        right: node.right,
                        width: node.size,
                        height: node.size,
                        borderRadius: '50%',
                        background: '#00D4FF',
                        boxShadow: '0 0 20px #00D4FF, 0 0 40px #00D4FF',
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: node.delay,
                    }}
                />
            ))}

            {/* Floating decorative ring */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: 200,
                    height: 200,
                    border: '1px solid rgba(0, 212, 255, 0.15)',
                    borderRadius: '50%',
                    right: '5%',
                    top: '20%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
                                        letterSpacing: 3,
                                        mb: 2,
                                        display: 'block',
                                        textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                                    }}
                                >
                                    About Us
                                </Typography>
                                <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                    Building the{' '}
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
                                        Future
                                    </Box>{' '}
                                    of Technology
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                    At North Bit Solutions, we leverage cutting-edge technologies and forward-thinking
                                    strategies to keep your business ahead of the curve. In a world where technology
                                    evolves at lightning speed, staying current isn't enough—you need to be prepared
                                    for what's next.
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                    We specialize in implementing future-ready solutions that don't just solve today's
                                    challenges, but position your company for tomorrow's opportunities. From AI-powered
                                    automation to cloud-native architectures, we bring the technologies of tomorrow
                                    to your business today.
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Our mission is simple: ensure you're never playing catch-up. We partner with you
                                    to anticipate industry shifts, adopt emerging technologies early, and maintain a
                                    competitive edge that keeps you leading—not following—the technological curve.
                                </Typography>
                            </motion.div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={3}>
                                {stats.map((stat, index) => (
                                    <Grid size={{ xs: 12, sm: 4, md: 12 }} key={index}>
                                        <motion.div variants={itemVariants}>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    p: 3,
                                                    textAlign: 'center',
                                                    background: 'linear-gradient(145deg, rgba(18, 18, 26, 0.8) 0%, rgba(26, 26, 37, 0.8) 100%)',
                                                    border: '1px solid rgba(0, 212, 255, 0.1)',
                                                    borderRadius: 3,
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    transition: 'all 0.4s ease',
                                                    '&::before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: '-100%',
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
                                                        transition: 'left 0.5s ease',
                                                    },
                                                    '&:hover': {
                                                        transform: 'translateY(-8px)',
                                                        borderColor: 'rgba(0, 212, 255, 0.4)',
                                                        boxShadow: '0 15px 40px rgba(0, 212, 255, 0.2), 0 0 30px rgba(123, 45, 255, 0.1)',
                                                        '&::before': {
                                                            left: '100%',
                                                        },
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        color: 'primary.main',
                                                        mb: 1,
                                                        filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))',
                                                    }}
                                                >
                                                    {stat.icon}
                                                </Box>
                                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                    {stat.value}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {stat.label}
                                                </Typography>
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
