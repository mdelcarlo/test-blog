import React, { FC } from "react";
import Post, { PostProps } from "./Post";
import { Divider, List } from "@material-ui/core";

export type PostListProps = {
  postList: Array<PostProps>;
};

const PostList: FC<PostListProps> = ({ postList }) => (
  <List>
    {postList.map((post, index) => (
      <>
        <Post key={post.id} {...post} />
        {postList.length > index + 1 && <Divider />}
      </>
    ))}
  </List>
);

export default PostList;
