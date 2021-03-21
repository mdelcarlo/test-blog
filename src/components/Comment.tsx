import React, { FC } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, ListItem } from "@material-ui/core";

const comment__name = css`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1em;
  color: #222;
  font-weight: bold;
`;

const comment__body = css`
  padding-top: 0.2rem;
  font-size: 0.8em;
  font: 16px/1.4 system-ui, "Helvetica", sans-serif;
  color: var(--grey);
  -webkit-font-smoothing: antialiased;
`;

const comment__email = css`
  padding-top: 0.2rem;
  font-size: 0.8em;
  font: "Helvetica", sans-serif;
  color: #444;
  font-weight: bold;

`;

export type CommentProps = {
  id: any;
  name: string;
  body: string;
  email: string;
};

let Comment: FC<CommentProps> = ({ name, body, email }) => (
  <Box m={3}>
    <ListItem>
      <div>
        <p css={comment__email}>{email}</p>
        <h2 css={comment__name}>{name}</h2>
        <p css={comment__body}>{body}</p>
      </div>
    </ListItem>
  </Box>
);

export default Comment;
