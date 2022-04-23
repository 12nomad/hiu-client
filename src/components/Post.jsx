import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Avatar, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';



import styles from "styled-components"

// const StyledH2 = styles.h2`
//   color: "red"
// `

const StyledWrapper = styles.h2`
  color: red
`

// import "./azerty.css"

const Post = () => {
  return (
    <>
    <Typography variant='h3'>
      Room name
    </Typography>
    <Divider sx={{ marginTop: "1%" }} />
    <Box sx={{ marginTop: "2%" }}>
      <Box>
        <Button variant='outlined' size='large' startIcon={<AddCircleOutlinedIcon />}>
          Upload
        </Button>
      </Box>
      <Box width="30%" marginTop={5}>
        <Stack direction="row" width="50%" spacing={5} sx={{ marginTop: "1%", diplay: "flex", alignItems: "center" }}>
          <Box>
            <Stack direction="row" spacing={1} sx={{ display: "flex", alignItems: "center" }}>
              <InsertDriveFileOutlinedIcon sx={{ fontSize: "30px" }}/>
                <ListItemText primary="ManohySR" secondary="50Ko" />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <DownloadForOfflineOutlinedIcon sx={{ fontSize: "30px" }}/>
              </IconButton>
              <IconButton>
                <DeleteOutlineOutlinedIcon sx={{ fontSize: "30px" }}/>
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
    
    </>
  );
};

export default Post;
