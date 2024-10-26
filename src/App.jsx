import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";

function App() {
  // @ts-ignore: Ignore TypeScript error for theme
  const [theme, colorMode] = useMode();

  return (
    // @ts-ignore: Ignore TypeScript error for colorMode context
    <ColorModeContext.Provider value={colorMode}>
      {/* @ts-ignore: Ignore TypeScript error for theme */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box
          sx={{
            // @ts-ignore: Ignore TypeScript error for theme.palette.bg.main
            bgcolor: theme.palette?.bg?.main || theme.palette.background.default,
          }}
        >
          <Hero />
          <Main />
          <Footer />
        </Box>
        <Scroll />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
