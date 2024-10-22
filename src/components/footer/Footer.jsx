import { Box, Container, Grid, Typography, useTheme, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        bgcolor: isDarkMode ? theme.palette.background.default : theme.palette.grey[100],
        color: isDarkMode ? theme.palette.grey[300] : theme.palette.text.primary,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        mt: "50px",
        py: 5,
        px: 3,
        width: "100%",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Your Company
            </Typography>
            <Typography variant="body2">
              We provide top-notch services and the best products in the market. Stay connected!
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <a href="#home" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                Home
              </a>
            </Typography>
            <Typography variant="body2">
              <a href="#about" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                About Us
              </a>
            </Typography>
            <Typography variant="body2">
              <a href="#services" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                Services
              </a>
            </Typography>
            <Typography variant="body2">
              <a href="#contact" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                Contact Us
              </a>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2">Email: info@yourcompany.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
            <Typography variant="body2">Address: 123 Street Name, City, Country</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" color="primary">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="primary">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="primary">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={5} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
