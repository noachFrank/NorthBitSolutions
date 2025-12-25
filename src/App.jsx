import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import { Navbar, Footer } from './components';
import { Hero, About, Services, Contact } from './sections';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
