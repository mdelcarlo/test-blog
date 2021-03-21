// ./src/components/CommentList.js

import React, { FC } from "react";
import Comment, { CommentProps } from "./Comment";
import { Container, Divider, List, Box } from "@material-ui/core";

export type CommentListProps = {
  commentList: Array<CommentProps>;
};

const CommentList: FC<CommentListProps> = ({ commentList }) => (
  <Container maxWidth="md" disableGutters>
    {!!commentList.length && <Box marginLeft={4} margin={0}><h3>Comments</h3></Box>}
    <List disablePadding>
      {commentList.map((comment, index) => (
        <>
          <Comment key={comment.id} {...comment} />
          {commentList.length > index + 1 && <Divider />}
        </>
      ))}
    </List>
  </Container>
);

export default CommentList;
