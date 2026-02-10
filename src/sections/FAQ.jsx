import { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
    {
        question: 'How long does it take to build a website or app?',
        answer: 'Project timelines vary based on complexity. A simple website typically takes about a week, while a custom web application might take 3-6 weeks. Mobile apps generally require 2-4 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
        question: 'What is your pricing structure?',
        answer: 'We offer both fixed-price and hourly billing depending on project scope. Fixed pricing works best for well-defined projects, while hourly rates are suitable for ongoing development or projects with evolving requirements. Contact us for a free quote tailored to your needs.'
    },
    {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes! We offer flexible maintenance packages including bug fixes, security updates, feature enhancements, and 24/7 support options. We believe in building long-term partnerships with our clients.'
    },
    {
        question: 'What technologies do you work with?',
        answer: 'We specialize in modern technologies including React, React Native, Node.js, Python, and cloud platforms like AWS and Azure. We choose the best technology stack based on your project requirements and business goals.'
    },
    {
        question: 'How do you handle project communication?',
        answer: 'We maintain transparent communication through regular updates, weekly progress meetings, and a dedicated project manager. You\'ll have direct access to our team via email, WhatsApp, Slack, or your preferred communication platform.'
    },
    {
        question: 'Do you sign NDAs and protect intellectual property?',
        answer: 'Absolutely. We take confidentiality seriously and are happy to sign NDAs before discussing project details. All code and intellectual property created for your project belongs to you upon completion and payment.'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            id="faq"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                overflow: 'hidden',
                background: `
                    radial-gradient(ellipse at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(ellipse at 70% 80%, rgba(123, 45, 255, 0.08) 0%, transparent 50%),
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

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
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
                                FAQ
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                                Frequently Asked{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #7B2DFF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Questions
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto' }}
                            >
                                Find answers to common questions about our services, process, and policies.
                            </Typography>
                        </Box>
                    </motion.div>

                    {faqs.map((faq, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Accordion
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    mb: 2,
                                    background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                    border: '1px solid rgba(0, 212, 255, 0.1)',
                                    borderRadius: '12px !important',
                                    '&:before': { display: 'none' },
                                    '&.Mui-expanded': {
                                        borderColor: 'rgba(0, 212, 255, 0.3)',
                                        boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            my: 2,
                                        },
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Box>
    );
};

export default FAQ;
