// import {
//   AccountBox,
//   Article,
//   Group,
//   Home,
//   ModeNight,
//   Person,
//   Settings,
//   Storefront,
// } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Divider
} from "@mui/material";
import React from "react";


const Sidebar = () => {
  return (
    <>
    <Box flex={1} p={2} sx={{ width: "300px", height: "90vh" }}>
      <Box position="fixed">
        <List dense sx={{ width: '100%', maxWidth: 360, color : "black" }}>
              <ListItem
                  disablePadding
                >
                <ListItemButton>
                  <ListItemAvatar>
                  <Avatar>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="ManohySR" secondary="Jan 9, 2014" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                  <Avatar>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="ManohySR" secondary="Jan 9, 2014" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                  <Avatar>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="ManohySR" secondary="Jan 9, 2014" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                  <Avatar>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="ManohySR" secondary="Jan 9, 2014" />
                </ListItemButton>
              </ListItem>
        </List>
      </Box>
    </Box>
    <Divider orientation="vertical" flexItem/>
    </>
  );
};

export default Sidebar;
