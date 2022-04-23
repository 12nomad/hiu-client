import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import {
  Button,
  Divider,
  IconButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import CircleIcon from "@mui/icons-material/Circle";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArticleIcon from "@mui/icons-material/Article";

const Post = ({ directories }) => {
  return (
    <>
      <Typography variant="h3">Room name</Typography>
      <Divider sx={{ marginTop: "1%" }} />
      <Box sx={{ marginTop: "2%" }}>
        <Box>
          {/* <input type="file" name="file" /> */}
          <Button
            variant="outlined"
            size="large"
            startIcon={<AddCircleOutlinedIcon />}
          >
            Upload
          </Button>
        </Box>
        <Box width="30%" marginTop={5}>
          {directories.map((directory, idx) => {
            return (
              <Stack
                key={idx}
                direction="row"
                width="50%"
                spacing={5}
                sx={{ marginTop: "1%", diplay: "flex", alignItems: "center" }}
              >
                <Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {directory.type === "dir" && (
                      <FolderIcon sx={{ fontSize: "30px" }} />
                    )}
                    {directory.type === "audio" && (
                      <AudioFileIcon sx={{ fontSize: "30px" }} />
                    )}
                    {directory.type === "image" && (
                      <ImageIcon sx={{ fontSize: "30px" }} />
                    )}
                    {directory.type === "file-image" && (
                      <CircleIcon sx={{ fontSize: "30px" }} />
                    )}
                    {directory.type === "compressed" && (
                      <FolderZipIcon sx={{ fontSize: "30px" }} />
                    )}
                    {directory.type === "executable" && (
                      <ExtensionIcon sx={{ fontSize: "30px" }} />
                    )}
                    {directory.type === "file" && (
                      <ArticleIcon sx={{ fontSize: "30px" }} />
                    )}
                    {/* <InsertDriveFileOutlinedIcon sx={{ fontSize: "30px" }} /> */}
                    <ListItemText primary={directory.name} secondary="50Ko" />
                  </Stack>
                </Box>
                <Box>
                  <Stack direction="row" spacing={1}>
                    <IconButton>
                      <DownloadForOfflineOutlinedIcon
                        sx={{ fontSize: "30px" }}
                      />
                    </IconButton>
                    <IconButton>
                      <DeleteOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Post;
