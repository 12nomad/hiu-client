import { Fab, Tooltip } from "@mui/material";
import React from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Add = () => {
  return (
    <>
      <Tooltip
        title="Scroll to top..."
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <KeyboardArrowUpOutlinedIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
