import React, { useState, FC } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";
import { Dispatch } from "redux";
import { Button, Container, FormControl, TextField } from "@material-ui/core";

type AddPostProps = {
  dispatch: Dispatch;
};

let AddPost: FC<AddPostProps> = ({ dispatch }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const handleTitleChange = (event: React.BaseSyntheticEvent) => {
    const { value } = event.target;
    setPostTitle(value);
  };

  const handleBodyChange = (event: React.BaseSyntheticEvent) => {
    const { value } = event.target;
    setPostBody(value);
  };

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    dispatch(addPost(postTitle, postBody));
    setPostTitle("");
    setPostBody("");
  };

  return (
    <Container maxWidth="md" disableGutters>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <TextField
            id="postTitle-input"
            name="postTitle"
            label="Title"
            type="text"
            placeholder="Whats your post title?"
            value={postTitle}
            onChange={handleTitleChange}
            variant="outlined"
            margin="normal"
          />

          <TextField
            id="postBody-input"
            name="postBody"
            label="Description"
            type="text"
            placeholder="You can write your post description here"
            multiline
            rows={8}
            rowsMax={8}
            value={postBody}
            onChange={handleBodyChange}
            variant="outlined"
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <Button variant="contained" color="primary" type="submit">
              Add Post
            </Button>
          </FormControl>
        </FormControl>
      </form>
    </Container>
  );
};

const AddPostContainer = connect()(AddPost);

export default AddPostContainer;
