import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
