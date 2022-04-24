import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import {
  Button,
  Divider,
  IconButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import CircleIcon from "@mui/icons-material/Circle";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArticleIcon from "@mui/icons-material/Article";
import axios from "axios";
import { GoFileDirectory  } from "react-icons/go";
import { BsFillImageFill, BsGearFill, BsArchiveFill, BsFillFileMusicFill } from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { useEffect, useState } from "react";

const Post = ({ directories, getPath, path, getPrev }) => {
  const [file, setFile] = useState();

  const handleClick = (path) => {
    getPath(path);
  };

  const handlePrevClick = () => getPrev();

  const handleDownload = (fichier, type) => {
    console.log(path.join("/"));
    console.log(fichier);
    axios({
      method: "post",
      url: `http://192.168.137.1:4000/files/download`,
      responseType: "blob",
      headers: {},
      data: {
        path: path.join("/") + "/" + fichier,
      },
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        const fic = type === "dir" ? fichier + ".zip" : fichier;
        link.setAttribute("download", fic);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    setFile(e.target.file[0]);
  };

  useEffect(() => {
    const uploadData = async () => {
      await axios.post("http://192.168.137.1:4000/files/upload", {
        file,
      });
    };

    uploadData();
  }, [file]);

  return (
    <>
      <Typography variant="h3" sx={{ marginLeft: "2%" }}>
        Room name
      </Typography>
      <Divider sx={{ marginTop: "1%" }} />
      <Box sx={{ marginTop: "2%", marginLeft: "2%" }}>
        <Box>
          <input type="file" name="file" onChange={handleChange} />
          <Button
            variant="outlined"
            size="large"
            startIcon={<AddCircleOutlinedIcon />}
          >
            Upload
          </Button>
        </Box>
        <Box marginTop={5}>
          {path.length !== 1 && (
            <Stack
              direction="row"
              spacing={5}
              sx={{ marginTop: "1%", display: "flex", alignItems: "center" }}
            >
              <Box sx={{ width: "400px" }}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <FolderIcon
                    sx={{ fontSize: "30px", cursor: "pointer" }}
                    onClick={handlePrevClick}
                  />
                  <ListItemText primary=".." />
                </Stack>
              </Box>
              <Box>
                <IconButton>
                  <DownloadForOfflineOutlinedIcon
                    sx={{ fontSize: "30px", color: "#011936" }}
                  />
                </IconButton>
              </Box>
              <Stack direction="row" spacing={6}>
                <Divider orientation="vertical" flexItem />
                <Box>
                  <Paper
                    elevation={1}
                    sx={{
                      textAlign: "center",
                      height: 60,
                      width: "300px",
                      lineHeight: "60px",
                    }}
                  >
                    File of ManohySR
                  </Paper>
                </Box>
              </Stack>
            </Stack>
          )}
          {directories.map((directory) => {
            return (
              <Stack
                key={directory.index}
                direction="row"
                spacing={5}
                sx={{ marginTop: "1%", diplay: "flex", alignItems: "center" }}
              >
                <Box sx={{ width: "400px" }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {directory.type === "dir" && (
                      <GoFileDirectory color="grey" size="30px"
                        onClick={() => handleClick(directory.name)}
                      />
                    )}
                    {directory.type === "audio" && (
                      <BsFillFileMusicFill   color="pink" size="30px" />
                    )}
                    {directory.type === "image" && (
                      <ImageIcon color="yellow" />
                    )}
                    {directory.type === "file-image" && (
                      <BsFillImageFill color="blue" size="30px" />
                    )}
                    {directory.type === "compressed" && (
                      <BsArchiveFill  color="purple" size="30px" />
                    )}
                    {directory.type === "executable" && (
                      <BsGearFill  color="red" size="30px" />
                    )}
                    {directory.type === "file" && (
                      <AiFillFile  size="30px" />
                    )}
                    {/* <InsertDriveFileOutlinedIcon sx={{ fontSize: "30px" }} /> */}
                    <ListItemText primary={directory.name} secondary="50Ko" />
                  </Stack>
                </Box>
                <Box>
                  <IconButton
                    onClick={() =>
                      handleDownload(directory?.name, directory?.type)
                    }
                  >
                    <DownloadForOfflineOutlinedIcon
                      sx={{ fontSize: "30px", color: "#011936" }}
                    />
                  </IconButton>
                </Box>
                <Stack direction="row" spacing={6}>
                  <Divider orientation="vertical" flexItem />
                </Stack>
              </Stack>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Post;