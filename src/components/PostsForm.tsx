import axios from "axios";
import React, { useState, useContext } from "react";
import context from "./Context";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";

const PostsForm: React.FC = () => {
  const { setData } = useContext(context)!;
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [postsError, setPostsError] = useState<boolean>(false);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const post = { title, body, userId: 1 };
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        post
      );
      setData((previousData) => [...previousData, response.data]);
      setTitle("");
      setBody("");
    } catch (error) {
      setPostsError(true);
    }
  };
  return (
    <Box component={Paper} p={3} my={2} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Add a new post
      </Typography>
      <form onSubmit={handleSubmitForm} autoComplete="off">
        <TextField
          fullWidth
          variant="outlined"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
          margin="normal"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter post body"
          required
          multiline
          rows={4}
          margin="normal"
        />
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button color="primary" variant="contained" type="submit">
            Add Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PostsForm;
