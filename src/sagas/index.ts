import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  LOAD_POST_LIST,
  RENDER_POST_LIST,
  DELETE_POST,
  ADD_POST,
  LOAD_POST,
  RENDER_POST,
  LOAD_COMMENT_LIST,
  RENDER_COMMENT_LIST,
} from "../actions";
import { getPosts, getPost, addPost, deletePost } from "../services/posts";
import { getPostsComments } from "../services/comments";

export function* fetchPostList() {
  const response = yield call(getPosts);
  const data = response.data;
  yield put({ type: RENDER_POST_LIST, postList: data });
}

export function* fetchPost(props) {
  const id = props?.post?.id;
  const response = yield call(getPost, id);
  const data = response.data;
  yield put({ type: RENDER_POST, post: data });
}

export function* putPost(props) {
  const post = props?.post;
  const response = yield call(addPost, post);
  const data = response.data;
  yield put({ type: RENDER_POST, post: data });
}

export function* watchLoadPostList() {
  yield takeEvery(LOAD_POST_LIST, fetchPostList);
}

export function* watchLoadPost() {
  yield takeEvery(LOAD_POST, fetchPost);
  yield takeEvery(LOAD_POST, fetchCommentList);
}

export function* watchAddPost() {
  yield takeEvery(ADD_POST, putPost);
}

export function* watchDeletePost() {
  yield takeEvery(DELETE_POST, deletePost);
}

export function* fetchCommentList(props) {
  const id = props?.post?.id;
  const response = yield call(getPostsComments, id);
  const data = response.data;
  yield put({ type: RENDER_COMMENT_LIST, commentList: data });
}

export function* loadCommentList(postId: number) {
  yield takeEvery(LOAD_COMMENT_LIST, fetchCommentList, postId);
}

export default function* rootSaga() {
  yield all([watchLoadPostList(), watchLoadPost(), watchAddPost()]);
}
