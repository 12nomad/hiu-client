import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Button, Divider, IconButton, ListItemText, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';




const Post = () => {
  return (
    <>
    <Typography variant='h3' sx={{ marginLeft: "2%" }}>
      Room name
    </Typography>
    <Divider sx={{ marginTop: "1%" }} />
    <Box sx={{ marginTop: "2%", marginLeft: "2%" }}>
      <Box>
        <Button variant='outlined' size='large' startIcon={<AddCircleOutlinedIcon />}>
          Upload
        </Button>
      </Box>
      <Box  marginTop={5}>
        <Stack direction="row"  spacing={5} sx={{ marginTop: "1%", diplay: "flex", alignItems: "center" }}>
          <Box sx={{ width: "400px" }}>
            <Stack direction="row" spacing={1} sx={{ display: "flex", alignItems: "center" }}>
              <InsertDriveFileOutlinedIcon sx={{ fontSize: "30px" }}/>
                <ListItemText primary="ManohySR" secondary="50Ko" />
            </Stack>
          </Box>
          <Box>
            <IconButton sx={{ paddingRight: "0" }}>
              <DownloadForOfflineOutlinedIcon sx={{ fontSize: "30px", color: "#011936" }}/>
            </IconButton>
          </Box>
          <Stack direction="row" spacing={6}>
            <Divider orientation="vertical" flexItem/>
            <Box>
              <Paper elevation={3} sx={{   
                textAlign: 'center',
                height: 60,
                width: "300px",
                lineHeight: '60px', }}>
                  File of ManohySR
              </Paper>
            </Box>
          </Stack>
          

        </Stack>
      </Box>
    </Box>
    
    </>
  );
};

export default Post;
