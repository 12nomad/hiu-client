import { Box, Stack, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import Post from "./Post";

const Feed = () => {
  const [directories, setDirectories] = useState([
    {
      id: 66,
      type: "audio",
      name: "Jojo"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [path, setPath] = useState(["D:/"]);
  const [lastPath, setLastPath] = useState([]);

  const getPath = useCallback((path) => {
    setPath((prev) => {
      return [...prev, path];
    });
  }, []);

  const getPrev = useCallback(() => {
    const copiedPath = [...path];
    copiedPath.pop();
    setPath([...copiedPath]);
  }, [path]);

  // useEffect(() => {
  //   const getDirectories = async () => {
  //     setIsLoading(true);
  //     console.log(path);
  //     const { data } = await axios.post("http://192.168.8.112/files", {
  //       path: path.join("/"),
  //     });

  //     setDirectories(data);
  //     setIsLoading(false);
  //   };

  //   getDirectories();
  // }, [path]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {isLoading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post
            directories={directories}
            getPath={getPath}
            lastPath={lastPath}
            getPrev={getPrev}
            path={path}
          />
        </>
      )}
    </Box>
  );
};

export default Feed;