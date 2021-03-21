import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loadPostList } from "../actions";
import LoadingSkeleton from "../components/LoadingSkeleton";
import PostList from "../components/PostList";
import { STATUS } from "../util/constants";

const mapStateToProps = (state: { postList: any }) => {
  return {
    postList: state.postList,
    isLoadingPostList: state.postList?.status === STATUS.LOADING,
  };
};

const LoadingPostList = () => (
  <>
    <LoadingSkeleton variant="h1" />
    <LoadingSkeleton variant="h5" />
    <LoadingSkeleton variant="h5" />
    <LoadingSkeleton variant="h1" />
    <LoadingSkeleton variant="h5" />
    <LoadingSkeleton variant="h5" />
    <LoadingSkeleton variant="h1" />
    <LoadingSkeleton variant="h5" />
    <LoadingSkeleton variant="h5" />
    <LoadingSkeleton variant="h1" />
  </>
);

var PostListContainer = ({ dispatch, postList, isLoadingPostList }) => {
  React.useEffect(() => {
    dispatch(loadPostList());
  }, []);
  return (
    <>
      {isLoadingPostList ? (
        <LoadingPostList />
      ) : (
        <PostList postList={postList} />
      )}
    </>
  );
};

const PostListContainerWithRouter = withRouter(
  connect(mapStateToProps)(PostListContainer)
);

export default PostListContainerWithRouter;
