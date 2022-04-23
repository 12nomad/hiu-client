import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Box, CssBaseline, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useState } from "react";

const DashboardScreen = () => {
  const [mode, setMode] = useState("light");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  return (
    <>
      <CssBaseline />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar />
          <Feed />
        </Stack>
        <Add />
      </Box>
    </>
  );
}

export default DashboardScreen;
