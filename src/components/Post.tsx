import React, { FC } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const post__title = css`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2em;
  color: #222;
  font-weight: bold;
  text-decoration: underline #da1710;
`;

const post__body = css`
  padding-top: 0.2rem;
  font-size: 1.13em;
  font: 16px/1.4 system-ui, "Helvetica", sans-serif;
  color: #181b25;
  -webkit-font-smoothing: antialiased;
`;

export type PostProps = {
  id: number;
  title: string;
  body: string;
};

let Post: FC<PostProps> = ({ id, title, body }) => (
  <Box m={3}>
    <ListItem>
      <div>
        <Link className="btn btn-primary" to={`/posts/${id}`}>
          <h1 css={post__title}>{title}</h1>
        </Link>
        <p css={post__body}>{body}</p>
      </div>
    </ListItem>
  </Box>
);

export default Post;
