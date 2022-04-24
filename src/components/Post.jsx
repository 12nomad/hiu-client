import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import {
  Button,
  Divider,
  IconButton,
  ListItemText,
  Alert,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import { MdOutlineFileUpload } from "react-icons/md";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import axios from "axios";
import { GoFileDirectory } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  BsFillImageFill,
  BsGearFill,
  BsArchiveFill,
  BsFillFileMusicFill,
} from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const Post = ({ directories, getPath, path, getPrev }) => {
  const [file, setFile] = useState();
  const [resData, setResData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const inputRef = useRef();

  const handleClick = (path) => {
    getPath(path);
  };

  const handlePrevClick = () => getPrev();

  const handleDownload = (fichier, type) => {
    axios({
      method: "post",
      url: `http://192.168.8.112:4000/files/download`,
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

  const handleChange = (file) => {
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    axios({
      method: "post",
      url: "http://192.168.8.112:4000/files/upload",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data) {
          setResData(true);
        }
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
    setTimeout(() => {
      setResData(false);
    }, 6000);
  };

  return (
    <>
      <Typography variant="h3" color="primary" sx={{ marginLeft: "2%" }}>
        Available Files.
      </Typography>
      <Divider sx={{ marginTop: "1%" }} />
      <Box sx={{ marginTop: "2%", marginLeft: "2%" }}>
        <Box>
          <form onSubmit={handleSubmit}>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              startIcon={<MdOutlineFileUpload />}
              color="primary"
              type="submit"
            >
              {isLoading ? "Uploading..." : "Upload"}
            </Button>
          </form>

          {resData && (
            <Alert sx={{ mt: 3, width: "250px" }} severity="success">
              File uploaded successfully
            </Alert>
          )}
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
                  <Typography variant="h5">.. /</Typography>
                </Stack>
              </Box>
              {/* <Box>
                <IconButton>
                  <DownloadForOfflineOutlinedIcon
                    sx={{ fontSize: "30px", color: "#011936" }}
                  />
                </IconButton>
              </Box> */}
            </Stack>
          )}
          {directories.map((directory) => {
            return (
              <Stack
                key={directory.index}
                direction="row"
                spacing={5}
                sx={{ marginTop: "1%", display: "flex", alignItems: "center" }}
              >
                <Box sx={{ width: "450px" }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {(directory.type === "dir" || directory.size === 0) && (
                      <GoFileDirectory
                        color="#f5ce0a"
                        size="30px"
                        onClick={() => handleClick(directory.name)}
                      />
                    )}
                    {directory.type === "audio" && (
                      <BsFillFileMusicFill color="pink" size="30px" />
                    )}
                    {directory.type === "image" && (
                      <BsFillImageFill color="#27b9b4" size="30px" />
                    )}
                    {directory.type === "file-image" && (
                      <BsFillImageFill color="blue" size="30px" />
                    )}
                    {directory.type === "document" && (
                      <HiOutlineDocumentText color="#e91010" size="30px" />
                    )}
                    {directory.type === "compressed" && (
                      <BsArchiveFill color="purple" size="30px" />
                    )}
                    {directory.type === "executable" && (
                      <BsGearFill color="red" size="30px" />
                    )}
                    {directory.type === "file" && (
                      <AiFillFile size="30px" color="#3b3b3b" />
                    )}

                    {/* <InsertDriveFileOutlinedIcon sx={{ fontSize: "30px" }} /> */}
                    <ListItemText
                      primary={directory.name}
                      secondary={
                        directory.size !== 0 &&
                        `${(directory.size / (1024 * 1024)).toFixed(3)} Mo`
                      }
                    />
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
