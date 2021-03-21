import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loadPost } from "../actions";
import CommentList from "../components/CommentList";
import Post from "../components/Post";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { STATUS } from "../util/constants";

const mapStateToProps = (state: { post: any; commentList: any }) => {
  return {
    post: state.post,
    commentList: state.commentList,
    isLoadingPost: state.post?.status === STATUS.LOADING,
    isLoadingCommentList: state.commentList?.status === STATUS.LOADING,
  };
};

const LoadingPost = () => (
  <>
    <LoadingSkeleton variant="h1" />
    <LoadingSkeleton variant="h1" />
  </>
);

const LoadingCommentList = () => (
  <>
    <LoadingSkeleton variant="h1" />
    <LoadingSkeleton variant="h1" />
    <LoadingSkeleton variant="h1" />
    <LoadingSkeleton variant="h1" />
  </>
);

var PostContainer = ({
  dispatch,
  post,
  commentList,
  isLoadingPost,
  isLoadingCommentList,
  match,
}) => {
  const postId = match?.params?.id;
  React.useEffect(() => {
    dispatch(loadPost(postId));
  }, [postId]);
  return (
    <>
      {isLoadingPost ? <LoadingPost /> : <Post {...post} />}
      {isLoadingCommentList ? (
        <LoadingCommentList />
      ) : (
        <CommentList commentList={commentList} />
      )}
    </>
  );
};

const PostContainerWithRouter = withRouter(
  connect(mapStateToProps)(PostContainer)
);

export default PostContainerWithRouter;
