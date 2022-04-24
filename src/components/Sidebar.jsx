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
  Divider,
  Skeleton,
  Typography,
  Paper,
} from "@mui/material";
import { AiFillWindows } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [host, setHost] = useState({
    machineOs: "",
    machineName: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getHost = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("http://192.168.8.112:4000/os");
        setHost(data);
        setIsLoading(false);
      } catch (error) {
        console.log();
      }
    };
    getHost();
  }, []);
  console.log(host);
  return (
    <>
      <Box
        flex={1}
        p={2}
        sx={{ width: "300px", height: "90vh", marginLeft: "100px" }}
      >
        <Box position="fixed">
          <List dense sx={{ width: "100%", maxWidth: 360, color: "black" }}>
            <Box>
              <Typography variant="h5">Powered By</Typography>

              <ListItem disablePadding>
                {isLoading ? (
                  <>
                    <Skeleton
                      animation="wave"
                      variant="circular"
                      width={40}
                      height={40}
                    />
                  </>
                ) : (
                  <>
                    <ListItemAvatar>
                      <Avatar>
                        <AiFillWindows />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={host.machineName}
                      secondary={`OS: ${host.machineOs}`}
                    />
                  </>
                )}
              </ListItem>
            </Box>
          </List>
        </Box>
        <Paper sx={{ position: "absolute", bottom: 2, mb: 3, ml: 2 }}>
          <Box>
            <Typography sx={{ p: 4 }}>TIPS</Typography>
          </Box>
        </Paper>
      </Box>
      <Divider orientation="vertical" flexItem />
    </>
  );
};

export default Sidebar;
