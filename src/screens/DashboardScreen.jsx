import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Box, CssBaseline, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useEffect, useRef, useState } from "react";

const DashboardScreen = () => {
  return (
    <>
      <CssBaseline />

      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Sidebar />
          <Feed />
        </Stack>
      </Box>
    </>
  );
};

export default DashboardScreen;
