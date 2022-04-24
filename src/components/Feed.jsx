import { Box, Stack, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [directories, setDirectories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDirectories = async () => {
      const { data } = await axios.post("http://192.168.8.112:4000/files", {
        path: "D:/",
      });

      setDirectories(data);
      setIsLoading(false);
    };

    getDirectories();
  }, []);

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
          <Post directories={directories} />
        </>
      )}
    </Box>
  );
};

export default Feed;
