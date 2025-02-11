import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header/Header";
import Storefront from "./components/Storefront/Storefront";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#de2f74",
        light: "#ff5c8d",
        dark: "#a22756",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex flex-col h-full w-full gap-[24px] mb-[24px]">
          <Header></Header>
          <div className="global-main-grid-layout relative">
            <Storefront></Storefront>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
