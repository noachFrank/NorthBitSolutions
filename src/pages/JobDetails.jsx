import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
    Chip,
    Stack,
    Grid,
    TextField,
    Collapse,
    Alert,
    Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import emailjs from '@emailjs/browser';

// Cloudinary upload function
const uploadToCloudinary = async (file) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    console.log('Cloudinary config:', { cloudName, uploadPreset }); // Debug log

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('access_mode', 'public'); // Ensure file is publicly accessible

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        { method: 'POST', body: formData }
    );

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Cloudinary error:', errorData); // Debug log
        throw new Error(errorData.error?.message || 'Upload failed');
    }

    const data = await response.json();
    return data.secure_url;
};

// Job data - in a real app this would come from a database/API
const jobsData = {
    'senior-full-stack-developer': {
        title: 'Senior Full-Stack Developer',
        type: 'Full-time',
        location: 'Remote',
        salary: '$120,000 - $160,000',
        skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
        shortDescription: 'Join our team to build cutting-edge web applications for our diverse client base.',
        fullDescription: `We're looking for an experienced Full-Stack Developer to join our growing team. You'll be working on exciting projects for clients across various industries, from startups to enterprise companies.

As a Senior Full-Stack Developer, you'll take ownership of features from conception to deployment, mentor junior developers, and contribute to our technical direction.`,
        responsibilities: [
            'Design and implement scalable web applications using React and Node.js',
            'Write clean, maintainable, and well-tested code',
            'Collaborate with designers, product managers, and other developers',
            'Mentor junior team members and conduct code reviews',
            'Participate in architectural decisions and technical planning',
            'Troubleshoot and debug production issues',
        ],
        requirements: [
            '5+ years of experience in full-stack development',
            'Strong proficiency in React, Node.js, and TypeScript',
            'Experience with PostgreSQL or similar relational databases',
            'Understanding of RESTful APIs and microservices architecture',
            'Excellent problem-solving and communication skills',
            'Experience with Git and CI/CD pipelines',
        ],
        niceToHave: [
            'Experience with AWS or Azure cloud services',
            'Knowledge of GraphQL',
            'Experience with Docker and Kubernetes',
            'Contributions to open-source projects',
        ],
    },
    'mobile-developer': {
        title: 'Mobile Developer',
        type: 'Full-time',
        location: 'Remote',
        salary: '$100,000 - $140,000',
        skills: ['React Native', 'iOS', 'Android'],
        shortDescription: 'Create beautiful, performant mobile experiences for iOS and Android platforms.',
        fullDescription: `We're seeking a talented Mobile Developer to help us build exceptional mobile applications for our clients. You'll work on a variety of projects, from consumer apps to enterprise solutions.

This role offers the opportunity to work with cutting-edge mobile technologies and shape the mobile development practices at North Bit Solutions.`,
        responsibilities: [
            'Develop cross-platform mobile applications using React Native',
            'Optimize app performance and user experience',
            'Integrate with backend services and third-party APIs',
            'Write unit tests and maintain code quality',
            'Publish apps to App Store and Google Play',
            'Stay current with mobile development best practices',
        ],
        requirements: [
            '3+ years of mobile development experience',
            'Strong proficiency in React Native',
            'Experience with iOS (Swift) or Android (Kotlin) native development',
            'Understanding of mobile UI/UX principles',
            'Experience with app store submission processes',
            'Strong debugging and problem-solving skills',
        ],
        niceToHave: [
            'Experience with Flutter',
            'Knowledge of mobile security best practices',
            'Experience with push notifications and deep linking',
            'Published apps in the App Store or Play Store',
        ],
    },
    'ui-ux-designer': {
        title: 'UI/UX Designer',
        type: 'Full-time / Contract',
        location: 'Remote',
        salary: '$90,000 - $130,000',
        skills: ['Figma', 'User Research', 'Prototyping'],
        shortDescription: 'Design intuitive interfaces and delightful user experiences for our projects.',
        fullDescription: `We're looking for a creative UI/UX Designer to join our team and help shape the visual and interactive experiences of our client projects. You'll work closely with developers and stakeholders to create designs that are both beautiful and functional.

This is an opportunity to work on diverse projects across web and mobile platforms, with the freedom to bring your creative vision to life.`,
        responsibilities: [
            'Create user flows, wireframes, and high-fidelity prototypes',
            'Conduct user research and usability testing',
            'Design responsive interfaces for web and mobile applications',
            'Collaborate with developers to ensure design accuracy',
            'Create and maintain design systems and component libraries',
            'Present design concepts to stakeholders and incorporate feedback',
        ],
        requirements: [
            '3+ years of UI/UX design experience',
            'Expert proficiency in Figma',
            'Strong portfolio demonstrating web and mobile design work',
            'Understanding of accessibility standards (WCAG)',
            'Experience with user research methodologies',
            'Excellent communication and presentation skills',
        ],
        niceToHave: [
            'Experience with motion design and animations',
            'Knowledge of HTML/CSS',
            'Experience with design tokens and handoff tools',
            'Background in branding and visual identity',
        ],
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const JobDetails = () => {
    const { jobId } = useParams();
    const job = jobsData[jobId];
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        heardAboutUs: '',
        whyGoodFit: '',
        coverLetter: '',
    });
    const [files, setFiles] = useState({
        resume: null,
        cv: null,
    });
    const [uploadStatus, setUploadStatus] = useState({
        resume: 'idle', // idle, uploading, done, error
        cv: 'idle',
    });
    const [fileUrls, setFileUrls] = useState({
        resume: null,
        cv: null,
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!job) {
        return (
            <Box sx={{ py: 20, textAlign: 'center' }}>
                <Container>
                    <Typography variant="h4" sx={{ mb: 3 }}>Job not found</Typography>
                    <Button component={RouterLink} to="/#careers" variant="contained">
                        Back to Careers
                    </Button>
                </Container>
            </Box>
        );
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e) => {
        const { name, files: selectedFiles } = e.target;
        if (selectedFiles && selectedFiles[0]) {
            const file = selectedFiles[0];
            setFiles(prev => ({ ...prev, [name]: file }));
            setUploadStatus(prev => ({ ...prev, [name]: 'uploading' }));

            try {
                const url = await uploadToCloudinary(file);
                setFileUrls(prev => ({ ...prev, [name]: url }));
                setUploadStatus(prev => ({ ...prev, [name]: 'done' }));
            } catch (error) {
                console.error('Upload error:', error);
                setUploadStatus(prev => ({ ...prev, [name]: 'error' }));
                setSnackbar({
                    open: true,
                    message: `Failed to upload ${name}. Please try again.`,
                    severity: 'error',
                });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS configuration - uses job application template
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: `Job Application: ${job.title}`,
            message: `
JOB APPLICATION

Position: ${job.title}
Applicant: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
LinkedIn: ${formData.linkedin || 'Not provided'}

How did they hear about us: ${formData.heardAboutUs || 'Not specified'}

WHY THEY WOULD BE A GOOD FIT:
${formData.whyGoodFit || 'Not provided'}

COVER LETTER:
${formData.coverLetter}

ATTACHMENTS:
Resume: ${fileUrls.resume || 'Not uploaded'}
CV: ${fileUrls.cv || 'Not uploaded'}
            `,
            time: new Date().toLocaleString(),
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setSnackbar({
                open: true,
                message: 'Application submitted successfully! We\'ll be in touch soon.',
                severity: 'success',
            });
            setFormData({ name: '', email: '', phone: '', linkedin: '', heardAboutUs: '', whyGoodFit: '', coverLetter: '' });
            setFiles({ resume: null, cv: null });
            setFileUrls({ resume: null, cv: null });
            setUploadStatus({ resume: 'idle', cv: 'idle' });
            setShowForm(false);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSnackbar({
                open: true,
                message: 'Failed to submit application. Please try again or email us directly at career@northbitsolutions.com.',
                severity: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 12, md: 15 },
                minHeight: '100vh',
                background: `
                    radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 100%, rgba(123, 45, 255, 0.06) 0%, transparent 50%),
                    linear-gradient(180deg, #0F1419 0%, #1A2332 50%, #0F1419 100%)
                `,
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Back button */}
                    <Button
                        component={RouterLink}
                        to="/#careers"
                        startIcon={<ArrowBackIcon />}
                        sx={{ mb: 4, color: 'text.secondary' }}
                    >
                        Back to Careers
                    </Button>

                    <Grid container spacing={4}>
                        {/* Main content */}
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 5 },
                                    background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                    border: '1px solid rgba(0, 212, 255, 0.1)',
                                    borderRadius: 3,
                                }}
                            >
                                <Typography variant="h3" sx={{ mb: 2 }}>
                                    {job.title}
                                </Typography>

                                <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                        <AccessTimeIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                                        <Typography color="text.secondary">{job.type}</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                        <LocationOnIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                                        <Typography color="text.secondary">{job.location}</Typography>
                                    </Stack>
                                </Stack>

                                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
                                    {job.skills.map((skill, i) => (
                                        <Chip
                                            key={i}
                                            label={skill}
                                            sx={{
                                                background: 'rgba(0, 212, 255, 0.15)',
                                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                                color: 'white',
                                            }}
                                        />
                                    ))}
                                </Stack>

                                <Typography
                                    variant="body1"
                                    sx={{ mb: 4, lineHeight: 1.8, whiteSpace: 'pre-line' }}
                                >
                                    {job.fullDescription}
                                </Typography>

                                <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                                    Responsibilities
                                </Typography>
                                <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                                    {job.responsibilities.map((item, i) => (
                                        <Typography
                                            component="li"
                                            key={i}
                                            color="text.secondary"
                                            sx={{ mb: 1, lineHeight: 1.7 }}
                                        >
                                            {item}
                                        </Typography>
                                    ))}
                                </Box>

                                <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                                    Requirements
                                </Typography>
                                <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                                    {job.requirements.map((item, i) => (
                                        <Typography
                                            component="li"
                                            key={i}
                                            color="text.secondary"
                                            sx={{ mb: 1, lineHeight: 1.7 }}
                                        >
                                            {item}
                                        </Typography>
                                    ))}
                                </Box>

                                <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                                    Nice to Have
                                </Typography>
                                <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                                    {job.niceToHave.map((item, i) => (
                                        <Typography
                                            component="li"
                                            key={i}
                                            color="text.secondary"
                                            sx={{ mb: 1, lineHeight: 1.7 }}
                                        >
                                            {item}
                                        </Typography>
                                    ))}
                                </Box>

                                {/* Apply button */}
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => setShowForm(!showForm)}
                                    sx={{ mb: 3 }}
                                >
                                    {showForm ? 'Hide Application Form' : 'Apply for this Position'}
                                </Button>

                                {/* Application Form */}
                                <Collapse in={showForm}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            mt: 2,
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            border: '1px solid rgba(0, 212, 255, 0.2)',
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Typography variant="h5" sx={{ mb: 3 }}>
                                            Application Form
                                        </Typography>
                                        <form onSubmit={handleSubmit}>
                                            <Grid container spacing={3}>
                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        label="Full Name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
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
                                                    />
                                                </Grid>
                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        label="Phone Number"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Grid>
                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        label="LinkedIn Profile URL"
                                                        name="linkedin"
                                                        value={formData.linkedin}
                                                        onChange={handleChange}
                                                    />
                                                </Grid>

                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        select
                                                        label="How did you hear about us?"
                                                        name="heardAboutUs"
                                                        value={formData.heardAboutUs}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                                                        <MenuItem value="Job Board">Job Board (Indeed, Glassdoor, etc.)</MenuItem>
                                                        <MenuItem value="Company Website">Company Website</MenuItem>
                                                        <MenuItem value="Referral">Employee Referral</MenuItem>
                                                        <MenuItem value="Social Media">Social Media</MenuItem>
                                                        <MenuItem value="Search Engine">Search Engine (Google, Bing)</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </Grid>

                                                {/* File uploads */}
                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                    <Button
                                                        component="label"
                                                        variant="outlined"
                                                        fullWidth
                                                        disabled={uploadStatus.resume === 'uploading'}
                                                        startIcon={
                                                            uploadStatus.resume === 'uploading' ? (
                                                                <CircularProgress size={20} />
                                                            ) : uploadStatus.resume === 'done' ? (
                                                                <CheckCircleIcon color="success" />
                                                            ) : (
                                                                <AttachFileIcon />
                                                            )
                                                        }
                                                        sx={{
                                                            py: 1.5,
                                                            borderColor: uploadStatus.resume === 'done' ? 'success.main' : files.resume ? 'primary.main' : 'rgba(255,255,255,0.23)',
                                                            color: uploadStatus.resume === 'done' ? 'success.main' : files.resume ? 'primary.main' : 'text.secondary',
                                                        }}
                                                    >
                                                        {uploadStatus.resume === 'uploading'
                                                            ? 'Uploading...'
                                                            : files.resume
                                                                ? files.resume.name
                                                                : 'Upload Resume *'
                                                        }
                                                        <input
                                                            type="file"
                                                            name="resume"
                                                            hidden
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={handleFileChange}
                                                            required
                                                        />
                                                    </Button>
                                                </Grid>
                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                    <Button
                                                        component="label"
                                                        variant="outlined"
                                                        fullWidth
                                                        disabled={uploadStatus.cv === 'uploading'}
                                                        startIcon={
                                                            uploadStatus.cv === 'uploading' ? (
                                                                <CircularProgress size={20} />
                                                            ) : uploadStatus.cv === 'done' ? (
                                                                <CheckCircleIcon color="success" />
                                                            ) : (
                                                                <AttachFileIcon />
                                                            )
                                                        }
                                                        sx={{
                                                            py: 1.5,
                                                            borderColor: uploadStatus.cv === 'done' ? 'success.main' : files.cv ? 'primary.main' : 'rgba(255,255,255,0.23)',
                                                            color: uploadStatus.cv === 'done' ? 'success.main' : files.cv ? 'primary.main' : 'text.secondary',
                                                        }}
                                                    >
                                                        {uploadStatus.cv === 'uploading'
                                                            ? 'Uploading...'
                                                            : files.cv
                                                                ? files.cv.name
                                                                : 'Upload CV (Optional)'
                                                        }
                                                        <input
                                                            type="file"
                                                            name="cv"
                                                            hidden
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={handleFileChange}
                                                        />
                                                    </Button>
                                                </Grid>

                                                <Grid size={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Why would you be a good fit for this role?"
                                                        name="whyGoodFit"
                                                        value={formData.whyGoodFit}
                                                        onChange={handleChange}
                                                        required
                                                        multiline
                                                        rows={4}
                                                        placeholder="Describe your relevant experience, skills, and what makes you stand out..."
                                                    />
                                                </Grid>

                                                <Grid size={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Cover Letter"
                                                        name="coverLetter"
                                                        value={formData.coverLetter}
                                                        onChange={handleChange}
                                                        required
                                                        multiline
                                                        rows={6}
                                                        placeholder="Tell us more about yourself and your career goals..."
                                                    />
                                                </Grid>

                                                <Grid size={12}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        size="large"
                                                        disabled={isSubmitting}
                                                        endIcon={!isSubmitting && <SendIcon />}
                                                    >
                                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Paper>
                                </Collapse>
                            </Paper>
                        </Grid>

                        {/* Sidebar */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 48, 68, 0.6) 100%)',
                                    border: '1px solid rgba(0, 212, 255, 0.1)',
                                    borderRadius: 3,
                                    position: 'sticky',
                                    top: 100,
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 3 }}>
                                    Job Overview
                                </Typography>
                                <Stack spacing={2}>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary">
                                            Position Type
                                        </Typography>
                                        <Typography>{job.type}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary">
                                            Location
                                        </Typography>
                                        <Typography>{job.location}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary">
                                            Salary Range
                                        </Typography>
                                        <Typography>{job.salary}</Typography>
                                    </Box>
                                </Stack>

                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        Have questions about this role?
                                    </Typography>
                                    <Button
                                        component={RouterLink}
                                        to="/#contact"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        Contact Us
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert
                    severity={snackbar.severity}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default JobDetails;
